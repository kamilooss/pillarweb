import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";
import { FloatingCTA } from "./components/FloatingCTA";

const GTM_ID = "GTM-5KHH6GDD";

// CookieYes (certyfikowany CMP, plan Free) — wklej tu swój Site ID.
// Znajdziesz go w skrypcie instalacyjnym CookieYes, w adresie:
// https://cdn-cookieyes.com/client_data/<SITE_ID>/script.js
// Dopóki zostaje placeholder, baner się NIE ładuje, a strona działa w trybie
// „zgoda odrzucona" (Consent Mode = denied) — czyli bezpiecznie wg RODO.
const COOKIEYES_ID: string = "WKLEJ_SITE_ID";

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
  // Wyłącza auto-detekcję iOS Safari (daty/adresy/numery/e-maile w treści).
  // To ona nakładała kropkowaną, klikalną warstwę na nagłówek „Maksymalnie
  // 7 dni" i próbowała otwierać Mapy. Jawne linki tel:/mailto: działają dalej,
  // bo nie zależą od auto-wykrywania.
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
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
        {/* Google Consent Mode v2 — domyślnie WSZYSTKO odrzucone.
            Musi być przed GTM, żeby tagi Google startowały w trybie bez zgody.
            CookieYes zmieni te wartości na „granted" po akceptacji w banerze. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'denied','personalization_storage':'denied','security_storage':'granted','wait_for_update':500});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);`,
          }}
        />

        {/* CookieYes — baner RODO + automatyczna aktualizacja Consent Mode.
            W panelu CookieYes włącz „Google Consent Mode" i język polski. */}
        {COOKIEYES_ID !== "WKLEJ_SITE_ID" && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            id="cookieyes"
            type="text/javascript"
            src={`https://cdn-cookieyes.com/client_data/${COOKIEYES_ID}/script.js`}
          />
        )}

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
