/**
 * TREŚCI — PODSTRONA /landing-page
 * --------------------------------
 * Oferta usługi tworzenia landing page'y dla firm budowlanych.
 * Strukturalnie bliska stronie głównej (te same komponenty + propsy),
 * ale z własną treścią przygotowaną przez klienta i kilkoma sekcjami
 * bespoke (Landing*), których strona główna nie ma.
 *
 * Zasada: komponenty współdzielone importują swoje defaults z content.ts.
 * Tu trzymamy te same KSZTAŁTY danych — przekazywane przez propsy z page.tsx.
 * Komponenty bespoke (LandingSegments, LandingUseCases, LandingOfferGrid,
 * LandingFitSection, LandingComparisonTable, LandingOwnership,
 * LandingSecurityCallout) mają własne typy propsów i biorą treść stąd.
 *
 * Język: "Ty/Twój" (B2C-podobny, jak na stronie głównej dla wykonawców),
 * w odróżnieniu od "Wy/Wasz" na /producenci-budowlani (B2B).
 */

import { ASSET_BASE, SITE, VIDEO_BLOB_BASE, DIFFERENTIATOR, CONTACT } from "./content";

export { ASSET_BASE, SITE, VIDEO_BLOB_BASE };

/**
 * NAV — kotwice do sekcji na podstronie /landing-page.
 * Bez "Cennika" (na podstronach podnisz cennik jest wycofany — cena podana
 * poglądowo w sekcji "dla kogo / dla kogo nie").
 */
export const NAV_LINKS_LANDING = [
  { label: "Realizacje", href: "#realizacje" },
  { label: "Co zawiera", href: "#co-zawiera" },
  { label: "Proces współpracy", href: "#jak-pracujemy" },
  { label: "Porównanie", href: "#porownanie" },
  { label: "Gwarancje", href: "#gwarancje" },
  { label: "Kontakt", href: "#kontakt" },
];

/**
 * HERO — ten sam szablon co strona główna: "[PRODUKT] / DLA [ODBIORCY]".
 * Headline zwięzły (display, wersaliki), pełny przekaz w podtytule.
 * Pole `secondaryCta` obsługiwane przez prop Hero (link do #co-zawiera).
 */
export const HERO_LANDING = {
  brandLine: "Pillar Web · Landing Page",
  titleLine1: "LANDING PAGE",
  titleLine2Prefix: "DLA",
  titleLine2Accent: "FIRMY BUDOWLANEJ",
  subtitle:
    "Customowa strona sprzedażowa, która zamienia ruch z reklam, social mediów i poleceń w wartościowe zapytania od inwestorów — bez inwestowania od razu w rozbudowaną stronę.",
  subtitleParts: [
    { text: "Customowa strona sprzedażowa, która zamienia ruch z reklam, social mediów i poleceń w", accent: false },
    { text: "wartościowe zapytania od inwestorów", accent: true },
    { text: "— bez inwestowania od razu w rozbudowaną stronę internetową.", accent: false },
  ],
  cta: { label: "Umów bezpłatną konsultację", href: "#kontakt" },
  // Jasny, dzienny kadr realizacji — spójny z hero strony głównej.
  heroImage: `${ASSET_BASE}/generalni-wykonawcy-pillarweb.webp`,
} as const;

export const HERO_LANDING_SECONDARY_CTA = {
  label: "Zobacz, co zawiera landing page",
  href: "#co-zawiera",
} as const;

/**
 * PORTFOLIO — te same 3 wideo realizacji co na stronie głównej
 * (projekty importują się w komponencie z content.ts), tylko nagłówek/intro
 * dopasowany do oferty landing page'a.
 */
export const PORTFOLIO_LANDING = {
  headingPrefix: "Zobacz, jak wyglądają strony",
  headingAccent: "które tworzymy.",
  intro:
    "Każdy z tych projektów prowadziliśmy od zera: research, analiza konkurencji, strategia, treści i pełne wdrożenie. Twój landing page powstaje na tym samym poziomie dopracowania — w prostszej, jednostronicowej formie.",
} as const;

/**
 * SEGMENTY — "Dla kogo jest ten landing page" (sekcja pod hero/portfolio).
 * 5 profili firm. Czysta lista filarowa (arch-index + tytuł + opis),
 * jak filary w DifferentiatorSection.
 */
export const SEGMENTS_LANDING = {
  headingPrefix: "Dla firm budowlanych, które chcą pozyskiwać więcej konkretnych zapytań",
  headingAccent: "z działań marketingowych",
  intro:
    "Tworzymy landing page dla firm, które sprzedają usługi budowlane o wysokiej wartości — tam, gdzie jedno dobre zapytanie może być warte dziesiątki albo setki tysięcy złotych.",
  items: [
    {
      title: "Firmy budujące domy",
      body: "Landing page pod zapytania o SSO, SSZ, stan deweloperski i dom pod klucz.",
    },
    {
      title: "Firmy remontowe i wykończeniowe",
      body: "Strona kampanijna pod remonty mieszkań, kompleksowe wykończenia i prace premium.",
    },
    {
      title: "Deweloperzy i firmy sprzedające domy",
      body: "Landing page pod sprzedaż większych inwestycji, domów jednorodzinnych, bliźniaków i szeregówek.",
    },
    {
      title: "Firmy dachowe, elewacyjne i instalacyjne",
      body: "Strona pod konkretne usługi: dachy, elewacje, ocieplenia, pompy ciepła, rekuperację, fotowoltaikę, instalacje wod-kan lub elektrykę.",
    },
    {
      title: "Producenci budowlani",
      body: "Landing page pod produkty, katalogi, zapytania B2B, dystrybutorów lub kampanie promujące konkretny system, materiał albo technologię.",
    },
  ],
} as const;

/**
 * VSL — film sprzedażowy przeniesiony ze strony głównej.
 * Ten sam materiał (vsl.mp4), nagłówek dopasowany do oferty landing page'a.
 */
export const VSL_LANDING = {
  headingPrefix:
    "Zanim zdecydujesz — zobacz, jak myślimy o landing page'u, który ma realnie",
  headingAccent: "pozyskiwać zapytania.",
  video: "/videos/vsl.mp4",
  poster: "/images/vsl.jpg",
  aspect: "1600 / 900",
  duration: "7:36",
  name: "film sprzedażowy Pillar Web",
  cta: { label: "Umów bezpłatną konsultację", href: "#kontakt" },
} as const;

/**
 * PROBLEM + SPOSOBY UŻYCIA — "Masz ruch... ale czy masz miejsce,
 * które zamienia to zainteresowanie w wartościowe zapytania?"
 * 5 kanałów wykorzystania landing page'a + domknięcie problemu.
 */
export const USECASES_LANDING = {
  headingPrefix:
    "Masz ruch z reklam, social mediów albo poleceń — ale czy masz miejsce, które zamienia to zainteresowanie w",
  headingAccent: "wartościowe zapytania?",
  intro: [
    "Nie każda firma budowlana potrzebuje od razu rozbudowanej strony internetowej za kilkanaście tysięcy złotych.",
    "Czasem najpierw potrzebujesz prostszego, szybszego i bardziej konkretnego rozwiązania: jednej strony, która pokazuje, czym się zajmujesz, komu pomagasz, jakie realizacje masz za sobą i dlaczego inwestor może Ci zaufać.",
  ],
  useCasesLabel: "Taki landing page wykorzystasz na wiele sposobów:",
  useCases: [
    {
      title: "W reklamach Google Ads i Meta Ads",
      body: "Jako strona kampanijna pod konkretną usługę, region lub inwestycję.",
    },
    {
      title: "W bio na Instagramie, Facebooku albo TikToku",
      body: "Jako profesjonalny link, który prowadzi obserwujących prosto do kontaktu.",
    },
    {
      title: "W wizytówce Google",
      body: "Jako miejsce, gdzie inwestor szybko sprawdzi ofertę i wyśle zapytanie.",
    },
    {
      title: "W wiadomościach do inwestorów",
      body: "Jako cyfrowa oferta wysyłana po rozmowie — w SMS-ie, Messengerze, WhatsAppie lub mailu.",
    },
    {
      title: "Przy poleceniach",
      body: "Kiedy ktoś usłyszy Twoją nazwę i chce sprawdzić, czy firma wygląda solidnie.",
    },
  ],
  closingLead:
    "Problem często nie polega na tym, że firma budowlana nie ma „dużej strony”.",
  closingEmphasis:
    "Problem polega na tym, że zainteresowany inwestor nie ma jednego konkretnego miejsca, które szybko odpowiada na jego pytania, buduje zaufanie i prowadzi go do kontaktu.",
} as const;

/**
 * CO ZAWIERA LANDING PAGE — 9 bloków oferty.
 * Numerowana siatka (arch-index), bez obrazków per blok (inaczej niż
 * ServicesAccordion) — 9 pozycji + domknięcie hasłowe.
 */
export const OFFER_LANDING = {
  headingPrefix: "Co otrzymujesz w ramach",
  headingAccent: "landing page’a",
  items: [
    {
      title: "Customowy projekt bez szablonu",
      body: "Projektuję landing page od zera pod Twoją firmę, usługę i grupę odbiorców. Strona nie wygląda jak kolejny szablon „dla firmy usługowej”, tylko jak profesjonalna prezentacja konkretnej firmy budowlanej. Lepsza od 99% Twojej konkurencji.",
    },
    {
      title: "Branżowy copywriting",
      body: "Piszę treści za Ciebie — od nagłówków, przez opis oferty, po sekcje z realizacjami, przewagami, procesem i FAQ. Komunikacja dopasowana do branży budowlanej. Zajmujemy się tylko tą niszą, więc wiemy, co działa na Twoich klientów.",
    },
    {
      title: "Struktura pod konwersję",
      body: "Układ strony prowadzę tak, żeby użytkownik nie musiał sam szukać informacji. Najpierw rozumie ofertę, potem widzi dowody, poznaje zakres, dostaje odpowiedzi na obiekcje i ma jasny krok do kontaktu.",
    },
    {
      title: "Formularz kontaktowy lub kwalifikujący",
      body: "Dodajemy formularz dopasowany do celu strony. Może być prosty albo bardziej kwalifikujący — żeby odsiewać zapytania słabej jakości.",
    },
    {
      title: "Automatyzacja obsługi leadów",
      body: "Zapytania trafiają automatycznie na Twój e-mail, do arkuszy Google albo do Twojego CRM. Nie gubisz kontaktów, masz porządek w zapytaniach i szybciej oddzwaniasz do inwestorów (im szybciej, tym większa szansa na domknięcie).",
    },
    {
      title: "Pełne śledzenie konwersji",
      body: "Konfiguruję Google Analytics 4, Google Tag Manager, Pixel Meta oraz zdarzenia konwersji. Mierzysz, skąd przychodzą zapytania, które źródła działają i czy landing page wykonuje swoją pracę.",
    },
    {
      title: "Consent Mode v2 i baner RODO",
      body: "Landing page otrzymuje konfigurację zgód użytkownika pod aktualne wymagania reklamowe i analityczne. Ważne szczególnie wtedy, gdy planujesz Google Ads, Meta Ads lub remarketing.",
    },
    {
      title: "Heatmapy zachowania użytkowników",
      body: "Możemy podpiąć heatmapy, żeby sprawdzać, jak użytkownicy poruszają się po stronie: gdzie klikają, jak daleko scrollują i przy których sekcjach tracą uwagę.",
    },
    {
      title: "Podpięcie domeny i hostingu",
      body: "Pomagam technicznie opublikować stronę: domena, hosting, certyfikat SSL, formularz, testy wysyłki i podstawowe sprawdzenie działania po wdrożeniu.",
    },
  ],
  closingLead: "Jedna strona. Jeden konkretny cel.",
  closingEmphasis: "Mniej chaosu. Więcej zapytań.",
} as const;

/**
 * OVERLAY CTA — ciemny pas przerywnika (rytm jak na stronie głównej).
 * Segmenty z accent renderują się w kolorze lime na ciemnym tle.
 */
export const OVERLAY_CTA_LANDING = {
  headingSegments: [
    {
      text:
        "Płacisz za reklamy, budujesz zasięgi w social mediach i zbierasz polecenia.",
    },
    {
      text: "Ale bez jednego miejsca, które zamienia to zainteresowanie w zapytania,",
      accent: true,
    },
    {
      text:
        "część tych osób po prostu odpływa do konkurencji. Landing page to ten brakujący element —",
    },
    {
      text: "strona, która pracuje na kontakt 24 godziny na dobę.",
      accent: true,
    },
  ],
  buttonLabel: "Umów bezpłatną konsultację, póki mamy wolne miejsca",
  buttonHref: "#kontakt",
  footnote: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie.",
};

/**
 * DLACZEGO PILLAR WEB + CASE STUDY.
 * Filary = "Nie musisz tłumaczyć nam, jak działa branża budowlana".
 * Wyniki (results) = przeniesione 1:1 ze strony głównej ("Zobacz czego
 * możesz się spodziewać jeśli o to zadbasz") — ta sama kampania-dowód.
 */
export const DIFFERENTIATOR_LANDING = {
  heading: {
    prefix: "Nie musisz tłumaczyć nam,",
    accent: "jak działa branża budowlana.",
  },
  pillars: [
    {
      title: "Specjalizujemy się w landing page’ach dla firm budowlanych",
      body: "Pillar Web tworzy strony i landing page’e wyłącznie dla branży budowlanej. Nie tłumaczysz nam, czym jest SSO, SSZ, stan deweloperski, dom pod klucz, kosztorys czy inwestor, który „zbiera jeszcze kilka ofert”.",
    },
    {
      title: "Wiemy, jak naprawdę decyduje inwestor",
      body: "Inwestor nie podejmuje decyzji po jednym kliknięciu. Najpierw chce zrozumieć ofertę, zobaczyć realizacje, sprawdzić wiarygodność, porównać wykonawców i upewnić się, że firma wygląda solidnie. Pod taki proces układamy stronę.",
    },
    {
      title: "Twój landing page nie jest generyczną stroną usługową",
      body: "Nie powstaje jak strona dla „lokalnej firmy usługowej”. Powstaje z myślą o realnym procesie decyzyjnym w budowlance — od pierwszego zainteresowania, przez zaufanie, aż po wysłanie zapytania.",
    },
    {
      title: "Znam tę branżę od środka",
      body: "Przed założeniem Pillar Web pracowałem jako dyrektor marketingu w firmie budującej domy tradycyjne i modułowe. Nie robimy landing page’y dla każdego — robimy je dla firm budowlanych, które chcą wyglądać profesjonalnie, mierzyć efekty i zamieniać zainteresowanie w zapytania.",
    },
  ],
  // Sekcja "Case Study i konkretne liczby" — przeniesiona ze strony głównej.
  results: DIFFERENTIATOR.results,
} as const;

/**
 * PROCES — 7 kroków od konsultacji do szkolenia, w maksymalnie 7 dni.
 * Te same propsy co PROCESS (heading/important/image/steps).
 */
export const PROCESS_LANDING = {
  heading: {
    prefix: "Prosty proces od pomysłu do gotowej strony.",
    accent: "Maksymalnie 7 dni",
    suffix: "roboczych.",
  },
  important: {
    prefix:
      "Przez cały okres trwania naszej współpracy możesz kontaktować się z nami przez komunikator Slack (otrzymasz instrukcję instalacji tego narzędzia).",
    accent:
      "Możesz do nas napisać kiedy tylko chcesz. Na bieżąco wiesz, co robimy, na jakim jesteśmy etapie i co dzieje się dalej.",
    suffix: "Pracujemy według jasnego planu i regularnie raportujemy postępy.",
  },
  image: "/images/proces-wspolpracy-pillarweb.webp",
  steps: [
    {
      number: "01",
      title: "Konsultacja i cel landing page’a",
      body: "Na początku ustalamy, do czego landing page ma służyć, jak będzie wykorzystywany i czy w ogóle go potrzebujesz. Jeśli lepszym wyborem jest pełna strona — mówimy to wprost.",
    },
    {
      number: "02",
      title: "Brief i materiały",
      body: "Wysyłamy Ci formularz, który pomoże nam zebrać najważniejsze informacje o Twojej firmie tak, aby treści były zgodne z Twoją marką.",
    },
    {
      number: "03",
      title: "Struktura i treść",
      body: "Układam logiczną ścieżkę strony i piszemy teksty tak, żeby inwestor szybko zrozumiał ofertę, zobaczył konkrety i wiedział, dlaczego warto zostawić zapytanie właśnie u Ciebie, a nie u konkurencji.",
    },
    {
      number: "04",
      title: "Projekt landing page’a",
      body: "Tworzę customowy projekt dopasowany do Twojej firmy, branży i celu. Bez gotowego szablonu i bez przypadkowego układu sekcji. Twoja strona będzie ładniejsza i skuteczniejsza od 99% konkurencji.",
    },
    {
      number: "05",
      title: "Wdrożenie i konfiguracja techniczna",
      body: "Publikujemy stronę, podpinam domenę, hosting, formularz, automatyzację kontaktów, GA4, GTM, Pixel Meta, Consent Mode v2, baner RODO i inne potrzebne integracje.",
    },
    {
      number: "06",
      title: "Testy i publikacja",
      body: "Sprawdzam działanie formularzy, zdarzeń konwersji, wersji mobilnej, szybkości strony i podstawowych elementów technicznych.",
    },
    {
      number: "07",
      title: "Szkolenie z obsługi strony",
      body: "Przeprowadzamy dokładne szkolenie z posługiwania się stroną. Otrzymujesz wszystkie dostępy. Strona należy w 100% do Ciebie i tylko do Ciebie.",
    },
  ],
} as const;

/**
 * KRÓTKI BLOK BEZPIECZEŃSTWA pod procesem — zapowiedź pełnej sekcji
 * "Strona, domena, dane i leady są Twoje".
 */
export const SECURITY_CALLOUT_LANDING = {
  title: "Po wdrożeniu strona jest Twoja",
  body: "Domena, hosting, konta analityczne, dane z formularzy i landing page należą do Ciebie. Nie przejmujemy Twojej domeny i nie wiążemy Cię żadnym lock-in’em.",
} as const;

/**
 * DLA KOGO / DLA KOGO NIE + cena poglądowa + CTA.
 */
export const FIT_LANDING = {
  headingPrefix: "Sprawdź, czy landing page to",
  headingAccent: "dobry wybór dla Twojej firmy.",
  good: {
    title: "To dobre rozwiązanie, jeśli:",
    items: [
      "Potrzebujesz profesjonalnego linku do bio, reklam, wizytówki Google lub wiadomości do inwestorów.",
      "Chcesz promować jedną konkretną usługę, lokalizację, inwestycję albo ofertę.",
      "Nie chcesz jeszcze inwestować w pełną stronę internetową, ale chcesz wyglądać solidnie online.",
      "Chcesz mieć stronę, którą da się mierzyć, rozwijać i później wykorzystać w kampaniach.",
    ],
  },
  bad: {
    title: "To nie jest dla Ciebie, jeśli:",
    items: [
      "Potrzebujesz dużej strony z wieloma podstronami, blogiem, rozbudowanym SEO i bazą realizacji.",
      "Szukasz najtańszego szablonu zrobionego „na wczoraj”.",
      "Oczekujesz gwarancji konkretnej liczby leadów bez ruchu, promocji lub budżetu reklamowego.",
      "Nie masz żadnych materiałów, zdjęć, zakresu usług ani podstawowych informacji o ofercie.",
    ],
  },
  price: {
    amountPrefix: "Od",
    amount: "4 500 zł netto",
    amountSuffix: "jednorazowo",
    detail: "bez długiego lock-inu i bez przejmowania Twojej domeny.",
    note: "(cena poglądowa)",
  },
  cta: { label: "Chcę landing page dla mojej firmy", href: "#kontakt" },
  ctaNote: "Już za 7 dni możesz mieć swoją stronę gotową do startu.",
} as const;

/**
 * PORÓWNANIE — tabela tekstowa (3 kolumny): kryterium / większość firm /
 * Twoja oferta. Inny format niż check/X na stronie głównej.
 */
export const COMPARISON_LANDING = {
  headingPrefix: "Większość firm oddaje „ładną stronę”.",
  headingAccent: "Ty dostajesz system do pozyskiwania leadów.",
  intro:
    "Landing page dla firmy budowlanej nie powinien kończyć się na projekcie graficznym i formularzu kontaktowym. Jeśli ma działać w reklamach, social mediach, wizytówce Google albo jako link wysyłany inwestorom, musi mieć treść, strukturę, tracking, formularz, automatyzację i poprawną konfigurację techniczną. Dlatego nie oddajemy „ładnej jednej strony”. Oddajemy gotowe miejsce do zbierania i mierzenia zapytań.",
  columns: {
    criterion: "Co dostaje klient",
    others: "Większość firm / agencji",
    pillar: "Twoja oferta w Pillar Web",
  },
  rows: [
    {
      feature: "Czas realizacji",
      others: "Miesiąc i więcej",
      pillar: "Do 7 dni roboczych",
    },
    {
      feature: "Projekt strony",
      others: "Najczęściej szablon z personalizacją",
      pillar: "Custom design od zera, dopasowany do Twojej firmy i branży",
    },
    {
      feature: "Treści / copywriting",
      others: "Po stronie klienta albo ogólne teksty „dla każdej branży”",
      pillar: "Branżowy copywriting — piszemy treści za Ciebie, pod firmy budowlane",
    },
    {
      feature: "Struktura pod konwersję",
      others: "Ładny układ bez przemyślanej ścieżki decyzyjnej",
      pillar: "Lejek: oferta → dowody → zakres → obiekcje → kontakt",
    },
    {
      feature: "Formularz",
      others: "Zwykły formularz kontaktowy",
      pillar: "Formularz kontaktowy lub kwalifikujący, który odsiewa słabsze zapytania",
    },
    {
      feature: "Obsługa leadów",
      others: "Lead trafia najwyżej na maila",
      pillar: "Automatyzacja: e-mail, Google Sheets lub CRM",
    },
    {
      feature: "Śledzenie konwersji",
      others: "Co najwyżej „podpięty Analytics”",
      pillar: "Pełny tracking: GA4, GTM, Meta Pixel i zdarzenia konwersji",
    },
    {
      feature: "Zgody / RODO pod reklamy",
      others: "Brak albo sam baner cookies",
      pillar: "Consent Mode v2 + baner RODO",
    },
    {
      feature: "Analiza zachowań",
      others: "Brak",
      pillar: "Heatmapy i nagrania sesji",
    },
    {
      feature: "Publikacja techniczna",
      others: "Różnie, często zrzucana na klienta",
      pillar: "Domena, hosting, SSL, testy wysyłki i gotowość do startu",
    },
  ],
  summary: {
    title: "Podsumowanie",
    paragraphs: [
      "Większość rynku oddaje stronę, która wygląda dobrze na podglądzie. Ty dostajesz landing page, który ma konkretne zadanie: pokazać ofertę, zbudować zaufanie, zebrać zapytanie i dać dane do dalszej optymalizacji.",
      "To nadal jedna strona — ale zaprojektowana jak narzędzie sprzedażowe, nie jak internetowa ulotka.",
    ],
  },
  cta: { label: "Chcę landing page dla mojej firmy", href: "#kontakt" },
} as const;

/**
 * STRONA, DOMENA, DANE I LEADY SĄ TWOJE — 5 punktów własności.
 */
export const OWNERSHIP_LANDING = {
  headingPrefix: "Strona, domena, dane i leady",
  headingAccent: "są Twoje.",
  intro:
    "Landing page ma być aktywem Twojej firmy, a nie czymś, co trzyma Cię na siłę przy wykonawcy.",
  items: [
    {
      title: "Domena po Twojej stronie",
      body: "Podpinamy landing page pod Twoją domenę lub pomagamy ją poprawnie skonfigurować.",
    },
    {
      title: "Leady trafiają do Ciebie",
      body: "Zapytania automatycznie trafiają na e-mail, do Google Sheet albo CRM.",
    },
    {
      title: "Analityka na Twoich kontach",
      body: "GA4, GTM, Pixel i zdarzenia konwersji konfigurujemy tak, żebyś mógł mierzyć efekty i mieć dostęp do danych.",
    },
    {
      title: "Bez długiego lock-inu",
      body: "Nie musisz podpisywać wielomiesięcznej umowy tylko po to, żeby mieć jedną profesjonalną stronę.",
    },
    {
      title: "Możliwość dalszej rozbudowy",
      body: "Landing page może być pierwszym krokiem — później dodasz kolejne wersje pod usługi, regiony, kampanie albo rozbudujesz go do pełnej strony.",
    },
  ],
} as const;

/**
 * GWARANCJE — 2 gwarancje (terminowości + techniczna).
 * GuaranteesSection obsługuje 2/3/4 itemy (siatka dynamiczna).
 */
export const GUARANTEES_LANDING = {
  headingLine1: "Możesz czuć się bezpiecznie.",
  headingLine2: "Nasze gwarancje:",
  subheadingPrefix: "Landing page ma być gotowy wtedy, kiedy go potrzebujesz —",
  subheadingAccent: "i działać poprawnie po publikacji.",
  items: [
    {
      number: "1.",
      title: "Gwarancja terminowości",
      image: `${ASSET_BASE}/gwarancja-terminowosci-pillarweb.webp`,
      bodyParts: [
        {
          text: "Pracujemy według ustalonego harmonogramu i jasno określonego terminu oddania landing page’a (zapisanego w umowie). ",
        },
        {
          text: "Jeśli spóźnimy się choćby 1 dzień, zwracamy 50% naszego wynagrodzenia.",
          accent: true,
        },
      ],
    },
    {
      number: "2.",
      title: "Gwarancja techniczna",
      image: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
      bodyParts: [
        {
          text: "Po wdrożeniu sprawdzamy poprawne działanie strony, formularzy, wersji mobilnej, SSL, podstawowych integracji i śledzenia konwersji.",
          accent: true,
        },
      ],
    },
  ],
} as const;

/**
 * FAQ — 12 pytań specyficznych dla oferty landing page'a.
 */
export const FAQ_LANDING = {
  heading: "Najczęstsze pytania o landing page dla firmy budowlanej",
  items: [
    {
      question: "Czy landing page zastąpi mi pełną stronę internetową?",
      answer:
        "Nie zawsze. Landing page jest dobrym wyborem, jeśli chcesz promować jedną konkretną usługę, ofertę, inwestycję, region albo kampanię. Może też być pierwszą profesjonalną stroną Twojej firmy, jeśli nie chcesz jeszcze inwestować w rozbudowaną witrynę.\n\nJeśli potrzebujesz wielu podstron, bloga, szerokiego SEO i dużej bazy realizacji — lepszym wyborem będzie pełna strona internetowa.",
    },
    {
      question: "Czy mogę używać landing page’a bez reklam?",
      answer:
        "Tak. Landing page możesz dodać do bio na Instagramie, Facebooku, TikToku, LinkedInie, do wizytówki Google, stopki mailowej albo wysyłać go inwestorom po rozmowie.\n\nReklamy nie są wymagane — to po prostu jedno konkretne miejsce, które prezentuje Twoją ofertę i prowadzi do kontaktu.",
    },
    {
      question: "Czy taki landing page nadaje się pod Google Ads i Meta Ads?",
      answer:
        "Tak. Strona może być przygotowana pod kampanie Google Ads, Meta Ads i kampanie lokalne. Konfigurujemy formularz, zdarzenia konwersji, GA4, GTM, Pixel Meta oraz Consent Mode v2, żeby można było mierzyć efekty działań reklamowych.",
    },
    {
      question: "Czy to jest gotowy szablon?",
      answer:
        "Nie. Landing page projektujemy indywidualnie pod Twoją firmę, usługę, region i typ inwestora. Nie dostajesz przypadkowego układu z kreatora ani strony wyglądającej jak kopia konkurencji.",
    },
    {
      question: "Czy piszecie treści za mnie?",
      answer:
        "Tak. W ramach landing page’a przygotowujemy treści: nagłówki, opis oferty, przewagi, proces, sekcje zaufania, CTA i FAQ. Bazujemy na Twoich materiałach, realizacjach i informacjach o firmie — ale nie zrzucamy copywritingu na Ciebie.",
    },
    {
      question: "Czy landing page będzie moją własnością?",
      answer:
        "Tak. Strona, dane z formularzy i konta analityczne zostają po Twojej stronie. Nie przejmujemy domeny, nie blokujemy dostępu do danych i nie zamykamy Cię w systemie, z którego nie możesz wyjść.",
    },
    {
      question: "Czy muszę mieć domenę i hosting?",
      answer:
        "Jeśli już je masz, podpinamy landing page pod istniejącą domenę lub subdomenę. Jeśli nie masz — pomagamy dobrać i skonfigurować odpowiednie rozwiązanie.",
    },
    {
      question: "Czy landing page będzie działał na telefonie?",
      answer:
        "Tak. Strona jest projektowana z myślą o użytkownikach mobilnych, bo część inwestorów wchodzi z reklam, social mediów, wizytówki Google albo z linku wysłanego w wiadomości.",
    },
    {
      question: "Czy konfigurujecie formularz i automatyzację leadów?",
      answer:
        "Tak. Zapytania mogą trafiać na e-mail, do Google Sheet albo CRM. Możemy też przygotować formularz kwalifikujący, który zbiera informacje takie jak typ usługi, lokalizacja, termin realizacji, budżet czy zakres prac.",
    },
    {
      question: "Czy gwarantujecie konkretną liczbę leadów?",
      answer:
        "Nie. Liczba zapytań zależy od ruchu, oferty, lokalizacji, sezonu, budżetu reklamowego i szybkości obsługi kontaktów. Gwarantujemy natomiast solidne wdrożenie, poprawną konfigurację i stronę przygotowaną do mierzenia oraz dalszej optymalizacji.",
    },
    {
      question: "Ile trwa wykonanie landing page’a?",
      answer:
        "Termin ustalamy indywidualnie przed startem prac. Zazwyczaj jest to maksymalnie 7 dni roboczych. Zależy od zakresu, liczby sekcji, materiałów, integracji i szybkości przekazania informacji.",
    },
    {
      question: "Czy później mogę rozbudować landing page do większej strony?",
      answer:
        "Tak. Landing page może być pierwszym krokiem. Później można dodać kolejne strony pod inne usługi, regiony, kampanie, realizacje albo rozbudować go do pełnej strony internetowej.",
    },
  ],
} as const;

/**
 * KONTAKT / CTA KOŃCOWE — formularz.
 * Reużywa zdjęcie właściciela i opinię z content.ts (CONTACT),
 * podmienia nagłówek, opis i listę specjalizacji pod landing page.
 */
export const CONTACT_LANDING = {
  headingLine1: "Zacznij od jednej strony,",
  headingLine2: "która pracuje na zapytania.",
  description:
    "Landing page to prostszy start niż pełna strona internetowa — ale nadal profesjonalny, mierzalny i przygotowany do pozyskiwania kontaktów. Wykorzystasz go w reklamach, social mediach, wizytówce Google, wiadomościach do inwestorów i materiałach sprzedażowych.",
  ownerPhoto: CONTACT.ownerPhoto,
  ownerName: CONTACT.ownerName,
  ownerRole: CONTACT.ownerRole,
  urgencyNote: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie.",
  specializations: [
    "Firma budująca domy",
    "Firma remontowa / wykończeniowa",
    "Deweloper / sprzedaż domów",
    "Firma dachowa / elewacyjna / instalacyjna",
    "Producent budowlany",
    "Inne",
  ],
  testimonial: CONTACT.testimonial,
  submitLabel: "Umów bezpłatną konsultację",
  submitNote:
    "Zadzwonimy w przeciągu od nawet 5 min do maksymalnie 24h · Zero zobowiązań",
  formNote:
    "Umów bezpłatną konsultację i sprawdźmy, jak taki landing page może wyglądać w Twojej firmie.",
} as const;
