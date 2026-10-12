import type { Metadata } from "next";
import { Header } from "../components/Header";
import { IndustriesMarquee } from "../components/IndustriesMarquee";
import { OverlayCTA } from "../components/OverlayCTA";
import { AboutSection } from "../components/AboutSection";
import { ProcessSection } from "../components/ProcessSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { COMPARISON, CONTACT, FAQ, NAV_LINKS } from "../lib/content";
import { CONTACT_COPY, LOGOS_HEADING } from "./copy";
import {
  ABOUT_T,
  BAND_T,
  CHANGES_T,
  COMPARISON_T,
  DELIVERABLES_T,
  FAQ_T,
  FILM_T,
  FOR_WHOM_T,
  GUARANTEES_T,
  HERO_T,
  NAV_TEST,
  OBJECTIONS_T,
  PORTFOLIO_T,
  PRICE_T,
  PROBLEM_T,
  PROCESS_T,
  PROOF_T,
  SOLUTION_T,
  TESTIMONIALS_T,
  TRIED_T,
} from "./content-home";
import { HeroT } from "./_home/HeroT";
import { LogosT } from "./_home/LogosT";
import { ProblemT } from "./_home/ProblemT";
import { NumberedT } from "./_home/NumberedT";
import { CardsT } from "./_home/CardsT";
import { VslT } from "./_home/VslT";
import { AccordionT } from "./_home/AccordionT";
import { ProofT } from "./_home/ProofT";
import { PortfolioT } from "./_home/PortfolioT";
import { TestimonialsT } from "./_home/TestimonialsT";
import { ForWhomT } from "./_home/ForWhomT";
import { PricingT } from "./_home/PricingT";

/**
 * /test-str-gl — testowa wersja strony głównej: NOWA treść (zaakceptowana
 * przez Kamila) w WYGLĄDZIE strony głównej. Każda sekcja to komponent strony
 * głównej albo jego kopia z _home/ (te same klasy), bo oryginał nie przyjmował
 * innej treści. Kolejność sekcji = zatwierdzona struktura (klient świadomy
 * problemu). Strona główna (/) bez zmian. Wyłączona z indeksowania.
 */
export const metadata: Metadata = {
  title: "Strony internetowe dla firm budowlanych | Pillar Web",
  description:
    "Strony dla firm budowlanych od 7 pracowników. Klient widzi Twoje realizacje i opinie, zanim zapyta o cenę. Gotowe w 3 tygodnie, od 11 000 zł.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/test-str-gl" },
};

// Formularz — ten sam komponent co na stronie głównej (te same pola i ścieżka
// do Airtable/powiadomień), z tekstami z nowej wersji. P.S. od Kamila stoi
// w lewej kolumnie, pod jego zdjęciem.
const CONTACT_TEST = {
  ...CONTACT,
  headingLine1: CONTACT_COPY.headingLine1,
  headingLine2: CONTACT_COPY.headingLine2,
  description: CONTACT_COPY.description,
  urgencyNote: CONTACT_COPY.urgencyNote,
  submitLabel: CONTACT_COPY.submitLabel,
  submitNote: CONTACT_COPY.submitNote,
  formNote: CONTACT_COPY.ps,
} as unknown as typeof CONTACT;

export default function TestHomePage() {
  return (
    <>
      <Header navLinks={NAV_TEST as unknown as typeof NAV_LINKS} />
      <main>
        <HeroT content={HERO_T} />
        <IndustriesMarquee />
        <LogosT heading={LOGOS_HEADING} />

        <ProblemT id="problem" content={PROBLEM_T} />

        <NumberedT
          id="kanaly"
          headingPrefix={TRIED_T.headingPrefix}
          headingAccent={TRIED_T.headingAccent}
          intro={TRIED_T.intro}
          items={TRIED_T.items}
        />

        <OverlayCTA content={BAND_T} />

        <CardsT id="rozwiazanie" content={SOLUTION_T} />

        <NumberedT
          id="co-to-zmienia"
          tone="sunken"
          headingPrefix={CHANGES_T.headingPrefix}
          headingAccent={CHANGES_T.headingAccent}
          items={CHANGES_T.items}
        >
          <div className="mt-16 max-w-3xl space-y-8 border-t border-card-border pt-12 lg:mt-20">
            <Reveal as="p" className="leading-relaxed text-muted-strong lg:text-lg">
              {CHANGES_T.referral}
            </Reveal>
            <Reveal as="p" delay={60} className="leading-relaxed text-muted-strong">
              <span className="mr-1 bg-accent px-1.5 py-0.5 font-display text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
                {CHANGES_T.honestChip}
              </span>{" "}
              {CHANGES_T.honest}
            </Reveal>
            <Reveal as="p" delay={100} className="text-lg font-medium leading-snug text-foreground lg:text-xl">
              {CHANGES_T.dreamBefore}
              <span className="underline-accent font-semibold">{CHANGES_T.dreamAccent}</span>
              {CHANGES_T.dreamAfter}
            </Reveal>
          </div>
        </NumberedT>

        <VslT content={FILM_T} />

        <AboutSection content={ABOUT_T} />

        <AccordionT
          id="co-dostajesz"
          headingPrefix={DELIVERABLES_T.headingPrefix}
          headingAccent={DELIVERABLES_T.headingAccent}
          intro={DELIVERABLES_T.intro}
          services={DELIVERABLES_T.services}
        />

        <ProcessSection content={PROCESS_T} />

        <ComparisonSection content={COMPARISON_T as unknown as typeof COMPARISON} />

        <ProofT content={PROOF_T} />
        <PortfolioT content={PORTFOLIO_T} />
        <TestimonialsT {...TESTIMONIALS_T} />

        <FAQSection content={OBJECTIONS_T as unknown as typeof FAQ} />

        <ForWhomT id="dla-kogo" content={FOR_WHOM_T} />

        <PricingT content={PRICE_T} />

        <FAQSection content={FAQ_T as unknown as typeof FAQ} />

        <CardsT id="gwarancje" content={GUARANTEES_T} />

        <ContactSection content={CONTACT_TEST} source="home" variant="full" />
      </main>
      <Footer />
    </>
  );
}
