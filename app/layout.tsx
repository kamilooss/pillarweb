import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";
import { FloatingCTA } from "./components/FloatingCTA";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pillarweb — Strony internetowe dla firm budowlanych",
  description:
    "Tworzymy strony internetowe, które wzmacniają markę firm budowlanych i pomagają zdobywać więcej zapytań od właściwych klientów. Strategia, copywriting, SEO i wdrożenie w jednym procesie.",
  keywords: [
    "strony internetowe firmy budowlane",
    "strona dla firmy budowlanej",
    "marketing dla firm budowlanych",
    "SEO firmy budowlane",
    "Google Ads firmy budowlane",
  ],
  authors: [{ name: "Pillarweb" }],
  openGraph: {
    title: "Pillarweb — Strony internetowe dla firm budowlanych",
    description:
      "Profesjonalne strony, które realnie pomagają firmom budowlanym pozyskiwać klientów.",
    url: "https://pillarweb.pl",
    siteName: "Pillarweb",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pillarweb — Strony internetowe dla firm budowlanych",
    description:
      "Profesjonalne strony, które realnie pomagają firmom budowlanym pozyskiwać klientów.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={manrope.variable}>
      <body>
        <SmoothScroll />
        <a href="#main" className="skip-link">
          Przejdź do treści
        </a>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
