# Pillarweb Clone — Next.js 15

Frontend strony pillarweb.pl odwzorowany w Next.js 15 (App Router) + Tailwind v4 + Motion. Repozytorium pomyślane tak, żeby łatwo edytować je samodzielnie z Claude Code lub Claude.ai.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** — design tokens jako CSS variables w `app/globals.css`
- **Motion** (dawniej Framer Motion) — scroll reveals, accordion, dropdown
- **next/image** — automatyczna optymalizacja obrazów (WebP/AVIF)

## Szybki start

```bash
# 1. Zainstaluj zależności
npm install

# 2. Odpal dev server
npm run dev
# → http://localhost:3000

# 3. Build na produkcję
npm run build && npm start
```

Wymagania: Node.js 20+ (Next 15 minimum), npm 10+.

## Struktura projektu

```
.
├── app/
│   ├── components/          ← wszystkie sekcje strony, jeden plik = jedna sekcja
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContentVideoSection.tsx
│   │   ├── DifferentiatorSection.tsx
│   │   ├── SpecializationsSection.tsx
│   │   ├── GuaranteesSection.tsx
│   │   ├── ProcessSection.tsx       ← scroll-tracked stepper
│   │   ├── PricingSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── FAQSection.tsx           ← accordion
│   │   ├── ContactSection.tsx       ← formularz (front-only)
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx                 ← inline SVG, do podmiany
│   │   ├── Button.tsx               ← reusable CTA
│   │   └── Reveal.tsx               ← scroll fade-up wrapper
│   ├── lib/
│   │   └── content.ts               ← ⭐ WSZYSTKIE TEKSTY/CENY/FAQ TUTAJ
│   ├── globals.css                  ← design tokens (kolory, fonty)
│   ├── layout.tsx
│   └── page.tsx                     ← składanie sekcji
├── public/                          ← lokalne assety (puste — patrz "Assety" niżej)
├── next.config.ts
├── tailwind nie potrzebuje configu (Tailwind v4)
├── postcss.config.mjs
└── tsconfig.json
```

## Edycja treści — `app/lib/content.ts`

To **jeden plik** zawiera wszystkie teksty, ceny, opinie, FAQ, ścieżki do obrazów. Zmieniasz tu — zmienia się cała strona. Komponenty są celowo "głupie" i tylko renderują to, co tu wpiszesz.

Przykłady:

```ts
// Zmiana ceny planu srebrnego
plans: [
  { name: "Plan srebrny", price: "12 000 PLN", ... }
]

// Dodanie pytania do FAQ
items: [
  ...,
  { question: "Czy robicie sklepy internetowe?", answer: "..." }
]
```

## Edycja kolorów / typografii — `app/globals.css`

Wszystko jest CSS-em. Najważniejsze tokeny:

```css
@theme {
  --color-background: #000000;
  --color-foreground: #ffffff;
  --color-accent: #c7f542;          ← lime accent, zmień jeden raz tutaj
  --color-accent-foreground: #0a0a0a;
  /* ... */
}
```

Font: **Manrope** (Google Fonts). Aby zmienić — edytuj `app/layout.tsx`.

## Assety (obrazy, wideo, ikony)

W tej chwili wszystkie obrazy i wideo są ładowane bezpośrednio z `pillarweb.pl/wp-content/uploads/...` (skonfigurowane w `next.config.ts` przez `remotePatterns`). To działa od razu po `npm run dev` — nie musisz nic pobierać.

**Zalecane przed deployem:** pobierz assety lokalnie (kontrola, prędkość, niezależność).

```bash
# Stwórz folder
mkdir -p public/images public/videos public/icons

# Pobierz wszystkie assety jednym zamachem
ASSETS=(
  "pillarweb-logo.svg:icons"
  "phone-icon.svg:icons"
  "strategia-icon.svg:icons"
  "seo-i-widocznosc-icon.svg:icons"
  "kompleksowe-wdrozenie-icon.svg:icons"
  "up.svg:icons"
  "pillarweb-film-instruktazowy-hero.mp4:videos"
  "krzysztof-glaz-glaz-construction-opinia-pillarweb-150x150.webp:images"
  "michal-plonka-pergole-do-ogrodu-opinia-pillarweb-150x150.webp:images"
  "strona-internetowa-a-pozyskiwanie-klientow-pillarweb-1024x572.webp:images"
  "wyniki-google-ads-firma-budowlana-pillarweb.webp:images"
  "firmy-budujace-domy-pillarweb.webp:images"
  "generalni-wykonawcy-pillarweb.webp:images"
  "firmy-wykonczeniowe-pillarweb.webp:images"
  "firmy-od-elewacji-i-dachow-pillarweb.webp:images"
  "firmy-remontowe-pillarweb.webp:images"
  "deweloperzy-pillarweb.webp:images"
  "firmy-instalacyjne-pillarweb.webp:images"
  "gwarancja-satysfakcji-pillarweb.webp:images"
  "gwarancja-terminowosci-pillarweb.webp:images"
  "gwarancja-techniczna-pillarweb.webp:images"
  "proces-wspolpracy-pillarweb-768x1024.webp:images"
  "proces-wspolpracy-pillarweb-150x150.webp:images"
  "kamil-tomczyk-o-nas-pillarweb-pionowo-767x1024.webp:images"
)

for entry in "${ASSETS[@]}"; do
  file="${entry%:*}"
  dir="${entry##*:}"
  curl -s -o "public/$dir/$file" "https://pillarweb.pl/wp-content/uploads/2026/04/$file"
done
```

Po pobraniu zmień `ASSET_BASE` w `app/lib/content.ts` z URL na lokalną ścieżkę:

```ts
// było:
export const ASSET_BASE = "https://pillarweb.pl/wp-content/uploads/2026/04";
// zmień na:
export const ASSET_BASE = "/images";
// i przenoś video do "/videos", ikony do "/icons" (lub zmień pojedynczo)
```

## Co wymaga uwagi (TODO)

- **Logo SVG** (`app/components/Logo.tsx`) — obecnie inline aproksymacja. Pobierz oryginalne `pillarweb-logo.svg` z pillarweb.pl i wklej zawartość lub podmień `/public/icons/pillarweb-logo.svg`.
- **Bio Kamila Tomczyka** w sekcji "Kim jesteśmy" → kontakt → `lib/content.ts: CONTACT.ownerBio` — w oryginale jest **Lorem Ipsum**, do podmiany na docelowe bio.
- **Wideo "Co powinna zawierać dobra strona"** (`CONTENT_SECTION.videoSrc`) — w oryginale `testfilm.mp4` (kot, placeholder). Wymień na docelowy materiał lub usuń sekcję wideo z `ContentVideoSection.tsx`.
- **Formularz kontaktowy** — front-end gotowy, submit tylko do `console.log`. Aby działał: dodaj API route `/app/api/contact/route.ts` i podłącz np. **Resend** + webhook do Slacka. Wskazówka w `ContactSection.tsx`.
- **Odblokowanie indeksacji** — gdy będzie gotowe, w `app/layout.tsx` zmień `robots.index` na `true` (już jest `true`) i upewnij się że strona produkcyjna nie wysyła `noindex`.

## Wprowadzone usprawnienia UX/UI względem oryginału

- **Skip-to-content link** dla a11y (Tab → "Przejdź do treści")
- **`prefers-reduced-motion`** respektowany — animacje wyłączane dla osób z preferencją
- **Focus-visible** outline (lime) na wszystkich klikalnych elementach
- **Semantyczne tagi** (`<main>`, `<section>`, `<article>`, `<nav>`)
- **Mobile menu** z lockiem scrolla i pełnym dropdown w usługach
- **Header** sticky z subtelnym blur+border po scrollu (oryginał ma static)
- **Stagger reveal** w hero — kontrolowane wejście, zamiast everything-at-once
- **FAQ accordion** z jednoczesnym otwartym wieloma pytaniami (oryginał najpewniej miał single-open)
- **Process section** używa IntersectionObserver — śledzi aktywny krok podczas scrolla, opis i progress bar pojawiają się tylko dla aktualnego etapu

## Praca z Claude Code / Claude.ai

To repo jest pomyślane do iteracji z LLM. Sugerowany workflow:

1. **Klonuj repo do lokalnego foldera**, otwórz w VS Code (lub Cursor).
2. **Claude Code:** uruchom w terminalu w katalogu projektu — Claude widzi cały kontekst plików.
3. **Częste komendy:**
   - "Dodaj sekcję realizacji pomiędzy pricing a about. Ma być grid 6 kart z miniaturą, tytułem i krótkim opisem. Dane wstaw do `lib/content.ts`."
   - "Zmień kolor accent z lime na pomarańczowy (#FF6B35). Zaktualizuj globals.css."
   - "Strona /uslugi/seo — zrób na bazie content.ts. Layout: hero + 3 sekcje + CTA. Trzymaj tę samą stylistykę."

4. **Ważne dla LLM-a:** zawsze najpierw modyfikuj `app/lib/content.ts`, potem komponent. Komponenty są dumb-renderery — niech tak zostanie.

## Deployment

Najszybciej na **Vercel**:

```bash
npm i -g vercel
vercel
```

Albo push do GitHub i podpięcie repo w panelu Vercel — auto-deploy na main.

Działa również na: Netlify, Cloudflare Pages, dowolny Node hosting.

## Performance budget

- LCP < 2.5s (hero video lazy loaded)
- CLS < 0.1 (wszystkie obrazy mają width/height)
- TBT < 200ms (motion lib code-split przez `optimizePackageImports`)

Po deployment uruchom Lighthouse na produkcji — cele ~95+ na wszystkich osiach.
