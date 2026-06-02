import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ThankYouSection } from "../components/ThankYouSection";

export const metadata: Metadata = {
  title: "Dziękujemy — Pillar Web",
  description:
    "Dziękujemy za pozostawienie kontaktu. Odezwiemy się w ciągu od 5 minut do maksymalnie 24 godzin (w dni robocze).",
  // Strona-potwierdzenie nie powinna być indeksowana.
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <ThankYouSection />
      </main>
      <Footer />
    </>
  );
}
