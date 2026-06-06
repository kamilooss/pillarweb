/**
 * PODSTRONA — PRODUCENCI BUDOWLANI
 * --------------------------------
 * Spersonalizowana wersja strony głównej dla nisz: producenci stolarki,
 * pokryć dachowych, kostki, chemii budowlanej, izolacji, farb, ogrodzeń,
 * paneli warstwowych.
 *
 * Reużywa te same komponenty co strona główna, ale przekazuje im własny
 * content z `lib/content-producenci.ts`. Strona główna pozostaje
 * nietknięta — defaults w komponentach wskazują na obecny `lib/content.ts`.
 *
 * Z układu strony głównej WYŁĄCZONE (zgodnie z decyzją):
 * - IndustriesMarquee (pasek 8 podnisz)
 * - SpecializationsSection (kafelki specjalizacji)
 * - PricingSection (cennik tymczasowo wycofany)
 * - Testimonials (opinie pochodzą z wykonawców, nie z producentów —
 *   nie chcemy fałszywych sygnałów społecznego dowodu)
 */

import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LogosShowcase } from "../components/LogosShowcase";
import { PortfolioSection } from "../components/PortfolioSection";
import { ServicesAccordion } from "../components/ServicesAccordion";
import { VslSection } from "../components/VslSection";
import { ContentVideoSection } from "../components/ContentVideoSection";
import { OverlayCTA } from "../components/OverlayCTA";
import { DifferentiatorSection } from "../components/DifferentiatorSection";
import { GuaranteesSection } from "../components/GuaranteesSection";
import { ProcessSection } from "../components/ProcessSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { AboutSection } from "../components/AboutSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import {
  HERO_PRODUCENCI,
  NAV_LINKS_PRODUCENCI,
  CONTENT_SECTION_PRODUCENCI,
  DIFFERENTIATOR_PRODUCENCI,
  GUARANTEES_PRODUCENCI,
  PROCESS_PRODUCENCI,
  COMPARISON_PRODUCENCI,
  ABOUT_PRODUCENCI,
  FAQ_PRODUCENCI,
  CONTACT_PRODUCENCI,
  VSL_PRODUCENCI,
  PORTFOLIO_PRODUCENCI,
  OVERLAY_CTA_PRODUCENCI,
  SERVICES_PRODUCENCI,
} from "../lib/content-producenci";

import type {
  HERO,
  CONTENT_SECTION,
  DIFFERENTIATOR,
  GUARANTEES,
  PROCESS,
  COMPARISON,
  ABOUT,
  FAQ,
  CONTACT,
  VSL,
  NAV_LINKS,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Strony internetowe dla producentów budowlanych | Pillar Web",
  description:
    "Indywidualne projekty z biblioteką BIM, strefą architekta i wyszukiwarką dystrybutorów. Strona producenta materiałów budowlanych, która sprawia, że Wasz produkt trafia do specyfikacji projektowych.",
};

/**
 * Casts `as unknown as typeof …` są tu konieczne, bo treści dla producentów
 * mają inne literały tekstu niż defaultowy `content.ts`. TypeScript bez
 * castowania rzucałby błędem „Type literal differs" — w runtime kształty
 * są identyczne i komponenty działają prawidłowo. Alternatywa (szersze typy
 * w każdym komponencie) byłaby bardziej inwazyjna i ryzykowna.
 */
export default function ProducenciBudowlaniPage() {
  return (
    <>
      <Header navLinks={NAV_LINKS_PRODUCENCI as unknown as typeof NAV_LINKS} />
      <main>
        <Hero
          content={HERO_PRODUCENCI as unknown as typeof HERO}
          heroImage={HERO_PRODUCENCI.heroImage}
          heroImageAlt="Producent materiałów budowlanych — hala produkcyjna i logistyka"
        />
        <LogosShowcase />
        <PortfolioSection
          headingPrefix={PORTFOLIO_PRODUCENCI.headingPrefix}
          headingAccent={PORTFOLIO_PRODUCENCI.headingAccent}
          intro={PORTFOLIO_PRODUCENCI.intro}
        />
        <ServicesAccordion
          services={SERVICES_PRODUCENCI}
          headingPrefix="Co dostają w ramach"
          headingAccent="współpracy"
        />
        <VslSection content={VSL_PRODUCENCI as unknown as typeof VSL} />
        <ContentVideoSection
          content={CONTENT_SECTION_PRODUCENCI as unknown as typeof CONTENT_SECTION}
        />
        <OverlayCTA content={OVERLAY_CTA_PRODUCENCI} />
        <DifferentiatorSection
          content={DIFFERENTIATOR_PRODUCENCI as unknown as typeof DIFFERENTIATOR}
        />
        <GuaranteesSection
          content={GUARANTEES_PRODUCENCI as unknown as typeof GUARANTEES}
        />
        <ProcessSection content={PROCESS_PRODUCENCI as unknown as typeof PROCESS} />
        <ComparisonSection
          content={COMPARISON_PRODUCENCI as unknown as typeof COMPARISON}
        />
        <AboutSection content={ABOUT_PRODUCENCI as unknown as typeof ABOUT} />
        <FAQSection content={FAQ_PRODUCENCI as unknown as typeof FAQ} />
        <ContactSection content={CONTACT_PRODUCENCI as unknown as typeof CONTACT} />
      </main>
      <Footer />
    </>
  );
}
