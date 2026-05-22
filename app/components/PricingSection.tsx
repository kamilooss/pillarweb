import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PRICING } from "../lib/content";

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="flex-shrink-0 mt-1.5 text-accent"
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
  return (
    <span
      className="flex-shrink-0 mt-3 inline-block w-3 h-px bg-subtle"
      aria-hidden="true"
    />
  );
}

export function PricingSection() {
  const { heading, description, plans, footnote } = PRICING;

  return (
    <section id="cennik" className="py-24 lg:py-36">
      <div className="container-content">
        <Reveal as="h2" className="text-accent font-display font-bold text-center text-[clamp(2rem,4vw,3rem)] tracking-tight">
          {heading}
        </Reveal>

        <Reveal delay={0.05} as="p" className="text-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </Reveal>

        {/* Karty */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7 mt-20 lg:mt-24 max-w-7xl mx-auto items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <article
                className={`relative h-full flex flex-col rounded-2xl bg-card-elevated p-7 lg:p-9 border ${
                  plan.highlighted
                    ? "border-accent shadow-[0_0_60px_-20px_var(--color-accent)]"
                    : "border-card-border"
                }`}
              >
                {plan.highlighted && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-accent text-xs font-bold tracking-[0.2em] mb-5">
                  {plan.eyebrow}
                </div>

                <h3 className="font-display font-bold text-3xl lg:text-4xl mb-4">
                  {plan.name}
                </h3>

                <div className="font-display font-bold text-3xl lg:text-4xl mb-5">
                  {plan.price}
                </div>

                <p className="text-muted-strong leading-relaxed mb-8 min-h-[5.5rem]">
                  {plan.tagline}
                </p>

                <div className="text-accent text-xs font-bold tracking-[0.18em] mb-6">
                  {plan.featuresHeading}
                </div>

                <ul className="space-y-5 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckIcon included={feature.included} />
                      <div className={feature.included ? "" : "opacity-40"}>
                        <h4 className="font-bold text-[15px] leading-snug mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-muted text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-2">
                  <Button
                    href={plan.cta.href}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta.label}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} as="p" className="mt-16 lg:mt-24 text-foreground text-center max-w-4xl mx-auto leading-relaxed text-lg">
          {footnote}
        </Reveal>
      </div>
    </section>
  );
}
