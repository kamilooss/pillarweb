/**
 * Treść testowej strony głównej /test-str-gl.
 * Tekst zaakceptowany przez Kamila 11.10.2026 (czat) — nie zmieniać bez jego zgody.
 * Dane liczbowe sprawdzone u źródeł 11.10.2026 (Fixly, Oferteo, GUS, UCE Research, Insight Lab).
 */

// Kopie filmów w Vercel Blob (Bunny 767469 zwraca 404 od 11.10.2026).
export const VIDEO_BASE = "https://yyu7eple7apnsr59.public.blob.vercel-storage.com/videos";

export const TEST_PHONE = { label: "515-995-187", tel: "+48515995187" } as const;

export const HERO = {
  eyebrow: "Tylko dla firm budowlanych od 7\u00a0pracowników",
  titleTop: "Strony internetowe dla firm budowlanych.",
  titleBefore: "Klient najpierw widzi ",
  titleMark: "Twoją robotę",
  titleAfter: ", a dopiero potem pyta o cenę",
  lead: "Klient, który trafia na Twoją stronę z Google albo z polecenia, ogląda Twoje realizacje i opinie. W zapytaniu od razu podaje zakres prac, metraż, lokalizację, termin i budżet.",
  cta: "Umów rozmowę o swojej firmie",
  note: "To nie będzie rozmowa sprzedażowa. Jeśli uznamy, że strona nic Ci nie da, powiemy to wprost.",
  phoneLead: "Możesz też zadzwonić:",
  // Makieta w hero — ilustracja „pięciu konkretów”, wyraźnie podpisana jako przykład.
  sample: {
    caption: "Przykład zapytania",
    title: "Nowe zapytanie",
    chip: "ze strony",
    rows: [
      { label: "Zakres prac", value: "Remont łazienki pod klucz" },
      { label: "Metraż", value: "8 m²" },
      { label: "Lokalizacja", value: "Kraków" },
      { label: "Termin", value: "od marca" },
      { label: "Budżet", value: "40–50 tys. zł" },
    ],
  },
} as const;

export const LOGOS_HEADING = "Nasz zespół pracował też dla takich marek";

export const LOGOS = [
  { src: "/images/logos/mowi-asa.svg", alt: "Mowi ASA", prominent: false },
  { src: "/images/logos/logo-2.svg", alt: "", prominent: false },
  { src: "/images/logos/logo-3.svg", alt: "", prominent: false },
  { src: "/images/logos/logo-4.svg", alt: "", prominent: false },
  { src: "/images/logos/logo-5.svg", alt: "", prominent: true },
] as const;

export const PROBLEM = {
  label: "Problem",
  headingBefore: "Masz firmę budowlaną z min.\u00a07\u00a0pracownikami? ",
  headingMark: "Te pięć rzeczy zjada Ci marżę",
  lead: "Słyszymy o nich od wykonawców prawie co tydzień. Zakładamy, że również coś o tym wiesz.",
  items: [
    {
      title: "Ile zapłaciłeś portalom za klientów, których nigdy nie podpisałeś?",
      paragraphs: [
        "Na Fixly wysłanie jednej oferty i odsłonięcie numeru klienta kosztuje do 60 punktów. Przy najmniejszym pakiecie to prawie 200 zł brutto. Na Oferteo cena kontaktu zależy od branży i lokalizacji, a jeden punkt kosztuje od 6 do ponad 10 zł netto.",
        "Płacisz z góry, zanim wiesz, czy klient w ogóle odbierze telefon. Twoja oferta trafia do niego nawet z czterema innymi. Jeśli wygrywasz co piątą, jedno zlecenie z Fixly może Cię kosztować nawet ok. 1000 zł.",
        "Punkty z pakietu na Fixly są ważne 180 dni, a te, których nie zdążysz wykorzystać, przepadają.",
      ],
      quote: "„Płacę za możliwość dowiedzenia się, czego właściwie dotyczy zlecenie”",
      quoteBy: "tak to ujął jeden z wykonawców, który z nami współpracował.",
      stat: { value: "~200 zł", caption: "za jedną ofertę z numerem na Fixly przy najmniejszym pakiecie" },
    },
    {
      title: "Klient ma przed sobą pięć wycen od wykonawców. Porównuje tylko ceny",
      paragraphs: [
        "Dla 62% Polaków cena jest pierwszym kryterium przy wyborze usługodawcy. Prawda jest taka, że Twoje lata na budowach, sprzęt i ludzie na etatach nie wygrają z firmami, które działają w szarej strefie.",
        "Co trzeci klient fachowców (32,6%) najczęściej płaci bez paragonu i bez faktury. Ty za każdego pracownika płacisz ok. 20% składek ponad jego pensję, a do remontu mieszkania doliczasz 8% VAT. Kiedy klient kładzie Twoją wycenę obok takiej „za połowę stawki”, widzi tylko, że Twoja jest wyższa.",
      ],
      stat: { value: "32,6%", caption: "klientów fachowców najczęściej płaci bez paragonu i bez faktury" },
    },
    {
      title: "Wieczorem robisz wyceny dla ludzi, którzy tylko sprawdzają ceny",
      paragraphs: [
        "Rano rozstawiasz ludzi po budowach, w ciągu dnia dowozisz materiał i gasisz pożary. Na kosztorysy zostaje wieczór. Wcześniej jeszcze dojazd na oględziny, pomiary i rozmowa z klientem.",
        "Często na końcu okazuje się, że klient chciał tylko wiedzieć, ile to mniej więcej kosztuje. Albo miał już cztery inne wyceny i szukał najniższej. Każda taka wycena to kilka godzin Twojego czasu, za które nikt Ci nie zapłaci. Zabierasz je rodzinie albo odpoczynkowi przed kolejnym dniem na budowie.",
      ],
      stat: { value: "kilka godzin", caption: "na każdą wycenę, za którą nikt Ci nie zapłaci" },
    },
    {
      title: "Trzech na czterech klientów miało już problem z fachowcem. Dlatego patrzą Ci na ręce",
      paragraphs: [
        "Tak wynika z badania z 2026 roku: 76,1% osób korzystających z usług fachowców miało co najmniej jeden problem. U ponad co piątej osoby robotę trzeba było poprawiać (22,9%). U prawie tylu samo ekipa mocno przekroczyła termin (22,7%), a 7,1% zapłaciło zaliczkę za pracę, której nikt nie wykonał.",
        "Taki klient przychodzi do Ciebie z bagażem cudzej fuszerki. Sprawdza ceny materiałów w markecie, stoi nad głową i dopytuje o rzeczy, które zobaczył na YouTube. Zanim podpisze umowę, musisz mu udowodnić, że nie jesteś kolejnym z tej listy.",
      ],
      stat: { value: "76,1%", caption: "osób korzystających z usług fachowców miało co najmniej jeden problem" },
    },
    {
      title: "Bus stoi, ekipa nie jedzie, a Ty płacisz ok.\u00a02\u00a0750\u00a0zł dziennie",
      paragraphs: [
        "Tyle kosztuje jeden dzień przestoju pięcioosobowej ekipy z busem w leasingu: wypłaty, składki i rata. Tydzień bez roboty to ok. 13,8 tys. zł, a w tej kwocie nie ma jeszcze marży, którą w tym czasie byś zarobił.",
        "Przestoje przychodzą falami. W styczniu 2026 roku produkcja budowlana była o 65% niższa niż w grudniu. Najpierw masz kilka miesięcy pracy ponad siły, a potem nagle nie ma czego zaplanować na kolejne tygodnie. Wypłaty, leasingi i ZUS-y trzeba opłacić tak samo. A dobrzy ludzie odchodzą tam, gdzie robota jest przez cały rok.",
      ],
      stat: { value: "2\u00a0750\u00a0zł", caption: "kosztuje jeden dzień przestoju pięcioosobowej ekipy z busem" },
      highlight: true,
    },
  ],
  closingBefore: "Żaden z tych pięciu problemów nie bierze się z tego, jak pracujesz na budowie. ",
  closingAccent: "Biorą się z tego, z jakich miejsc starasz się pozyskiwać klientów.",
} as const;

export const TRIED = {
  label: "Co już próbowałeś",
  heading: "Portale, grupy na Facebooku, polecenia, ulotki. Ile z tego masz już za sobą?",
  lead: "Każdy z tych sposobów coś daje i każdy w pewnym momencie się kończy. Rozpisaliśmy, gdzie dokładnie.",
  columns: { channel: "Kanał", gives: "Co daje", ends: "Gdzie się kończy" },
  items: [
    {
      name: "Polecenia",
      gives: "najlepszego klienta, który ufa Ci od pierwszej rozmowy.",
      ends: "nie da się ich zaplanować. Prawie połowa mieszkańców dużych miast remontuje raz na 5–10 lat, więc zadowolony klient wraca po latach. Przy szukaniu fachowca 50% Polaków pyta znajomych, ale już 44% szuka w Google. Polecony klient też często najpierw wpisuje Twoją nazwę w wyszukiwarkę. Jeśli nie znajdzie nic, co go przekona, dzwoni do kogoś innego, a Ty nawet o tym nie wiesz.",
    },
    {
      name: "Portale (Fixly, Oferteo)",
      gives: "zapytania od ręki.",
      ends: "portal zarabia na punktach bez względu na to, czy podpiszesz umowę. Im dłużej nie masz zleceń, tym więcej punktów dokupujesz. Klient dostaje kilka ofert i przy takim zestawieniu patrzy przede wszystkim na cenę.",
    },
    {
      name: "Grupy na Facebooku i OLX",
      gives: "darmowe, lokalne zlecenia.",
      ends: "to ten sam casting, tylko bez opłat. Pod postem z dobrym zleceniem w ciągu dnia pojawia się kilkanaście ofert i wygrywa najniższa. Nikt nie sprawdza ani klienta, ani wykonawcy.",
    },
    {
      name: "Strona-wizytówka",
      gives: "firma „wisi w necie”.",
      ends: "szablon, zdjęcia z banku zdjęć, telefon schowany na dole strony i formularz z dziesięcioma polami. Przeanalizowaliśmy blisko 200 stron firm budowlanych z Polski i USA i takie strony widzimy najczęściej. Stąd bierze się przekonanie, że strony nie sprzedają.",
    },
    {
      name: "„Promuj post” i reklamy na własną rękę",
      gives: "szybki ruch.",
      ends: "ludzie klikają, trafiają na stronę, na której nie mają jak zostawić zapytania, i wychodzą. Budżet znika, a zapytań nie przybywa.",
    },
    {
      name: "Pozycjonowanie i agencje „od wszystkiego”",
      gives: "obietnicę wyników.",
      ends: "umowy na dwa lata, raporty, z których nic nie wynika, i opiekun, który przestaje odbierać po opłaceniu faktury. Jeśli się na tym przejechałeś, masz pełne prawo podchodzić do nas z dystansem.",
    },
    {
      name: "Przetargi i informatory",
      gives: "czasem duże zlecenie.",
      ends: "płacisz abonament za dostęp do zapytań, a pasuje Ci z tego niewielka część.",
    },
    {
      name: "Ulotki, banery, ogłoszenia w prasie",
      gives: "obecność „na mieście”.",
      ends: "nie wiesz, czy przyniosły choć jedno zlecenie.",
    },
  ],
} as const;

export const BAND = {
  headingBefore: "Wszystkie mają ",
  headingAccent: "ten sam haczyk",
  body: "Każdy z tych sposobów zostawia Twoich klientów w cudzych rękach: portalu, algorytmu grupy albo łańcucha znajomych. Prawie każdy stawia też Twoją ofertę obok kilku innych, porównywanych po cenie. Żaden nie buduje czegoś, co należy do Ciebie, pokazuje klientowi, że nie jesteś partaczem, i odsiewa ludzi bez budżetu, zanim do Ciebie zadzwonią.",
  gaps: [
    "należy do Ciebie",
    "pokazuje klientowi, że nie jesteś partaczem",
    "odsiewa ludzi bez budżetu, zanim do Ciebie zadzwonią",
  ],
} as const;

export const SOLUTION = {
  label: "Rozwiązanie",
  headingBefore: "Daj klientowi dowody, ",
  headingMark: "zanim zapyta o cenę",
  lead: "Klient nie będzie prowadził śledztwa, żeby sprawdzić, czy jesteś dobry. Jeśli na Twojej stronie zobaczy realizacje, opinie i dokumenty, ma co porównywać poza kwotą. Dlatego budujemy strony, które robią trzy rzeczy.",
  pillars: [
    {
      title: "Należy do Ciebie",
      body: "Strona stoi na Twojej domenie, a każde zapytanie trafia prosto do Ciebie. Nie płacisz portalowi za kontakt i nie dzielisz klienta z czterema innymi firmami.",
    },
    {
      title: "Pokazuje, że nie jesteś partaczem",
      body: "Realizacje z opisem robót, opinie Twoich klientów i dokumenty, których szara strefa nie pokaże: umowa, faktura, gwarancja, ubezpieczenie.",
    },
    {
      title: "Odsiewa ludzi bez budżetu",
      body: "Formularz pyta o zakres prac, metraż, lokalizację, termin i budżet. Zanim pojedziesz na oględziny, wiesz, z kim rozmawiasz.",
    },
  ],
  changesHeading: "Co to zmienia w pięciu problemach, o których pisaliśmy wyżej",
  changes: [
    {
      problem: "Płacisz za kontakty, z których nic nie ma.",
      answer: "Za zapytanie ze strony nie płacisz portalowi. Ten klient przyszedł prosto do Ciebie.",
    },
    {
      problem: "Wygrywa najtańszy.",
      answer: "Klient ma przed oczami Twoje realizacje i dokumenty. Firma z szarej strefy nie ma mu czego pokazać.",
    },
    {
      problem: "Wyceny po nocach.",
      answer: "Zapytanie przychodzi z kompletem informacji. Na oględziny jedziesz do ludzi, którzy wiedzą, czego chcą i ile mogą wydać.",
    },
    {
      problem: "Udowadnianie, że nie jesteś partaczem.",
      answer: "Klient, który dzwoni ze strony, widział już Twoje realizacje i opinie. Rozmowa od razu zaczyna się od zakresu prac.",
    },
    {
      problem: "Pusty albo przepełniony kalendarz.",
      answer: "Masz drugie źródło zapytań obok poleceń. Chatbot odpowiada klientom, kiedy jesteś na budowie, a klient sam umawia rozmowę w Twoim kalendarzu.",
    },
  ],
  referral: "A polecony klient, który wpisze Twoją nazwę w Google, trafia na stronę, która potwierdza to, co usłyszał od znajomego.",
  honestChip: "Ważne",
  honest: "Sama strona nie ściągnie Ci klientów i nie będziemy udawać, że jest inaczej. Ruch przychodzi z Google, wizytówki w Mapach, poleceń i reklam, a strona robi z niego telefony i zapytania. Reklamy w Google i na Facebooku też możemy dla Ciebie prowadzić.",
  dreamBefore: "Kiedy zapytania przychodzą z kilku miejsc naraz, ",
  dreamAccent: "możesz w końcu wybierać, dla kogo pracujesz.",
  dreamAfter: " I spokojnie odmówić klientowi, który od pierwszej rozmowy targuje się o każdą złotówkę.",
} as const;

export const FILM = {
  heading: "Zobacz w 7 minut, jak działa strona, która zbiera zapytania",
  video: "fc36c2f1-0fba-4ad8-ac87-556e69105d8f",
  src: `${VIDEO_BASE}/vsl.mp4`,
  poster: "/images/vsl.jpg",
  aspect: "1600 / 900",
  duration: "7:36",
  name: "film sprzedażowy Pillar Web",
  cta: "Umów rozmowę o swojej firmie",
} as const;

export const ABOUT = {
  label: "Kto za tym stoi",
  heading: "Byłem dyrektorem marketingu w firmie budowlanej. Wiem, skąd biorą się zlecenia",
  paragraphs: [
    "Nazywam się Kamil Tomczyk. W marketingu pracuję od 19. roku życia. Prowadziłem własną agencję, pracowałem w dużych firmach marketingowych, a potem byłem dyrektorem marketingu w firmie budowlanej, która stawia domy tradycyjne i modułowe.",
    "Odpowiadałem tam za to samo, z czym Ty mierzysz się dziś: żeby telefon dzwonił, a ekipy miały robotę na kolejne miesiące.",
    "Przeanalizowałem blisko 200 stron firm budowlanych z Polski i Stanów. Dlatego zajmuję się wyłącznie stronami dla firm budowlanych i nie uczę się branży na Twoim projekcie. Strony robi ze mną zespół sprawdzonych specjalistów, których dobierałem przez lata.",
    "Na pierwszej rozmowie powiem Ci wprost, co w Twojej firmie ma sens, a za co nie warto płacić. Chcę, żeby Twoja firma była w internecie tak samo wiarygodna jak na swojej budowie.",
  ],
  name: "Kamil Tomczyk",
  role: "CEO Pillar Web",
  photo: "/images/kamil-tomczyk-pillarweb.jpeg",
} as const;

export const DELIVERABLES = {
  label: "Co dostajesz",
  headingBefore: "Od Ciebie potrzebujemy rozmowy i zdjęć z budów. ",
  headingMark: "Resztę robimy\u00a0my",
  lead: "Każda pozycja poniżej to coś, co zobaczy Twój klient albo co oszczędzi Twój czas.",
  items: [
    { title: "Realizacje, które działają jak dowód", body: "Przy każdej piszemy, co było do zrobienia, ile to trwało i jaki był efekt. Klient widzi Twoją robotę, zanim zobaczy cenę." },
    { title: "Opinie Twoich klientów", body: "Z imieniem i realizacją, której dotyczą. Klient wie, że to prawdziwa osoba i prawdziwa robota." },
    { title: "Formularz, który odsiewa przypadkowe zapytania", body: "Klient od razu podaje zakres prac, metraż, lokalizację, termin i budżet. Wiesz, komu robić wycenę, a komu od razu podziękować." },
    { title: "Dokumenty na widoku", body: "Umowa, faktura, gwarancja, ubezpieczenie, czyli wszystko to, czego firma z szarej strefy nie pokaże." },
    { title: "Odpowiedź, kiedy jesteś na budowie", body: "Chatbot uczony na wiedzy o Twojej firmie odpowiada na pytania klientów, asystent AI odbiera telefony, a klient sam umawia rozmowę w Twoim kalendarzu. O każdym nowym zapytaniu dostajesz powiadomienie od razu." },
    { title: "Widoczność w Google", body: "Ustawiamy stronę tak, żeby Google rozumiał, czym się zajmujesz i gdzie pracujesz, i porządkujemy Twoją wizytówkę w Mapach Google." },
    { title: "Teksty pisane za Ciebie", body: "Piszemy je językiem Twoich klientów. Ty tylko je akceptujesz." },
    { title: "Analityka od pierwszego dnia", body: "Wiesz, skąd przyszło każde zapytanie i która reklama na siebie zarabia." },
    { title: "Kalkulator kosztów dla wybranych branż", body: "Na przykład przy budowie domów klient sam sprawdza orientacyjny koszt, zanim zadzwoni." },
  ],
  processHeading: "Jak to wygląda",
  steps: [
    { title: "Rozmowa", body: "Pytamy o Twoją firmę i sprawdzamy, czy możemy Ci pomóc. Jeśli nie, mówimy to wprost, zanim cokolwiek podpiszesz." },
    { title: "Krótki formularz i zdjęcia", body: "Odpowiadasz na kilka pytań o firmę i przesyłasz zdjęcia realizacji. Teksty piszemy my." },
    { title: "Projekt do akceptacji", body: "Zanim cokolwiek wdrożymy, widzisz gotowy projekt strony i zgłaszasz uwagi." },
    { title: "Start i 30 dni wsparcia", body: "Uruchamiamy stronę, podpinamy formularz, chatbota, kalendarz i analitykę. Pokazujemy, jak z tego korzystać, i przez 30 dni naprawiamy wszystko bez dodatkowych kosztów." },
  ],
  timingBefore: "Całość trwa ",
  timingMark: "maksymalnie 3 tygodnie",
  timingAfter: ". Przez cały czas masz z nami kontakt przez telefon albo WhatsApp i wiesz, na jakim jesteśmy etapie.",
} as const;

export const COMPARISON = {
  label: "Porównanie",
  heading: "Porównaj nas z typową agencją. Punkt po punkcie",
  lead: "Usługi często nazywają się tak samo. Różnicę widać dopiero wtedy, kiedy rozpiszesz, co dokładnie dostajesz.",
  columns: { feature: "Co dostajesz i co to dla Ciebie znaczy", others: "Typowa agencja", us: "Pillar Web" },
  groups: [
    {
      title: "Podstawy strony",
      rows: [
        { feature: "Strona wygodna w obsłudze na telefonie", others: true },
        { feature: "Podstawowe ustawienia pod Google, żeby wyszukiwarka wiedziała, czym się zajmujesz", others: true },
        { feature: "Formularz kontaktowy", others: true },
      ],
    },
    {
      title: "Projekt i treści",
      rows: [
        { feature: "Projekt robiony od zera pod Twoją firmę, bez gotowego szablonu", others: false },
        { feature: "Teksty na stronę piszemy my", others: false },
        { feature: "Zdjęcia i filmy przygotowane z pomocą AI, gdy nie masz własnej sesji", others: false },
      ],
    },
    {
      title: "Widoczność i analityka",
      rows: [
        { feature: "Pełna analityka od pierwszego dnia (GA4, GTM, Pixel): wiesz, skąd przychodzi każde zapytanie i która reklama zarabia", others: false },
        { feature: "Uporządkowana wizytówka w Mapach Google: klienci z okolicy widzą Cię na mapie razem z opiniami i telefonem", others: false },
      ],
    },
    {
      title: "Technologie i automatyzacje",
      rows: [
        { feature: "Chatbot uczony na wiedzy o Twojej firmie, który odpowiada klientom, kiedy jesteś na budowie", others: false },
        { feature: "Asystent AI, który odbiera telefony i odpowiada na pytania", others: false },
        { feature: "Kalendarz na stronie, w którym klient sam umawia rozmowę albo spotkanie", others: false },
        { feature: "Zapytania trafiają od razu tam, gdzie je obsługujesz (CRM, arkusz, e-mail)", others: false },
        { feature: "Powiadomienie o każdym nowym zapytaniu, od razu", others: false },
      ],
    },
    {
      title: "Pewność współpracy",
      rows: [
        { feature: "Najpierw widzisz projekt. Jeśli to nie ten kierunek, zwracamy pieniądze", others: false },
        { feature: "Termin w umowie. Wystarczy jeden dzień spóźnienia, a oddajemy 50% wynagrodzenia", others: false },
        { feature: "30 dni bezpłatnego wsparcia technicznego po starcie", others: true },
      ],
    },
    {
      title: "Wiedza branżowa",
      rows: [
        { feature: "Pracujemy tylko z firmami budowlanymi", others: false },
        { feature: "Treści pisane językiem Twoich klientów", others: false },
      ],
    },
    {
      title: "Proces i komunikacja",
      rows: [
        { feature: "Opisany proces krok po kroku: wiesz, co i kiedy się dzieje", others: true },
        { feature: "Gotowa strona maksymalnie w 3 tygodnie", others: false },
        { feature: "Stały kontakt przez telefon albo WhatsApp: wiesz, na jakim jesteśmy etapie", others: false },
      ],
    },
  ],
} as const;

export const PROOF = {
  label: "Dowody",
  headingMark: "149 telefonów i formularzy",
  headingAfter: " w jeden miesiąc. Zrzuty z kont naszych klientów",
  lead: "Na każdym zrzucie jest konto Google Ads klienta za konkretny miesiąc. Reklamy kierowały ruch na strony, które dla tych firm zbudowaliśmy. Jako kontakt liczymy telefon do firmy albo wypełniony formularz.",
  tableHead: { month: "Miesiąc", contacts: "Kontakty", cost: "Koszt kontaktu" },
  cases: [
    {
      title: "Generalny wykonawca, zlecenia na budowy i wykończenia",
      text: "Sierpień 2026: 149 kontaktów, 18,98 zł za jeden. Lipiec 2026: 73 kontakty, 38,59 zł za jeden.",
      rows: [
        { month: "Sierpień 2026", contacts: "149", cost: "18,98 zł" },
        { month: "Lipiec 2026", contacts: "73", cost: "38,59 zł" },
      ],
      shots: [
        { image: "/images/wyniki/wynik-kampanii-generalny-wykonawca-sierpien-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads generalnego wykonawcy za sierpień 2026: 149 kontaktów, koszt jednego kontaktu 18,98 zł" },
        { image: "/images/wyniki/wynik-kampanii-generalny-wykonawca-lipiec-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads generalnego wykonawcy za lipiec 2026: 73 kontakty, koszt jednego kontaktu 38,59 zł" },
      ],
    },
    {
      title: "Firma od remontów łazienek",
      text: "Sierpień 2026: 17 kontaktów po 117,99 zł. Lipiec 2026: 12 kontaktów po 104,40 zł.",
      extra: "Na Fixly sama oferta z numerem potrafi kosztować prawie 200 zł, a klient wybiera z pięciu. Tu każda z tych osób zadzwoniła albo napisała bezpośrednio do tej firmy.",
      rows: [
        { month: "Sierpień 2026", contacts: "17", cost: "117,99 zł" },
        { month: "Lipiec 2026", contacts: "12", cost: "104,40 zł" },
      ],
      shots: [
        { image: "/images/wyniki/wynik-kampanii-remonty-lazienek-sierpien-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads firmy remontującej łazienki za sierpień 2026: 17 kontaktów, koszt jednego kontaktu 117,99 zł" },
        { image: "/images/wyniki/wynik-kampanii-remonty-lazienek-lipiec-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads firmy remontującej łazienki za lipiec 2026: 12 kontaktów, koszt jednego kontaktu 104,40 zł" },
      ],
    },
    {
      title: "Deweloper, sprzedaż mieszkań",
      text: "Czerwiec 2026: 79 kontaktów po 28,20 zł. Lipiec: 38 po 53,26 zł. Sierpień: 27 po 65,25 zł.",
      rows: [
        { month: "Czerwiec 2026", contacts: "79", cost: "28,20 zł" },
        { month: "Lipiec 2026", contacts: "38", cost: "53,26 zł" },
        { month: "Sierpień 2026", contacts: "27", cost: "65,25 zł" },
      ],
      shots: [
        { image: "/images/wyniki/wynik-kampanii-deweloper-czerwiec-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads dewelopera za czerwiec 2026: 79 kontaktów, koszt jednego kontaktu 28,20 zł" },
        { image: "/images/wyniki/wynik-kampanii-deweloper-lipiec-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads dewelopera za lipiec 2026: 38 kontaktów, koszt jednego kontaktu 53,26 zł" },
        { image: "/images/wyniki/wynik-kampanii-deweloper-sierpien-2026-pillarweb.webp", alt: "Zrzut z konta Google Ads dewelopera za sierpień 2026: 27 kontaktów, koszt jednego kontaktu 65,25 zł" },
      ],
    },
  ],
  portfolioHeading: "Tak wyglądają strony, które zbudowaliśmy",
  portfolioIntro: "Każdy z tych projektów prowadziliśmy od zera: research, analiza konkurencji, strategia, treści i wdrożenie.",
  projects: [
    { name: "Korona Estates", type: "deweloper", body: "Prezentacja inwestycji i apartamentów premium z prostą drogą do kontaktu.", video: "1edd4c6e-6659-4466-ac43-834ce7e397c1", src: `${VIDEO_BASE}/korona.mp4`, poster: "/images/portfolio/korona.jpg", aspect: "1600 / 873", duration: "0:42" },
    { name: "Lennox Homes", type: "firma budująca domy", body: "Kalkulator kosztów budowy i katalog gotowych realizacji.", video: "d29710ea-c770-4533-965a-a17959e9a476", src: `${VIDEO_BASE}/lennox.mp4`, poster: "/images/portfolio/lennox.jpg", aspect: "1600 / 947", duration: "1:31" },
    { name: "Horyzont", type: "generalny wykonawca", body: "Realizacje komercyjne i przemysłowe z prostą ścieżką do zapytania ofertowego.", video: "5d588692-4ab3-4323-acc4-32d3e7f9547b", src: `${VIDEO_BASE}/horyzont.mp4`, poster: "/images/portfolio/horyzont.jpg", aspect: "1600 / 944", duration: "1:23" },
  ],
  testimonialsHeading: "Co mówią właściciele firm, z którymi pracowaliśmy",
  // Opinie: pełne brzmienie z TESTIMONIALS w app/lib/content.ts (bez skracania cudzych słów).
  cta: "Umów rozmowę o swojej firmie",
  ctaNote: "To nie będzie rozmowa sprzedażowa.",
} as const;

export const OBJECTIONS = {
  label: "Twoje „ale”",
  heading: "Pewnie masz już kilka „ale”. Odpowiadamy na nie wprost",
  items: [
    {
      q: "„U mnie klienci i tak biorą najtańszego.”",
      a: "Klient, który patrzy na cenę, i tak boi się jednego: że trafi na ekipę, która zniknie z zaliczką albo przeciągnie robotę o dwa miesiące. Trzech na czterech klientów miało już problem z fachowcem, więc ten strach ma podstawy. Najtańsza oferta go nie zdejmuje. Zdejmują go realizacje, opinie i dokumenty, które klient widzi, zanim zapyta o cenę. Na portalu spotykasz głównie ludzi, którzy szukają najniższej kwoty. W Google szukają też ci, którym zależy na pewnej ekipie.",
    },
    {
      q: "„Mam już stronę i nic mi nie daje.”",
      a: "Większość stron firm budowlanych, które przeanalizowaliśmy, to wizytówki: szablon, zdjęcia z banku zdjęć, telefon na samym dole i formularz z dziesięcioma polami. Taka strona nie ma jak zebrać zapytań, nawet jeśli wchodzi na nią sporo ludzi. Decyzja, żeby mieć stronę, była dobra. Tamta strona nie została zbudowana do zbierania zapytań.",
    },
    {
      q: "„Ile zapytań mi to da?”",
      a: "Nie podamy Ci liczby na ślepo, bo zależy od branży, miasta i tego, skąd przyjdzie ruch. Kto obiecuje konkretną liczbę zleceń albo pierwszą stronę Google w tydzień, sprzedaje dym. Możemy pokazać wyniki stron, które już zbudowaliśmy, i powiedzieć uczciwie, co ile trwa. Pozycjonowanie w Google to miesiące, a reklamy dają pierwsze zapytania dużo szybciej.",
    },
    {
      q: "„Nie mam na to czasu.”",
      a: "Od Ciebie potrzebujemy jednej rozmowy, krótkiego formularza i zdjęć realizacji. Teksty, projekt i technikę bierzemy na siebie, a projekt pokazujemy Ci do akceptacji. Całość trwa maksymalnie 3 tygodnie.",
    },
    {
      q: "„Marketing to ściema. Już raz się przejechałem.”",
      a: "Masz prawo tak myśleć. Dlatego zamiast obietnic pokazujemy zrzuty z kont reklamowych naszych klientów, termin wpisujemy do umowy, a strona od początku stoi na Twojej domenie.",
    },
  ],
} as const;

export const FOR_WHOM = {
  label: "Dla kogo",
  heading: "Pracujemy z firmami budowlanymi, które mają min.\u00a07\u00a0pracowników",
  lead: "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie, więc mówimy wprost, z kim pracujemy, a z kim nie.",
  industries: [
    { name: "Firmy budujące domy" },
    { name: "Generalni wykonawcy" },
    { name: "Deweloperzy", note: "strony inwestycji, które prowadzą kupującego od mapy lokali do telefonu do biura sprzedaży" },
    { name: "Firmy wykończeniowe" },
    { name: "Firmy remontowe" },
    { name: "Firmy od elewacji i dachów" },
    { name: "Firmy instalacyjne", note: "elektryka, hydraulika, klimatyzacja, fotowoltaika, pompy ciepła" },
    { name: "Producenci budowlani", note: "strony z biblioteką BIM, strefą architekta i wyszukiwarką dystrybutorów" },
  ],
  notHeading: "Nie pracujemy z firmami, które:",
  not: [
    "mają mniej niż 7 pracowników,",
    "nie mają jeszcze realizacji, które można pokazać,",
    "szukają strony za maks. 3 tys. zł na typowym, powtarzalnym szablonie, który niczym się nie wyróżnia i jest słabej jakości,",
    "nie chcą wyróżniać się na swoim rynku ani budować marki premium w oczach klientów.",
  ],
} as const;

export const PRICE = {
  label: "Cena",
  headingBefore: "Strona od 11\u00a0000\u00a0zł. ",
  headingAfter: "Ile dokładnie, zależy od tego, co ma robić",
  body: "Ostateczna kwota zależy od zakresu: liczby sekcji i podstron, funkcji, elementów interaktywnych i integracji. Zanim podamy cenę, rozmawiamy. Pytamy o Twoje cele i mówimy wprost, co warto mieć na stronie, a co będzie zbędnym kosztem. Dostajesz wycenę pod to, co chcesz osiągnąć, bez płacenia za funkcje, których nie wykorzystasz.",
  from: "Od",
  amount: "11\u00a0000\u00a0zł",
  factorsLabel: "Na wycenę wpływają:",
  factors: ["zakres funkcji", "liczba sekcji i podstron", "elementy interaktywne", "integracje i automatyzacje"],
  cta: "Ustalmy zakres Twojej strony",
  note: "Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
} as const;

export const FAQ = {
  label: "FAQ",
  heading: "Pytania, które słyszymy najczęściej",
  items: [
    { q: "„Polecenia nadal mi działają. Czy ja w ogóle tego potrzebuję?”", a: "Polecenia to najlepszy klient i nie każemy Ci z nich rezygnować. Kłopot w tym, że nie da się ich zaplanować. Przy szukaniu fachowca 50% Polaków pyta znajomych, ale 44% szuka w Google. Strona daje Ci drugie źródło zapytań, a poleconemu klientowi pokazuje, że trafił pod dobry adres." },
    { q: "„Ile to trwa?”", a: "Maksymalnie 3 tygodnie. Termin jest w umowie, a jeśli spóźnimy się choćby jeden dzień, oddajemy 50% wynagrodzenia." },
    { q: "„Muszę sam przygotować teksty i zdjęcia?”", a: "Teksty piszemy my. Od Ciebie potrzebujemy zdjęć realizacji i odpowiedzi na kilka pytań o firmę. Jeśli zdjęć jest mało, pomożemy je uzupełnić." },
    { q: "„Czyja będzie strona?”", a: "Twoja. Strona stoi na Twojej domenie, zapytania trafiają prosto do Ciebie, a analityka jest na Twoich kontach. Nie trzymamy Cię wielomiesięczną umową." },
    { q: "„Robicie też reklamy i pozycjonowanie?”", a: "Tak. Poza stronami prowadzimy pozycjonowanie, reklamy Google Ads i Meta Ads (Facebook, Instagram) oraz wdrażamy automatyzacje AI." },
    { q: "„Co jeśli projekt mi się nie spodoba?”", a: "Najpierw pokazujemy Ci gotowy projekt. Jeśli uznasz, że to nie ten kierunek, zwracamy pieniądze." },
    { q: "„Czy po wdrożeniu zostaję z tym sam?”", a: "Nie. Pokazujemy, jak korzystać ze strony, dajemy instrukcję i przez 30 dni naprawiamy wszystko bez dodatkowych kosztów." },
    { q: "„Czy pierwsza rozmowa to sprzedaż na siłę?”", a: "Nie. Pytamy o Twoją firmę i sprawdzamy, czy możemy pomóc. Jeśli uznamy, że strona nic Ci nie da, powiemy to wprost, zanim cokolwiek podpiszesz." },
  ],
} as const;

export const GUARANTEES = {
  label: "Zero ryzyka",
  headingBefore: "Nie spodoba Ci się projekt albo się spóźnimy? ",
  headingMark: "Płacimy\u00a0my",
  items: [
    { icon: "eye", title: "Najpierw widzisz projekt.", body: "Pokazujemy Ci gotowy projekt strony, zanim cokolwiek wdrożymy. Jeśli uznasz, że to nie ten kierunek, zwracamy pieniądze." },
    { icon: "clock", title: "Za spóźnienie płacimy my.", body: "Termin wpisujemy do umowy. Wystarczy jeden dzień spóźnienia, a oddajemy Ci 50% wynagrodzenia." },
    { icon: "wrench", title: "30 dni wsparcia po starcie.", body: "Jeśli po uruchomieniu coś nie działa jak powinno, naprawiamy to bez dodatkowych kosztów." },
    { icon: "key", title: "Wszystko zostaje u Ciebie.", body: "Strona stoi na Twojej domenie, zapytania trafiają prosto do Ciebie, a analityka jest na Twoich kontach. Nie trzymamy Cię długą umową." },
  ],
} as const;

export const CONTACT_COPY = {
  headingLine1: "Przyjmujemy maksymalnie",
  headingLine2: "4\u00a0nowe projekty miesięcznie",
  description: "Zostaw kontakt. Zadzwonimy, zapytamy o Twoją firmę i powiemy wprost, czy strona coś Ci da.",
  urgencyNote: "To nie będzie rozmowa sprzedażowa.",
  submitLabel: "Umów rozmowę o swojej firmie",
  submitNote: "Oddzwaniamy w ciągu 24 godzin, często po kilku minutach.",
  // Dopisek od Kamila — w lewej kolumnie formularza, pod jego zdjęciem i podpisem.
  ps: "P.S. Najlepsze firmy budowlane, jakie znam, nie szukają zleceń w październiku. Mają zapisy na kolejne miesiące i w piątek robią przelewy dla ekipy bez nerwów. Jeden z wykonawców napisał kiedyś: „Jeżeli szukasz zleceń, to jesteś jednym z wielu. A jak do Ciebie się zgłaszają, to już co innego.” Pomożemy Ci dojść do tego drugiego.",
} as const;
