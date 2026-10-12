/**
 * Treść /test-str-gl ułożona w kształt komponentów strony głównej.
 * Źródłem słów jest copy.ts (tekst zaakceptowany przez Kamila) — tu tylko
 * dzielimy go na pola (nagłówek / akcent / wstęp / punkty) i dobieramy grafiki.
 */
import {
  ABOUT as ABOUT_HOME,
  ASSET_BASE,
  PROCESS as PROCESS_HOME,
  SPECIALIZATIONS,
} from "../lib/content";
import {
  ABOUT,
  BAND,
  COMPARISON,
  DELIVERABLES,
  FAQ,
  FILM,
  FOR_WHOM,
  GUARANTEES,
  HERO,
  OBJECTIONS,
  PRICE,
  PROBLEM,
  PROOF,
  SOLUTION,
  TRIED,
} from "./copy";
import type { HeroContent } from "./_home/HeroT";
import type { ProblemContent } from "./_home/ProblemT";
import type { CardsContent } from "./_home/CardsT";
import type { VslContent } from "./_home/VslT";
import type { PortfolioContent } from "./_home/PortfolioT";
import type { ProofContent } from "./_home/ProofT";
import type { ForWhomContent } from "./_home/ForWhomT";
import type { PricingContent } from "./_home/PricingT";
import type { NumberedItem } from "./_home/NumberedT";
import type { OverlayCTAContent } from "../components/OverlayCTA";


/**
 * Polska typografia: jednoliterowe spójniki i przyimki (a, i, o, u, w, z)
 * nie zostają na końcu linii — twarda spacja po nich. Działa na wszystkich
 * tekstach obiektu, z pominięciem ścieżek i adresów.
 */
const SKIP_KEYS = new Set(["href", "image", "src", "poster", "aspect", "slug", "duration", "imageAlt", "alt"]);
const nbspText = (s: string) => s.replace(/(?<=^|\s)([aiouwzAIOUWZ])\s/g, "$1\u00a0");
function nb<T>(value: T, key = ""): T {
  if (typeof value === "string") return (SKIP_KEYS.has(key) ? value : nbspText(value)) as T;
  if (Array.isArray(value)) return value.map((v) => nb(v, key)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, nb(v, k)])) as T;
  }
  return value;
}

const CTA = { label: "Umów rozmowę o swojej firmie", href: "#kontakt" } as const;
const IMG = {
  site: "/images/services/strona-lepsza-niz-konkurencja.webp",
  google: "/images/services/klienci-znajda-w-google.webp",
  build: "/images/services/kompleksowe-wdrozenie.webp",
  chat: "/images/services/innowacyjne-ai.webp",
  seal: `${ASSET_BASE}/gwarancja-satysfakcji-pillarweb.webp`,
  calendar: `${ASSET_BASE}/gwarancja-terminowosci-pillarweb.webp`,
  phone: `${ASSET_BASE}/gwarancja-techniczna-pillarweb.webp`,
} as const;

export const NAV_TEST = [
  { label: "Problem", href: "#problem" },
  { label: "Rozwiązanie", href: "#rozwiazanie" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces współpracy", href: "#jak-pracujemy" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
];

/* 1. Hero — nagłówek jak na stronie głównej, drugie zdanie nagłówka jako akcent podtytułu. */
export const HERO_T: HeroContent = nb({
  brandLine: HERO.eyebrow,
  titleLine1: "Strony internetowe",
  titleLine2Prefix: "dla",
  titleLine2Accent: "firm budowlanych",
  subtitleParts: [
    { text: `${HERO.titleBefore}${HERO.titleMark}${HERO.titleAfter}.`, accent: true },
    { text: HERO.lead },
  ],
  cta: CTA,
  note: HERO.note,
});

/* 2. Problem — wygląd sekcji „Słaba strona internetowa kosztuje…”. */
export const PROBLEM_T: ProblemContent = nb({
  heading: { prefix: PROBLEM.headingBefore.trim(), accent: PROBLEM.headingMark },
  title: PROBLEM.lead,
  items: PROBLEM.items.map((item) => ({
    title: item.title,
    paragraphs: item.paragraphs,
    quote: "quote" in item ? item.quote : undefined,
    quoteBy: "quoteBy" in item ? item.quoteBy : undefined,
  })),
  image: "/images/te-5-rzeczy-firmy-budowlane-pillarweb.webp",
  imageAlt: "Grafika Pillar Web: właściciel firmy budowlanej wieczorem nad wyceną, napis „Te 5 rzeczy niszczy biznes firm budowlanych”",
  imagePortrait: true,
  summary: `${PROBLEM.closingBefore}**${PROBLEM.closingAccent}**`,
  cta: CTA,
});

/* 3. Co już próbowałeś — wygląd „Nie jesteśmy agencją od wszystkiego”. */
export const TRIED_T = nb({
  headingPrefix: "Portale, grupy na Facebooku, polecenia, ulotki.",
  headingAccent: "Ile z tego masz już za sobą?",
  intro: TRIED.lead,
  items: TRIED.items.map(
    (item): NumberedItem => ({
      title: item.name,
      paragraphs: [`**${TRIED.columns.gives}:** ${item.gives}`, `**${TRIED.columns.ends}:** ${item.ends}`],
    }),
  ),
});

/* 4. Pas ciemny — OverlayCTA strony głównej. */
const bandSplit = BAND.body.indexOf("Żaden nie buduje");
export const BAND_T: OverlayCTAContent = nb({
  headingSegments: [
    { text: BAND.headingBefore.trim() },
    { text: `${BAND.headingAccent}.`, accent: true },
    { text: BAND.body.slice(0, bandSplit).trim() },
    { text: BAND.body.slice(bandSplit).trim(), accent: true },
  ],
  buttonLabel: CTA.label,
  buttonHref: CTA.href,
  footnote: "To nie będzie rozmowa sprzedażowa.",
});

/* 5. Rozwiązanie — trzy filary w wyglądzie gwarancji strony głównej. */
const leadSplit = SOLUTION.lead.indexOf("Dlatego budujemy");
export const SOLUTION_T: CardsContent = nb({
  headingLine1: SOLUTION.headingBefore.trim(),
  headingLine2: SOLUTION.headingMark,
  subheadingPrefix: SOLUTION.lead.slice(0, leadSplit).trim(),
  subheadingAccent: SOLUTION.lead.slice(leadSplit).trim(),
  items: SOLUTION.pillars.map((p, i) => ({
    number: `${i + 1}.`,
    title: p.title,
    image: [IMG.site, IMG.build, IMG.chat][i],
    bodyParts: [{ text: p.body }],
  })),
});

/* 6. Co to zmienia — wygląd siatki numerowanej, na papierze wciętym. */
export const CHANGES_T = nb({
  headingPrefix: "Co to zmienia w pięciu problemach,",
  headingAccent: "o których pisaliśmy wyżej",
  items: SOLUTION.changes.map((c): NumberedItem => ({ title: c.problem, paragraphs: [c.answer] })),
  referral: SOLUTION.referral,
  honestChip: SOLUTION.honestChip,
  honest: SOLUTION.honest,
  dreamBefore: SOLUTION.dreamBefore,
  dreamAccent: SOLUTION.dreamAccent,
  dreamAfter: SOLUTION.dreamAfter,
});

/* 7. Film — VslSection strony głównej. */
const filmComma = FILM.heading.indexOf(",");
export const FILM_T: VslContent = nb({
  headingPrefix: FILM.heading.slice(0, filmComma + 1),
  headingAccent: FILM.heading.slice(filmComma + 1).trim(),
  src: FILM.src,
  poster: FILM.poster,
  aspect: FILM.aspect,
  duration: FILM.duration,
  name: FILM.name,
  cta: CTA,
});

/* 8. Kto za tym stoi — AboutSection strony głównej (to samo zdjęcie). */
export const ABOUT_T = nb({
  heading: ABOUT.heading,
  paragraphs: [...ABOUT.paragraphs, `${ABOUT.name}, ${ABOUT.role}`],
  image: ABOUT_HOME.image,
  imageAlt: ABOUT_HOME.imageAlt,
} as unknown as typeof ABOUT_HOME);

/* 9. Co dostajesz — akordeon z grafikami („Co dostajesz w ramach współpracy”). */
const DELIVERABLE_IMAGES = [IMG.site, IMG.phone, IMG.chat, IMG.seal, IMG.calendar, IMG.google, IMG.build, IMG.build, IMG.chat];
export const DELIVERABLES_T = nb({
  headingPrefix: DELIVERABLES.headingBefore.trim(),
  headingAccent: DELIVERABLES.headingMark,
  intro: DELIVERABLES.lead,
  services: DELIVERABLES.items.map((item, i) => ({
    title: item.title,
    description: item.body,
    image: DELIVERABLE_IMAGES[i],
  })),
});

/* 10. Jak to wygląda — ProcessSection strony głównej (z notą „Ważne”). */
export const PROCESS_T = nb({
  heading: { prefix: "", accent: DELIVERABLES.processHeading, suffix: "" },
  important: {
    prefix: DELIVERABLES.timingBefore.trim(),
    accent: `${DELIVERABLES.timingMark}.`,
    suffix: DELIVERABLES.timingAfter.replace(/^\.\s*/, ""),
  },
  image: PROCESS_HOME.image,
  steps: DELIVERABLES.steps.map((s, i) => ({ number: String(i + 1).padStart(2, "0"), title: s.title, body: s.body })),
} as unknown as typeof PROCESS_HOME);

/* 11. Tabela porównawcza — ComparisonSection strony głównej. */
const cmpDot = COMPARISON.heading.indexOf(".");
export const COMPARISON_T = nb({
  heading: {
    accent: COMPARISON.heading.slice(0, cmpDot + 1),
    rest: ` ${COMPARISON.heading.slice(cmpDot + 1).trim()}`,
  },
  subtitle: COMPARISON.lead,
  columns: {
    criterion: COMPARISON.columns.feature,
    others: COMPARISON.columns.others,
    pillar: { line1: COMPARISON.columns.us, line2: "tylko dla firm budowlanych" },
  },
  categories: COMPARISON.groups.map((g) => ({ title: g.title, rows: g.rows })),
});

/* 12. Dowody — wygląd wyników kampanii strony głównej. */
export const PROOF_T: ProofContent = nb({
  heading: { prefix: `${PROOF.headingMark}${PROOF.headingAfter.split(".")[0]}.`, accent: PROOF.headingAfter.split(".")[1].trim() },
  intro: PROOF.lead,
  cases: PROOF.cases.map((c) => ({
    title: c.title,
    text: c.text,
    extra: "extra" in c ? c.extra : undefined,
    shots: c.shots.map((s, j) => ({ period: c.rows[j].month, image: s.image, alt: s.alt })),
  })),
});

const CLIENT_TYPE: Record<string, string> = {
  deweloper: "Deweloper",
  "firma budująca domy": "Firma budująca domy",
  "generalny wykonawca": "Generalny wykonawca",
};
export const PORTFOLIO_T: PortfolioContent = nb({
  headingPrefix: "Tak wyglądają strony,",
  headingAccent: "które zbudowaliśmy",
  intro: PROOF.portfolioIntro,
  projects: PROOF.projects.map((p) => ({
    slug: p.name.toLowerCase().replace(/\s+/g, "-"),
    clientType: CLIENT_TYPE[p.type] ?? p.type,
    name: p.name,
    description: p.body,
    src: p.src,
    poster: p.poster,
    aspect: p.aspect,
    duration: p.duration,
  })),
});

export const TESTIMONIALS_T = nb({
  headingPrefix: "Co mówią właściciele firm,",
  headingAccent: "z którymi pracowaliśmy",
  cta: CTA,
  ctaNote: PROOF.ctaNote,
});

/* 13. Twoje „ale” — FAQSection strony głównej. */
export const OBJECTIONS_T = nb({
  heading: OBJECTIONS.heading,
  items: OBJECTIONS.items.map((i) => ({ question: i.q, answer: i.a })),
});

/* 14. Dla kogo — kafle branż ze strony głównej + panel „nie dla”. */
const imageFor = (label: string) =>
  SPECIALIZATIONS.items.find((s) => s.label === label)?.image ?? SPECIALIZATIONS.items[0].image;
const forWhomComma = FOR_WHOM.heading.indexOf(",");
export const FOR_WHOM_T: ForWhomContent = nb({
  headingPrefix: FOR_WHOM.heading.slice(0, forWhomComma + 1),
  headingAccent: FOR_WHOM.heading.slice(forWhomComma + 1).trim(),
  lead: FOR_WHOM.lead,
  items: FOR_WHOM.industries.map((ind) => ({
    label: ind.name,
    image: imageFor(ind.name),
    note: "note" in ind ? ind.note : undefined,
  })),
  notHeading: FOR_WHOM.notHeading,
  not: FOR_WHOM.not,
});

/* 15. Cena — PricingSection strony głównej. */
const priceSplit = PRICE.body.indexOf("Zanim podamy");
export const PRICE_T: PricingContent = nb({
  eyebrow: "Cennik",
  heading: { lead: PRICE.headingBefore, accent: PRICE.headingAfter },
  intro: PRICE.body.slice(0, priceSplit).trim(),
  price: { prefix: "od", value: PRICE.amount },
  factorsHeading: PRICE.factorsLabel.replace(/:$/, ""),
  factors: PRICE.factors.map((f) => f.charAt(0).toUpperCase() + f.slice(1)),
  consultation: PRICE.body.slice(priceSplit).trim(),
  cta: { label: PRICE.cta, href: "#kontakt" },
  ctaNote: PRICE.note,
});

/* 16. FAQ — FAQSection strony głównej. */
export const FAQ_T = nb({
  heading: FAQ.heading,
  items: FAQ.items.map((i) => ({ question: i.q, answer: i.a })),
});

/* 17. Gwarancje — GuaranteesSection strony głównej, 4 kafle. */
const GUARANTEE_ACCENTS = [
  "Jeśli uznasz, że to nie ten kierunek, zwracamy pieniądze.",
  "Wystarczy jeden dzień spóźnienia, a oddajemy Ci 50% wynagrodzenia.",
  "naprawiamy to bez dodatkowych kosztów.",
  "Strona stoi na Twojej domenie, zapytania trafiają prosto do Ciebie, a analityka jest na Twoich kontach.",
];
const GUARANTEE_IMAGES = [IMG.seal, IMG.calendar, IMG.phone, IMG.site];
export const GUARANTEES_T: CardsContent = nb({
  headingLine1: GUARANTEES.headingBefore.trim(),
  headingLine2: GUARANTEES.headingMark,
  items: GUARANTEES.items.map((g, i) => {
    const accent = GUARANTEE_ACCENTS[i];
    const at = g.body.indexOf(accent);
    const bodyParts =
      at >= 0
        ? [
            { text: g.body.slice(0, at) },
            { text: accent, accent: true },
            { text: g.body.slice(at + accent.length) },
          ].filter((p) => p.text.length > 0)
        : [{ text: g.body }];
    return {
      number: `${i + 1}.`,
      title: g.title.replace(/\.$/, ""),
      image: GUARANTEE_IMAGES[i],
      bodyParts,
    };
  }),
});
