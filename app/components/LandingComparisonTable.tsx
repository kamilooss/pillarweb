import { Reveal } from "./Reveal";
import { Button } from "./Button";

/**
 * PORÓWNANIE — tabela tekstowa 3-kolumnowa (kryterium / większość firm /
 * Twoja oferta). Inny format niż check/X w ComparisonSection na home —
 * tu liczą się konkretne wartości tekstowe.
 *
 * Desktop (md+): siatka-tabela w arkuszu (surface-panel) z wyróżnioną
 * kolumną oferty (lime top edge + tło accentowe). Mobile: stos kart
 * (kryterium + dwie etykietowane wartości) — bez ściśniętych kolumn.
 *
 * id="porownanie" — kotwica nawigacji. Bespoke dla /landing-page.
 */
interface ComparisonContent {
  headingPrefix: string;
  headingAccent: string;
  intro: string;
  columns: { criterion: string; others: string; pillar: string };
  rows: readonly {
    readonly feature: string;
    readonly others: string;
    readonly pillar: string;
  }[];
  summary: { title: string; paragraphs: readonly string[] };
  cta: { label: string; href: string };
}

const COLS =
  "md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(0,1.15fr)]";

export function LandingComparisonTable({
  content,
}: {
  content: ComparisonContent;
}) {
  const { headingPrefix, headingAccent, intro, columns, rows, summary, cta } =
    content;

  return (
    <section
      id="porownanie"
      className="border-t border-card-border bg-background py-20 lg:py-28"
      aria-label="Porównanie ofert"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.12] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-6 max-w-3xl text-base leading-relaxed text-muted-strong sm:text-lg"
        >
          {intro}
        </Reveal>

        {/* DESKTOP — tabela. Role'e ARIA (table/row/columnheader/rowheader/
            cell) zachowują semantykę tabeli mimo div-gridu — czytnik ekranu
            wiąże wartość z nagłówkiem kolumny i wiersza (WCAG 1.3.1). */}
        <Reveal delay={80} className="mt-14 hidden md:block lg:mt-16">
          <div role="table" className="surface-panel overflow-hidden">
            {/* Header */}
            <div
              role="row"
              className={`grid ${COLS} items-stretch border-b border-card-border-strong`}
            >
              <div
                role="columnheader"
                className="px-6 py-5 text-xs font-bold uppercase tracking-[0.18em] text-muted"
              >
                {columns.criterion}
              </div>
              <div
                role="columnheader"
                className="border-l border-card-border px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-strong"
              >
                {columns.others}
              </div>
              <div
                role="columnheader"
                className="relative border-l border-card-border-strong bg-accent/[0.07] px-6 py-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-accent"
                />
                <span className="font-display text-sm font-bold leading-tight text-foreground">
                  {columns.pillar}
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row) => (
              <div
                key={row.feature}
                role="row"
                className={`grid ${COLS} items-stretch border-b border-card-border last:border-b-0`}
              >
                <div
                  role="rowheader"
                  className="flex items-center px-6 py-5 text-[15px] font-semibold leading-snug text-foreground"
                >
                  {row.feature}
                </div>
                <div
                  role="cell"
                  className="flex items-center border-l border-card-border px-6 py-5 text-sm leading-snug text-muted"
                >
                  {row.others}
                </div>
                <div
                  role="cell"
                  className="flex items-center border-l border-card-border-strong bg-accent/[0.07] px-6 py-5 text-sm leading-snug text-foreground"
                >
                  {row.pillar}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* MOBILE — stos kart */}
        <div className="mt-12 space-y-4 md:hidden">
          {rows.map((row, i) => (
            <Reveal
              key={row.feature}
              delay={Math.min(i * 30, 180)}
              className="surface-panel p-5"
            >
              <div className="font-display text-base font-bold tracking-tight text-foreground">
                {row.feature}
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                    {columns.others}
                  </span>
                  <p className="mt-1 text-sm leading-snug text-muted">{row.others}</p>
                </div>
                <div className="border-l-[3px] border-accent pl-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-strong">
                    {columns.pillar}
                  </span>
                  <p className="mt-1 text-sm leading-snug text-foreground">
                    {row.pillar}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Podsumowanie + CTA */}
        <Reveal className="mt-16 max-w-3xl lg:mt-20">
          <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-bold tracking-tight text-foreground">
            {summary.title}
          </h3>
          <div className="mt-5 space-y-4">
            {summary.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted-strong">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-9">
            <Button href={cta.href} size="lg" className="min-w-[260px] max-w-full">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
