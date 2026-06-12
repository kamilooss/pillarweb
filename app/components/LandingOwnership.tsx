import { Reveal } from "./Reveal";

/**
 * STRONA, DOMENA, DANE I LEADY SĄ TWOJE — 5 punktów własności.
 * Siatka kart z limonkowym checkiem + tytuł + opis. Bespoke dla
 * /landing-page. Pas naprzemienny (bg-surface-sunken).
 */
interface OwnershipContent {
  headingPrefix: string;
  headingAccent: string;
  intro: string;
  items: readonly { readonly title: string; readonly body: string }[];
}

export function LandingOwnership({ content }: { content: OwnershipContent }) {
  const { headingPrefix, headingAccent, intro, items } = content;

  return (
    <section className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong"
        >
          {intro}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-card-border pt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7.5L5.5 11L12 3"
                    stroke="var(--color-accent-foreground)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="mb-2 font-bold text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-strong">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
