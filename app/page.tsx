import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IndustriesMarquee } from "./components/IndustriesMarquee";
import { LogosShowcase } from "./components/LogosShowcase";
import { PortfolioSection } from "./components/PortfolioSection";
import { ServicesAccordion } from "./components/ServicesAccordion";
import { CampaignResults } from "./components/CampaignResults";
import { VslSection } from "./components/VslSection";
import { ContentVideoSection } from "./components/ContentVideoSection";
import { OverlayCTA } from "./components/OverlayCTA";
import { DifferentiatorSection } from "./components/DifferentiatorSection";
import { SpecializationsSection } from "./components/SpecializationsSection";
import { GuaranteesSection } from "./components/GuaranteesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { AboutSection } from "./components/AboutSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IndustriesMarquee />
        <LogosShowcase />
        <PortfolioSection />
        <ServicesAccordion />
        {/* Bez remontów łazienek — kopia wersji z nimi: /_backup/strona-glowna-2026-10-14 */}
        <CampaignResults excludeIndustries={["Remonty łazienek"]} />
        <VslSection />
        <ContentVideoSection />
        <OverlayCTA />
        {/* showResults=false — dowód kampanijny jest wyżej, w CampaignResults */}
        <DifferentiatorSection showResults={false} />
        <SpecializationsSection />
        <GuaranteesSection />
        <ProcessSection />
        <PricingSection />
        <ComparisonSection />
        <AboutSection />
        <FAQSection />
        <ContactSection variant="full" />
      </main>
      <Footer />
    </>
  );
}
