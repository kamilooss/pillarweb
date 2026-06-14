/**
 * API ROUTE — /api/contact
 * ------------------------
 * Odbiera zgłoszenia z formularza kontaktowego (ContactSection) i zapisuje
 * je w MailerLite po stronie serwera (klucz API nigdy nie trafia do
 * przeglądarki).
 *
 * Rozdzielenie danych: pole `source` z formularza decyduje, do której GRUPY
 * w MailerLite trafi subskrybent. Dzięki temu zgłoszenia ze strony głównej
 * i z podstrony /landing-page są od siebie oddzielone — i każda grupa może
 * odpalać własną automatyzację (mail powitalny + follow-upy).
 *
 * Wymagane zmienne środowiskowe (.env.local lokalnie + Vercel na produkcji):
 *   MAILERLITE_API_KEY       — token z MailerLite (Integrations → API)
 *   MAILERLITE_GROUP_HOME    — ID grupy dla formularza ze strony głównej
 *   MAILERLITE_GROUP_LANDING — ID grupy dla formularza z /landing-page
 */

import { NextResponse } from "next/server";

const MAILERLITE_API = "https://connect.mailerlite.com/api";

// Mapowanie źródła formularza → ID grupy w MailerLite.
const GROUP_BY_SOURCE: Record<string, string | undefined> = {
  home: process.env.MAILERLITE_GROUP_HOME,
  "landing-page": process.env.MAILERLITE_GROUP_LANDING,
};

export async function POST(req: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error("[contact] Brak MAILERLITE_API_KEY w środowisku.");
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

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const specialization = String(body.specialization ?? "").trim();
  const message = String(body.message ?? "").trim();
  const source = String(body.source ?? "home").trim();

  if (!email || !name) {
    return NextResponse.json({ ok: false, error: "Brak wymaganych pól." }, { status: 400 });
  }

  // Domyślnie traktujemy nieznane źródło jak stronę główną.
  const groupId = GROUP_BY_SOURCE[source] ?? GROUP_BY_SOURCE.home;

  const payload: Record<string, unknown> = {
    email,
    // `name` i `phone` to pola domyślne w MailerLite. `specializacja` i
    // `wiadomosc` to klucze pól własnych w MailerLite (pola nazwane po polsku
    // → klucze {$specializacja} / {$wiadomosc}). Po lewej klucz MailerLite,
    // po prawej wartość z formularza (pola HTML mają nazwy angielskie).
    fields: {
      name,
      phone,
      specializacja: specialization,
      wiadomosc: message,
    },
    ...(groupId ? { groups: [groupId] } : {}),
  };

  try {
    // Endpoint upsert: tworzy subskrybenta albo aktualizuje istniejącego
    // (po adresie e-mail) i dopisuje go do podanej grupy.
    const res = await fetch(`${MAILERLITE_API}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`[contact] MailerLite ${res.status}:`, detail);
      return NextResponse.json(
        { ok: false, error: "Nie udało się zapisać zgłoszenia." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Błąd połączenia z MailerLite:", err);
    return NextResponse.json({ ok: false, error: "Błąd połączenia." }, { status: 502 });
  }
}
