# Backup strony „dziękujemy" z kalendarzem Calendly

Zrobiony 2026-09-26, zanim z `/dziekujemy` zniknął kalendarz rezerwacji.

**Dlaczego zniknął:** Kamil woli dzwonić od razu po powiadomieniu o nowym
zgłoszeniu i umawiać termin przez telefon, zamiast kazać klientowi klikać
w kalendarzu.

## Co tu jest
- `ThankYouSection.tsx` — pełna kopia komponentu z sekcją rezerwacji
  (`app/components/ThankYouSection.tsx`).
- `THANKYOU-content-block.ts.txt` — obiekt `THANKYOU` sprzed zmiany
  (linie 625–707 w `app/lib/content.ts`), razem z blokiem `booking`
  i starymi krokami mapy „Co dzieje się dalej".

## Jak przywrócić kalendarz
1. Skopiuj `ThankYouSection.tsx` z tego folderu do `app/components/ThankYouSection.tsx`
   (nadpisz).
2. W `app/lib/content.ts` podmień obecny obiekt `THANKYOU` na zawartość
   `THANKYOU-content-block.ts.txt`.
3. W `app/components/ContactSection.tsx` popraw podpowiedź przy pytaniu
   „Jaki rodzaj spotkania najbardziej Ci odpowiada?" z powrotem na:
   „Zaraz po wysłaniu formularza wybierzesz dogodny termin. Spotkanie odbędzie
   się na Google Meet."
4. Zapisz — dev server podchwyci zmianę.

**Czego NIE trzeba ruszać:** `ContactSection` nadal zapisuje dane do
`sessionStorage` pod kluczem `pw_booking` (imię, e-mail, rodzaj spotkania).
Zostawiliśmy ten zapis właśnie po to, żeby przywrócenie kalendarza było kwestią
podmiany dwóch plików, a nie polowania na brakujący fragment. Bez niego
przywrócona sekcja rezerwacji nigdy by się nie pokazała.

Podstrona `/spotkanie` ma własny, osobny kalendarz (`BOOKING.calendlyUrl`)
i ta zmiana jej nie dotyczy — nadal działa.

## Druga siatka bezpieczeństwa (git)
Stan przed zmianą = commit `c8b66c2`. Podgląd starych plików:
```bash
git show c8b66c2:app/components/ThankYouSection.tsx
git show c8b66c2:app/lib/content.ts
```
