import Image from "next/image";
import { Reveal } from "../../components/Reveal";

/**
 * Dowody — wygląd 1:1 z CampaignResults strony głównej (papier wcięty,
 * indeks + branża, kreacje 9:16 w siatce / przesuwanym pasie na telefonie).
 * Po prawej od nagłówka przypadku zamiast etykiet „Cel / Co liczymy” stoi
 * opis liczb z nowej treści.
 */
export type ProofContent = {
  heading: { prefix: string; accent: string };
  intro: string;
  cases: readonly {
    title: string;
    text: string;
    extra?: string;
    shots: readonly { period: string; image: string; alt: string }[];
  }[];
};

export function ProofT({ content }: { content: ProofContent }) {
  const { heading, intro, cases } = content;

  return (
    <section
      id="wyniki-kampanii"
      className="border-t border-card-border bg-surface-sunken py-20 lg:py-28"
      aria-label="Wyniki kampanii Google Ads na naszych stronach"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-4xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {heading.prefix}{" "}
          <span className="underline-accent">{heading.accent}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-7 max-w-3xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-muted-strong"
        >
          {intro}
        </Reveal>

        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {cases.map((item, i) => (
            <article key={item.title}>
              <Reveal className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-card-border-strong pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:pt-10">
                <div className="flex gap-5">
                  <span className="arch-index flex-shrink-0 text-4xl lg:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-extrabold leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="border-t border-card-border-strong pt-3 text-lg font-semibold leading-snug text-foreground tnum">
                    {item.text}
                  </p>
                  {item.extra ? (
                    <p className="border-l-[3px] border-accent pl-4 leading-relaxed text-muted-strong">{item.extra}</p>
                  ) : null}
                </div>
              </Reveal>

              <div className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:snap-none sm:scroll-pl-0 sm:grid-cols-2 sm:gap-8 sm:overflow-x-visible sm:px-0 sm:pb-0 lg:mt-12 lg:grid-cols-3">
                {item.shots.map((shot, j) => (
                  <Reveal
                    key={shot.image}
                    delay={j * 70}
                    as="figure"
                    className="w-[80vw] max-w-[380px] shrink-0 snap-start sm:w-full sm:shrink"
                  >
                    <figcaption className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-subtle">
                      {shot.period}
                    </figcaption>
                    <div className="overflow-hidden border border-card-border bg-background shadow-[0_24px_50px_-34px_rgba(21,22,14,0.35)]">
                      <Image src={shot.image} alt={shot.alt} width={1080} height={1920} className="h-auto w-full" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
