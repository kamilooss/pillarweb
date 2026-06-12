import { Reveal } from "./Reveal";

/**
 * PROBLEM + SPOSOBY UŻYCIA — "Masz ruch... ale czy masz miejsce,
 * które zamienia to zainteresowanie w wartościowe zapytania?"
 * Nagłówek + intro, siatka 5 kanałów wykorzystania (diament-marker +
 * tytuł + opis), domknięcie problemu w bloku z redline. Bespoke dla
 * /landing-page. Pas naprzemienny (bg-surface-sunken).
 */
interface UseCasesContent {
  headingPrefix: string;
  headingAccent: string;
  intro: readonly string[];
  useCasesLabel: string;
  useCases: readonly { readonly title: string; readonly body: string }[];
  closingLead: string;
  closingEmphasis: string;
}

export function LandingUseCases({ content }: { content: UseCasesContent }) {
  const {
    headingPrefix,
    headingAccent,
    intro,
    useCasesLabel,
    useCases,
    closingLead,
    closingEmphasis,
  } = content;

  return (
    <section className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-4xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <div className="mt-8 max-w-2xl space-y-5 lg:mt-10">
          {intro.map((p, i) => (
            <Reveal
              as="p"
              key={i}
              delay={i * 60}
              className="text-lg leading-relaxed text-muted-strong"
            >
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={80}
          className="mt-12 font-display text-base font-bold uppercase tracking-[0.04em] text-foreground lg:mt-16"
        >
          {useCasesLabel}
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-px border-t border-card-border sm:grid-cols-2 lg:gap-y-0">
          {useCases.map((uc, i) => (
            <Reveal
              key={uc.title}
              delay={(i % 2) * 70}
              className="flex gap-4 border-b border-card-border py-8 lg:py-9"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-2.5 w-2.5 flex-shrink-0 rotate-45 bg-accent"
              />
              <div>
                <h3 className="mb-2 font-bold text-lg text-foreground lg:text-xl">
                  {uc.title}
                </h3>
                <p className="leading-relaxed text-muted-strong">{uc.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 max-w-3xl border-l-[3px] border-accent pl-6 lg:mt-16 lg:pl-9">
          <p className="text-[clamp(1.05rem,1.6vw,1.4rem)] leading-[1.5] text-muted-strong">
            {closingLead}{" "}
            <span className="font-semibold text-foreground">{closingEmphasis}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
