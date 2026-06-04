/**
 * CENTRALNE ŹRÓDŁO TREŚCI
 * ----------------------
 * Wszystkie teksty, ceny, opinie, FAQ i ścieżki do zdjęć są tutaj.
 * Edytując ten plik zmieniasz całą stronę. Komponenty są "głupie" —
 * tylko wyświetlają to, co tu wpiszesz.
 *
 * W razie czego: wszystkie ścieżki do obrazów wskazują na pillarweb.pl —
 * zostały skonfigurowane w next.config.ts (remotePatterns).
 * Aby przejść na własne assety: pobierz pliki do /public/images/
 * i zmień prefix ASSET_BASE poniżej na "/images".
 */

export const ASSET_BASE = "https://pillarweb.pl/wp-content/uploads/2026/04";

export const SITE = {
  name: "Pillarweb",
  phone: "515-995-187",
  phoneTel: "+48515995187",
  cta: "Bezpłatna konsultacja",
  contactAnchor: "#kontakt",
} as const;

export const NAV_LINKS = [
  {
    label: "Usługi",
    href: "/uslugi",
    children: [
      {
        label: "SEO",
        href: "/seo",
        description:
          "Zwiększamy widoczność Twojej firmy w Google, żeby klienci sami trafiali na Twoją stronę.",
      },
      {
        label: "Reklamy Facebook",
        href: "/reklamy-facebook",
        description:
          "Tworzymy kampanie, które docierają do właściwych osób i budują stały dopływ wartościowych zapytań.",
      },
      {
        label: "Reklamy Google",
        href: "/reklamy-google",
        description:
          "Prowadzimy kampanie Google Ads nastawione na szybkie pozyskiwanie klientów.",
      },
    ],
  },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Darmowe zasoby", href: "/darmowe-zasoby" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const HERO = {
  brandLine: "Dominate Web System",
  // "FIRM BUDOWLANYCH" zostanie automatycznie podświetlony na lime.
  // Pierwsza linia to "STRONY INTERNETOWE", druga "DLA FIRM BUDOWLANYCH"
  titleLine1: "STRONY INTERNETOWE",
  titleLine2Prefix: "DLA",
  titleLine2Accent: "FIRM BUDOWLANYCH",
  subtitle:
    "Indywidualne projekty z copywritingiem, analityką, SEO, wykorzystując najnowocześniejsze technologie AI.",
  subtitleParts: [
    { text: "Indywidualne projekty", accent: true },
    { text: "z copywritingiem, analityką, SEO, wykorzystując", accent: false },
    { text: "najnowocześniejsze technologie AI.", accent: true },
  ],
  videoSrc: `${ASSET_BASE}/pillarweb-film-instruktazowy-hero.mp4`,
  pillars: [
    {
      icon: `${ASSET_BASE}/strategia-icon.svg`,
      title: "Strategia i wizerunek",
      description:
        "Tworzymy dopracowane strony, które wzmacniają markę i wyróżniają firmę na tle konkurencji.",
    },
    {
      icon: `${ASSET_BASE}/seo-i-widocznosc-icon.svg`,
      title: "SEO i widoczność",
      description:
        "Dbamy o strukturę, treści i optymalizację, aby strona lepiej pracowała w Google.",
    },
    {
      icon: `${ASSET_BASE}/kompleksowe-wdrozenie-icon.svg`,
      title: "Kompleksowe wdrożenie",
      description:
        "Copywriting, analityka, automatyzacje i pełne wdrożenie dopięte w jednym procesie.",
    },
  ],
  cta: { label: "Umów się na rozmowę konsultacyjną", href: "#kontakt" },
} as const;

export const STATS = [
  {
    value: 147,
    prefix: "",
    suffix: "",
    label: "zapytań w jednym miesiącu",
  },
  {
    value: 15,
    prefix: "",
    suffix: "",
    label: "domkniętych projektów",
  },
  {
    value: 330000,
    prefix: "~$",
    suffix: "",
    label: "wartości pozyskanych zleceń",
  },
] as const;

type QuoteSegment = { text: string; accent?: boolean };
type Testimonial = {
  quote: QuoteSegment[][];
  author: string;
  role: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: [
      [
        { text: "Przez lata działałem tylko na poleceniach.", accent: true },
        {
          text: " W końcu zrozumiałem — to nie jest system. Bałem się skalować, bo nie miałem wpływu na to, skąd przyjdą kolejne zlecenia.",
        },
      ],
      [
        { text: "Współpraca zaskoczyła mnie od pierwszego dnia. " },
        {
          text: "Konkretni ludzie, terminy dotrzymane, rozmowa jak między partnerami.",
          accent: true,
        },
      ],
      [
        { text: "147 zapytań w jednym miesiącu.", accent: true },
        { text: " Nigdy wcześniej nie miałem tylu kontaktów naraz. Serdecznie polecam." },
      ],
    ],
    author: "Krzysztof Głaz",
    role: "właściciel Glaz Construction, Hickory Hills, IL",
    avatar: `${ASSET_BASE}/krzysztof-glaz-glaz-construction-opinia-pillarweb-150x150.webp`,
  },
  {
    quote: [
      [
        {
          text: "Umowa bez niespodzianek, kontakt zawsze natychmiastowy i jakość wykonania na najwyższym poziomie. Od pierwszego spotkania czułem, że jestem w dobrych rękach. Wszystko było jasno ustalone, bez chaosu i bez niepotrzebnego przeciągania tematu.",
        },
      ],
      [
        {
          text: "Współpraca przebiegała bardzo sprawnie. Na każdym etapie wiedziałem, co się dzieje, a każda moja wiadomość spotykała się z szybką i konkretną odpowiedzią. Całość była prowadzona profesjonalnie, ale bez sztywnej atmosfery — po prostu normalna, uczciwa współpraca.",
        },
      ],
      [
        {
          text: "Strona gotowa, działa bez zarzutu i dokładnie tego oczekiwałem. Firma została pokazana tak, jak powinna, a ja od początku do końca miałem poczucie, że jestem w dobrych rękach. Serdecznie polecam każdemu z branży budowlanej.",
        },
      ],
    ],
    author: "Michał Płonka",
    role: "właściciel Pergole do ogrodu, Kraków",
    avatar: `${ASSET_BASE}/michal-plonka-pergole-do-ogrodu-opinia-pillarweb-150x150.webp`,
  },
];

export const CONTENT_SECTION = {
  // Sekcja "Co powinna zawierać dobra strona firmy budowlanej..."
  heading: {
    prefix: "Co powinna zawierać dobra strona firmy budowlanej —",
    accent: "i dlaczego to ma znaczenie",
  },
  // TODO: Oryginał ma testfilm.mp4 (kot) jako placeholder.
  // Wymień to na docelowy materiał lub usuń tę sekcję wideo.
  videoSrc: `${ASSET_BASE}/testfilm.mp4`,
  problems: {
    title: "Słaba strona internetowa kosztuje firmę budowlaną więcej, niż się wydaje",
    items: [
      {
        title: "Wygląd strony obniża wiarygodność",
        body: "Jeśli strona wygląda staro, chaotycznie albo przypadkowo, klient zaczyna tak samo patrzeć na firmę. To nie kwestia estetyki — to kwestia zaufania i tego, czy klient w ogóle do Ciebie zadzwoni. Według raportu Stanford **75% użytkowników ocenia wiarygodność firmy na podstawie wyglądu strony internetowej**.",
      },
      {
        title: "Strona nie wykorzystuje ruchu, za który już płacisz",
        body: "Możesz inwestować w reklamy, SEO, artykuły sponsorowane albo wizytówkę Google, ale jeśli strona nie pomaga użytkownikowi zrobić kolejnego kroku, płacisz za ruch, który odpływa do Twojej konkurencji. **Dobrze zaprojektowana strona ma pomagać zamieniać wejścia na realne zapytania.**",
      },
      {
        title: "Firma robi dobrą robotę, ale online tego nie widać",
        body: "**W branży budowlanej decyzje zapadają na podstawie zaufania.** Jeśli klient nie widzi profesjonalnej prezentacji firmy, realizacji, opinii i jasnej oferty, nie ma wystarczająco dużo powodów, żeby się odezwać.",
      },
    ],
    image: `${ASSET_BASE}/strona-internetowa-a-pozyskiwanie-klientow-pillarweb-1024x572.webp`,
    summary:
      "Problemem nie jest to, że firma budowlana nie ma strony. **Problemem jest to, że wiele stron wygląda nieprofesjonalnie, nie budzi zaufania i nie pomaga zdobywać zapytań od potencjalnych klientów.** A jeśli klient trafia na taką stronę po np. reklamie / z Social Mediów etc., bardzo często po prostu wychodzi.",
    cta: { label: "Wznieś swój biznes na wyższy poziom", href: "#kontakt" },
  },
} as const;

export const DIFFERENTIATOR = {
  heading: {
    prefix: "Nie jesteśmy agencją od wszystkiego.",
    accent: "Pracujemy tylko z firmami budowlanymi.",
  },
  pillars: [
    {
      title: "Wiemy, jak komunikują się klienci firm budowlanych",
      body: "Rozumiemy, jakie pytania zadają, czego się obawiają, czego oczekują od firm Twojego pokroju i co wpływa na ich decyzję. Dzięki temu strona może mówić językiem, który brzmi naturalnie i trafia do właściwych klientów.",
    },
    {
      title: "Wiemy, jak ułożyć stronę, żeby wspierała sprzedaż. Każda sekcja ma znaczenie.",
      body: "Każda sekcja ma swoje zadanie. Strona nie ma tylko „być”, ale prowadzić użytkownika od pierwszego wrażenia do kontaktu i budować zaufanie po drodze.",
    },
    {
      title: "Wiemy, co działa w tej branży, a co tylko wygląda dobrze",
      body: "Firmy budowlane nie potrzebują przypadkowych rozwiązań ani modnych sztuczek. Potrzebują strony, która wygląda profesjonalnie, wzmacnia markę i pomaga domykać więcej wartościowych klientów.",
    },
    {
      title: "Zero eksperymentów na Twoim projekcie — tylko to, co działa",
      body: "Właśnie dlatego nasze strony nie są tylko wizytówkami — są zaprojektowane pod pozyskiwanie zapytań od pierwszego dnia. Przykład? Kampania Google Ads uruchomiona na stronie, którą stworzyliśmy: 46 zapytań w 27 dni, koszt jednego kontaktu — 37,74 zł.",
    },
  ],
  results: {
    headingPrefix: "Zobacz czego możesz się spodziewać",
    headingAccent: "jeśli o to zadbasz",
    headingSuffix: " — 46 zapytań. 27 dni. Budżet reklamowy: 1 732 zł",
    image: `${ASSET_BASE}/wyniki-google-ads-firma-budowlana-pillarweb.webp`,
    paragraphs: [
      "Strona została zaprojektowana z uwzględnieniem wszystkich elementów, które mają pozytywny wpływ na współczynnik konwersji. **Od 1 do 27 marca 2026** roku klient specjalizujący się w generalnych remontach mieszkań i lokali **pozyskał 46 zapytań przy budżecie reklamowym 1 732 zł — jeden kontakt kosztował go 37,74 zł.** Inwestycja w stronę: 16 000 zł jednorazowo. Wartość jednego zlecenia generalnego remontu: 80 000 – 100 000 zł.",
      "Strona to koszt jednorazowy. Zapytania z niej możesz pozyskiwać przez cały czas, gdy prowadzisz firmę.",
    ],
    closing:
      "**Dlatego w PillarWeb nie tworzymy stron „dla każdego”.** Tworzymy je dla firm budowlanych, które stale chcą się skalować.",
  },
} as const;

export const SPECIALIZATIONS = {
  headingPrefix: "Współpracujemy z firmami budowlanymi",
  headingAccent: "z różnych specjalizacji",
  items: [
    { label: "Firmy budujące domy", image: `${ASSET_BASE}/firmy-budujace-domy-pillarweb.webp` },
    { label: "Generalni wykonawcy", image: `${ASSET_BASE}/generalni-wykonawcy-pillarweb.webp` },
    { label: "Firmy wykończeniowe", image: `${ASSET_BASE}/firmy-wykonczeniowe-pillarweb.webp` },
    { label: "Firmy od elewacji i dachów", image: `${ASSET_BASE}/firmy-od-elewacji-i-dachow-pillarweb.webp` },
    { label: "Firmy remontowe", image: `${ASSET_BASE}/firmy-remontowe-pillarweb.webp` },
    { label: "Deweloperzy", image: `${ASSET_BASE}/deweloperzy-pillarweb.webp` },
    { label: "Firmy instalacyjne", image: `${ASSET_BASE}/firmy-instalacyjne-pillarweb.webp` },
    { label: "Producenci budowlani", image: "/images/producenci-budowlani-pillarweb.svg" },
  ],
} as const;

export const GUARANTEES = {
  headingLine1: "Możesz czuć się bezpiecznie.",
  headingLine2: "Nasze gwarancje:",
  subheadingPrefix: "Jesteśmy tak pewni jakości naszej usługi, że",
  subheadingAccent: "dajemy gwarancje, których nie otrzymasz nigdzie indziej.",
  items: [
    {
      number: "1.",
      title: "Gwarancja satysfakcji",
      image: `${ASSET_BASE}/gwarancja-satysfakcji-pillarweb.webp`,
      bodyParts: [
        { text: "Najpierw pokazujemy Ci gotowy projekt strony — widzisz dokładnie, jak będzie wyglądać, zanim cokolwiek zostanie wdrożone. " },
        { text: "Jeśli uznajesz, że to nie ten kierunek — zwracamy pieniądze.", accent: true },
      ],
    },
    {
      number: "2.",
      title: "Gwarancja terminowości",
      image: `${ASSET_BASE}/gwarancja-terminowosci-pillarweb.webp`,
      bodyParts: [
        { text: "Jeśli nie dotrzymamy terminu ustalonego w umowie, " },
        { text: "oddajemy 50% naszego wynagrodzenia", accent: true },
        { text: " (Nawet jeżeli spóźnimy się jeden dzień)." },
      ],
    },
    {
      number: "3.",
      title: "Gwarancja techniczna",
      image: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
      bodyParts: [
        { text: "Po wdrożeniu masz 30 dni bezpłatnego wsparcia technicznego.", accent: true },
        { text: " Jeśli cokolwiek nie działa jak powinno — naprawiamy to bez żadnych dodatkowych kosztów." },
      ],
    },
  ],
} as const;

export const PROCESS = {
  heading: {
    prefix: "Tak wygląda współpraca, w której",
    accent: "przejmujemy cały temat",
    suffix: "strony od A do Z.",
  },
  important: {
    prefix:
      "Przez cały okres trwania naszej współpracy, możesz kontaktować się z nami za pośrednictwem komunikatora Slack (otrzymasz instrukcję instalacji tego narzędzia).",
    accent:
      "Możesz do nas napisać kiedy tylko chcesz. Na bieżąco wiesz, co robimy, na jakim jesteśmy etapie i co dzieje się dalej.",
    suffix: "Pracujemy według jasnego planu i regularnie raportujemy postępy.",
  },
  image: "/images/proces-wspolpracy-pillarweb.webp",
  steps: [
    {
      number: "01",
      title: "Rozmowa i konsultacja (pozostawiasz do siebie kontakt)",
      body: "Rozmawiamy o Twojej firmie i celach. Sprawdzamy, czy faktycznie potrzebujesz naszej pomocy. Mówimy Ci to wprost, zanim podpiszesz cokolwiek.",
    },
    {
      number: "02",
      title: "Wypełniasz krótki formularz",
      body: "Abyśmy mogli stworzyć wysoko konwertującą stronę internetową, musimy dobrze poznać Twój biznes. Odpowiesz na kilka pytań, abyśmy mogli stworzyć treści i komunikację marketingową pasującą do Twojej firmy.",
    },
    {
      number: "03",
      title: "Strategia i plan działania",
      body: "Układamy strukturę strony, komunikację i plan całego wdrożenia.",
    },
    {
      number: "04",
      title: "Projekt i wykonanie strony",
      body: "Otrzymujesz gotowy projekt strony do oceny. Widzisz ją w szczegółach, zgłaszasz uwagi bądź zatwierdzasz.",
    },
    {
      number: "05",
      title: "Treści, SEO i widoczność",
      body: "Przygotowujemy teksty, ustawienia SEO i elementy, które pomagają stronie lepiej pozycjonować się w Google. (Tworzymy podwaliny pod to, aby Twoja firma wyświetlała się w Google coraz wyżej.).",
    },
    {
      number: "06",
      title: "Automatyzacje i elementy wspierające sprzedaż",
      body: "Wdrażamy chatbota AI uczonego na wiedzy o Twojej firmie, formularze i automatyczne powiadomienia. Strona zbiera zapytania i odpowiada na pytania klientów — nieważne gdzie jesteś.",
    },
    {
      number: "07",
      title: "Wdrożenie, szkolenie i opieka",
      body: "Strona jest live. Pokazujemy Ci jak z niej korzystać i jesteśmy dostępni przez 30 dni — żebyś miał pewność, że wszystko działa jak powinno.",
    },
  ],
} as const;

type PricingFeature = { title: string; description: string; accent?: boolean };

export const PRICING = {
  heading: {
    accent: "Wybierz plan",
    rest: " dopasowany do etapu, na którym jest Twoja firma.",
  },
  subtitle: {
    accent: "Trzy poziomy wdrożenia —",
    rest:
      " od profesjonalnej marki online po kompletną maszynę do generowania leadów z AI.",
    note: "(Cennik jest poglądowy)",
  },
  plans: [
    {
      eyebrow: "PLAN SREBRNY",
      name: "Plan srebrny",
      price: "11 000 PLN",
      tagline: "Fundament — Twoja profesjonalna marka online",
      audience:
        "Dla firm budowlanych, które chcą wyróżnić się online, budować markę premium i przestać polegać wyłącznie na poleceniach.",
      featuresHeading: "CO ZYSKUJESZ:",
      features: [
        {
          title: "Strona, która zamienia odwiedzających w zapytania",
          description: "Każdy element i sekcja ułożona pod konwersję.",
        },
        {
          title: "Indywidualny projekt premium — nie kolejny szablon",
          description:
            "Strona w pełni customowa, zbudowana od podstaw. Wygląda lepiej niż 99% stron konkurencji w Twojej branży.",
        },
        {
          title: "Copywriting w języku Twoich klientów",
          description:
            "Teksty pisane przez specjalistów — każde zdanie prowadzi odwiedzającego do kontaktu.",
        },
        {
          title: "Widoczny w Google gdy klient szuka wykonawcy w Twojej okolicy",
          description:
            "Pełna optymalizacja SEO od pierwszego dnia — metadane, struktura, treści.",
        },
        {
          title:
            "Profesjonalne materiały AI bez sesji fotograficznej (jeśli brakuje Ci zdjęć)",
          description: "Zdjęcia i wideo gotowe do użycia — bez kosztów fotografa.",
        },
        {
          title: "Pełna analityka — wiesz skąd przychodzą klienci",
          description: "Google Analytics 4, GTM i Pixel skonfigurowane i gotowe.",
        },
        {
          title:
            "Gotowa maksymalnie w 4 tygodnie — albo oddajemy 50% wynagrodzenia",
          description: "Nawet za jeden dzień spóźnienia.",
        },
      ] as PricingFeature[],
      cta: { label: "Wybieram plan srebrny", href: "#kontakt" },
      highlighted: false,
    },
    {
      eyebrow: "PLAN ZŁOTY",
      name: "Plan złoty",
      price: "15 000 PLN",
      tagline: "System — marka + automatyzacje, które pracują za Ciebie",
      audience:
        "Dla firm gotowych na pełną automatyzację marki i stały, przewidywalny napływ zapytań.",
      featuresHeading: "WSZYSTKO Z PLANU SREBRNEGO, PLUS:",
      features: [
        {
          title: "Spójna marka we wszystkich miejscach",
          description:
            "Logo, wizytówki i adres @TwojaFirma.pl zamiast gmail.com — spójność i profesjonalizm.",
        },
        {
          title: "Google Maps zoptymalizowane pod lokalnych klientów",
          description:
            "Wizytówka Google w pełni skonfigurowana — widoczny tam, gdzie klient szuka wykonawcy.",
        },
        {
          title: "Każde zapytanie automatycznie w Twojej bazie",
          description:
            "Żadnego ręcznego przepisywania — leady automatycznie trafiają do Twojego CRM/ bazy.",
        },
        {
          title: "Wszystkie kontakty i zlecenia w jednym miejscu",
          description:
            "Integracja z CRM — koniec chaosu w zarządzaniu zapytaniami.",
        },
        {
          title: "Automatyczne powiadomienia o nowych leadach",
          description:
            "Reagujesz pierwszy — zanim klient zdąży napisać do konkurencji. Każda sekunda ma znaczenie.",
        },
      ] as PricingFeature[],
      cta: { label: "Wybieram plan złoty", href: "#kontakt" },
      highlighted: true,
      badge: "Najpopularniejszy",
    },
    {
      eyebrow: "PLAN PLATYNA",
      name: "Plan platyna",
      price: "20 000 PLN",
      tagline: "Maszyna — kompletny system AI generujący leady 24/7",
      audience:
        "Dla firm, które chcą kompletny system pozyskiwania klientów bazujący na najnowocześniejszych technologiach — od pierwszej wizyty na stronie po automatycznie umówioną wycenę. Maksymalne odciążenie.",
      featuresHeading: "WSZYSTKO Z PLANU ZŁOTEGO, PLUS:",
      features: [
        {
          title: "Chatbot AI uczony na wiedzy Twojej firmy",
          description:
            "Odpowiada na pytania klientów 24/7, odciążając Ciebie i Twoją ekipę — bez głupich i błędnych odpowiedzi. 100% merytoryki.",
        },
        {
          title: "Klient sam umawia wycenę — zero telefonów w tę i z powrotem",
          description:
            "Automatyczny system rezerwacji zintegrowany z Twoim kalendarzem.",
        },
        {
          title: "5 artykułów SEO pod Twoją branżę",
          description:
            "Treści przyciągające klientów z Google przez miesiące po publikacji.",
        },
        {
          title:
            "Twoja firma jako ekspert na Murator Dom, Murator Plus i Budujemy Dom",
          description:
            "Otrzymujesz artykuły sponsorowane na największych portalach budowlanych w Polsce.",
        },
        {
          title: "Lead magnet: poradnik zbierający dane potencjalnych klientów",
          description:
            "Osoby zainteresowane Twoimi usługami zostawiają e-mail — budujesz własną bazę od pierwszego dnia.",
        },
        {
          title: "Kampania Google Ads na miesiąc w cenie",
          description: "",
          accent: true,
        },
      ] as PricingFeature[],
      cta: { label: "Wybieram plan platyna", href: "#kontakt" },
      highlighted: false,
    },
  ],
  footnote:
    "Zakres działań zależy od Twojej sytuacji. Właśnie od tego jesteśmy my. Najpierw poznajemy Twój biznes. Potem dobieramy właściwe rozwiązanie i prowadzimy Cię przez cały proces.",
} as const;

export const COMPARISON = {
  heading: {
    accent: "Pillar Web",
    rest: " vs typowa agencja webowa — porównaj punkt po punkcie.",
  },
  subtitle:
    "Te same usługi nazywają się tak samo. Różnice są ogromne. Zobacz pełne zestawienie.",
  columns: {
    criterion: "Kryterium",
    others: "Inne agencje webowe",
    pillar: { line1: "Pillar Web", line2: "tylko dla firm budowlanych" },
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
      title: "Projekt i treści",
      rows: [
        {
          feature: "W pełni indywidualny projekt graficzny (nie szablon)",
          others: false,
        },
        { feature: "Copywriting i treści napisane przez agencję", others: false },
        {
          feature: "Materiały AI — zdjęcia i wideo bez sesji fotograficznej",
          others: false,
        },
      ],
    },
    {
      title: "Widoczność i analityka",
      rows: [
        {
          feature: "Pełna konfiguracja GA4 + GTM + Pixel od pierwszego dnia",
          others: false,
        },
        { feature: "Optymalizacja wizytówki Google Maps", others: false },
      ],
    },
    {
      title: "Technologie i automatyzacje",
      rows: [
        {
          feature: "Chatbot AI uczony na wiedzy Twojej firmy",
          plan: "Platyna",
          others: false,
        },
        {
          feature:
            "Asystent AI odbierający telefony i odpowiadający na pytania",
          plan: "Platyna",
          others: false,
        },
        {
          feature:
            "Kalendarz na stronie — automatyczna rezerwacja spotkania lub rozmowy",
          plan: "Platyna",
          others: false,
        },
        {
          feature: "Automatyczny przepływ leadów do CRM",
          plan: "Złoto+",
          others: false,
        },
        {
          feature: "Automatyczne powiadomienia o nowych zapytaniach",
          plan: "Złoto+",
          others: false,
        },
      ],
    },
    {
      title: "Pewność współpracy",
      rows: [
        {
          feature: "Gwarancja satysfakcji — zwrot jeśli niezadowolony z projektu",
          others: false,
        },
        {
          feature:
            "Gwarancja terminowości — 50% zwrotu za każdy dzień spóźnienia",
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
        { feature: "Specjalizacja wyłącznie w firmach budowlanych", others: false },
        {
          feature: "Treści i copywriting pisane językiem Twoich klientów",
          others: false,
        },
      ],
    },
    {
      title: "Proces i komunikacja",
      rows: [
        { feature: "Opisany proces krok po kroku — wiesz co i kiedy", others: true },
        { feature: "Realizacja maksymalnie w 3 tygodnie", others: false },
        {
          feature: "Bieżąca komunikacja przez Slack — wiesz co się dzieje",
          others: false,
        },
        {
          feature:
            "Artykuły sponsorowane na platformach takich jak Murator Dom, Budujemy Dom itp.",
          plan: "Platyna",
          others: false,
        },
      ],
    },
  ],
} as const;

export const ABOUT = {
  heading: "Kim jesteśmy",
  // TODO: Oryginał ma częściowo Lorem Ipsum — to placeholder. Tutaj jest treść z meta-tekstu sekcji.
  paragraphs: [
    "Za Pillar Web stoję ja — Kamil Tomczyk i zespół sprawdzonych specjalistów dobranych przez lata pracy w marketingu — każdy najlepszy w swojej dziedzinie. Od 19. roku życia działam w marketingu. Prowadziłem własną agencję, pracowałem w wiodących firmach marketingowych oraz byłem dyrektorem marketingu w firmie budowlanej stawiającej domy tradycyjne i modułowe.",
    "Na co dzień odpowiadałem za pozyskiwanie klientów, budowanie zaufania i rozwijanie firmy właśnie w tej branży.",
    "Nie jestem więc teoretykiem. Znam tą branżę bardzo dobrze.",
    "Wiem, co działa, jakie komunikaty trafiają do klientów i jak powinna wyglądać strona, która realnie wspiera sprzedaż.",
    "Zadaniem Pillar Web jest przejęcie całej odpowiedzialności i uporządkowanie wieloetapowego procesu, tworząc stronę internetową, która od razu jest gotowa do startu z marketingiem i reklamami, bez obaw, że jakiegokolwiek elementu zabraknie.",
    "Dajemy więcej niżeli nasi konkurenci. Twoja strona będzie zawierała wszystko, co potrzebne i wiele więcej, aby zmaksymalizować szansę na to, że użytkownik wchodząc na Twoją stronę pozostawi do siebie kontakt. Każdy najmniejszy element jest starannie dopracowany, aby wspierać ten cel. To właśnie nas wyróżnia.",
    "Pillar Web istnieje z jednego powodu: żeby firmy budowlane, które robią dobrą robotę w terenie, były równie mocne online.",
  ],
  image: "/images/kim-jestesmy-pillarweb.svg",
  imageAlt:
    "Kamil Tomczyk i branża budowlana oraz marketing internetowy w ujęciu wizerunkowym Pillar Web",
} as const;

export const FAQ = {
  heading: "Najczęściej zadawane pytania",
  items: [
    {
      question: "„Skąd mam wiedzieć, że faktycznie zrobicie to dobrze?”",
      answer:
        "Pracujemy tylko z firmami budowlanymi, więc nie uczymy się branży na Twoim projekcie. Znamy język klienta, wiemy, co budzi zaufanie i jak ułożyć stronę, żeby wspierała decyzję o kontakcie.\n\nDodatkowo dajemy gwarancję satysfakcji i terminowości, więc współpraca z nami nie wiąże się z żadnym ryzykiem.",
    },
    {
      question: "Jak długo trwa cały proces?",
      answer:
        "Do 4 tygodni (zazwyczaj kończymy stronę wcześniej).\n\nDokładny czas zależy od zakresu projektu, liczby elementów do wdrożenia i sprawności komunikacji po obu stronach. Na początku współpracy ustalamy jasny harmonogram, więc od razu wiesz, jak wygląda proces i kiedy strona będzie gotowa.\n\nJeżeli spóźnimy się z oddaniem strony choćby jeden dzień – otrzymujesz zwrot w wysokości 50% ceny strony!",
    },
    {
      question: "Czy muszę sam przygotować wszystkie materiały?",
      answer:
        "Nie.\n\nWłaśnie na tym polega nasza przewaga nad naszą konkurencją. Przejmujemy cały temat możliwie kompleksowo. Pomagamy w strategii, tworzymy teksty, układamy strukturę strony, wdrażamy rozwiązania techniczne i prowadzimy Cię przez cały proces krok po kroku. Nie zostawiamy Cię z listą rzeczy do samodzielnego ogarnięcia.",
    },
    {
      question: "„Polecenia nadal mi działają. Czy ja w ogóle tego potrzebuję?”",
      answer:
        "Polecenia są świetne, ale na pewno widzisz ich ograniczenia: są niestabilne i utrudniają planowanie wzrostu, szczególnie gdy masz ekipę i słabsze miesiące. Nie chodzi o zastąpienie poleceń, tylko o zbudowanie drugiego, bardziej przewidywalnego filaru pozyskiwania klientów.",
    },
    {
      question: "„Mam już stronę. Po co mam robić nową?”",
      answer:
        "Sama obecność online nie wystarcza. Wiele stron wykonawców to tylko cyfrowe broszury. Jeśli strona nie buduje zaufania, nie pokazuje jakości firmy i nie pomaga przejść do kontaktu, to nie wspiera sprzedaży tak, jak powinna.",
    },
    {
      question: "Co powinna zawierać dobra strona firmy budowlanej?",
      answer:
        "Dobra strona firmy budowlanej powinna przede wszystkim budzić zaufanie i pomagać klientowi zrobić kolejny krok.\n\nPowinna zawierać:\n• mocne pierwsze wrażenie,\n• jasny opis oferty,\n• profesjonalne zdjęcia realizacji,\n• opinie klientów,\n• przemyślane wezwania do kontaktu,\n• prosty formularz,\n• atrakcyjny lead magnet,\n• logiczny układ sekcji,\n• poprawnie wdrożone SEO.\n\nSama obecność online nie wystarcza. Strona musi pokazywać jakość Twojej firmy, wyróżniać Cię na tle konkurencji i pomagać zamieniać zainteresowanie w realne zapytania.",
    },
    {
      question: "Czy tworzycie też treści i pomagacie z SEO?",
      answer:
        "Tak.\n\nPrzygotowujemy teksty na stronę zoptymalizowane pod SEO, wdrażamy metadane, dbamy o strukturę komunikacji i wdrażamy stronę tak, aby od samego początku zaczynała indeksować się w Google.",
    },
    {
      question: "Czy oferujecie również reklamy i działania marketingowe?",
      answer:
        "Tak.\n\nPoza tworzeniem stron internetowych dla firm budowlanych pomagamy również w:\n• SEO,\n• Google Ads,\n• Meta Ads,\n• Automatyzacje AI.\n\nDzięki temu możemy nie tylko przygotować stronę, ale także pomóc Ci lepiej wykorzystać ją w dalszym marketingu i pozyskiwaniu klientów.",
    },
    {
      question: "Co jeśli nie będę zadowolony z projektu?",
      answer:
        "Dajemy gwarancję satysfakcji.\n\nJeśli po etapie strategii i projektu uznasz, że to nie jest kierunek dla Ciebie, zwracamy pieniądze i kończymy współpracę.",
    },
    {
      question: "Co jeśli projekt nie zostanie wykonany na czas?",
      answer:
        "Dajemy gwarancję terminowości.\n\nJeśli nie dotrzymamy terminu ustalonego w umowie, oddajemy 50% naszego wynagrodzenia.",
    },
    {
      question: "Czy po wdrożeniu zostaję z tym sam?",
      answer:
        "Nie.\n\nPo publikacji strony pokazujemy Ci, jak z niej korzystać, przekazujemy instrukcję i zapewniamy wsparcie techniczne po wdrożeniu. Dzięki temu nie zostajesz sam z nowym narzędziem i od początku wiesz, jak z niego korzystać.",
    },
  ],
} as const;

export const CONTACT = {
  headingLine1: "Nie czekaj na kolejny",
  headingLine2: "słabszy miesiąc.",
  description:
    "Zostaw kontakt i sprawdź, jak możemy stworzyć stronę, która buduje markę, zaufanie, wyróżnia Cię na tle konkurencji i pomaga zdobywać więcej zapytań/kontaktów od właściwych klientów. Bez zobowiązań.",
  ownerPhoto: "/images/kamil-tomczyk-pillarweb.jpeg",
  ownerName: "Kamil Tomczyk",
  ownerRole: "CEO Pillar Web",
  urgencyNote: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie.",
  specializations: [
    "Firma budująca domy",
    "Generalny wykonawca",
    "Producent budowlany",
    "Deweloper",
    "Firma remontowa",
    "Firma wykończeniowa",
    "Firma od elewacji bądź dachów",
    "Firma instalacyjna",
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
  formNote:
    "Krótki formularz. Konkretna rozmowa. Jasny plan działania.",
} as const;

export const THANKYOU = {
  // Slug, na który przekierowuje formularz kontaktowy po wysłaniu.
  route: "/dziekujemy",
  headingPrefix: "Dziękujemy za",
  headingAccent: "pozostawienie kontaktu.",
  subtext:
    "Twoje zgłoszenie właśnie do nas dotarło. Teraz nasza kolej — odezwiemy się do Ciebie z konkretnym planem rozmowy.",
  responseLead: "Odezwiemy się w ciągu",
  responseAccent: "od 5 minut do maksymalnie 24 godzin",
  responseTail: "(w dni robocze).",
  phone: {
    heading: "Wolisz porozmawiać od razu?",
    sub: "Zadzwoń bezpośrednio — odbierzemy i od razu przejdziemy do konkretów.",
    label: "Zadzwoń teraz",
  },
  roadmap: {
    headingPrefix: "Co dzieje się",
    headingAccent: "dalej",
    doneLabel: "Zrobione",
    steps: [
      {
        title: "Pozostawienie kontaktu",
        body: "Twoje zgłoszenie właśnie do nas trafiło. Ten krok masz już za sobą.",
        done: true,
      },
      {
        title: "Potwierdzenie SMS i e-mail",
        body: "W ciągu kilku chwil otrzymasz wiadomość SMS oraz e-mail z potwierdzeniem, że wszystko do nas dotarło.",
      },
      {
        title: "Telefon powitalny i umówienie spotkania",
        body: "Dzwonimy, żeby bliżej poznać Twoją firmę i to, dokąd chcesz ją zaprowadzić. Wspólnie nazywamy cele i mówimy wprost, czy nasza pomoc faktycznie ma dla Ciebie sens. Jeśli tak — ustalamy konkretny termin spotkania i to, na czym powinniśmy się skupić.",
      },
      {
        title: "Decyzja o współpracy",
        body: "Po rozmowie obie strony podejmują świadomą decyzję. Ty oceniasz, czy to dla Ciebie. My potwierdzamy, że możemy poprowadzić Twój projekt z pełnym zaangażowaniem. Bez presji i bez zobowiązań.",
      },
      {
        title: "Rozpoczęcie współpracy",
        body: "Ruszamy. Przejmujemy temat strony od A do Z i prowadzimy Cię przez cały proces krok po kroku.",
      },
    ],
  },
  backLabel: "Wróć na stronę główną",
} as const;

/**
 * REALIZACJE — portfolio wideo.
 * Trzy nagrania prawdziwych stron (H.264 1080p, faststart) odtwarzane na klik.
 * `clientType` to wymagany podpis: dla kogo powstał projekt.
 * `aspect` = natywne proporcje nagrania (kadr bez przycinania).
 */
export const PORTFOLIO = {
  headingPrefix: "Realizacje",
  headingAccent: "mówią za siebie",
  intro:
    "Każdy z tych projektów prowadziliśmy od zera: od strategii i treści po wdrożenie. Zobacz, jak wyglądają w praktyce.",
  projects: [
    {
      slug: "korona",
      clientType: "Dla dewelopera",
      name: "Korona Estates",
      description:
        "Prezentacja inwestycji i oferty apartamentów premium, z czytelną ścieżką do kontaktu.",
      video: "/videos/korona.mp4",
      poster: "/images/portfolio/korona.jpg",
      aspect: "1600 / 873",
      duration: "0:42",
    },
    {
      slug: "lennox",
      clientType: "Dla firmy budującej domy",
      name: "Lennox Homes",
      description:
        "Strona z interaktywnym kalkulatorem kosztów budowy i katalogiem gotowych realizacji.",
      video: "/videos/lennox.mp4",
      poster: "/images/portfolio/lennox.jpg",
      aspect: "1600 / 947",
      duration: "1:31",
    },
    {
      slug: "horyzont",
      clientType: "Dla generalnego wykonawcy",
      name: "Horyzont",
      description:
        "Portfolio realizacji komercyjnych i przemysłowych, z prostą ścieżką do zapytania ofertowego.",
      video: "/videos/horyzont.mp4",
      poster: "/images/portfolio/horyzont.jpg",
      aspect: "1600 / 944",
      duration: "1:23",
    },
  ],
} as const;

export const FOOTER = {
  links: [{ label: "Polityka Prywatności", href: "/polityka-prywatnosci" }],
  copyright: "© 2026 pillarweb.pl",
} as const;
