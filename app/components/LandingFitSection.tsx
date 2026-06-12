import { Reveal } from "./Reveal";
import { Button } from "./Button";

/**
 * DLA KOGO / DLA KOGO NIE + cena poglądowa + CTA.
 * Dwie kolumny (lime check vs muted X), pod spodem arkusz z ceną i CTA.
 * Bespoke dla /landing-page. Pas naprzemienny (bg-surface-sunken).
 */
interface FitContent {
  headingPrefix: string;
  headingAccent: string;
  good: { title: string; items: readonly string[] };
  bad: { title: string; items: readonly string[] };
  price: {
    amountPrefix: string;
    amount: string;
    amountSuffix: string;
    detail: string;
    note: string;
  };
  cta: { label: string; href: string };
  ctaNote: string;
}

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent"
    >
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
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

function CrossIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground/35"
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
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

export function LandingFitSection({ content }: { content: FitContent }) {
  const { headingPrefix, headingAccent, good, bad, price, cta, ctaNote } = content;

  return (
    <section className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Dobre dopasowanie */}
          <Reveal className="surface-panel edge-accent-top relative p-7 lg:p-9">
            <h3 className="mb-7 font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              {good.title}
            </h3>
            <ul className="space-y-5">
              {good.items.map((item, i) => (
                <li key={i} className="flex gap-3.5">
                  <CheckIcon />
                  <span className="leading-relaxed text-muted-strong">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Złe dopasowanie */}
          <Reveal delay={80} className="surface-panel p-7 lg:p-9">
            <h3 className="mb-7 font-display text-xl font-bold tracking-tight text-foreground/70 lg:text-2xl">
              {bad.title}
            </h3>
            <ul className="space-y-5">
              {bad.items.map((item, i) => (
                <li key={i} className="flex gap-3.5">
                  <CrossIcon />
                  <span className="leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Cena + CTA */}
        <Reveal delay={60} className="mt-8 lg:mt-10">
          <div className="surface-panel surface-panel--accent edge-accent-top relative flex flex-col gap-7 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div>
              <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight tnum text-foreground">
                {price.amountPrefix}{" "}
                <span className="underline-accent">{price.amount}</span>{" "}
                <span className="text-muted-strong">{price.amountSuffix}</span>
              </p>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-strong">
                {price.detail}{" "}
                <span className="text-muted">{price.note}</span>
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col gap-3">
              {/* w-full na mobile, stała szerokość dopiero od sm — min-width
                  wygrywa z max-w-full (spec CSS), więc na ~320–360px karta
                  z p-8 inaczej przepełniałaby się w poziomie. */}
              <Button
                href={cta.href}
                size="lg"
                className="w-full max-w-full sm:w-auto sm:min-w-[260px]"
              >
                {cta.label}
              </Button>
              <p className="text-center text-sm text-muted-strong">{ctaNote}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
