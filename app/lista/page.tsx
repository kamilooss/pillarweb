/**
 * PODSTRONA /lista — lead magnet „15 miejsc na stronie firmy budowlanej”
 * ---------------------------------------------------------------------
 * Cel: ruch z ManyChata (komentarz „lista” pod postem na IG/FB) ląduje tutaj,
 * dostaje PDF od razu na górze, przechodzi test TAK/NIE i kończy na formularzu.
 *
 * Decyzje, które warto znać przy edycji:
 *  - Header w trybie `minimal` — bez menu, żeby nikt nie wyszedł z testu
 *    w połowie. Stopka zostaje pełna, dla tych, którzy po formularzu chcą
 *    obejrzeć firmę.
 *  - Guzik „Pobierz PDF” stoi NAD listą (w hero) i drugi raz przy pierwszej
 *    z trzech dróg — nigdy pod listą.
 *  - Formularz w wariancie `qualify`: krótki plus obecna strona, termin
 *    i budżet. Wynik testu dokleja się sam (`attachTestScore`).
 *  - Zgłoszenia idą do własnej tabeli w Airtable przez `source="lista"`
 *    (zmienna AIRTABLE_TABLE_LISTA).
 *  - Zaraz po wyniku testu wchodzą dwie sekcje ze strony głównej:
 *    portfolio wideo i wyniki kampanii. Oba komponenty są te same co na „/",
 *    więc wyglądają identycznie — tylko bez akapitu pod nagłówkiem
 *    (`showIntro={false}`), bo tekstu jest na tej stronie aż nadto.
 */

import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ChecklistTest } from "../components/ChecklistTest";
import { PortfolioSection } from "../components/PortfolioSection";
import { CampaignResults } from "../components/CampaignResults";
import {
  ListaHero,
  ListaHowTo,
  ListaIntro,
  ListaPaths,
  ListaScope,
} from "../components/ListaSections";
import { ContactSection } from "../components/ContactSection";
import { CONTACT } from "../lib/content";
import { LISTA_CONTACT, LISTA_META, LISTA_POINTS } from "../lib/content-lista";

const URL = "https://www.pillarweb.pl/lista";

export const metadata: Metadata = {
  title: LISTA_META.title,
  description: LISTA_META.description,
  alternates: { canonical: URL },
  openGraph: {
    title: LISTA_META.ogTitle,
    description: LISTA_META.ogDescription,
    url: URL,
    siteName: "Pillarweb",
    locale: "pl_PL",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: LISTA_META.ogTitle,
    description: LISTA_META.ogDescription,
  },
  robots: { index: true, follow: true },
};

/**
 * Dane strukturalne. `Article` opisuje samą treść, `ItemList` wylicza
 * piętnaście punktów — dzięki temu Google widzi, że to lista kontrolna,
 * a nie zwykły tekst sprzedażowy.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${URL}#article`,
      headline: LISTA_META.ogTitle,
      description: LISTA_META.description,
      inLanguage: "pl-PL",
      author: { "@type": "Person", name: "Kamil Tomczyk" },
      publisher: {
        "@type": "Organization",
        name: "Pillar Web",
        url: "https://www.pillarweb.pl",
      },
      mainEntityOfPage: URL,
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#lista`,
      name: "15 miejsc na stronie firmy budowlanej",
      numberOfItems: LISTA_POINTS.length,
      itemListElement: LISTA_POINTS.map((point) => ({
        "@type": "ListItem",
        position: point.id,
        name: point.title,
        description: point.check,
        url: `${URL}#punkt-${point.id}`,
      })),
    },
  ],
};

export default function ListaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header minimal />
      <main>
        <ListaHero />
        <ListaIntro />
        <ListaHowTo />
        <ListaScope />
        <ChecklistTest />
        <PortfolioSection showIntro={false} />
        <CampaignResults
          headingPrefix="Wyniki skutecznych stron firm budowlanych,"
          headingAccent="które zbudowaliśmy."
          showIntro={false}
        />
        <ListaPaths />
        <ContactSection
          content={LISTA_CONTACT as unknown as typeof CONTACT}
          source="lista"
          variant="qualify"
          attachTestScore
        />
      </main>
      <Footer />
    </>
  );
}
