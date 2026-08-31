# Backup starego cennika (3 plany: Srebrny / Złoty / Platyna)

Zrobiony 2026-08-31 przed zamianą sekcji cennika na wersję „od 11 000 zł, wycena indywidualna".

## Co tu jest
- `PricingSection.tsx` — pełna kopia starego komponentu (`app/components/PricingSection.tsx`).
- `PRICING-content-block.ts.txt` — stary typ `PricingFeature` + obiekt `PRICING` (linie 356–502 w `app/lib/content.ts`).

## Jak wrócić do starego cennika
1. Skopiuj `PricingSection.tsx` z tego folderu z powrotem do `app/components/PricingSection.tsx` (nadpisz).
2. W `app/lib/content.ts` podmień obecny obiekt `PRICING` (i typ nad nim) na zawartość `PRICING-content-block.ts.txt`.
3. Zapisz — dev server podchwyci zmianę.

## Druga siatka bezpieczeństwa (git)
Stan przed zmianą = commit `1199db9`. Podgląd starego pliku:
```bash
git show 1199db9:app/components/PricingSection.tsx
git show 1199db9:app/lib/content.ts
```
