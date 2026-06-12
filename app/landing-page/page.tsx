/**
 * PODSTRONA — /landing-page
 * -------------------------
 * Oferta usługi tworzenia landing page'y dla firm budowlanych.
 * Reużywa komponenty strony głównej (z własną treścią z
 * `lib/content-landing-page.ts`) i dokłada sekcje bespoke (Landing*),
 * których strona główna nie ma. Strona główna pozostaje nietknięta —
 * defaults w komponentach wskazują na `lib/content.ts`.
 *
 * Casty `as unknown as typeof …` są konieczne tam, gdzie treść landinga ma
 * inne literały tekstu niż defaultowy content.ts (TypeScript bez castu rzuca
 * „Type literal differs”). W runtime kształty są identyczne. Identyczny wzorzec
 * jak w /producenci-budowlani.
 */

import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { IndustriesMarquee } from "../components/IndustriesMarquee";
import { LogosShowcase } from "../components/LogosShowcase";
import { PortfolioSection } from "../components/PortfolioSection";
import { LandingSegments } from "../components/LandingSegments";
import { VslSection } from "../components/VslSection";
import { LandingUseCases } from "../components/LandingUseCases";
import { LandingOfferGrid } from "../components/LandingOfferGrid";
import { OverlayCTA } from "../components/OverlayCTA";
import { DifferentiatorSection } from "../components/DifferentiatorSection";
import { Testimonials } from "../components/Testimonials";
import { ProcessSection } from "../components/ProcessSection";
import { LandingSecurityCallout } from "../components/LandingSecurityCallout";
import { LandingFitSection } from "../components/LandingFitSection";
import { LandingComparisonTable } from "../components/LandingComparisonTable";
import { LandingOwnership } from "../components/LandingOwnership";
import { GuaranteesSection } from "../components/GuaranteesSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

import {
  NAV_LINKS_LANDING,
  HERO_LANDING,
  HERO_LANDING_SECONDARY_CTA,
  PORTFOLIO_LANDING,
  SEGMENTS_LANDING,
  VSL_LANDING,
  USECASES_LANDING,
  OFFER_LANDING,
  OVERLAY_CTA_LANDING,
  DIFFERENTIATOR_LANDING,
  PROCESS_LANDING,
  SECURITY_CALLOUT_LANDING,
  FIT_LANDING,
  COMPARISON_LANDING,
  OWNERSHIP_LANDING,
  GUARANTEES_LANDING,
  FAQ_LANDING,
  CONTACT_LANDING,
} from "../lib/content-landing-page";

import type {
  HERO,
  VSL,
  DIFFERENTIATOR,
  PROCESS,
  GUARANTEES,
  FAQ,
  CONTACT,
  NAV_LINKS,
} from "../lib/content";

export const metadata: Metadata = {
  title: "Landing page dla firmy budowlanej | Pillar Web",
  description:
    "Customowy landing page dla firm budowlanych, który zamienia ruch z reklam, social mediów i poleceń w wartościowe zapytania. Copywriting, tracking, automatyzacja leadów i wdrożenie. Gotowy do 7 dni.",
};

export default function LandingPagePage() {
  return (
    <>
      <Header navLinks={NAV_LINKS_LANDING as unknown as typeof NAV_LINKS} />
      <main>
        <Hero
          content={HERO_LANDING as unknown as typeof HERO}
          heroImage={HERO_LANDING.heroImage}
          heroImageAlt="Landing page dla firmy budowlanej — nowoczesna realizacja w świetle dziennym"
          secondaryCta={HERO_LANDING_SECONDARY_CTA}
        />
        <IndustriesMarquee />
        <LogosShowcase />
        <PortfolioSection
          headingPrefix={PORTFOLIO_LANDING.headingPrefix}
          headingAccent={PORTFOLIO_LANDING.headingAccent}
          intro={PORTFOLIO_LANDING.intro}
        />
        <LandingSegments content={SEGMENTS_LANDING} />
        <VslSection content={VSL_LANDING as unknown as typeof VSL} />
        <LandingUseCases content={USECASES_LANDING} />
        <LandingOfferGrid content={OFFER_LANDING} />
        <OverlayCTA content={OVERLAY_CTA_LANDING} />
        <DifferentiatorSection
          content={DIFFERENTIATOR_LANDING as unknown as typeof DIFFERENTIATOR}
        />
        <Testimonials />
        <ProcessSection content={PROCESS_LANDING as unknown as typeof PROCESS} />
        <LandingSecurityCallout content={SECURITY_CALLOUT_LANDING} />
        <LandingFitSection content={FIT_LANDING} />
        <LandingComparisonTable content={COMPARISON_LANDING} />
        <LandingOwnership content={OWNERSHIP_LANDING} />
        <GuaranteesSection content={GUARANTEES_LANDING as unknown as typeof GUARANTEES} />
        <FAQSection content={FAQ_LANDING as unknown as typeof FAQ} />
        <ContactSection content={CONTACT_LANDING as unknown as typeof CONTACT} />
      </main>
      <Footer />
    </>
  );
}
