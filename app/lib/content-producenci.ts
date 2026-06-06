/**
 * TREŚCI — PODSTRONA PRODUCENCI BUDOWLANI
 * ----------------------------------------
 * Spersonalizowane treści dla podstrony /producenci-budowlani.
 * Język i hooki dobrane pod CEO/właściciela/dyrektora marketingu producenta
 * materiałów budowlanych (okna, dachówki, kostka, chemia budowlana,
 * izolacje, prefabrykaty, farby, stolarka). B2B, nie B2C.
 *
 * Źródła:
 * - Raport ICP "Producent budowlany" (105 verbatim insightów)
 * - Playbook ofert per segment, Rozdział 08 (Pirowski Studio)
 *
 * Kluczowe akcenty:
 * - specyfikacja / "spec'd in" / specyfikator
 * - DWU, CE, EPD, BREEAM, karta techniczna
 * - biblioteka BIM, strefa architekta, wyszukiwarka dystrybutorów
 * - pull-through marketing (nie "lead gen")
 * - brak lock-inu / dane na klienta (silna obiekcja branżowa)
 * - eksport / wielojęzyczność
 *
 * Komponenty importują defaults z content.ts. Tu trzymamy te same kształty
 * danych — przekazywane przez propsy z podstrony.
 */

import { ASSET_BASE, SITE, VIDEO_BLOB_BASE } from "./content";

// Eksport ASSET_BASE/SITE/VIDEO_BLOB_BASE jest re-eksportowany na wypadek,
// gdyby strona producentów chciała ich użyć bezpośrednio.
export { ASSET_BASE, SITE, VIDEO_BLOB_BASE };

/**
 * NAV — kotwice do sekcji na podstronie producentów.
 * Bez "Cennika" — zgodnie z decyzją: na podstronach podnisz cennik
 * jest tymczasowo wycofany.
 */
export const NAV_LINKS_PRODUCENCI = [
  { label: "Realizacje", href: "#realizacje" },
  { label: "Gwarancje", href: "#gwarancje" },
  { label: "Proces współpracy", href: "#jak-pracujemy" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Kontakt", href: "#kontakt" },
];

/**
 * HERO — pierwsze 3 sekundy.
 * Hook: trzymamy strukturę z homepage'a ("STRONY INTERNETOWE DLA ...")
 * — ale podtytuł celuje konkretnie w sprzedażową ścieżkę producenta:
 * BIM + strefa architekta + dystrybutorzy = wpisanie w specyfikację.
 */
export const HERO_PRODUCENCI = {
  brandLine: "Pillar Web · Producenci budowlani",
  titleLine1: "STRONY INTERNETOWE",
  titleLine2Prefix: "DLA",
  titleLine2Accent: "PRODUCENTÓW BUDOWLANYCH",
  subtitle:
    "Indywidualne projekty z biblioteką BIM, strefą architekta i wyszukiwarką dystrybutorów — gotowe na to, by Wasz produkt trafiał do specyfikacji projektowych.",
  subtitleParts: [
    { text: "Indywidualne projekty z", accent: false },
    { text: "biblioteką BIM, strefą architekta i wyszukiwarką dystrybutorów", accent: true },
    { text: "— gotowe na to, by", accent: false },
    { text: "Wasz produkt trafiał do specyfikacji projektowych.", accent: true },
  ],
  cta: { label: "Umów rozmowę konsultacyjną", href: "#kontakt" },
  // Zdjęcie hero — to samo, które jest już w SPECIALIZATIONS na homepage'u
  // jako kafelek "Producenci budowlani". Spójność wizualna.
  heroImage: "/images/producenci-budowlani-pillarweb.webp",
} as const;

/**
 * CONTENT VIDEO SECTION — "Co decyduje, że architekt wpisze Was do specyfikacji"
 * Trzy bóle producenta z najwyższym ładunkiem emocjonalnym:
 * - [65%] Brak spec'a (architekt nie znajduje karty technicznej)
 * - [70%] Hurtownie zjadają markę (wykonawca nie wie, gdzie kupić)
 * - [52%] PDF jako mogiła (strona-katalog nie konwertuje)
 */
export const CONTENT_SECTION_PRODUCENCI = {
  heading: {
    prefix: "Co decyduje, że architekt wpisze Waszą markę do specyfikacji —",
    accent: "albo wybierze konkurencję",
  },
  // Ten sam testfilm.mp4 placeholder co na homepage — wymienisz na finalny.
  videoSrc: `${ASSET_BASE}/testfilm.mp4`,
  problems: {
    title:
      "Strona producenta budowlanego, która nie obsługuje architekta i dystrybutora, kosztuje więcej niż się wydaje",
    items: [
      {
        title: "Architekt nie zostanie na stronie dłużej niż 3 kliknięcia",
        body: "**Architekci są zainteresowani producentem maksymalnie do trzech kliknięć.** Jeśli muszą rejestrować się, pobierać 80-stronicowy PDF i przepisywać dane techniczne do projektu — nie zrobią tego. Pójdą do konkurencji, która ma plik .ifc gotowy do wstawienia w 30 sekund i gotową specyfikację techniczną do skopiowania. Tak wypadacie ze specyfikacji, zanim ktokolwiek wpisał Waszą nazwę.",
      },
      {
        title: "Wykonawca nie wie, gdzie kupić Wasz produkt",
        body: "Wykonawca otwiera Waszą stronę z telefonu na budowie, szuka najbliższej hurtowni z Waszym klejem — i nie znajduje. Bierze do ręki produkt konkurencji, który **już ma w samochodzie**. Wyszukiwarka dystrybutorów z mapą i stanem magazynowym to nie gadżet — to bezpośrednia obrona udziału w sprzedaży.",
      },
      {
        title: "Strona producenta wygląda jak z 2018 roku",
        body: "**75% odwiedzających ocenia wiarygodność firmy po wyglądzie strony** (raport Stanford). Sika, Henkel, Tikkurila wyglądają jak firmy warte miliarda. Wasza strona pokazuje, że ostatnia aktualizacja była, gdy zięć kończył szkołę. Architekt, projektant, deweloper — żadne z nich nie widzi jeszcze Waszego produktu. Ocenia Was po stronie.",
      },
    ],
    // Obraz: wykres / mockup obecnej dystrybucji vs nowoczesnej strony producenta.
    // Tymczasowo: ten sam co homepage — placeholder do wymiany.
    image: `${ASSET_BASE}/strona-internetowa-a-pozyskiwanie-klientow-pillarweb-1024x572.webp`,
    summary:
      "Problem nie polega na tym, że producenci budowlani nie mają stron. **Problem w tym, że większość stron producentów to katalogi z 2018 roku, które nie obsługują tych, którzy realnie decydują o sprzedaży: architekta, wykonawcy i dystrybutora.** Nie chodzi o estetykę — chodzi o to, by Wasz produkt trafiał do projektów, a nie wypadał z nich na samym researchu specyfikatora.",
    cta: { label: "Porozmawiajmy o Waszej stronie", href: "#kontakt" },
  },
} as const;

/**
 * DIFFERENTIATOR — "Nie jesteśmy agencją od wszystkiego.
 * Rozumiemy DWU, EPD i strefę architekta."
 *
 * 4 pillary kontrujące najmocniejsze obiekcje z raportu ICP:
 * - [80%] "My nie tak sprzedajemy / nie generujemy leadów z Google"
 * - [72%] "Już raz przepaliliśmy budżet"
 * - [40%] "Agencja nie rozumie DWU/CE/EPD"
 * - [62%] / [78%] "Strona/dane powinny być nasze, nie agencji"
 */
export const DIFFERENTIATOR_PRODUCENCI = {
  heading: {
    prefix: "Nie jesteśmy agencją od wszystkiego.",
    accent: "Rozumiemy DWU, EPD i strefę architekta.",
  },
  pillars: [
    {
      title: "Wiemy, że Waszym klientem nie jest inwestor szukający domu",
      body: "Waszym klientem jest architekt potrzebujący pliku .ifc, wykonawca szukający kalkulatora zużycia i hurtownia zamawiająca paletę. Każda z tych person mówi innym językiem — i strona musi obsłużyć wszystkie trzy. Bez tego płacicie za ruch, który odpływa do konkurencji na pierwszym kliknięciu.",
    },
    {
      title: "Wiemy, czym jest DWU, CE, ETA, EPD i BREEAM",
      body: "Nie tłumaczymy od zera różnicy między aprobatą techniczną a deklaracją właściwości użytkowych. Nie pytamy, czym jest klasa C2T albo Uw = 0,8. Robimy strony producentów materiałów budowlanych — to nasza działka, nie pierwsza próba na Waszym projekcie.",
    },
    {
      title: "Wiemy, jak ułożyć stronę pod specyfikację, nie pod formularz „skontaktuj się\"",
      body: "W B2B materiałów budowlanych większość przychodu pochodzi z **bycia w specyfikacji projektu**, nie z formularza kontaktowego. Agencja, która sprzedaje „leady z Google Ads\" na styropian, trafia w mur niezrozumienia. My układamy stronę pod realną ścieżkę sprzedaży producenta — od specyfikacji architekta przez dystrybucję po autoryzowanego wykonawcę.",
    },
    {
      title: "Domena, kod, Analytics — wszystko na Was. Zero lock-inu.",
      body: "Konto Google Analytics 4 na Waszą firmę. Domena na Waszą firmę. Repozytorium kodu — Wasze. Jeśli kiedyś zechcecie pójść do innej agencji, zabieracie wszystko ze sobą. **Nikt Was nie trzyma 4-miesięcznym wypowiedzeniem i nie blokuje dostępu do Waszych własnych danych.**",
    },
  ],
  results: {
    headingPrefix: "Co konkretnie dostarczamy",
    headingAccent: "na stronie producenta",
    headingSuffix:
      " — biblioteka BIM, strefa architekta, wyszukiwarka dystrybutorów, kalkulatory zużycia, wielojęzyczność pod eksport.",
    // Obraz roboczy — docelowo: screen sekcji architekta z plikami .rfa/.ifc.
    image: `${ASSET_BASE}/wyniki-google-ads-firma-budowlana-pillarweb.webp`,
    paragraphs: [
      "Strony, które robimy dla producentów, nie są kolejnymi wizytówkami. To są **prospekty inwestycyjne dla architekta**, **techniczne narzędzia dla wykonawcy** i **panele zarządzania dla Waszego działu handlowego.** Każda sekcja ma swoją rolę i swoją personę.",
      "Sekcja architekta dostarcza wszystko, co trzeba wpisać w specyfikację: pliki BIM (.rfa, .ifc, .pln, .dwg), karty techniczne w HTML (nie w 80-stronicowym PDF), gotowe teksty specyfikacji do wklejenia, EPD, DoP i deklaracje zgodności. Strefa wykonawcy edukuje aplikację i kieruje do najbliższej hurtowni. Panel autoryzowanego dealera pielęgnuje relacje, na których oparta jest Wasza sprzedaż.",
    ],
    closing:
      "**Dlatego nie tworzymy stron „dla każdego\".** Tworzymy je dla producentów budowlanych, którzy nie chcą oddawać klientów konkurencji na samej stronie internetowej.",
  },
} as const;

/**
 * SPECIALIZATIONS — typy producentów, z którymi pracujemy.
 * Szerokie spektrum: od stolarki po chemię budowlaną.
 * Reużywamy obrazek hero producentów dla wszystkich kafelków —
 * docelowo będą osobne obrazki.
 */
export const SPECIALIZATIONS_PRODUCENCI = {
  headingPrefix: "Współpracujemy z producentami",
  headingAccent: "z różnych specjalizacji",
  items: [
    { label: "Producenci stolarki (okna, drzwi)", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci pokryć dachowych", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci kostki i prefabrykatów", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci chemii budowlanej", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci izolacji i dociepleń", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci farb i lakierów", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci ogrodzeń i bram", image: "/images/producenci-budowlani-pillarweb.webp" },
    { label: "Producenci paneli warstwowych", image: "/images/producenci-budowlani-pillarweb.webp" },
  ],
} as const;

/**
 * GWARANCJE — uniwersalne, ale z DODANĄ 4. gwarancją własności,
 * która bezpośrednio kontruje obiekcję #62/#75 z raportu ICP
 * (lock-in / utrata domeny / utrata Analytics).
 * To jest dla producenta TOP-3 obawa — warto eksponować.
 */
export const GUARANTEES_PRODUCENCI = {
  headingLine1: "Możecie czuć się bezpiecznie.",
  headingLine2: "Nasze gwarancje:",
  subheadingPrefix: "Jesteśmy tak pewni jakości naszej usługi, że",
  subheadingAccent: "dajemy gwarancje, których nie otrzymacie nigdzie indziej.",
  items: [
    {
      number: "1.",
      title: "Gwarancja satysfakcji",
      image: `${ASSET_BASE}/gwarancja-satysfakcji-pillarweb.webp`,
      bodyParts: [
        { text: "Najpierw pokazujemy Wam gotowy projekt strony — widzicie dokładnie, jak będzie wyglądać, zanim cokolwiek zostanie wdrożone. " },
        { text: "Jeśli uznacie, że to nie ten kierunek — zwracamy pieniądze.", accent: true },
      ],
    },
    {
      number: "2.",
      title: "Gwarancja terminowości",
      image: `${ASSET_BASE}/gwarancja-terminowosci-pillarweb.webp`,
      bodyParts: [
        { text: "Jeśli nie dotrzymamy terminu ustalonego w umowie, " },
        { text: "oddajemy 50% naszego wynagrodzenia", accent: true },
        { text: " (nawet jeśli spóźnimy się jeden dzień)." },
      ],
    },
    {
      number: "3.",
      title: "Gwarancja techniczna",
      image: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
      bodyParts: [
        { text: "Po wdrożeniu macie 30 dni bezpłatnego wsparcia technicznego.", accent: true },
        { text: " Jeśli cokolwiek nie działa jak powinno — naprawiamy to bez żadnych dodatkowych kosztów." },
      ],
    },
    {
      number: "4.",
      title: "Gwarancja własności — zero lock-inu",
      image: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
      bodyParts: [
        { text: "Domena na Was. Konto GA4 na Was. Repozytorium kodu — na Was. " },
        { text: "Bez wypowiedzeń, bez „zwrotu kodu źródłowego za opłatą\", bez blokowania dostępu.", accent: true },
        { text: " Strona od pierwszego dnia jest Wasza." },
      ],
    },
  ],
} as const;

/**
 * PROCESS — uniwersalny proces 7-krokowy, ale kroki 4-6 mają
 * akcenty specyficzne dla producenta:
 * - krok 04: katalog produktów + biblioteka BIM + karty techniczne
 * - krok 05: SEO pod frazy techniczne + schema.org/Product per SKU
 * - krok 06: chatbot uczony na kartach Waszych produktów +
 *   formularze per persona (architekt / wykonawca / dystrybutor)
 */
export const PROCESS_PRODUCENCI = {
  heading: {
    prefix: "Tak wygląda współpraca, w której",
    accent: "przejmujemy cały temat",
    suffix: "strony od A do Z.",
  },
  important: {
    prefix:
      "Przez cały okres trwania naszej współpracy, możecie kontaktować się z nami za pośrednictwem komunikatora Slack (otrzymacie instrukcję instalacji tego narzędzia).",
    accent:
      "Możecie do nas napisać kiedy tylko chcecie. Na bieżąco wiecie, co robimy, na jakim jesteśmy etapie i co dzieje się dalej.",
    suffix: "Pracujemy według jasnego planu i regularnie raportujemy postępy.",
  },
  image: "/images/proces-wspolpracy-pillarweb.webp",
  steps: [
    {
      number: "01",
      title: "Rozmowa i konsultacja (zostawiacie do siebie kontakt)",
      body: "Rozmawiamy o Waszej firmie, produktach, kanale sprzedaży (hurtownia / bezpośredni / autoryzowani wykonawcy) i celach. Sprawdzamy, czy faktycznie potrzebujecie naszej pomocy. Mówimy Wam to wprost, zanim podpiszecie cokolwiek.",
    },
    {
      number: "02",
      title: "Krótki brief produktowy i targetingowy",
      body: "Abyśmy mogli stworzyć stronę, która faktycznie obsłuży architekta i wykonawcę, musimy poznać Waszą paletę produktową, segmentację klientów (deweloper / GC / dystrybutor / autoryzowany wykonawca) i mocne strony marki. Odpowiadacie na kilka pytań — bez wypełniania 40-stronicowego formularza.",
    },
    {
      number: "03",
      title: "Strategia i mapa strony",
      body: "Układamy strukturę: katalog produktów, sekcja architekta, strefa wykonawcy, wyszukiwarka dystrybutorów, blog ekspercki. Definiujemy ścieżki dla każdej z trzech kluczowych person. Pokazujemy Wam mapę, zanim zaczynamy projektować.",
    },
    {
      number: "04",
      title: "Projekt strony, katalog produktów i karty techniczne",
      body: "Otrzymujecie gotowy projekt strony do oceny — łącznie z układem karty produktu, kartą techniczną w HTML (nie tylko PDF), biblioteką BIM i strefą architekta. Widzicie ją w szczegółach, zgłaszacie uwagi bądź zatwierdzacie.",
    },
    {
      number: "05",
      title: "Treści, SEO i widoczność (PL + opcjonalnie EN/DE/CZ pod eksport)",
      body: "Przygotowujemy teksty — w języku Waszych specyfikatorów. Wdrażamy SEO pod frazy techniczne (typu „pompa ciepła monoblok 12 kW\", „klasa C2T\", „dachówka karpiówka\"), schema.org/Product na każdym SKU i strukturę pod widoczność w Google. Jeśli celujecie w eksport — przygotowujemy wersje obcojęzyczne.",
    },
    {
      number: "06",
      title: "Automatyzacje per persona",
      body: "Wdrażamy chatbota AI uczonego na **kartach Waszych produktów** (odpowiada architektowi na pytania o Uw, klasę, certyfikat), osobne formularze dla architekta / wykonawcy / hurtowni i automatyczne powiadomienia do działu handlowego per region. Każdy lead trafia do właściwego opiekuna.",
    },
    {
      number: "07",
      title: "Wdrożenie, szkolenie i opieka",
      body: "Strona jest live. Pokazujemy Wam, jak z niej korzystać, jak dodawać nowe SKU, jak aktualizować karty techniczne. Jesteśmy dostępni przez 30 dni — żebyście mieli pewność, że wszystko działa jak powinno.",
    },
  ],
} as const;

/**
 * COMPARISON — "Pillar Web vs typowa agencja webowa".
 * Większość kategorii zostaje, ale DODAJEMY kategorię specyficzną dla
 * producenta: BIM, strefa architekta, dystrybutorzy, wielojęzyczność.
 * Tu jest twardy wyróżnik vs agencja-generalist.
 */
export const COMPARISON_PRODUCENCI = {
  heading: {
    accent: "Pillar Web",
    rest: " vs typowa agencja webowa — porównaj punkt po punkcie.",
  },
  subtitle:
    "Te same usługi nazywają się tak samo. Różnice są ogromne — szczególnie dla producenta materiałów budowlanych. Zobacz pełne zestawienie.",
  columns: {
    criterion: "Kryterium",
    others: "Inne agencje webowe",
    pillar: { line1: "Pillar Web", line2: "tylko dla branży budowlanej" },
  },
  categories: [
    {
      title: "Podstawy strony",
      rows: [
        { feature: "Responsywna wersja mobilna", others: true },
        { feature: "Podstawowe SEO on-page", others: true },
        { feature: "Formularz kontaktowy", others: true },
      ],
    },
    {
      title: "Producent-specific (B2B materiałów budowlanych)",
      rows: [
        { feature: "Biblioteka BIM (.rfa, .ifc, .pln, .dwg) na stronie", others: false },
        { feature: "Karty techniczne w HTML (nie tylko PDF), TDS/SDS/DoP do pobrania", others: false },
        { feature: "Strefa architekta / specyfikatora (gotowe teksty specyfikacji, detale CAD)", others: false },
        { feature: "Wyszukiwarka dystrybutorów z mapą", others: false },
        { feature: "Strefa Autoryzowanego Wykonawcy (login, materiały, szkolenia)", others: false },
        { feature: "Kalkulatory zużycia per produkt", others: false },
        { feature: "schema.org/Product per SKU — widoczność w wyszukiwarce produktowej Google", others: false },
      ],
    },
    {
      title: "Projekt i treści",
      rows: [
        {
          feature: "W pełni indywidualny projekt graficzny (nie szablon)",
          others: false,
        },
        { feature: "Copywriting w języku specyfikatora (DWU, klasy, parametry techniczne)", others: false },
        {
          feature: "Materiały AI — wizualizacje produktów bez sesji fotograficznej",
          others: false,
        },
      ],
    },
    {
      title: "Eksport i wielojęzyczność",
      rows: [
        { feature: "Strona w 2-5 językach (PL + EN/DE/CZ/FR) pod rynki eksportowe", others: false },
        { feature: "hreflang + osobne sitemap'y per język", others: false },
      ],
    },
    {
      title: "Widoczność i analityka",
      rows: [
        {
          feature: "Pełna konfiguracja GA4 + GTM + Pixel od pierwszego dnia",
          others: false,
        },
        { feature: "Optymalizacja wizytówki Google Maps (oddziały, magazyny)", others: false },
      ],
    },
    {
      title: "Pewność współpracy",
      rows: [
        {
          feature: "Gwarancja satysfakcji — zwrot jeśli niezadowoleni z projektu",
          others: false,
        },
        {
          feature:
            "Gwarancja terminowości — 50% zwrotu za każdy dzień spóźnienia",
          others: false,
        },
        {
          feature: "Gwarancja własności — domena, kod, GA na Was. Zero lock-inu",
          others: false,
        },
        {
          feature: "30 dni bezpłatnego wsparcia technicznego po wdrożeniu",
          others: true,
        },
      ],
    },
    {
      title: "Wiedza branżowa",
      rows: [
        { feature: "Specjalizacja wyłącznie w branży budowlanej", others: false },
        {
          feature: "Rozumiemy DWU, CE, ETA, EPD, BREEAM — bez tłumaczenia od zera",
          others: false,
        },
      ],
    },
    {
      title: "Proces i komunikacja",
      rows: [
        { feature: "Opisany proces krok po kroku — wiecie co i kiedy", others: true },
        { feature: "Realizacja maksymalnie w 4 tygodnie", others: false },
        {
          feature: "Bieżąca komunikacja przez Slack — wiecie co się dzieje",
          others: false,
        },
      ],
    },
  ],
} as const;

/**
 * ABOUT — w 90% to samo co homepage. Lekkie akcenty na producentów
 * (Kamil pracował w firmie budowlanej; rozumie B2B branży).
 */
export const ABOUT_PRODUCENCI = {
  heading: "Kim jesteśmy",
  paragraphs: [
    "Za Pillar Web stoję ja — Kamil Tomczyk i zespół sprawdzonych specjalistów dobranych przez lata pracy w marketingu — każdy najlepszy w swojej dziedzinie. Od 19. roku życia działam w marketingu. Prowadziłem własną agencję, pracowałem w wiodących firmach marketingowych oraz byłem dyrektorem marketingu w firmie budowlanej stawiającej domy tradycyjne i modułowe.",
    "Na co dzień miałem do czynienia z producentami materiałów budowlanych po obu stronach stołu — jako kupujący (od dystrybutorów) i jako współpracujący (z producentami stolarki, dachówek, izolacji). **Wiem, jak wygląda ścieżka specyfikacji projektu z perspektywy generalnego wykonawcy. Wiem też, gdzie producent traci klienta zanim ktokolwiek otworzy karty techniczne.**",
    "Nie jestem teoretykiem marketingu B2B. Znam tę branżę bardzo dobrze — od strony produktu, kontraktu, hurtowni i specyfikacji.",
    "Zadaniem Pillar Web jest przejęcie całej odpowiedzialności i uporządkowanie wieloetapowego procesu, tworząc stronę, która od razu jest gotowa do startu z marketingiem i reklamami, bez obaw, że jakiegokolwiek elementu zabraknie.",
    "Dla producenta budowlanego to oznacza: gotową bibliotekę BIM, w pełni skonfigurowaną strefę architekta, wyszukiwarkę dystrybutorów wpiętą w mapę, kalkulatory zużycia per produkt i wielojęzyczne wersje, jeśli celujecie w eksport. Każdy najmniejszy element jest dopracowany pod realną ścieżkę sprzedaży producenta.",
    "Pillar Web istnieje z jednego powodu: żeby firmy z branży budowlanej, które robią dobrą robotę w produkcji i na placu budowy, były równie mocne online.",
  ],
  image: "/images/o-nas-2.webp",
  imageAlt:
    "Kamil Tomczyk i branża budowlana oraz marketing internetowy B2B w ujęciu wizerunkowym Pillar Web",
} as const;

/**
 * FAQ — pytania przekrojowe + producent-specific.
 * Z raportu ICP wybrane najczęstsze obiekcje i pytania.
 */
export const FAQ_PRODUCENCI = {
  heading: "Najczęściej zadawane pytania",
  items: [
    {
      question:
        "„U nas sprzedaż idzie głównie przez hurtownie i specyfikacje. Czy strona internetowa w ogóle nas dotyczy?\"",
      answer:
        "Tak — i to bardziej, niż się wydaje.\n\nW B2B materiałów budowlanych większość przychodu pochodzi z bycia w specyfikacji projektu. Architekt, projektant i dyrektor techniczny zaczynają od Google. Jeśli na Waszej stronie nie znajdą karty technicznej w wygodnym formacie, pliku BIM albo deklaracji EPD — wybiorą konkurenta, który to ma. Strona to nie zastępstwo dla handlowca terenowego — to narzędzie, które przygotowuje grunt zanim handlowiec się odezwie.",
    },
    {
      question: "„Skąd mam wiedzieć, że rozumiecie naszą specyfikę B2B?\"",
      answer:
        "Pracujemy wyłącznie z branżą budowlaną i konkretnie z producentami materiałów — nie uczymy się branży na Waszym projekcie.\n\nWiemy, czym jest DWU, CE, ETA, EPD, BREEAM. Wiemy, jak architekci szukają produktów do specyfikacji. Wiemy, jak Waszej stronie nie wolno wchodzić w konflikt z kanałem dystrybucji. Dodatkowo dajemy gwarancję satysfakcji i terminowości, więc współpraca nie wiąże się z żadnym ryzykiem.",
    },
    {
      question: "„Czy budujecie biblioteki BIM i strefy dla architektów?\"",
      answer:
        "Tak.\n\nPrzygotowujemy pełną sekcję dla specyfikatora: pliki BIM (.rfa dla Revit, .ifc dla Open BIM, .pln dla Archicad, .dwg dla AutoCAD), gotowe teksty specyfikacji do wklejenia w projekt, biblioteki typowych detali, kalkulatory dla projektantów oraz strefę zalogowanych „Projektant\" z dostępem do pełnej dokumentacji, webinarów i newslettera technicznego.",
    },
    {
      question:
        "„Mamy stronę po polsku. Czy umiecie zrobić wersje obcojęzyczne pod eksport (DE, EN, CZ, FR)?\"",
      answer:
        "Tak.\n\nWielojęzyczność z prawidłowym hreflang i osobnymi sitemap'ami per język to standard dla producentów, którzy chcą realnie wyjść na rynki zachodnie i wschodnie. Wspieramy też SEO międzynarodowe — frazy techniczne tłumaczymy z native speakerami, nie przez Google Translate.",
    },
    {
      question:
        "„Co z dotychczasowymi danymi? Bo słyszałem historie o utracie domeny i Google Analytics po zerwaniu współpracy z agencją.\"",
      answer:
        "U nas to fundament współpracy.\n\nDomena na Waszą firmę. Konto Google Analytics 4 na Waszą firmę. Repozytorium kodu — Wasze. Cała własność intelektualna jest Wasza od pierwszego dnia. Jeśli kiedykolwiek zechcecie pójść do innej agencji, zabieracie wszystko ze sobą bez żadnych opłat „za zwrot kodu źródłowego\".",
    },
    {
      question:
        "„Czy strona z wyszukiwarką dystrybutorów i kalkulatorami nie naruszy naszych relacji z hurtowniami?\"",
      answer:
        "Dobre pytanie — to jedna z kluczowych obaw producentów.\n\nNie. Strona producenta nie jest e-commerce'em sprzedającym bezpośrednio do końcowego klienta (chyba że tak właśnie chcecie ją skonfigurować). Wyszukiwarka dystrybutorów **wzmacnia** hurtownie — kieruje wykonawcę do najbliższego sklepu Waszego partnera, zamiast wypuszczać go do konkurencji. Cały moduł projektujemy tak, by wspierać kanał dystrybucji, nie kanibalizować go.",
    },
    {
      question: "Jak długo trwa cały proces?",
      answer:
        "Do 4 tygodni (zazwyczaj kończymy stronę wcześniej).\n\nDokładny czas zależy od zakresu projektu — strona producenta z biblioteką BIM, kalkulatorami i strefą zalogowanych jest większa niż strona wykonawcy. Na początku współpracy ustalamy jasny harmonogram. Jeśli spóźnimy się z oddaniem strony choćby jeden dzień — otrzymujecie zwrot w wysokości 50% ceny strony.",
    },
    {
      question: "Czy muszę sam przygotować wszystkie materiały?",
      answer:
        "Nie.\n\nPrzejmujemy temat możliwie kompleksowo. Pomagamy w strategii, tworzymy teksty (w tym specyfikacje techniczne w języku architekta), układamy strukturę katalogu, wdrażamy rozwiązania techniczne. Od Was potrzebujemy: kart produktów (jeśli macie), katalogu SKU, certyfikatów i deklaracji zgodności, ewentualnie zdjęć realizacji referencyjnych. Resztę robimy my.",
    },
    {
      question: "Czy oferujecie również reklamy i działania marketingowe poza samą stroną?",
      answer:
        "Tak.\n\nPoza tworzeniem stron dla producentów pomagamy również w:\n• SEO technicznym (frazy specyfikatorów, parametry, normy),\n• Google Ads pod konkretne kategorie produktowe,\n• LinkedIn Ads (najlepszy kanał B2B dla architektów i kupców branżowych),\n• automatyzacjach AI (chatbot uczony na kartach Waszych produktów).\n\nDzięki temu możemy nie tylko przygotować stronę, ale także realnie pomóc Wam być widocznym tam, gdzie szukają Was specyfikatorzy.",
    },
    {
      question: "Co jeśli nie będziemy zadowoleni z projektu?",
      answer:
        "Dajemy gwarancję satysfakcji.\n\nJeśli po etapie strategii i projektu uznacie, że to nie jest kierunek dla Was, zwracamy pieniądze i kończymy współpracę.",
    },
    {
      question: "Co jeśli projekt nie zostanie wykonany na czas?",
      answer:
        "Dajemy gwarancję terminowości.\n\nJeśli nie dotrzymamy terminu ustalonego w umowie, oddajemy 50% naszego wynagrodzenia — nawet za jeden dzień spóźnienia.",
    },
    {
      question: "Czy po wdrożeniu zostajemy z tym sami?",
      answer:
        "Nie.\n\nPo publikacji strony pokazujemy Wam, jak z niej korzystać, jak dodawać nowe SKU do katalogu, jak aktualizować karty techniczne i zarządzać strefą architekta. Przekazujemy instrukcję i zapewniamy 30 dni bezpłatnego wsparcia technicznego.",
    },
  ],
} as const;

/**
 * CONTACT — formularz dla producentów.
 * specializations[] dostosowane: profile producentów zamiast wykonawców.
 */
export const CONTACT_PRODUCENCI = {
  headingLine1: "Nie czekajcie na kolejną",
  headingLine2: "przegraną specyfikację.",
  description:
    "Zostawcie kontakt i sprawdźmy, jak możemy stworzyć stronę, która sprawia, że Wasz produkt trafia do specyfikacji projektowych, Wasi dystrybutorzy mają wszystkie materiały pod ręką, a wykonawcy wiedzą, gdzie kupić. Bez zobowiązań.",
  ownerPhoto: "/images/kamil-tomczyk-pillarweb.jpeg",
  ownerName: "Kamil Tomczyk",
  ownerRole: "CEO Pillar Web",
  urgencyNote: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie.",
  specializations: [
    "Producent stolarki (okna / drzwi)",
    "Producent pokryć dachowych",
    "Producent kostki brukowej / prefabrykatów",
    "Producent chemii budowlanej (kleje, fugi, tynki)",
    "Producent izolacji i dociepleń",
    "Producent farb i lakierów",
    "Producent ogrodzeń i bram",
    "Producent paneli warstwowych / inne",
  ],
  testimonial: {
    quote: [
      "Umowa bez niespodzianek, kontakt zawsze natychmiastowy, jakość na najwyższym poziomie.",
      "Na każdym etapie wiedziałem, co się dzieje. Profesjonalnie, ale bez sztywnej atmosfery — uczciwa współpraca.",
      "Strona gotowa, firma przedstawiona tak jak powinna. Serdecznie polecam każdemu z branży budowlanej.",
    ],
    author: "Michał Płonka",
    role: "właściciel Pergole do ogrodu, Kraków",
    photo: "/images/testimonials/pergole-michal-plonka.png",
  },
  submitLabel: "Umów bezpłatną konsultację",
  submitNote:
    "Zadzwonimy w przeciągu od nawet 5 min do maksymalnie 24h · Zero zobowiązań",
  formNote: "Krótki formularz. Konkretna rozmowa. Jasny plan działania.",
} as const;

/**
 * VSL — film sprzedażowy z homepage. Pasuje dla producentów,
 * ale zmienione hooki nagłówka.
 */
export const VSL_PRODUCENCI = {
  headingPrefix:
    "Specyfikacja, marża, hurtownia — wszystko zaczyna się od strony. Zobaczcie, jak",
  headingAccent: "zbudować pull-through dla swojej marki.",
  video: `${VIDEO_BLOB_BASE}/vsl.mp4`,
  poster: "/images/vsl.jpg",
  aspect: "1600 / 900",
  duration: "7:36",
  name: "film sprzedażowy Pillar Web",
  cta: { label: "Porozmawiajmy o Waszej stronie", href: "#kontakt" },
} as const;

/**
 * PORTFOLIO — na razie reużywamy te same 3 wideo co homepage.
 * Disclaimer w intro: to przykłady jakości naszej pracy w branży budowlanej.
 * Docelowo: case'y producentów (jeśli kiedyś takie powstaną).
 */
export const PORTFOLIO_PRODUCENCI = {
  headingPrefix: "Zobaczcie, jak wyglądają strony, które tworzymy",
  headingAccent: "dla branży budowlanej.",
  intro:
    "Te realizacje to przykłady jakości i podejścia — dla dewelopera, firmy budującej domy i generalnego wykonawcy. Strona producenta budowlanego rządzi się innymi prawami (biblioteka BIM, strefa architekta, wyszukiwarka dystrybutorów) — ale ten sam poziom dopracowania trafia do każdego projektu.",
  // Te same projekty co na homepage (Korona / Lennox / Horyzont) —
  // nie duplikujemy danych, importujemy z głównego content.ts w komponencie.
} as const;

/**
 * SERVICES — 4 punkty benefitów, pokazywane jako accordion.
 * Tu różnica vs homepage: zamiast "klienci z Twojego miasta" mówimy
 * o specyfikatorach i wykonawcach z PL i Europy.
 */
export const SERVICES_PRODUCENCI = [
  {
    title: "Strona, która wygląda lepiej niż 99% Waszej konkurencji",
    description:
      "Tworzymy dopracowane strony, które wyróżniają producentów na tle Sika, Henkel, Tikkurila i konkurencji z Polski. Sygnał klasy w pierwszych 0,05 sekundy — bez tego architekt nie zostaje na dłużej.",
    image: "/images/services/strona-lepsza-niz-konkurencja.webp",
  },
  {
    title: "Architekt znajduje Was, gdy szuka produktów do specyfikacji",
    description:
      "Strona zoptymalizowana pod frazy techniczne (parametry, normy, klasy, certyfikaty) plus schema.org/Product na każdym SKU — żeby Wasz produkt wyświetlał się tam, gdzie specyfikator wpisuje konkretne dane techniczne, nie ogólnik.",
    image: "/images/services/klienci-znajda-w-google.webp",
  },
  {
    title: "Kompleksowe wdrożenie — od katalogu SKU po bibliotekę BIM",
    description:
      "Copywriting w języku specyfikatora, katalog produktów z filtrami, karty techniczne w HTML, biblioteka BIM, wyszukiwarka dystrybutorów, kalkulatory zużycia, strefa zalogowanych dla architektów — jeden zespół, jeden proces, jedna umowa.",
    image: "/images/services/kompleksowe-wdrozenie.webp",
  },
  {
    title: "Chatbot AI uczony na kartach Waszych produktów",
    description:
      "Architekt pyta o Uw, klasę C2T, mrozoodporność — chatbot odpowiada 24/7 na podstawie Waszej dokumentacji technicznej. Bez ogólników, bez błędów. 100% merytoryki, którą wpisuje się w specyfikację.",
    image: "/images/services/innowacyjne-ai.webp",
  },
];

/**
 * OVERLAY CTA — ciemny pas wezwania w środku strony.
 * Segmenty zdania z opcjonalnym akcentem (lime). Renderowane inline.
 */
export const OVERLAY_CTA_PRODUCENCI = {
  headingSegments: [
    {
      text:
        "Każdy kwartał ze stroną z 2018 to nie tylko mniej zapytań od architektów.",
    },
    {
      text: "To kolejne specyfikacje, które wygrywa Sika, Henkel albo Tikkurila —",
      accent: true,
    },
    {
      text:
        "bo to oni mają plik .ifc gotowy w 30 sekund, kalkulator zużycia i strefę dla projektanta. Producenci, którzy rosną przewidywalnie w 2026, mają jedną wspólną cechę:",
    },
    {
      text:
        "ich produkt trafia do projektu, zanim ktokolwiek zapyta o cenę.",
      accent: true,
    },
  ],
  buttonLabel: "Zarezerwujcie bezpłatną konsultację, póki mamy wolne miejsca",
  buttonHref: "#kontakt",
  footnote: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie.",
};
