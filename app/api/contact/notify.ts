/**
 * POWIADOMIENIA O LEADACH — Telegram + e-mail
 * -------------------------------------------
 * Moduł celowo NIE zależy od Airtable. `/api/contact` odpala zapis w Airtable
 * i wysyłkę powiadomień RÓWNOLEGLE, więc awaria jednej drogi nie zabiera
 * pozostałych. Dzięki temu Telegram jest drugą, niezależną kopią leada —
 * a nie kolejnym ogniwem łańcucha, które może się urwać.
 *
 * Wymagane zmienne środowiskowe (.env.local lokalnie + Vercel na produkcji):
 *   TELEGRAM_BOT_TOKEN  — token bota z @BotFather
 *   TELEGRAM_CHAT_ID    — ID czatu/grupy, na którą bot pisze
 *   RESEND_API_KEY      — klucz API z resend.com (kanał zapasowy)
 *   NOTIFY_EMAIL_TO     — adres, na który przychodzą powiadomienia
 *   NOTIFY_EMAIL_FROM   — nadawca na zweryfikowanej domenie, np. "Pillarweb <leady@pillarweb.pl>"
 *
 * Każdy kanał włącza się SAM, gdy ma komplet swoich zmiennych. Brak zmiennych
 * = kanał po cichu pominięty (bez błędu), więc wdrożenie może iść etapami.
 */

/** Dane leada w formie niezależnej od Airtable. */
export type Lead = {
  source: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  message: string;
  /** Pola rozszerzone (budżet, termin, wynik testu…) — tylko niepuste. */
  extras: Record<string, string>;
};

/** Czytelna nazwa + emoji dla źródła zgłoszenia. */
const SOURCE_LABELS: Record<string, { label: string; emoji: string }> = {
  home: { label: "Strona główna", emoji: "🟢" },
  "landing-page": { label: "Landing page", emoji: "🎯" },
  lista: { label: "Test LISTA (lead magnet)", emoji: "📋" },
};

const describeSource = (source: string) =>
  SOURCE_LABELS[source] ?? { label: source || "nieznane źródło", emoji: "🔵" };

/**
 * Telefon w formacie międzynarodowym — Telegram i klienty pocztowe same
 * zamieniają taki numer w klikalny link „zadzwoń”. Numer, którego nie da się
 * rozpoznać, zostaje bez zmian (lepiej pokazać surowy niż zgubić).
 */
function formatPhone(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (!digits) return "";

  let normalized = digits;
  if (!digits.startsWith("+")) {
    if (digits.length === 9) normalized = `+48${digits}`;
    else if (digits.length === 11 && digits.startsWith("48")) normalized = `+${digits}`;
    else return raw; // nieznany format — pokazujemy surowy, zamiast psuć numer
  }

  // Polski numer rozbijamy na grupy 3-3-3 („+48 515 995 187”) — czytelniej
  // na telefonie, a Telegram i tak rozpoznaje go jako numer do wybrania.
  const pl = normalized.match(/^\+48(\d{9})$/);
  if (pl) return `+48 ${pl[1].slice(0, 3)} ${pl[1].slice(3, 6)} ${pl[1].slice(6)}`;
  return normalized;
}

/** Escape pod `parse_mode: HTML` Telegrama i pod treść maila. */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const clamp = (s: string, max: number) =>
  s.length > max ? `${s.slice(0, max)}… [ucięte]` : s;

/**
 * POST z twardym timeoutem i jednym ponowieniem. Bez timeoutu zawieszone
 * połączenie blokowałoby odpowiedź dla formularza aż do limitu funkcji.
 * Ponawiamy tylko to, co ma sens: błąd sieci, 429 i 5xx. 4xx (zły token,
 * zły chat ID) ponowi się tak samo błędnie, więc odpuszczamy od razu.
 */
async function postJson(
  url: string,
  body: unknown,
  headers: Record<string, string>,
  label: string,
): Promise<void> {
  const attempt = async () => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      const err = new Error(`${label} ${res.status}: ${detail.slice(0, 300)}`);
      // Oznaczamy błędy, których nie ma sensu ponawiać.
      (err as Error & { permanent?: boolean }).permanent =
        res.status >= 400 && res.status < 500 && res.status !== 429;
      throw err;
    }
  };

  try {
    await attempt();
  } catch (err) {
    if ((err as Error & { permanent?: boolean }).permanent) throw err;
    await new Promise((r) => setTimeout(r, 400));
    await attempt();
  }
}

/** Wiersze „etykieta: wartość” wspólne dla Telegrama i maila. */
function leadRows(lead: Lead): Array<[string, string]> {
  const rows: Array<[string, string]> = [];
  if (lead.specialization) rows.push(["Specjalizacja", lead.specialization]);
  for (const [key, value] of Object.entries(lead.extras)) {
    if (value) rows.push([key, value]);
  }
  return rows;
}

/* ------------------------------------------------------------------ */
/*  TELEGRAM                                                           */
/* ------------------------------------------------------------------ */

function telegramMessage(lead: Lead, airtableOk: boolean): string {
  const { label, emoji } = describeSource(lead.source);
  const phone = formatPhone(lead.phone);

  const lines = [
    `${emoji} <b>NOWY LEAD — ${esc(label)}</b>`,
    "",
    `👤 <b>${esc(lead.name)}</b>`,
  ];

  // Numer i e-mail jako goły tekst — Telegram sam robi z nich klikalne linki
  // (tap = połączenie / nowa wiadomość). W <code> straciłyby tę właściwość.
  if (phone) lines.push(`📞 ${esc(phone)}`);
  if (lead.email) lines.push(`✉️ ${esc(lead.email)}`);

  const rows = leadRows(lead);
  if (rows.length) {
    lines.push("", "<b>Odpowiedzi z formularza:</b>");
    for (const [key, value] of rows) {
      lines.push(`• <b>${esc(key)}:</b> ${esc(clamp(value, 300))}`);
    }
  }

  if (lead.message) {
    lines.push("", "💬 <b>Wiadomość:</b>", esc(clamp(lead.message, 1500)));
  }

  lines.push(
    "",
    airtableOk
      ? "✅ Zapisano w Airtable"
      : "⚠️ <b>NIE zapisało się w Airtable — przepisz ręcznie!</b>",
  );

  // Limit Telegrama to 4096 znaków; zostawiamy margines.
  return clamp(lines.join("\n"), 4000);
}

async function sendTelegram(lead: Lead, airtableOk: boolean): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return; // kanał nieskonfigurowany — pomijamy

  // TELEGRAM_API_BASE nadpisuje adres API — służy WYŁĄCZNIE testom lokalnym
  // (atrapa serwera). Na produkcji zmiennej nie ustawiamy.
  const api = process.env.TELEGRAM_API_BASE || "https://api.telegram.org";

  await postJson(
    `${api}/bot${token}/sendMessage`,
    {
      chat_id: chatId,
      text: telegramMessage(lead, airtableOk),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    },
    {},
    "Telegram",
  );
}

/* ------------------------------------------------------------------ */
/*  E-MAIL (Resend) — trzeci, niezależny kanał                         */
/* ------------------------------------------------------------------ */

function emailHtml(lead: Lead, airtableOk: boolean): string {
  const { label } = describeSource(lead.source);
  const phone = formatPhone(lead.phone);

  const row = (key: string, value: string) =>
    `<tr>
      <td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${esc(key)}</td>
      <td style="padding:6px 0;font-weight:600">${esc(value)}</td>
    </tr>`;

  const contactRows = [
    row("Imię i nazwisko", lead.name),
    phone
      ? `<tr><td style="padding:6px 12px 6px 0;color:#666">Telefon</td><td style="padding:6px 0;font-weight:600"><a href="tel:${esc(phone)}" style="color:#0b63ce;text-decoration:none">${esc(phone)}</a></td></tr>`
      : "",
    lead.email
      ? `<tr><td style="padding:6px 12px 6px 0;color:#666">E-mail</td><td style="padding:6px 0;font-weight:600"><a href="mailto:${esc(lead.email)}" style="color:#0b63ce;text-decoration:none">${esc(lead.email)}</a></td></tr>`
      : "",
  ].join("");

  const extraRows = leadRows(lead)
    .map(([key, value]) => row(key, clamp(value, 500)))
    .join("");

  const messageBlock = lead.message
    ? `<p style="margin:24px 0 6px;color:#666;font-size:13px">WIADOMOŚĆ</p>
       <div style="padding:14px 16px;background:#f5f6f8;border-radius:8px;white-space:pre-wrap">${esc(clamp(lead.message, 4000))}</div>`
    : "";

  const warning = airtableOk
    ? ""
    : `<div style="margin:20px 0;padding:14px 16px;background:#fff4e5;border-left:4px solid #e08600;border-radius:4px">
         <strong>Uwaga:</strong> tego zgłoszenia NIE udało się zapisać w Airtable. Przepisz je ręcznie.
       </div>`;

  return `<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;font-size:15px;color:#111;max-width:620px">
    <p style="margin:0 0 4px;color:#666;font-size:13px">NOWY LEAD</p>
    <h2 style="margin:0 0 20px;font-size:21px">${esc(label)}</h2>
    ${warning}
    <table style="border-collapse:collapse;width:100%">${contactRows}${extraRows}</table>
    ${messageBlock}
  </div>`;
}

async function sendEmail(lead: Lead, airtableOk: boolean): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;
  if (!key || !to || !from) return; // kanał nieskonfigurowany — pomijamy

  const { label } = describeSource(lead.source);

  // RESEND_API_BASE — jak wyżej, tylko do testów lokalnych.
  const api = process.env.RESEND_API_BASE || "https://api.resend.com";

  await postJson(
    `${api}/emails`,
    {
      from,
      to: to.split(",").map((a) => a.trim()).filter(Boolean),
      subject: `${airtableOk ? "" : "⚠️ "}Nowy lead: ${lead.name} — ${label}`,
      html: emailHtml(lead, airtableOk),
      // „Odpowiedz” w kliencie pocztowym pisze od razu do leada, nie do siebie.
      reply_to: lead.email || undefined,
    },
    { Authorization: `Bearer ${key}` },
    "Resend",
  );
}

/* ------------------------------------------------------------------ */

export type NotifyResult = { telegram: boolean; email: boolean };

/**
 * Odpala wszystkie kanały powiadomień równolegle. Nigdy nie rzuca wyjątkiem —
 * zwraca informację, co się udało, żeby `/api/contact` mógł zdecydować,
 * czy lead w ogóle gdzieś wylądował.
 *
 * `airtableOk` wchodzi do TREŚCI powiadomienia: gdy zapis w bazie padł,
 * widzisz to od razu w wiadomości, a nie dopiero w logach Vercela.
 */
export async function notifyLead(lead: Lead, airtableOk: boolean): Promise<NotifyResult> {
  const telegramEnabled = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const emailEnabled = Boolean(
    process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL_TO && process.env.NOTIFY_EMAIL_FROM,
  );

  const [telegram, email] = await Promise.allSettled([
    sendTelegram(lead, airtableOk),
    sendEmail(lead, airtableOk),
  ]);

  if (telegram.status === "rejected") {
    console.error("[contact] Powiadomienie Telegram nie poszło:", telegram.reason);
  }
  if (email.status === "rejected") {
    console.error("[contact] Powiadomienie e-mail nie poszło:", email.reason);
  }

  // Kanał bez kompletu zmiennych nie jest „sukcesem” — inaczej brak konfiguracji
  // udawałby działające powiadomienie i maskował utratę leada.
  return {
    telegram: telegramEnabled && telegram.status === "fulfilled",
    email: emailEnabled && email.status === "fulfilled",
  };
}
