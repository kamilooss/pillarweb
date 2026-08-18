/**
 * API ROUTE — /api/contact
 * ------------------------
 * Odbiera zgłoszenia z formularza kontaktowego (ContactSection) i zapisuje
 * je jako rekord w Airtable po stronie serwera (token nigdy nie trafia do
 * przeglądarki).
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
 *   + opcjonalnie „Data zgłoszenia" typu Created time (Airtable wypełnia sam).
 * Typ pól „Budżet" / „Jak nas znalazł" / „Rodzaj spotkania" może być
 * „Single select" — dzięki `typecast: true` Airtable sam dopisze brakujące opcje.
 *
 * Uwaga: checkbox zgody RODO jest WYMAGANY w UI (warunek wysyłki), ale nie
 * trafia do Airtable — sam fakt wysłania = wyrażona zgoda. Jeśli kiedyś
 * dojdzie kolumna „Zgoda RODO" w Airtable, dopisać do `fields` poniżej.
 */

import { NextResponse } from "next/server";

const AIRTABLE_API = "https://api.airtable.com/v0";

// Mapowanie źródła formularza → nazwa/ID tabeli w Airtable.
// Nieznane źródło (np. /producenci-budowlani, gdzie source nie jest ustawiony)
// traktujemy jak stronę główną.
const TABLE_BY_SOURCE: Record<string, string | undefined> = {
  home: process.env.AIRTABLE_TABLE_HOME,
  "landing-page": process.env.AIRTABLE_TABLE_LANDING,
};

export async function POST(req: Request) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    console.error("[contact] Brak AIRTABLE_TOKEN lub AIRTABLE_BASE_ID w środowisku.");
    return NextResponse.json(
      { ok: false, error: "Serwer nie jest skonfigurowany." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const str = (v: unknown) => String(v ?? "").trim();

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const specialization = str(body.specialization);
  const message = str(body.message);
  const source = str(body.source) || "home";

  // Pola rozszerzonego formularza (strona główna). Na krótkim formularzu
  // przychodzą puste — pomijamy je niżej, żeby nie nadpisywać kolumn pustką.
  const website = str(body.website);
  const features = str(body.features);
  const subpages = str(body.subpages);
  const timeline = str(body.timeline);
  const hasContent = str(body.hasContent);
  const budget = str(body.budget);
  const howFound = str(body.howFound);
  const referralSource = str(body.referralSource);
  const promoCode = str(body.promoCode);
  const meetingType = str(body.meetingType);

  if (!email || !name) {
    return NextResponse.json({ ok: false, error: "Brak wymaganych pól." }, { status: 400 });
  }

  const table = TABLE_BY_SOURCE[source] ?? TABLE_BY_SOURCE.home;
  if (!table) {
    console.error(`[contact] Brak tabeli dla źródła "${source}" (sprawdź AIRTABLE_TABLE_*).`);
    return NextResponse.json(
      { ok: false, error: "Serwer nie jest skonfigurowany." },
      { status: 500 },
    );
  }

  // Po lewej nazwa kolumny w Airtable, po prawej wartość z formularza.
  // Pola rozszerzone dopisujemy tylko gdy niepuste (krótki formularz ich nie ma).
  const fields: Record<string, string> = {
    "Imię i nazwisko": name,
    "E-mail": email,
    Telefon: phone,
    Specjalizacja: specialization,
    Wiadomość: message,
  };

  const extendedFields: Record<string, string> = {
    "Obecna strona / social media": website,
    "Funkcje interaktywne": features,
    "Konkretne podstrony": subpages,
    "Termin realizacji": timeline,
    "Ma gotowe treści": hasContent,
    Budżet: budget,
    "Jak nas znalazł": howFound,
    "Polecenie / grupa (od kogo)": referralSource,
    "Kod promocyjny": promoCode,
    "Rodzaj spotkania": meetingType,
  };
  for (const [key, value] of Object.entries(extendedFields)) {
    if (value) fields[key] = value;
  }

  const payload = {
    typecast: true,
    records: [{ fields }],
  };

  try {
    // Nazwa tabeli może zawierać spacje/polskie znaki → kodujemy do URL.
    const res = await fetch(`${AIRTABLE_API}/${baseId}/${encodeURIComponent(table)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`[contact] Airtable ${res.status}:`, detail);
      return NextResponse.json(
        { ok: false, error: "Nie udało się zapisać zgłoszenia." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Błąd połączenia z Airtable:", err);
    return NextResponse.json({ ok: false, error: "Błąd połączenia." }, { status: 502 });
  }
}
