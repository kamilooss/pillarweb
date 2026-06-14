import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";
import { FloatingCTA } from "./components/FloatingCTA";

const GTM_ID = "GTM-5KHH6GDD";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
