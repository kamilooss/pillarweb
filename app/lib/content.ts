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
  brandLine: "PILLARWEB",
  // "FIRM BUDOWLANYCH" zostanie automatycznie podświetlony na lime.
  // Pierwsza linia to "STRONY INTERNETOWE", druga "DLA FIRM BUDOWLANYCH"
  titleLine1: "STRONY INTERNETOWE",
  titleLine2Prefix: "DLA",
  titleLine2Accent: "FIRM BUDOWLANYCH",
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
  cta: { label: "Zobacz, jak pracujemy", href: "#jak-pracujemy" },
} as const;

export const TESTIMONIALS = [
  {
    quote: [
      "Przez lata działałem tylko na poleceniach. W końcu zrozumiałem — to nie jest system. To coś, na co nie mam wpływu. Przez to bałem się skalować i zatrudniać nowe brygady.",
      "Współpraca zaskoczyła mnie od pierwszego dnia. Dedykowany komunikator, konkretni ludzie, zawsze dostępni. Terminy dotrzymane. Zero niespodzianek. Rozmowa jak między ludźmi — nie klient z korporacją.",
      "No i wyniki — 147 zapytań w jednym miesiącu. Nigdy wcześniej nie miałem tylu kontaktów naraz. Serdecznie polecam.",
    ],
    author: "Krzysztof Głaz",
    role: "właściciel Glaz Construction, Hickory Hills, IL",
    avatar: `${ASSET_BASE}/krzysztof-glaz-glaz-construction-opinia-pillarweb-150x150.webp`,
  },
  {
    quote: [
      "Umowa bez niespodzianek, kontakt zawsze natychmiastowy i jakość wykonania na najwyższym poziomie. Od pierwszego spotkania czułem, że jestem w dobrych rękach. Wszystko było jasno ustalone, bez chaosu i bez niepotrzebnego przeciągania tematu.",
      "Współpraca przebiegała bardzo sprawnie. Na każdym etapie wiedziałem, co się dzieje, a każda moja wiadomość spotykała się z szybką i konkretną odpowiedzią. Całość była prowadzona profesjonalnie, ale bez sztywnej atmosfery — po prostu normalna, uczciwa współpraca.",
      "Strona gotowa, działa bez zarzutu i dokładnie tego oczekiwałem. Firma została pokazana tak, jak powinna, a ja od początku do końca miałem poczucie, że jestem w dobrych rękach. Serdecznie polecam każdemu z branży budowlanej.",
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
        body: "Jeśli strona wygląda staro, chaotycznie albo przypadkowo, klient zaczyna tak samo patrzeć na firmę. To nie kwestia estetyki — to kwestia zaufania. Według raportu Stanford **75% użytkowników ocenia wiarygodność firmy na podstawie wyglądu strony internetowej**.",
      },
      {
        title: "Strona nie wykorzystuje ruchu, za który już płacisz",
        body: "Możesz inwestować w reklamy, SEO, artykuły sponsorowane albo wizytówkę Google, ale jeśli strona nie pomaga użytkownikowi zrobić kolejnego kroku, część tego ruchu po prostu się marnuje. Dobrze zaprojektowana strona ma pomagać zamieniać wejścia na realne zapytania.",
      },
      {
        title: "Firma robi dobrą robotę, ale online tego nie widać",
        body: "W branży budowlanej decyzje zapadają na podstawie zaufania. Jeśli klient nie widzi profesjonalnej prezentacji firmy, realizacji, opinii i jasnej oferty, nie ma wystarczająco dużo powodów, żeby się odezwać.",
      },
    ],
    image: `${ASSET_BASE}/strona-internetowa-a-pozyskiwanie-klientow-pillarweb-1024x572.webp`,
    summary:
      "Dobrze zaprojektowana strona nie jest dodatkiem do marketingu. To miejsce, które realnie wpływa na decyzję klienta i pomaga zamieniać zainteresowanie w kontakt.",
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
      title: "Wiemy, jak ułożyć stronę, żeby wspierała sprzedaż",
      body: "Każda sekcja ma swoje zadanie. Strona nie ma tylko „być”, ale prowadzić użytkownika od pierwszego wrażenia do kontaktu i budować zaufanie po drodze.",
    },
    {
      title: "Wiemy, co działa w tej branży, a co tylko wygląda dobrze",
      body: "Firmy budowlane nie potrzebują przypadkowych rozwiązań ani modnych sztuczek. Potrzebują strony, która wygląda profesjonalnie, wzmacnia markę i pomaga domykać więcej wartościowych klientów.",
    },
    {
      title: "Dlatego osiągamy tak dobre wyniki",
      body: "Właśnie dzięki takim działaniom osiągamy konkretne wyniki dla firm budowlanych. Przykładem może być kampania Google Ads, którą przeprowadziliśmy na wcześniej przygotowanej przez nas stronie internetowej, stworzonej z myślą o pozyskiwaniu potencjalnych klientów.",
    },
  ],
  results: {
    headingPrefix: "Zobacz czego możesz się spodziewać",
    headingAccent: "jeśli o to zadbasz",
    image: `${ASSET_BASE}/wyniki-google-ads-firma-budowlana-pillarweb.webp`,
    paragraphs: [
      "Strona została zaprojektowana z uwzględnieniem wszystkich elementów, które mają pozytywny wpływ na współczynnik konwersji. Jak widać, od 1 do 27 marca 2026 roku jeden z naszych klientów dzięki takim działaniom pozyskał aż 46 zapytań dotyczących usług remontowych dla mieszkań oraz lokali usługowych. 46 konwersji za jedynie 1732 zł, co daje koszt pozyskania jednego klienta na poziomie 37,74 zł.",
      "Klient, który specjalizuje się w generalnych remontach, zainwestował 16 tysięcy złotych w stronę internetową i 2 tys zł. w reklamę, co pozwoliło mu pozyskać 45 potencjalnych klientów w zaledwie 27 dni **(okres 01-27.03 2026)**. Każdy z nich może przynieść nawet 100 tysięcy złotych przy realizacji generalnego remontu. Zwrot z inwestycji był więc ogromny. Warto dodać, że koszt stworzenia takiej strony internetowej to wydatek jednorazowy, a zyski z niej można czerpać przez cały okres prowadzenia działalności.",
    ],
    closing:
      "**Dlatego w PillarWeb nie tworzymy stron „dla każdego”.** Tworzymy je dla firm budowlanych, które chcą zrobić to porządnie i myślą poważnie o tym, aby cały czas coraz bardziej rozwijać swój biznes.",
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
  ],
} as const;

export const GUARANTEES = {
  headingLine1: "Możesz czuć się bezpiecznie.",
  headingLine2: "Nasze gwarancje:",
  subheading:
    "Jesteśmy tak pewni jakości naszej usługi, że dajemy gwarancje, których nie otrzymasz nigdzie indziej.",
  items: [
    {
      number: "1.",
      title: "Gwarancja satysfakcji",
      image: `${ASSET_BASE}/gwarancja-satysfakcji-pillarweb.webp`,
      body: "Jeśli po etapie strategii i projektu uznasz, że to nie jest kierunek dla Ciebie, zwracamy pieniądze i kończymy współpracę. Otrzymujesz projekt. Zobaczysz jak Twoja strona będzie wyglądać, a następnie decydujesz czy działamy dalej.",
    },
    {
      number: "2.",
      title: "Gwarancja terminowości",
      image: `${ASSET_BASE}/gwarancja-terminowosci-pillarweb.webp`,
      body: "Jeśli nie dotrzymamy terminu ustalonego w umowie, oddajemy 50% naszego wynagrodzenia (Nawet jeżeli spóźnimy się jeden dzień).",
    },
    {
      number: "3.",
      title: "Gwarancja techniczna",
      image: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
      body: "Po wdrożeniu zapewniamy miesiąc wsparcia technicznego, abyś miał pewność, że wszystko będzie działać tak jak powinno.",
    },
  ],
  outro:
    "Po wdrożeniu zapewniamy miesiąc wsparcia technicznego, abyś miał pewność, że wszystko będzie działać tak jak powinno.",
} as const;

export const PROCESS = {
  heading: {
    prefix: "Tak wygląda współpraca, w której",
    accent: "przejmujemy cały temat",
    suffix: "strony od A do Z.",
  },
  important:
    "Przez cały okres trwania naszej współpracy, możesz kontaktować się z nami za pośrednictwem komunikatora Slack (otrzymasz instrukcję instalacji tego narzędzia). Możesz do nas napisać kiedy tylko chcesz. Na bieżąco wiesz, co robimy, na jakim jesteśmy etapie i co dzieje się dalej. Pracujemy według jasnego planu i regularnie raportujemy postępy.",
  image: `${ASSET_BASE}/proces-wspolpracy-pillarweb-768x1024.webp`,
  steps: [
    {
      number: "01",
      title: "Rozmowa i konsultacja",
      body: "Poznajemy Twoją firmę, cele i to, jak dziś wygląda Twoja obecność online. Sprawdzamy, czy nasza współpraca ma sens i czy faktycznie tego potrzebujesz.",
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
      body: "Tworzymy indywidualny projekt strony, dopracowany wizualnie i funkcjonalnie.",
    },
    {
      number: "05",
      title: "Treści, SEO i widoczność",
      body: "Przygotowujemy teksty, ustawienia SEO i elementy, które pomagają stronie lepiej działać. Tworzymy podwaliny pod to, aby Twoja firma wyświetlała się w Google coraz wyżej.",
    },
    {
      number: "06",
      title: "Automatyzacje i elementy wspierające sprzedaż",
      body: "Wdrażamy rozwiązania, które ułatwiają kontakt i pomagają zbierać dane kontaktowe od Twoich potencjalnych klientów. Sukcesywnie wykorzystujemy najnowsze rozwiązania bazujące na AI. Chatbota, który będzie sprzedawać za Ciebie i odciąży Cię niwelując telefony z błahymi pytaniami użytkowników.",
    },
    {
      number: "07",
      title: "Wdrożenie, szkolenie i opieka",
      body: "Publikujemy stronę, pokazujemy Ci, jak z niej korzystać, i zapewniamy wsparcie po wdrożeniu.",
    },
  ],
} as const;

type PricingFeature = { included: boolean; title: string; description: string };

const allFeatures: PricingFeature[] = [
  {
    included: true,
    title: "Jeden opiekun projektu od początku do końca",
    description: "Zawsze wiesz, kto odpowiada za Twoją stronę i co się dzieje",
  },
  {
    included: true,
    title: "Strona zaprojektowana tak, żeby odwiedzający dzwonili i zostawiali kontakt",
    description: "Każdy element ułożony pod maksymalną liczbę zapytań",
  },
  {
    included: true,
    title: "Strona zaprojektowana pod Twoją firmę i Twoich klientów",
    description: "Sesja strategiczna — nic nie powstaje „na ślepo”",
  },
  {
    included: true,
    title: "Wygląd, który wyróżnia — nie kolejny szablon",
    description: "Strona w pełni customowa, zbudowana od podstaw",
  },
  {
    included: true,
    title: "Teksty, które przekonują do kontaktu",
    description: "Pełny copywriting pisany językiem Twoich klientów",
  },
  {
    included: true,
    title: "Profesjonalne zdjęcia i wideo bez sesji fotograficznej",
    description: "Materiały AI gotowe do użycia",
  },
  {
    included: true,
    title: "Klienci z Twojego miasta znajdują Cię w Google",
    description: "Konfiguracja SEO: metadane + treści na stronie",
  },
  {
    included: true,
    title: "Żadne zapytanie nie przepada",
    description: "Formularze kontaktowe skonfigurowane i gotowe",
  },
  {
    included: true,
    title: "Wiesz, skąd przychodzą klienci",
    description: "Google Analytics 4 + GTM + Pixel — pełna analityka",
  },
  {
    included: true,
    title: "Gotowa w 8-10 tygodni — albo zwrot pieniędzy",
    description: "Gwarancja terminowości i satysfakcji",
  },
  {
    included: true,
    title: "Samodzielna aktualizacja kiedy chcesz",
    description: "Szkolenie + instrukcja obsługi",
  },
  {
    included: false,
    title: "Spójna marka we wszystkich miejscach",
    description: "Logo + wizytówki — jeśli konieczne",
  },
  {
    included: false,
    title: "Klienci z okolicy znajdują Cię w Google Maps",
    description: "Wizytówka Google — pełna optymalizacja",
  },
  {
    included: false,
    title: "Każdy lead trafia do Twojej bazy kontaktów automatycznie",
    description: "Żadnego ręcznego przepisywania — wszystko dzieje się samo",
  },
  {
    included: false,
    title: "Wszystkie kontakty i zlecenia w jednym miejscu",
    description: "Integracja z Twoim CRM",
  },
  {
    included: false,
    title: "Adres e-mail na własnej domenie",
    description: "@TwojaFirma.pl zamiast gmail.com",
  },
  {
    included: false,
    title: "Asystent online odpowiadający na pytania klientów o każdej porze — wie więcej niż niejeden pracownik",
    description: "Chatbot uczony na wiedzy Twojej firmy",
  },
  {
    included: false,
    title: "Klient sam umawia termin wyceny — bez telefonów w tę i z powrotem",
    description: "Integracja z systemem rezerwacji",
  },
  {
    included: false,
    title: "Treści, które przyciągają klientów z Google miesiącami po publikacji",
    description: "5 artykułów SEO zoptymalizowanych pod Twoją branżę",
  },
  {
    included: false,
    title: "Twoja firma jako ekspert na największych portalach budowlanych",
    description: "Artykuły sponsorowane na Murator Dom, Murator Plus, Budujemy Dom i innych",
  },
  {
    included: false,
    title: "Darmowy poradnik dla klientów, który zbiera ich dane kontaktowe",
    description: "Osoby zainteresowane Twoimi usługami zostawiają e-mail w zamian za pomocny materiał",
  },
];

// Generujemy plany z jednej listy. Złoty włącza pozycje 0-15. Platyna włącza wszystkie.
const buildFeatures = (includeUntil: number): PricingFeature[] =>
  allFeatures.map((f, i) => ({ ...f, included: i < includeUntil }));

export const PRICING = {
  heading: "Cennik",
  description:
    "Cennik jest poglądowy. Wiem, jak irytującym jest szukanie ceny za stronę internetową, a jedyną opcją jest pozostawienie do siebie kontaktu, w celu otrzymania wyceny. Jesteśmy elastyczni. Ostateczna cena zależy od tego na co się dogadamy.",
  plans: [
    {
      eyebrow: "PLAN SREBRNY",
      name: "Plan srebrny",
      price: "11 000 PLN",
      tagline:
        "Profesjonalna strona, która wygląda lepiej niż 90% konkurencji w Twojej okolicy i zamienia odwiedzających w zapytania.",
      featuresHeading: "CO ZYSKUJESZ",
      features: buildFeatures(11),
      cta: { label: "Wybieram plan srebrny", href: "#kontakt" },
      highlighted: false,
    },
    {
      eyebrow: "PLAN ZŁOTY",
      name: "Plan złoty",
      price: "15 000 PLN",
      tagline:
        "Wszystko ze Srebrnego, plus kompletna obecność marki online i automatyzacja, która oszczędza czas i eliminuje chaos w sprzedaży.",
      featuresHeading: "WSZYSTKO Z PLANU SREBRNEGO + DODATKOWO ZYSKUJESZ",
      features: buildFeatures(16),
      cta: { label: "Wybieram plan złoty", href: "#kontakt" },
      highlighted: true,
      badge: "Najpopularniejszy",
    },
    {
      eyebrow: "PLAN PLATYNA",
      name: "Plan platyna",
      price: "20 000 PLN",
      tagline:
        "Pełna maszyna do generowania leadów, działająca 24/7 — z chatbotem, automatycznym umawianiem wycen i treściami pracującymi w Google miesiącami.",
      featuresHeading: "WSZYSTKO Z PLANU ZŁOTEGO + DODATKOWO ZYSKUJESZ",
      features: buildFeatures(allFeatures.length),
      cta: { label: "Wybieram plan platyna", href: "#kontakt" },
      highlighted: false,
    },
  ],
  footnote:
    "Zakres działań zależy od Twojej sytuacji. Właśnie od tego jesteśmy my. Najpierw poznajemy Twój biznes. Potem dobieramy właściwe rozwiązanie i prowadzimy Cię przez cały proces.",
} as const;

export const ABOUT = {
  heading: "Kim jesteśmy",
  // TODO: Oryginał ma częściowo Lorem Ipsum — to placeholder. Tutaj jest treść z meta-tekstu sekcji.
  paragraphs: [
    "Za Pillar Web stoję ja (Kamil Tomczyk) i zespół sprawdzonych specjalistów, których dobrałem dzięki długoletniej pracy w marketingu. Od 19. roku życia działam w tej branży — prowadziłem własną agencję, pracowałem dla innych podmiotów, dzięki czemu poznałem ludzi, z którymi dziś tworzę dopracowane strony internetowe dla firm budowlanych.",
    "Przeprowadziłem głęboką selekcję z całej masy osób, którzy przewinęli się podczas mojej wieloletniej kariery. Wybrałem najlepszych z najlepszych.",
    "Dlaczego właśnie ta branża? Nie jestem teoretykiem. Znam ją jak własną kieszeń. Byłem dyrektorem marketingu w firmie budowlanej, budującej domy tradycyjne jak i stawiającej modułówki. Wiem jak wygląda pozyskiwanie klientów, budowanie zaufania i rozwijanie firmy w branży budowlanej.",
    "Wiem, co działa, jakie komunikaty trafiają do klientów i jak powinna wyglądać strona, która realnie wspiera sprzedaż.",
    "Zadaniem Pillar Web jest przejęcie całej odpowiedzialności i uporządkowanie wieloetapowego procesu, tworząc stronę internetową, która od razu jest gotowa do startu z marketingiem i reklamami, bez obaw, że jakiegokolwiek elementu zabraknie.",
    "Dajemy więcej niżeli nasi konkurenci. Twoja strona będzie zawierała wszystko, co potrzebne. To właśnie nas wyróżnia.",
  ],
  image: `${ASSET_BASE}/kamil-tomczyk-o-nas-pillarweb-pionowo-767x1024.webp`,
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
        "Zazwyczaj realizacja trwa do 8 tygodni (Najczęściej wystarcza miesiąc).\n\nDokładny czas zależy od zakresu projektu, liczby elementów do wdrożenia i sprawności komunikacji po obu stronach. Na początku współpracy ustalamy jasny harmonogram, więc od razu wiesz, jak wygląda proces i kiedy strona będzie gotowa.\n\nJeżeli spóźnimy się z oddaniem strony choćby jeden dzień – otrzymujesz zwrot w wysokości 50% ceny strony!",
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
        "Tak.\n\nPrzygotowujemy teksty na stronę zoptymalizowane pod SEO, wdrażamy metadane, dbamy o strukturę komunikacji i wdrażamy stronę tak, aby była dobrze przygotowana pod SEO od samego startu.",
    },
    {
      question: "Czy oferujecie również reklamy i działania marketingowe?",
      answer:
        "Tak.\n\nPoza tworzeniem stron internetowych dla firm budowlanych pomagamy również w:\n• SEO,\n• Google Ads,\n• Meta Ads.\n\nDzięki temu możemy nie tylko przygotować stronę, ale także pomóc Ci lepiej wykorzystać ją w dalszym marketingu i pozyskiwaniu klientów.",
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
  headingLine1: "Twoja firma robi dobrą robotę.",
  headingLine2: "Czas, aby pokazać to światu.",
  description:
    "Zostaw kontakt i sprawdź, jak możemy stworzyć stronę, która buduje markę, zaufanie, wyróżnia Cię na tle konkurencji i pomaga zdobywać więcej zapytań/kontaktów od właściwych klientów.",
  ownerPhoto: `${ASSET_BASE}/proces-wspolpracy-pillarweb-150x150.webp`,
  ownerName: "Kamil Tomczyk",
  ownerRole: "właściciel firmy",
  // TODO: oryginał ma Lorem Ipsum — wymień na docelowe bio właściciela firmy.
  ownerBio:
    "Lorem Ipsum to po prostu fragment tekstu używany przez branżę poligraficzną i jako przykład czcionki. Lorem Ipsum jest standardowym przykładem od XVI wieku, kiedy nieznany drukarz wziął kawałek tekstu i wymieszał go, aby stworzyć książkę z próbkami czcionek.",
  formNote:
    "Krótki formularz. Konkretna rozmowa. Jasny plan działania.",
} as const;

export const FOOTER = {
  links: [{ label: "Polityka Prywatności", href: "/polityka-prywatnosci" }],
  copyright: "© 2026 pillarweb.pl",
} as const;
