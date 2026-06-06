import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookingSection } from "../components/BookingSection";

export const metadata: Metadata = {
  title: "Umów spotkanie — Pillar Web",
  description:
    "Wybierz dogodny termin bezpłatnej konsultacji. Po potwierdzeniu otrzymasz e-mail z linkiem do spotkania.",
  // Strona dostępna wyłącznie z opisów Loom — nie chcemy ruchu organicznego.
  robots: { index: false, follow: false },
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
