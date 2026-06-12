import { Reveal } from "./Reveal";

/**
 * SEGMENTY — "Dla kogo jest ten landing page".
 * Lista filarowa w języku "PLAN": ghostowy index + tytuł + opis,
 * dwie kolumny na desktopie (jak filary w DifferentiatorSection).
 * Bespoke dla /landing-page.
 */
interface SegmentsContent {
  headingPrefix: string;
  headingAccent: string;
  intro: string;
  items: readonly { readonly title: string; readonly body: string }[];
}

export function LandingSegments({ content }: { content: SegmentsContent }) {
  const { headingPrefix, headingAccent, intro, items } = content;

  return (
    <section className="border-t border-card-border bg-background py-20 lg:py-28">
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

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-card-border pt-12 md:grid-cols-2 lg:mt-16">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 70} className="flex gap-5">
              <span className="arch-index flex-shrink-0 text-4xl lg:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-bold text-lg text-foreground lg:text-xl">
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
