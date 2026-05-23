import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IndustriesMarquee } from "./components/IndustriesMarquee";
import { LogosShowcase } from "./components/LogosShowcase";
import { ServicesAccordion } from "./components/ServicesAccordion";
import { Testimonials } from "./components/Testimonials";
import { ContentVideoSection } from "./components/ContentVideoSection";
import { OverlayCTA } from "./components/OverlayCTA";
import { DifferentiatorSection } from "./components/DifferentiatorSection";
import { SpecializationsSection } from "./components/SpecializationsSection";
import { GuaranteesSection } from "./components/GuaranteesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";
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
        <ServicesAccordion />
        <Testimonials />
        <ContentVideoSection />
        <OverlayCTA />
        <DifferentiatorSection />
        <SpecializationsSection />
        <GuaranteesSection />
        <ProcessSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
