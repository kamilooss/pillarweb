import { Reveal } from "./Reveal";
import { COMPARISON } from "../lib/content";

function AccentCheck() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent sm:h-8 sm:w-8"
      aria-label="Tak"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2 7.5L5.5 11L12 3"
          stroke="var(--color-accent-foreground)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function MutedCheck() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground/[0.07] text-foreground/45 sm:h-8 sm:w-8"
      aria-label="Tak"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2 7.5L5.5 11L12 3"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function MissingX() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground/[0.04] text-foreground/30 sm:h-8 sm:w-8"
      aria-label="Nie"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function PlanBadge({ label }: { label: string }) {
  return (
    <span className="ml-2 inline-flex items-center bg-accent px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground whitespace-nowrap">
      {label}
    </span>
  );
}

interface ComparisonSectionProps {
  content?: typeof COMPARISON;
}

export function ComparisonSection({
  content = COMPARISON,
}: ComparisonSectionProps = {}) {
  const { heading, subtitle, columns, categories } = content;

  const cols =
    "grid-cols-[minmax(0,1fr)_56px_72px] sm:grid-cols-[minmax(0,1fr)_minmax(140px,180px)_minmax(160px,220px)]";

  return (
    <section id="dlaczego-my" className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          <span className="underline-accent">{heading.accent}</span>
          {heading.rest}
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-5 max-w-3xl text-base leading-relaxed text-muted-strong sm:text-lg"
        >
          {subtitle}
        </Reveal>

        <Reveal delay={80} className="mt-14 lg:mt-16">
          <div className="surface-panel overflow-hidden">
            {/* Header row */}
            <div className={`grid ${cols} items-stretch border-b border-card-border-strong`}>
              <div className="px-4 py-5 text-xs font-bold uppercase tracking-[0.18em] text-muted sm:px-8 sm:text-sm">
                {columns.criterion}
              </div>
              <div className="self-center border-l border-card-border px-2 py-5 text-center text-[11px] font-bold leading-tight text-muted-strong sm:px-4 sm:text-sm">
                {columns.others}
              </div>
              <div className="relative flex flex-col justify-center self-stretch border-l border-card-border-strong bg-accent/[0.07] px-2 py-5 text-center sm:px-4">
                <span aria-hidden="true" className="absolute left-0 right-0 top-0 h-[3px] bg-accent" />
                <div className="font-display text-sm font-bold leading-tight text-foreground sm:text-lg">
                  {columns.pillar.line1}
                </div>
                <div className="mt-1 hidden text-xs text-muted sm:block">
                  {columns.pillar.line2}
                </div>
              </div>
            </div>

            {/* Categories */}
            {categories.map((cat) => (
              <div key={cat.title}>
                {/* Category label */}
                <div className={`grid ${cols} border-b border-card-border bg-foreground/[0.03]`}>
                  <div className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-strong sm:px-8 sm:text-xs">
                    {cat.title}
                  </div>
                  <div className="border-l border-card-border" />
                  <div className="border-l border-card-border-strong bg-accent/[0.07]" />
                </div>

                {/* Rows */}
                {cat.rows.map((row, ri) => {
                  const plan = "plan" in row ? row.plan : undefined;
                  return (
                    <div
                      key={ri}
                      className={`grid ${cols} items-stretch border-b border-card-border last:border-b-0`}
                    >
                      <div className="flex items-center px-4 py-4 text-sm leading-snug text-foreground sm:px-8 sm:py-5 sm:text-[15px]">
                        <span>
                          {row.feature}
                          {plan ? <PlanBadge label={plan} /> : null}
                        </span>
                      </div>
                      <div className="flex items-center justify-center border-l border-card-border px-2 py-4 sm:px-4 sm:py-5">
                        {row.others ? <MutedCheck /> : <MissingX />}
                      </div>
                      <div className="flex items-center justify-center border-l border-card-border-strong bg-accent/[0.07] px-2 py-4 sm:px-4 sm:py-5">
                        <AccentCheck />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
