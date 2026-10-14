# Kopia strony głównej z 14.10.2026

Zrobiona przed dwiema zmianami na produkcji:

1. Ze strony głównej zniknął przypadek „Remonty łazienek” w sekcji z wynikami
   kampanii Google Ads (dwie kreacje: sierpień i lipiec 2026). Generalny
   wykonawca i deweloper zostają. Na /lista łazienki dalej są.
2. Filmy (3 realizacje + VSL) przeszły z Bunny Stream na pliki mp4 w Vercel
   Blob, odtwarzane natywnym `<video>`, tak samo jak na /test-str-gl. Bunny
   (biblioteka 767469) zwraca 404 od 11.10.2026. Zmiana dotyczy wszystkich
   stron z filmami: `/`, `/lista`, `/landing-page`, `/producenci-budowlani`.

## Najszybszy powrót (produkcja, bez kodu)

Vercel → projekt `pillarweb` → Deployments → poprzedni deployment produkcyjny
(sprzed 14.10.2026) → „Instant Rollback”. Strona wraca w kilka sekund.
Uwaga: filmy w tamtej wersji grają z Bunny, więc dopóki Bunny zwraca 404,
po cofnięciu nie będą działać.

## Powrót w kodzie

Stan sprzed zmian ma tag gita `strona-glowna-2026-10-14` (jest też na GitHubie).

- Cofnięcie całej zmiany: `git revert <hash commita z 14.10.2026>`, potem
  `git push origin main`.
- Podgląd starego stanu: `git checkout strona-glowna-2026-10-14`.

## Co tu jest (pełne kopie plików sprzed zmiany)

- `page.tsx` → `app/page.tsx`
- `CampaignResults.tsx` → `app/components/CampaignResults.tsx`
- `PortfolioVideo.tsx`, `PortfolioSection.tsx`, `VslSection.tsx` → `app/components/`
- `content.ts.txt` → `app/lib/content.ts` (tu są GUID-y Bunny i `BUNNY_LIBRARY_ID`)
- `content-landing-page.ts.txt`, `content-producenci.ts.txt` → `app/lib/`

## Ręczny powrót tylko jednej rzeczy

- **Łazienki z powrotem na stronie głównej:** w `app/page.tsx` zamień
  `<CampaignResults excludeIndustries={["Remonty łazienek"]} />` na
  `<CampaignResults />`. Dane nigdzie nie zniknęły.
- **Filmy z powrotem na Bunny:** skopiuj stąd 3 komponenty do
  `app/components/`, a w plikach contentu zamień `src: ...mp4` na
  `video: "<GUID>"` (GUID-y są w `content.ts.txt`) i przywróć stałą
  `BUNNY_LIBRARY_ID`. Najpierw sprawdź, czy biblioteka Bunny w ogóle działa.
