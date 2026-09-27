/**
 * TREŚĆ PODSTRONY /lista — lead magnet „15 miejsc na stronie firmy budowlanej”
 * ---------------------------------------------------------------------------
 * Źródło: PDF „Lead Magnet 15-miejsc-strona-firmy-budowlanej-Pillar-Web.pdf”
 * (kopia leży w /public i jest do pobrania z guzika nad listą).
 *
 * Ruch na tę podstronę przychodzi z ManyChata: ktoś komentuje post na
 * Instagramie/Facebooku słowem „lista”, dostaje wiadomość z linkiem i ląduje
 * tutaj. Strona odtwarza PDF jako interaktywny test TAK/NIE — wynik liczy się
 * na żywo i leci razem ze zgłoszeniem do Airtable.
 *
 * Edytując ten plik zmieniasz całą podstronę. Komponenty tylko wyświetlają
 * to, co tu wpiszesz.
 */

import { CONTACT } from "./content";

/** Ścieżka do PDF-a w /public — guzik „Pobierz PDF” nad listą. */
export const LISTA_PDF = "/15-miejsc-strona-firmy-budowlanej-pillar-web.pdf";

/** Nazwa, pod jaką plik zapisze się na dysku odwiedzającego. */
export const LISTA_PDF_FILENAME =
  "15-miejsc-strona-firmy-budowlanej-Pillar-Web.pdf";

export const LISTA_META = {
  title:
    "15 miejsc na stronie firmy budowlanej, przez które tracisz zlecenia | Pillar Web",
  description:
    "Przejdź test na 15 punktów i sprawdź, gdzie Twoja strona przepuszcza klientów z budżetem. Pod każdym punktem gotowa naprawa. Zajmie Ci to kwadrans.",
  ogTitle: "15 miejsc na stronie firmy budowlanej",
  ogDescription:
    "Sprawdź, przez które z nich klient z budżetem wychodzi i oddaje zlecenie konkurencji. 15 punktów, 15 minut.",
} as const;

export const LISTA_HERO = {
  eyebrow: "Lista kontrolna · 15 punktów · 15 minut",
  headingLine1: "15 miejsc na stronie firmy budowlanej,",
  headingAccent: "przez które klient z budżetem wychodzi",
  headingLine2: "i oddaje zlecenie konkurencji.",
  lead:
    "Ten plik powinienem sprzedawać, nie rozdawać za darmo. W środku jest wszystko, co sprawdzam na stronie firmy budowlanej, zanim powiem właścicielowi, dlaczego ta strona nie przynosi mu zapytań.",
  leadSecond:
    "Możesz przejść ten test tutaj, na tej stronie — zaznaczasz TAK albo NIE, a wynik liczy się sam. Albo pobierz PDF i zrób to po swojemu.",
  pdfButton: "Pobierz PDF",
  pdfNote: "14 stron · bez zapisu, bez podawania maila",
  startButton: "Zacznij test",
} as const;

/** Sekcja „Zanim zaczniesz” — kontekst + twarde liczby ze strony 2 PDF-a. */
export const LISTA_INTRO = {
  heading: "Zanim zaczniesz",
  paragraphs: [
    "W budowlance strona internetowa jest na szarym końcu listy. Większość firm nie traktuje jej poważnie i przez to zostaje z tyłu za tymi, które już to zrobiły. A strona stoi na końcu każdej drogi, którą klient do Ciebie idzie.",
    "Wrzucasz posty na Facebooka i ludzie zaczynają Cię obserwować. Dobrze. Tylko w momencie, w którym jeden z nich naprawdę chce budować, wchodzi na Twoją stronę. To tam decyduje, czy zadzwoni.",
    "Puszczasz reklamy. Możesz mieć najlepszą reklamę w swoim mieście i tak zapłacisz za ruch, który wejdzie na stronę i się z niej wycofa. Ktoś Cię polecił znajomemu? Ten znajomy i tak wpisze nazwę Twojej firmy w Google, zanim podniesie słuchawkę.",
  ],
  stats: [
    { value: "82%", label: "osób szukających wykonawcy zaczyna od Google" },
    { value: "75%", label: "ocenia wiarygodność firmy po wyglądzie jej strony" },
    { value: "62%", label: "omija firmy bez porządnej obecności w internecie" },
    {
      value: "88%",
      label:
        "osób, które coś na stronie odrzuci, nie wraca i dzwoni do lokalnego konkurenta",
    },
    { value: "3–8 s", label: "tyle zajmuje klientowi ocena Twojej strony" },
  ],
} as const;

/** Sekcja „Jak przejść ten test” — instrukcja ze strony 3 PDF-a. */
export const LISTA_HOWTO = {
  heading: "Jak przejść ten test",
  lead:
    "To nie jest lista o tym, czy Twoja strona jest ładna. O estetyce nie ma tu ani jednego punktu. Jest piętnaście miejsc, w których strona firmy budowlanej realnie traci pieniądze, i każde z nich sprawdzisz sam.",
  steps: [
    {
      title: "Weź telefon i wejdź na swoją stronę.",
      body: "Nie na komputerze. Twoi klienci wchodzą z telefonu, więc test robisz tak, jak oni to widzą.",
    },
    {
      title: "Przy każdym punkcie masz jedną rzecz do sprawdzenia.",
      body: "Odpowiadasz TAK albo NIE. Nic nie musisz zapisywać — strona liczy Twoje odpowiedzi za Ciebie.",
    },
    {
      title: "Odpowiadaj uczciwie.",
      body: "Ten wynik nigdzie nie idzie i nikt go nie zobaczy poza Tobą. Zaniżony wynik nie pomoże nikomu, a zawyżony tym bardziej.",
    },
    {
      title: "Całość zajmie Ci od dziesięciu do piętnastu minut.",
      body: "Przy każdym punkcie, w którym zaznaczysz NIE, odsłoni się gotowa naprawa. Możesz wdrożyć ją sam albo przekazać osobie, która prowadzi Twoją stronę.",
    },
  ],
} as const;

/**
 * 15 punktów listy. Pola odpowiadają sekcjom z PDF-a:
 *   check  → SPRAWDŹ (co zrobić, zakończone pytaniem na TAK/NIE)
 *   ifNo   → JEŚLI NIE (co tracisz)
 *   fix    → NAPRAWA (co z tym zrobić)
 */
export const LISTA_POINTS = [
  {
    id: 1,
    title: "Co widać w wyniku Google",
    check:
      "Wpisz w Google nazwę swojej firmy. Przeczytaj tytuł wyniku i dwie linijki opisu pod nim. Wynika z nich, co budujesz i gdzie?",
    ifNo:
      "To jest pierwsze zdanie, jakie klient o Tobie czyta. Jeśli widzi tam „Strona główna” albo ciąg słów bez sensu, kliknie w ten wynik, który mówi mu konkretnie, czego szuka. Twoja firma odpada, zanim ktokolwiek zobaczy Twoje realizacje.",
    fix:
      "Tytuł: nazwa firmy, co budujesz, miasto. Opis: jedno zdanie o tym, dla kogo pracujesz i co klient dostaje. To zmiana na dziesięć minut dla osoby, która prowadzi Twoją stronę.",
  },
  {
    id: 2,
    title: "Czas ładowania",
    check:
      "Odpal stronę na telefonie i policz w głowie sekundy, zanim zobaczysz cokolwiek poza białym ekranem. Zmieściłeś się w trzech sekundach?",
    ifNo:
      "Klient wchodzi na Twoją stronę z działki albo z autobusu, na zwykłym zasięgu. Przy wolnej stronie zamyka ją, zanim cokolwiek zobaczy, i wraca do wyników wyszukiwania. Jeśli puszczasz reklamy, płacisz za to wejście.",
    fix:
      "Najczęstsza przyczyna to zdjęcia wgrane prosto z aparatu, w oryginalnym rozmiarze. Poproś osobę od strony o skompresowanie wszystkich zdjęć.",
  },
  {
    id: 3,
    title: "Co budujesz, dla kogo i gdzie",
    check:
      "Otwórz stronę na telefonie, nie przewijaj, zasłoń palcem logo. Da się z tego, co widać, powiedzieć co budujesz i dla kogo?",
    ifNo:
      "Klient nie odchodzi dlatego, że mu się nie spodobało. Odchodzi, bo w kilka sekund nie dowiedział się, czy trafił we właściwe miejsce. „Kompleksowe usługi budowlane od 1998 roku” nie mówi mu, co konkretnie robisz i czy jesteś w stanie pomóc akurat jemu, w jego sprawie.",
    fix:
      "Jedno zdanie na samej górze: co budujesz, dla kogo i w jakim promieniu. Na przykład: „Domy jednorodzinne w stanie surowym, deweloperskim i pod klucz. Kraków i 60 km wokół”.",
  },
  {
    id: 4,
    title: "Zdjęcie na pierwszym ekranie",
    check:
      "Spójrz na główne zdjęcie na górze strony. To Twoja realizacja, zrobiona w dobrym świetle? Czy zdjęcie z banku zdjęć albo szare ujęcie z telefonu?",
    ifNo:
      "75% ludzi ocenia wiarygodność firmy po wyglądzie jej strony. Zdjęcie z banku widać od razu i mówi jedno: ta firma nie ma się czym pochwalić. Klient, który ma do wydania kilkaset tysięcy, szuka dowodu, że już to robiłeś i że robisz to dobrze.",
    fix:
      "Wybierz jedną skończoną realizację, sfotografowaną w słońcu, z pełnym kadrem budynku. Jedno dobre zdjęcie robi tu więcej niż dziesięć przeciętnych.",
  },
  {
    id: 5,
    title: "Guzik na pierwszym ekranie",
    check:
      "Bez przewijania, na pierwszym ekranie, widzisz wyraźny guzik prowadzący do kontaktu? Co na nim pisze?",
    ifNo:
      "Klient gotowy się odezwać musi w pierwszej sekundzie widzieć, gdzie kliknąć, żeby się z Tobą skontaktować. „Zobacz więcej” albo „Czytaj dalej” tego mu nie mówi.",
    fix:
      "Jeden wyraźny guzik, odcinający się kolorem od tła, z konkretną treścią: „Umów bezpłatną wycenę” albo „Zapytaj o termin”.",
  },
  {
    id: 6,
    title: "Numer telefonu",
    check:
      "Dotknij numeru telefonu na górze strony. Odpaliło dzwonienie? Teraz przewiń w dół i sprawdź, czy numer jedzie z Tobą, czy zniknął.",
    ifNo:
      "W tej branży klienci dzwonią. Formularz wypełnia mniej osób. Do tego ludzie są dziś niecierpliwi i wchodzą na stronę w najróżniejszych okolicznościach: z budowy, z autobusu, w przerwie między jednym a drugim telefonem. Jeśli numer trzeba przepisać z ekranu albo szukać go w stopce, klient wybierze tę firmę, u której wystarczyło dotknąć palcem.",
    fix:
      "Numer w menu, wpięty jako klikalny odnośnik telefoniczny, a nie jako obrazek czy sam tekst. Do tego menu ma przewijać się razem ze stroną, żeby numer był widoczny na każdej wysokości, a nie tylko na samej górze.",
  },
  {
    id: 7,
    title: "Menu",
    check:
      "Policz pozycje w menu. Jest ich sześć albo mniej? Kliknij trzy losowe i sprawdź, czy trafiasz tam, gdzie się spodziewałeś.",
    ifNo:
      "Im więcej wyborów, tym mniej kliknięć. Menu z dziesięcioma pozycjami nie pomaga klientowi, tylko wprowadza u niego chaos.",
    fix:
      "Maksymalnie sześć pozycji: oferta, realizacje, o nas, opinie, kontakt. Nazwy dosłowne, bez lania wody.",
  },
  {
    id: 8,
    title: "Test nagłówków",
    check:
      "Przewiń całą stronę główną i czytaj wyłącznie duże nagłówki sekcji, pomijając całą resztę. Wiesz z samych nagłówków, co firma oferuje i dlaczego warto?",
    ifNo:
      "Prawie nikt nie czyta strony zdanie po zdaniu. Ludzie skanują nagłówki i zatrzymują się tam, gdzie coś ich zainteresuje. Jeśli Twoje nagłówki brzmią „O nas”, „Nasza oferta” i „Dlaczego my”, klient przewinął całą stronę i nie dowiedział się z niej niczego.",
    fix:
      "Zamień nagłówki ogólne na zdania, które powiedziałbyś klientowi stojąc z nim na działce. Zamiast „Nasza oferta” napisz „Od fundamentów po klucz w dziewięć miesięcy”. A pod takim nagłówkiem rozpisz konkret: co wchodzi w zakres, jak wygląda proces i za co dokładnie odpowiadasz.",
  },
  {
    id: 9,
    title: "Realizacje na stronie głównej",
    check:
      "Czy na stronie głównej, bez wchodzenia w żadną zakładkę, widać zdjęcia Twoich skończonych budów? Przewiń dalej i sprawdź, czy wszystkie zdjęcia na stronie są Twoje, czy część pochodzi z banku zdjęć.",
    ifNo:
      "Większość ludzi nie przejdzie na żadną podstronę. Zobaczą stronę główną i na jej podstawie podejmą decyzję. Galeria schowana w zakładce „Realizacje” nie istnieje dla kogoś, kto jej nie otworzy.",
    fix:
      "Sekcja z sześcioma albo ośmioma najlepszymi realizacjami na stronie głównej, z podpisem co to za obiekt, w jakim standardzie i gdzie stoi. Pod nią odnośnik do pełnej galerii.",
  },
  {
    id: 10,
    title: "Opinie",
    check:
      "Są na stronie głównej opinie klientów? Widać po nich, że są prawdziwe, czy wyglądają na tekst napisany przez samą firmę?",
    ifNo:
      "Ludzie wiedzą, że opinię w ramce mógł napisać właściciel strony. Przepisany cytat nie buduje zaufania, tylko je podważa. A klient, który wydaje kilkaset tysięcy, sprawdza Cię dokładniej niż przy zakupie telewizora.",
    fix:
      "Wgraj wtyczkę, która wyciąga opinie prosto z Twojej wizytówki w Google i pokazuje je na stronie w oryginalnej formie, razem z ocenami. Wtedy od razu widać, że to realne opinie, a nie treść napisana przez firmę o sobie samej.",
  },
  {
    id: 11,
    title: "Proces współpracy",
    check:
      "Czy na stronie widać, co się stanie po tym, jak klient zadzwoni albo wyśle formularz? Jest rozpisany przebieg współpracy krok po kroku?",
    ifNo:
      "Ludzie nie lubią niewiadomego. Klient, który nie wie, co go czeka po zostawieniu numeru, często nie zostawia go wcale. Szczególnie ten, kto buduje pierwszy raz w życiu i boi się, że ktoś weźmie zaliczkę i zniknie.",
    fix:
      "Prosta ścieżka na pięć albo sześć kroków: rozmowa telefoniczna, spotkanie na działce, wycena, umowa i harmonogram, budowa z raportami, odbiór. Każdy krok opisany jednym zdaniem.",
  },
  {
    id: 12,
    title: "Twarde liczby o firmie",
    check:
      "Czy gdziekolwiek na stronie głównej są konkretne liczby o Twojej firmie? Lat na rynku, oddanych budów, zrealizowanych metrów?",
    ifNo:
      "„Wieloletnie doświadczenie” i „setki zadowolonych klientów” pisze o sobie każdy, więc te słowa nie znaczą już nic. „17 lat na rynku, 94 oddane domy” znaczy od razu, bo takich liczb się nie zmyśla.",
    fix:
      "Trzy albo cztery liczby w jednej linii, wysoko na stronie głównej. Weź te, które faktycznie masz.",
  },
  {
    id: 13,
    title: "Kroje pisma i spójność nagłówków",
    check:
      "Przewiń stronę i policz, iloma różnymi krojami pisma jest napisana. Sprawdź też, czy wszystkie nagłówki sekcji wyglądają tak samo, czy każdy inaczej.",
    ifNo:
      "Strona poskładana z przypadkowych elementów wygląda dokładnie na taką. Klient nie nazwie tego po imieniu, ale poczuje, że firma jest mniej poukładana, niż jest w rzeczywistości. A po stronie ocenia całą firmę.",
    fix:
      "Dwa kroje na całej stronie: jeden na nagłówki, drugi na tekst. Wszystkie nagłówki tego samego poziomu w jednym rozmiarze i jednej grubości.",
  },
  {
    id: 14,
    title: "Czytelność i układ na telefonie",
    check:
      "Otwórz stronę na telefonie. Da się czytać bez powiększania palcami? Są bloki tekstu dłuższe niż pięć linijek? Czy coś wystaje poza ekran albo nachodzi na siebie?",
    ifNo:
      "Większość Twoich klientów wchodzi z telefonu, w przerwie i w biegu. Ściana drobnego tekstu zostaje nieprzeczytana, a rozjechany układ czyta się jako zaniedbanie.",
    fix:
      "Tekst na tyle duży, żeby dało się go czytać bez powiększania. Akapity po trzy albo cztery linijki i powietrze między sekcjami. Sprawdzaj stronę na prawdziwym telefonie, nie tylko na komputerze.",
  },
  {
    id: 15,
    title: "Czego strona chce od klienta",
    check:
      "Przejdź całą stronę główną i wypisz, ilu różnych rzeczy strona od Ciebie chce. Zadzwoń, wypełnij formularz, obejrzyj galerię, pobierz katalog, polub na Facebooku, napisz maila. Jest jedna główna akcja?",
    ifNo:
      "Jedna akcja powtórzona pięć razy działa świetnie. Pięć różnych akcji sprawia, że klient nie wykonuje żadnej. Musi wybierać, a przy wyborze najłatwiej jest zamknąć kartę.",
    fix:
      "Zdecyduj, czego chcesz najbardziej: telefonu albo zapytania o wycenę. Tę jedną akcję powtórz co dwie, trzy sekcje. Resztę usuń albo zejdź z nią do stopki.",
  },
] as const;

/**
 * Progi wyniku ze strony 12 PDF-a. `min`/`max` włącznie — komponent szuka
 * pierwszego progu, w który wpada liczba odpowiedzi TAK.
 */
export const LISTA_VERDICTS = [
  {
    min: 13,
    max: 15,
    label: "Strona pracuje",
    body:
      "Twój problem nie leży na stronie, tylko w tym, że za mało osób na nią trafia. To już inna rozmowa: wizytówka Google, widoczność lokalna, reklamy.",
  },
  {
    min: 9,
    max: 12,
    label: "Podstawy masz",
    body:
      "Przeciekasz w trzech albo czterech miejscach. To są poprawki na kilka dni, nie przebudowa.",
  },
  {
    min: 5,
    max: 8,
    label: "Strona nie zbija obiekcji",
    body:
      "Twoja strona nie zbija obiekcji klienta i nie podaje informacji, na których mu zależy. Tutaj nie wystarczy poprawić kilku rzeczy. Większość strony trzeba przebudować.",
  },
  {
    min: 0,
    max: 4,
    label: "Do kompletnej przebudowy",
    body:
      "Ta strona wymaga kompletnej przebudowy. Przy takim wyniku około 90% osób, które na nią wejdą, wyjdzie i pójdzie szukać wykonawcy dalej.",
  },
] as const;

export const LISTA_RESULT = {
  lockedHeading: "Twój wynik czeka",
  lockedBody:
    "Odpowiedz na wszystkie piętnaście punktów, a policzę je za Ciebie i powiem, co ten wynik oznacza.",
  lockedCounter: (left: number) =>
    left === 1 ? "Został jeszcze 1 punkt" : `Zostało jeszcze ${left} punktów`,
  heading: "Twój wynik",
  scoreSuffix: "/ 15",
  leaksLabel: "Miejsca, w których przeciekasz",
  leaksEmpty:
    "Nie zaznaczyłeś ani jednego NIE. Jeśli odpowiadałeś uczciwie, masz stronę lepszą niż większość firm w swoim mieście.",
  resetLabel: "Zacznij test od nowa",
} as const;

/** Sekcja „Co teraz” — trzy drogi ze strony 13 PDF-a. Czwarta jest nagłówkiem formularza. */
export const LISTA_PATHS = {
  heading: "Wiesz już, gdzie Twoja strona przepuszcza klientów",
  lead: "Stąd możesz pójść w trzy strony.",
  items: [
    {
      label: "Przekaż tę listę dalej",
      body:
        "Masz gotową specyfikację dla osoby, która prowadzi Twoją stronę: co sprawdzić, co poprawić i po co. Pobierz PDF i wyślij go jej.",
    },
    {
      label: "Popraw to sam",
      body:
        "Część rzeczy z tej listy to kwestia jednego popołudnia: numer telefonu w menu, opinie z Google, sekcja z realizacjami, skrócenie formularza.",
    },
    {
      label: "Nie rób nic",
      body:
        "To też jest decyzja i ma swoją cenę. Każdy dzień z tymi błędami to kolejne osoby, które weszły na Twoją stronę, wyszły z niej i zadzwoniły gdzie indziej. Jedno wysokodochodowe zlecenie stracone w ten sposób kosztuje więcej niż poprawienie całej tej listy.",
    },
  ],
} as const;

/**
 * Treść formularza kontaktowego na dole /lista. Kształt zgodny z CONTACT
 * (ContactSection przyjmuje go jako `content`), więc listy rozwijane
 * dziedziczymy ze strony głównej — jedno miejsce edycji.
 */
export const LISTA_CONTACT = {
  ...CONTACT,
  headingLine1: "Czwarta droga:",
  headingLine2: "przejdźmy przez Twoją stronę razem.",
  // Tablica, nie jeden ciąg — ContactSection rozbija to na osobne akapity.
  // Jednym blokiem ten tekst był ścianą, której nikt nie doczyta do końca.
  description: [
    "Jeśli przy zbyt wielu punktach zaznaczyłeś NIE albo sam czujesz, że Twoja strona wymaga głębszej modernizacji lub całego rebrandingu, aby budować MARKĘ PREMIUM — zostaw kontakt.",
    "Wchodzę na Twoją stronę na żywo i mówię wprost, co zrobiłbym na Twoim miejscu: czy wystarczą drobne poprawki, czy trzeba ją przebudować.",
    "Normalna, przyjacielska rozmowa. Nie wciskam ofert. Jeśli z czasem uznasz, że chcesz z nami podziałać, to zapraszam. Jeśli nie, też w porządku.",
  ],
  urgencyNote:
    "Przyjmujemy maksymalnie 4 nowe projekty miesięcznie, żeby każdy klient był dobrze zaopiekowany do końca.",
  submitLabel: "Umów rozmowę o swojej stronie",
  formNote:
    "Robimy strony wyłącznie dla firm budowlanych. Taka strona ma pozycjonować Cię jako firmę PREMIUM budującą zaufanie i przyprowadzać wysokodochodowe zlecenia z internetu, żeby firma miała stały dopływ zleceń także spoza poleceń.",
} as const;

/**
 * Klucze pamięci przeglądarki.
 *  - ANSWERS: odpowiedzi testu (localStorage) — ktoś może wrócić do zakładki
 *    po kilku godzinach i nie zaczynać od zera.
 *  - SCORE: gotowy wynik w formacie „7/15” (sessionStorage) — odczytuje go
 *    formularz kontaktowy na dole strony i dokleja do zgłoszenia w Airtable.
 */
export const LISTA_ANSWERS_STORAGE_KEY = "pw_lista_odpowiedzi";
export const LISTA_SCORE_STORAGE_KEY = "pw_lista_wynik";
