/**
 * API ROUTE — /api/contact
 * ------------------------
 * Odbiera zgłoszenia z formularza kontaktowego (ContactSection) i rozsyła je
 * DWIEMA niezależnymi drogami:
 *   1. zapis rekordu w Airtable (baza / CRM),
 *   2. powiadomienie na Telegram + e-mail (app/api/contact/notify.ts).
 *
 * Kluczowe założenie: drogi są NIEZALEŻNE. Awaria Airtable nie blokuje
 * powiadomienia, a awaria Telegrama nie blokuje zapisu. Zgłoszenie uznajemy
 * za przyjęte, gdy zadziałał PRZYNAJMNIEJ JEDEN kanał — dzięki temu lead nie
 * ginie przez awarię pojedynczej usługi. Gdy padną wszystkie, formularz
 * dostaje błąd i pokazuje kontakt bezpośredni.
 *
 * Status zapisu w Airtable trafia do TREŚCI powiadomienia („⚠️ NIE zapisało
 * się w Airtable”), więc o awarii bazy wiadomo od razu z telefonu, a nie
 * dopiero z logów Vercela.
 *
 * Rozdzielenie danych: pole `source` z formularza decyduje, do której TABELI
 * w Airtable trafi kontakt. Zgłoszenia ze strony głównej i z podstrony
 * /landing-page lądują w osobnych tabelach — każda jako oddzielna „metryka".
 *
 * Wymagane zmienne środowiskowe (.env.local lokalnie + Vercel na produkcji):
 *   AIRTABLE_TOKEN          — Personal Access Token (scope: data.records:write)
 *   AIRTABLE_BASE_ID        — ID bazy (np. appXXXXXXXXXXXXXX)
 *   AIRTABLE_TABLE_HOME     — nazwa lub ID tabeli dla formularza ze strony głównej
 *   AIRTABLE_TABLE_LANDING  — nazwa lub ID tabeli dla formularza z /landing-page
 *   AIRTABLE_TABLE_LISTA    — nazwa lub ID tabeli dla lead magnetu /lista
 *   (powiadomienia: TELEGRAM_* / RESEND_* — opis w notify.ts)
 *
 * Kolumny oczekiwane w każdej tabeli (dokładne nazwy — Airtable dopasowuje
 * po nazwie pola). Airtable NIE tworzy kolumn automatycznie — brakujące trzeba
 * dodać ręcznie w tabeli (inaczej dana wartość zostanie pominięta):
 *   Podstawowe (zawsze): „Imię i nazwisko" · „E-mail" · „Telefon" ·
 *     „Specjalizacja" · „Wiadomość"
 *   Rozszerzone (formularz strony głównej): „Obecna strona / social media" ·
 *     „Funkcje interaktywne" · „Konkretne podstrony" · „Termin realizacji" ·
 *     „Ma gotowe treści" · „Budżet" · „Jak nas znalazł" ·
 *     „Polecenie / grupa (od kogo)" · „Kod promocyjny" · „Rodzaj spotkania"
 *   Lead magnet (/lista): „Wynik testu" — liczba TAK w formacie „7/15”. Puste,
 *     gdy ktoś wysłał formularz bez przejścia wszystkich piętnastu punktów.
 *   + opcjonalnie „Data zgłoszenia" typu Created time (Airtable wypełnia sam).
 * Typ pól „Budżet" / „Jak nas znalazł" / „Rodzaj spotkania" może być
 * „Single select" — dzięki `typecast: true` Airtable sam dopisze brakujące opcje.
 *
 * Uwaga: checkbox zgody RODO jest WYMAGANY w UI (warunek wysyłki), ale nie
 * trafia do Airtable — sam fakt wysłania = wyrażona zgoda. Jeśli kiedyś
 * dojdzie kolumna „Zgoda RODO" w Airtable, dopisać do `fields` poniżej.
 */

import { NextResponse } from "next/server";
import { notifyLead, type Lead } from "./notify";

const AIRTABLE_API = "https://api.airtable.com/v0";

// Mapowanie źródła formularza → nazwa/ID tabeli w Airtable.
// Nieznane źródło (np. /producenci-budowlani, gdzie source nie jest ustawiony)
// traktujemy jak stronę główną.
const TABLE_BY_SOURCE: Record<string, string | undefined> = {
  home: process.env.AIRTABLE_TABLE_HOME,
  "landing-page": process.env.AIRTABLE_TABLE_LANDING,
  lista: process.env.AIRTABLE_TABLE_LISTA,
};

/**
 * Zapis rekordu w Airtable. Nigdy nie rzuca wyjątkiem — zwraca `true/false`,
 * bo porażka bazy NIE może przerwać wysyłki powiadomień.
 */
async function saveToAirtable(lead: Lead): Promise<boolean> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    console.error("[contact] Brak AIRTABLE_TOKEN lub AIRTABLE_BASE_ID w środowisku.");
    return false;
  }

  const table = TABLE_BY_SOURCE[lead.source] ?? TABLE_BY_SOURCE.home;
  if (!table) {
    console.error(`[contact] Brak tabeli dla źródła "${lead.source}" (sprawdź AIRTABLE_TABLE_*).`);
    return false;
  }

  // Pola podstawowe — te kolumny istnieją w tabeli od początku.
  const coreFields: Record<string, string> = {
    "Imię i nazwisko": lead.name,
    "E-mail": lead.email,
    Telefon: lead.phone,
    Specjalizacja: lead.specialization,
    Wiadomość: lead.message,
  };

  // Pola rozszerzone — tylko niepuste (patrz `extras` niżej). WYMAGAJĄ
  // odpowiadających kolumn w Airtable (lista w nagłówku pliku).
  const fullFields: Record<string, string> = { ...coreFields, ...lead.extras };

  // Nazwa tabeli może zawierać spacje/polskie znaki → kodujemy do URL.
  const endpoint = `${AIRTABLE_API}/${baseId}/${encodeURIComponent(table)}`;
  const createRecord = (fields: Record<string, string>) =>
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // typecast: Airtable sam dopasuje wartości do istniejących typów pól
      // (np. dopisze brakującą opcję single-select). NIE tworzy kolumn.
      body: JSON.stringify({ typecast: true, records: [{ fields }] }),
      // Twardy limit — bez niego zawieszone połączenie z Airtable trzymałoby
      // całą funkcję (i powiadomienia) aż do limitu czasu na Vercelu.
      signal: AbortSignal.timeout(4000),
    });

  try {
    const res = await createRecord(fullFields);
    if (res.ok) return true;

    const detail = await res.text();

    // Zabezpieczenie: gdy w tabeli brakuje którejś z rozszerzonych kolumn,
    // Airtable odrzuca CAŁY rekord (422 UNKNOWN_FIELD_NAME). Żeby nie zgubić
    // leada, ponawiamy zapis z samymi polami podstawowymi. UWAGA: dane
    // rozszerzone (budżet, termin, „jak nas znalazł" itd.) NIE zapiszą się,
    // dopóki nie dodasz brakujących kolumn w Airtable.
    if (res.status === 422 && detail.includes("UNKNOWN_FIELD_NAME")) {
      console.error(
        "[contact] Airtable 422 UNKNOWN_FIELD_NAME — brakuje kolumny w tabeli. " +
          "Zapisuję tylko pola podstawowe; dodaj brakujące kolumny, aby zapisywać komplet danych. Szczegóły:",
        detail,
      );
      const fallback = await createRecord(coreFields);
      if (fallback.ok) return true;
      console.error(`[contact] Airtable ${fallback.status} (fallback):`, await fallback.text());
      return false;
    }

    console.error(`[contact] Airtable ${res.status}:`, detail);
    return false;
  } catch (err) {
    console.error("[contact] Błąd połączenia z Airtable:", err);
    return false;
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const str = (v: unknown) => String(v ?? "").trim();

  const name = str(body.name);
  const email = str(body.email);

  if (!email || !name) {
    return NextResponse.json({ ok: false, error: "Brak wymaganych pól." }, { status: 400 });
  }

  // Pola rozszerzonego formularza (strona główna) i wynik testu z /lista.
  // Na krótkim formularzu przychodzą puste — pomijamy je, żeby nie nadpisywać
  // kolumn pustką i nie zaśmiecać powiadomienia.
  const extendedFields: Record<string, string> = {
    "Obecna strona / social media": str(body.website),
    "Funkcje interaktywne": str(body.features),
    "Konkretne podstrony": str(body.subpages),
    "Termin realizacji": str(body.timeline),
    "Ma gotowe treści": str(body.hasContent),
    Budżet: str(body.budget),
    "Jak nas znalazł": str(body.howFound),
    "Polecenie / grupa (od kogo)": str(body.referralSource),
    "Kod promocyjny": str(body.promoCode),
    "Rodzaj spotkania": str(body.meetingType),
    // Wynik testu z /lista, np. „7/15”.
    "Wynik testu": str(body.testScore),
  };

  const extras: Record<string, string> = {};
  for (const [key, value] of Object.entries(extendedFields)) {
    if (value) extras[key] = value;
  }

  const lead: Lead = {
    source: str(body.source) || "home",
    name,
    email,
    phone: str(body.phone),
    specialization: str(body.specialization),
    message: str(body.message),
    extras,
  };

  // Najpierw baza, zaraz potem powiadomienia. Kolejność jest celowa: dzięki
  // niej w wiadomości na telefonie widać, czy rekord faktycznie wylądował
  // w Airtable. Porażka zapisu NIE przerywa wysyłki — `saveToAirtable`
  // zwraca `false` zamiast rzucać wyjątkiem, a timeout (4 s) pilnuje, żeby
  // zawieszona baza nie opóźniła powiadomienia bardziej niż o chwilę.
  const airtableOk = await saveToAirtable(lead);
  const notified = await notifyLead(lead, airtableOk);

  // Lead jest bezpieczny, jeśli trafił GDZIEKOLWIEK.
  if (airtableOk || notified.telegram || notified.email) {
    if (!airtableOk) {
      console.error("[contact] Airtable padł, ale powiadomienie poszło — lead nie zginął.");
    }
    return NextResponse.json({ ok: true });
  }

  // Padło wszystko naraz — dopiero teraz formularz pokazuje błąd i kieruje
  // na kontakt bezpośredni. Logujemy komplet danych, żeby dało się odzyskać
  // zgłoszenie z logów Vercela.
  console.error("[contact] WSZYSTKIE kanały zawiodły. Dane zgłoszenia:", JSON.stringify(lead));
  return NextResponse.json(
    { ok: false, error: "Nie udało się wysłać zgłoszenia." },
    { status: 502 },
  );
}
