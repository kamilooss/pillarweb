import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { COMPARISON } from "../lib/content";

function AccentCheck() {
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent shadow-[0_0_24px_-8px_var(--color-accent)]"
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
      className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] text-white/55"
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
      className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.03] text-white/30"
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
    <span className="ml-2 inline-flex items-center rounded-full border border-accent/40 bg-accent/[0.08] text-accent text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 align-middle whitespace-nowrap">
      {label}
    </span>
  );
}

export function ComparisonSection() {
  const { heading, subtitle, columns, categories } = COMPARISON;

  const cols =
    "grid-cols-[minmax(0,1fr)_56px_72px] sm:grid-cols-[minmax(0,1fr)_minmax(140px,180px)_minmax(160px,220px)]";

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <ParallaxReveal
          as="h2"
          className="font-display font-bold text-center text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-5xl mx-auto"
        >
          <span className="text-accent">{heading.accent}</span>
          {heading.rest}
        </ParallaxReveal>

        <ParallaxReveal
          as="p"
          className="text-muted-strong text-center text-base sm:text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </ParallaxReveal>

        <Reveal delay={0.1} className="mt-16 lg:mt-20 max-w-5xl mx-auto">
          <div className="surface-panel rounded-2xl overflow-hidden">
            {/* Header row */}
            <div className={`grid ${cols} items-stretch border-b border-card-border-strong`}>
              <div className="px-4 sm:px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-muted">
                {columns.criterion}
              </div>
              <div className="px-2 sm:px-4 py-5 text-center text-[11px] sm:text-sm font-bold text-muted-strong border-l border-card-border self-center leading-tight">
                {columns.others}
              </div>
              <div className="relative px-2 sm:px-4 py-5 text-center border-l border-card-border-strong bg-accent/[0.05] self-stretch flex flex-col justify-center">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[3px] bg-accent"
                />
                <div className="font-display font-bold text-sm sm:text-lg text-accent leading-tight">
                  {columns.pillar.line1}
                </div>
                <div className="hidden sm:block text-xs text-accent/70 mt-1">
                  {columns.pillar.line2}
                </div>
              </div>
            </div>

            {/* Categories */}
            {categories.map((cat) => (
              <div key={cat.title}>
                {/* Category eyebrow */}
                <div className={`grid ${cols} bg-white/[0.02] border-b border-card-border`}>
                  <div className="px-4 sm:px-8 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-muted-strong">
                    {cat.title}
                  </div>
                  <div className="border-l border-card-border" />
                  <div className="border-l border-card-border-strong bg-accent/[0.05]" />
                </div>

                {/* Rows */}
                {cat.rows.map((row, ri) => {
                  const plan = "plan" in row ? row.plan : undefined;
                  return (
                    <div
                      key={ri}
                      className={`grid ${cols} items-stretch border-b border-card-border last:border-b-0`}
                    >
                      <div className="px-4 sm:px-8 py-4 sm:py-5 text-foreground text-sm sm:text-[15px] leading-snug flex items-center">
                        <span>
                          {row.feature}
                          {plan ? <PlanBadge label={plan} /> : null}
                        </span>
                      </div>
                      <div className="px-2 sm:px-4 py-4 sm:py-5 border-l border-card-border flex items-center justify-center">
                        {row.others ? <MutedCheck /> : <MissingX />}
                      </div>
                      <div className="px-2 sm:px-4 py-4 sm:py-5 border-l border-card-border-strong bg-accent/[0.05] flex items-center justify-center">
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
