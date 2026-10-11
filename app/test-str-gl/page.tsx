import type { Metadata } from "next";
import { Header } from "../components/Header";
import { IndustriesMarquee } from "../components/IndustriesMarquee";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CONTACT } from "../lib/content";
import { CONTACT_COPY } from "./copy";
import {
  TestAbout,
  TestBand,
  TestFilm,
  TestHero,
  TestLogos,
  TestProblem,
  TestSolution,
  TestTried,
} from "./_components/sections-top";
import {
  TestComparison,
  TestDeliverables,
  TestFaq,
  TestForWhom,
  TestGuarantees,
  TestObjections,
  TestPrice,
  TestProof,
} from "./_components/sections-bottom";

/**
 * /test-str-gl — testowa wersja strony głównej (nowa treść pod klienta
 * świadomego problemu + nowa kompozycja w systemie „Plan” z brandbooka).
 * Obecna strona główna (/) zostaje bez zmian. Strona wyłączona z indeksowania.
 */
export const metadata: Metadata = {
  title: "Strony internetowe dla firm budowlanych | Pillar Web",
  description:
    "Strony dla firm budowlanych od 7 pracowników. Klient widzi Twoje realizacje i opinie, zanim zapyta o cenę. Gotowe w 3 tygodnie, od 11 000 zł.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/test-str-gl" },
};

// Formularz to ten sam komponent co na stronie głównej (te same pola, ta sama
// ścieżka do Airtable i powiadomień), tylko z tekstami z nowej wersji.
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
      <Header minimal />
      <main id="main">
        <TestHero />
        <IndustriesMarquee />
        <TestLogos />
        <TestProblem />
        <TestTried />
        <TestBand />
        <TestSolution />
        <TestFilm />
        <TestAbout />
        <TestDeliverables />
        <TestComparison />
        <TestProof />
        <TestObjections />
        <TestForWhom />
        <TestPrice />
        <TestFaq />
        <TestGuarantees />
        <ContactSection content={CONTACT_TEST} source="home" variant="full" />
      </main>
      <Footer />
    </>
  );
}
