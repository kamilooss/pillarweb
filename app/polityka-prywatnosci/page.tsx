/**
 * PODSTRONA — /polityka-prywatnosci
 * ---------------------------------
 * Polityka prywatności serwisu pillarweb.pl. Administrator: Agencja Artex
 * Artur Tomczyk. Dokument statyczny — treść inline (używana tylko tutaj).
 * Reużywa Header + Footer i tokeny designu strony (container-content,
 * font-display, text-muted-strong itd.).
 *
 * UWAGA: to rzetelny, kompletny szablon zgodny z RODO, ale nie stanowi
 * porady prawnej — zalecany krótki przegląd przez prawnika/IOD przed publikacją.
 */

import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Polityka Prywatności — Pillar Web",
  description:
    "Polityka prywatności serwisu pillarweb.pl: kto jest administratorem danych, jakie dane zbieramy, w jakim celu, komu je powierzamy oraz jakie masz prawa zgodnie z RODO.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

const LAST_UPDATED = "14 czerwca 2026 r.";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-t border-card-border py-16 lg:py-24">
          <div className="container-content">
            <div className="max-w-3xl">
              <p className="arch-tick mb-6">Dokumenty</p>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight">
                Polityka <span className="underline-accent">Prywatności</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-strong">
                Niniejsza Polityka Prywatności opisuje, w jaki sposób przetwarzamy dane
                osobowe użytkowników serwisu internetowego dostępnego pod adresem{" "}
                <strong className="font-semibold text-foreground">pillarweb.pl</strong>,
                działającego pod marką Pillar Web.
              </p>
              <p className="mt-3 text-sm text-muted">
                Data ostatniej aktualizacji: {LAST_UPDATED}
              </p>
            </div>

            <article className="mt-14 max-w-3xl">
              <Section title="§1. Administrator danych osobowych">
                <p>
                  Administratorem Twoich danych osobowych jest{" "}
                  <strong className="font-semibold text-foreground">
                    Agencja Artex Artur Tomczyk
                  </strong>{" "}
                  z siedzibą przy ul. Lubelskiej 19/13, 30-003 Kraków, NIP: 6770065659,
                  REGON: 350434003, prowadząca jednoosobową działalność gospodarczą wpisaną
                  do Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG)
                  — dalej „Administrator" lub „my".
                </p>
                <p>W sprawach dotyczących ochrony danych osobowych możesz kontaktować się z nami:</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    e-mail:{" "}
                    <a className="underline underline-offset-2 hover:text-foreground" href="mailto:kontakt@pillarweb.pl">
                      kontakt@pillarweb.pl
                    </a>
                  </li>
                  <li>
                    telefon:{" "}
                    <a className="underline underline-offset-2 hover:text-foreground" href="tel:+48515995187">
                      515 995 187
                    </a>
                  </li>
                  <li>adres korespondencyjny: ul. Lubelska 19/13, 30-003 Kraków</li>
                </ul>
              </Section>

              <Section title="§2. Podstawowe pojęcia">
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    <strong className="font-semibold text-foreground">RODO</strong> —
                    Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
                    27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                    przetwarzaniem danych osobowych (ogólne rozporządzenie o ochronie danych).
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Dane osobowe</strong> —
                    informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej.
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Przetwarzanie</strong> —
                    każda operacja wykonywana na danych osobowych (m.in. zbieranie, przechowywanie,
                    wykorzystywanie, usuwanie).
                  </li>
                </ul>
              </Section>

              <Section title="§3. Jakie dane zbieramy, w jakim celu i na jakiej podstawie">
                <p>
                  Zakres przetwarzanych danych zależy od tego, z jakich funkcji serwisu korzystasz:
                </p>

                <p className="font-semibold text-foreground">a) Formularz kontaktowy</p>
                <p>
                  Zbieramy: imię i nazwisko, adres e-mail, numer telefonu, wskazaną specjalizację
                  oraz treść wiadomości. Dane przetwarzamy w celu:
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    obsługi zapytania, kontaktu zwrotnego i przedstawienia oferty —
                    na podstawie <strong className="font-semibold text-foreground">art. 6 ust. 1 lit. b RODO</strong>{" "}
                    (podjęcie działań na żądanie osoby przed zawarciem umowy) oraz{" "}
                    <strong className="font-semibold text-foreground">art. 6 ust. 1 lit. f RODO</strong>{" "}
                    (prawnie uzasadniony interes — udzielenie odpowiedzi na zapytanie);
                  </li>
                  <li>
                    przesyłania informacji marketingowych, w tym wiadomości powitalnej oraz
                    kolejnych wiadomości (follow-up) drogą elektroniczną —
                    na podstawie <strong className="font-semibold text-foreground">art. 6 ust. 1 lit. a RODO</strong>{" "}
                    (zgoda) w związku z art. 10 ustawy o świadczeniu usług drogą elektroniczną
                    oraz art. 172 ustawy Prawo telekomunikacyjne. Zgodę wyrażasz dobrowolnie,
                    zaznaczając odpowiednie pole w formularzu, i możesz ją w każdej chwili wycofać.
                  </li>
                </ul>

                <p className="font-semibold text-foreground">b) Rezerwacja terminu spotkania</p>
                <p>
                  Korzystamy z osadzonego widgetu Calendly. Podczas rezerwacji podajesz m.in. imię
                  oraz adres e-mail. Dane przetwarzamy w celu umówienia i obsługi spotkania —
                  na podstawie art. 6 ust. 1 lit. b oraz lit. f RODO.
                </p>

                <p className="font-semibold text-foreground">c) Dane techniczne, logi i pliki cookies</p>
                <p>
                  Podczas korzystania z serwisu automatycznie zbierane są m.in. adres IP, dane
                  urządzenia i przeglądarki oraz informacje o aktywności w serwisie. Przetwarzamy je
                  w celu zapewnienia działania i bezpieczeństwa serwisu (art. 6 ust. 1 lit. f RODO),
                  a w zakresie cookies analitycznych i marketingowych — na podstawie Twojej zgody
                  (art. 6 ust. 1 lit. a RODO) wyrażonej w banerze cookies. Szczegóły w §9.
                </p>
              </Section>

              <Section title="§4. Dobrowolność podania danych">
                <p>
                  Podanie danych jest dobrowolne, lecz niezbędne do obsługi zapytania lub umówienia
                  spotkania. Niepodanie danych uniemożliwi nam kontakt i realizację tych działań.
                </p>
              </Section>

              <Section title="§5. Odbiorcy danych i podmioty przetwarzające">
                <p>
                  Powierzamy dane zaufanym dostawcom usług (podmiotom przetwarzającym), wyłącznie
                  w zakresie niezbędnym do realizacji wskazanych celów:
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    <strong className="font-semibold text-foreground">UAB „MailerLite"</strong> (Litwa)
                    — obsługa wysyłki wiadomości e-mail i automatyzacji marketingowej;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Calendly LLC</strong> (USA)
                    — system rezerwacji spotkań online;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Vercel Inc.</strong> (USA)
                    — hosting serwisu i infrastruktura techniczna;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Google Ireland Ltd / Google LLC</strong> (USA)
                    — Google Analytics 4 oraz Google Tag Manager (statystyka i zarządzanie tagami);
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">Meta Platforms Ireland Ltd / Meta Platforms, Inc.</strong> (USA)
                    — Meta Pixel (pomiar konwersji i działania marketingowe).
                  </li>
                </ul>
                <p>
                  Dane mogą być również udostępnione podmiotom uprawnionym do ich uzyskania na
                  podstawie obowiązujących przepisów prawa.
                </p>
              </Section>

              <Section title="§6. Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)">
                <p>
                  Część dostawców (m.in. Vercel, Calendly, Google, Meta) ma siedzibę lub przetwarza
                  dane w Stanach Zjednoczonych. Przekazywanie danych poza EOG odbywa się na podstawie
                  standardowych klauzul umownych zatwierdzonych przez Komisję Europejską (art. 46 RODO)
                  oraz — w odniesieniu do podmiotów certyfikowanych — w oparciu o program Data Privacy
                  Framework (EU–US DPF). Możesz uzyskać od nas kopię stosowanych zabezpieczeń, kontaktując
                  się pod adresem kontakt@pillarweb.pl.
                </p>
              </Section>

              <Section title="§7. Okres przechowywania danych">
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    dane z formularza i korespondencji — przez czas niezbędny do obsługi zapytania,
                    a następnie do upływu okresu przedawnienia ewentualnych roszczeń;
                  </li>
                  <li>
                    dane przetwarzane na podstawie zgody (marketing) — do czasu wycofania zgody;
                  </li>
                  <li>
                    dane w narzędziach analitycznych i marketingowych — zgodnie z ustawieniami danego
                    narzędzia oraz do czasu wycofania zgody lub usunięcia plików cookies.
                  </li>
                </ul>
              </Section>

              <Section title="§8. Twoje prawa">
                <p>W związku z przetwarzaniem danych przysługuje Ci prawo do:</p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>dostępu do swoich danych oraz otrzymania ich kopii;</li>
                  <li>sprostowania (poprawiania) danych;</li>
                  <li>usunięcia danych („prawo do bycia zapomnianym");</li>
                  <li>ograniczenia przetwarzania;</li>
                  <li>przenoszenia danych;</li>
                  <li>
                    wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie;
                  </li>
                  <li>
                    cofnięcia zgody w dowolnym momencie — bez wpływu na zgodność z prawem przetwarzania,
                    którego dokonano przed jej cofnięciem.
                  </li>
                </ul>
                <p>
                  Aby skorzystać z powyższych praw, skontaktuj się z nami:{" "}
                  <a className="underline underline-offset-2 hover:text-foreground" href="mailto:kontakt@pillarweb.pl">
                    kontakt@pillarweb.pl
                  </a>
                  .
                </p>
                <p>
                  Masz również prawo wniesienia skargi do organu nadzorczego —
                  Prezesa Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa.
                </p>
              </Section>

              <Section title="§9. Pliki cookies i podobne technologie">
                <p>
                  Serwis korzysta z plików cookies oraz podobnych technologii. Stosujemy następujące
                  kategorie:
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>
                    <strong className="font-semibold text-foreground">niezbędne</strong> — konieczne
                    do prawidłowego działania serwisu; nie wymagają zgody;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">funkcjonalne</strong> — m.in.
                    związane z osadzonym widgetem rezerwacji Calendly;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">analityczne</strong> —
                    Google Analytics 4 (wdrażany przez Google Tag Manager); pomagają nam zrozumieć,
                    jak korzystasz z serwisu;
                  </li>
                  <li>
                    <strong className="font-semibold text-foreground">marketingowe</strong> —
                    Meta Pixel; służą pomiarom skuteczności i personalizacji działań reklamowych.
                  </li>
                </ul>
                <p>
                  Cookies analityczne i marketingowe uruchamiamy wyłącznie po wyrażeniu przez Ciebie
                  zgody w banerze cookies (zgodnie z mechanizmem Google Consent Mode v2). Zgodę możesz
                  w każdej chwili zmienić lub wycofać poprzez ustawienia banera, a także zarządzać
                  plikami cookies i usuwać je w ustawieniach swojej przeglądarki.
                </p>
              </Section>

              <Section title="§10. Zautomatyzowane podejmowanie decyzji">
                <p>
                  Twoje dane nie podlegają zautomatyzowanemu podejmowaniu decyzji wywołującemu wobec
                  Ciebie skutki prawne. Narzędzia analityczne i marketingowe mogą realizować profilowanie
                  w celach statystycznych i reklamowych, które nie wywołuje wobec Ciebie skutków prawnych
                  ani nie wpływa istotnie na Twoją sytuację.
                </p>
              </Section>

              <Section title="§11. Zmiany Polityki Prywatności">
                <p>
                  Zastrzegamy możliwość aktualizacji niniejszej Polityki Prywatności — np. w związku ze
                  zmianami w przepisach prawa lub stosowanych narzędziach. Aktualna wersja jest zawsze
                  dostępna pod adresem pillarweb.pl/polityka-prywatnosci, a data ostatniej aktualizacji
                  wskazana jest na początku dokumentu.
                </p>
              </Section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12 border-t border-card-border pt-10 first:mt-10">
      <h2 className="font-display text-xl font-bold tracking-tight lg:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-strong">{children}</div>
    </section>
  );
}
