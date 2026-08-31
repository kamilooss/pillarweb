import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PRICING } from "../lib/content";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={`mt-1 flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 7.5L5.5 11L12 3"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingSection() {
  const {
    eyebrow,
    heading,
    intro,
    price,
    factorsHeading,
    factors,
    consultation,
    cta,
    ctaNote,
  } = PRICING;

  return (
    <section
      id="cennik"
      className="border-t border-card-border bg-surface-sunken py-20 lg:py-28"
    >
      <div className="container-content">
        <Reveal as="div" className="tick-label">
          {eyebrow}
        </Reveal>

        <Reveal
          as="h2"
          delay={40}
          className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading.lead}
          <span className="underline-accent">{heading.accent}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={80}
          className="mt-5 max-w-3xl text-lg font-medium leading-snug text-muted-strong lg:text-xl"
        >
          {intro}
        </Reveal>

        <Reveal delay={120} className="mt-12 lg:mt-16">
          <article className="surface-panel edge-accent-top relative overflow-hidden p-7 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Lewa kolumna — "specyfikacja": cena + co wpływa na wycenę */}
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-subtle">
                    {price.prefix}
                  </span>
                  <span className="tnum font-display text-5xl font-extrabold tracking-tight lg:text-6xl">
                    {price.value}
                  </span>
                </div>

                <div className="mt-10">
                  <div className="mb-6 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted-strong">
                    {factorsHeading}
                  </div>
                  <ul className="grid gap-y-4">
                    {factors.map((factor, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckIcon className="text-foreground" />
                        <span className="text-[15px] font-semibold leading-snug text-foreground">
                          {factor}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prawa kolumna — rozmowa + działanie */}
              <div className="flex flex-col lg:col-span-7 lg:border-l lg:border-card-border lg:pl-14">
                <p className="text-lg leading-relaxed text-muted-strong">
                  {consultation}
                </p>

                <div className="mt-8 lg:mt-auto lg:pt-10">
                  <Button href={cta.href} size="lg" className="w-full sm:w-auto">
                    {cta.label}
                  </Button>
                  <p className="mt-4 text-sm text-subtle">{ctaNote}</p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
