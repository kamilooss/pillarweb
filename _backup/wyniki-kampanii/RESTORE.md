# Backup przed zamianą sekcji dowodowych na stronie głównej

Zrobiony 2026-09-27 przed wymianą sekcji „To nie są obietnice…" (Testimonials + opinia
Krzysztofa Głaza) oraz „Zobacz czego możesz się spodziewać…" (blok `results`
w `DifferentiatorSection`) na nową sekcję z wynikami kampanii Google Ads.

## Co tu jest
- `Testimonials.tsx` — pełna kopia `app/components/Testimonials.tsx` (STATS + cytat).
- `DifferentiatorSection.tsx` — pełna kopia `app/components/DifferentiatorSection.tsx`
  (4 filary + blok `results` ze screenem kampanii).
- `page.tsx` — kopia `app/page.tsx` (kolejność sekcji strony głównej).
- `CONTENT-blocks.ts.txt` — `STATS`, typ `Testimonial` + `TESTIMONIALS`
  (linie 104–181) oraz `DIFFERENTIATOR` (linie 214–250) z `app/lib/content.ts`.

## Jak wrócić do stanu sprzed zmiany
1. Skopiuj `Testimonials.tsx`, `DifferentiatorSection.tsx` i `page.tsx` z tego folderu
   z powrotem do `app/components/` i `app/` (nadpisz).
2. W `app/lib/content.ts` przywróć bloki z `CONTENT-blocks.ts.txt` w miejsce obecnych.
3. Usuń to, co weszło w ich miejsce, jeśli nie jest już nigdzie używane:
   - `app/components/CampaignResults.tsx`
   - blok `CAMPAIGN_RESULTS` w `app/lib/content.ts`
   - katalog `public/images/wyniki/` (7 kreacji webp)
   - prop `showResults` w `app/components/DifferentiatorSection.tsx`
     (i `showResults={false}` przy `<DifferentiatorSection />` w `app/page.tsx`)
4. Zapisz — dev server podchwyci zmianę.

## Co dokładnie zniknęło ze strony głównej 2026-09-27
- Sekcja `Testimonials`: nagłówek „To nie są obietnice…", trzy liczniki
  (147 zapytań / 15 projektów / ~$330 000) i opinia Krzysztofa Głaza.
  Sam komponent i dane `STATS` / `TESTIMONIALS` ZOSTAJĄ w repo — używa ich
  `/landing-page`.
- Blok `results` w `DifferentiatorSection` („Zobacz czego możesz się
  spodziewać…", 46 zapytań / 37,74 zł). Dane zostają w `DIFFERENTIATOR`,
  tylko się nie renderują na stronie głównej.
- Czwarty filar w `DIFFERENTIATOR.pillars` cytował te same stare liczby
  (46 zapytań, 37,74 zł) jako zapowiedź usuniętego bloku — przepisany tak, żeby
  odsyłał do nowej sekcji. Oryginalne zdanie jest w `CONTENT-blocks.ts.txt`.

## Uwaga: te komponenty są współdzielone
`Testimonials` i `DifferentiatorSection` są używane też przez `/landing-page`
i `/producenci-budowlani`. Zmiana ma dotyczyć TYLKO strony głównej — tamte podstrony
muszą renderować się jak wcześniej.

## Druga siatka bezpieczeństwa (git)
Stan przed zmianą = commit `35c825a`. Podgląd starych plików:
```bash
git show 35c825a:app/components/Testimonials.tsx
git show 35c825a:app/components/DifferentiatorSection.tsx
git show 35c825a:app/page.tsx
git show 35c825a:app/lib/content.ts
```
Pełny powrót do tego stanu:
```bash
git checkout 35c825a -- app/components/Testimonials.tsx app/components/DifferentiatorSection.tsx app/page.tsx app/lib/content.ts
```
