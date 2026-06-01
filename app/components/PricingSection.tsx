import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { Button } from "./Button";
import { PRICING } from "../lib/content";

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="flex-shrink-0 mt-1 text-accent"
      aria-hidden="true"
    >
      <path
        d="M2 7.5L5.5 11L12 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingSection() {
  const { heading, subtitle, plans, footnote } = PRICING;

  return (
    <section id="cennik" className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <ParallaxReveal
          as="h2"
          className="font-display font-bold text-center text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight max-w-5xl mx-auto text-balance"
        >
          <span className="text-accent">{heading.accent}</span>
          {heading.rest}
        </ParallaxReveal>

        <ParallaxReveal
          as="p"
          className="text-foreground font-bold text-center text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-snug text-balance"
        >
          <span className="text-accent">{subtitle.accent}</span>
          {subtitle.rest}{" "}
          <span className="text-accent">{subtitle.note}</span>
        </ParallaxReveal>

        {/* Panele warstwowe — każdy plan ma własną przestrzeń */}
        <div className="mt-16 lg:mt-24 max-w-6xl mx-auto flex flex-col gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <article
                className={`relative overflow-hidden rounded-2xl p-7 lg:p-12 ${
                  plan.highlighted
                    ? "surface-panel surface-panel--accent edge-accent-top"
                    : "surface-panel"
                }`}
              >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
                  {/* Tożsamość planu */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-subtle">
                        {plan.eyebrow}
                      </div>
                      <span className="arch-index text-3xl lg:text-4xl text-accent/30 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline gap-3 flex-wrap">
                      <span className="font-display font-bold text-4xl lg:text-5xl tracking-tight">
                        {plan.price}
                      </span>
                      {plan.highlighted && plan.badge && (
                        <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.14em]">
                          <span className="h-px w-4 bg-accent" />
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 font-bold text-foreground text-lg leading-snug">
                      {plan.tagline}
                    </p>

                    <p className="mt-4 text-muted leading-relaxed">
                      <span className="font-semibold text-muted-strong">
                        Dla kogo?:
                      </span>{" "}
                      {plan.audience}
                    </p>

                    <div className="mt-8 lg:mt-auto pt-2">
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
                    <div className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
                      {plan.featuresHeading}
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3">
                          <CheckIcon />
                          <div>
                            <h4
                              className={`font-semibold text-[15px] leading-snug ${
                                feature.accent ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {feature.title}
                            </h4>
                            {feature.description && (
                              <p className="text-muted text-sm leading-relaxed mt-1">
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
          delay={0.1}
          as="p"
          className="mt-16 lg:mt-20 text-muted-strong text-center max-w-4xl mx-auto leading-relaxed text-lg"
        >
          {footnote}
        </Reveal>
      </div>
    </section>
  );
}
