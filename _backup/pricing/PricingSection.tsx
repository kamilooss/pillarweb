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
  const { heading, subtitle, plans, footnote } = PRICING;

  return (
    <section id="cennik" className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
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
          className="mt-5 max-w-3xl text-lg font-medium leading-snug text-muted-strong lg:text-xl"
        >
          <span className="font-bold text-foreground">{subtitle.accent}</span>
          {subtitle.rest}{" "}
          <span className="ml-1 whitespace-nowrap bg-accent px-1.5 py-0.5 text-sm font-bold text-accent-foreground">
            {subtitle.note}
          </span>
        </Reveal>

        {/* Panele warstwowe — każdy plan ma własną przestrzeń */}
        <div className="mt-14 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 60}>
              <article
                className={`relative overflow-hidden p-7 lg:p-12 ${
                  plan.highlighted
                    ? "surface-panel surface-panel--accent edge-accent-top"
                    : "surface-panel"
                }`}
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Tożsamość planu */}
                  <div className="flex flex-col lg:col-span-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-subtle">
                        {plan.eyebrow}
                      </div>
                      <span className="arch-index text-3xl leading-none lg:text-4xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-4xl font-extrabold tracking-tight tnum lg:text-5xl">
                        {plan.price}
                      </span>
                      {plan.highlighted && plan.badge && (
                        <span className="bg-accent px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 text-lg font-bold leading-snug text-foreground">
                      {plan.tagline}
                    </p>

                    <p className="mt-4 leading-relaxed text-muted">
                      <span className="font-semibold text-muted-strong">Dla kogo?:</span>{" "}
                      {plan.audience}
                    </p>

                    <div className="mt-8 pt-2 lg:mt-auto">
                      <Button
                        href={plan.cta.href}
                        variant={plan.highlighted ? "primary" : "outline"}
                        size="lg"
                        className="w-full sm:w-auto lg:w-full"
                      >
                        {plan.cta.label}
                      </Button>
                    </div>
                  </div>

                  {/* Korzyści */}
                  <div className="lg:col-span-7 lg:border-l lg:border-card-border lg:pl-14">
                    <div className="mb-6 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted-strong">
                      {plan.featuresHeading}
                    </div>
                    <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckIcon className="text-foreground" />
                          <div>
                            <h4 className="text-[15px] font-semibold leading-snug text-foreground">
                              {feature.accent ? (
                                <span className="underline-accent">{feature.title}</span>
                              ) : (
                                feature.title
                              )}
                            </h4>
                            {feature.description && (
                              <p className="mt-1 text-sm leading-relaxed text-muted">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={80}
          as="p"
          className="mx-auto mt-14 max-w-4xl text-lg leading-relaxed text-muted-strong"
        >
          {footnote}
        </Reveal>
      </div>
    </section>
  );
}
