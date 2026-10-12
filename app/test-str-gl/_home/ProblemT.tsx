import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/Button";
import { FormattedText } from "./FormattedText";

/**
 * Sekcja problemu — wygląd 1:1 z ContentVideoSection strony głównej
 * („Słaba strona internetowa kosztuje…”): papier wcięty, numerowana lista
 * z kwadratami lime po lewej, przyklejone zdjęcie + podsumowanie + CTA po prawej.
 * Różnica: punkty mają kilka akapitów i opcjonalny cytat.
 */
export type ProblemContent = {
  heading: { prefix: string; accent: string };
  title: string;
  items: readonly {
    title: string;
    paragraphs: readonly string[];
    quote?: string;
    quoteBy?: string;
  }[];
  image: string;
  imageAlt: string;
  /** Pionowa grafika 4:5 (np. kreacja z social) — kadr bez przycinania, węższy, żeby kolumna mieściła się przy przyklejeniu. */
  imagePortrait?: boolean;
  summary: string;
  cta: { label: string; href: string };
};

export function ProblemT({ content, id }: { content: ProblemContent; id?: string }) {
  const { heading, title, items, image, imageAlt, imagePortrait, summary, cta } = content;

  return (
    <section id={id} className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-4xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading.prefix}{" "}
          <span className="underline-accent">{heading.accent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          {/* LEWA: tytuł problemu + punkty */}
          <div>
            <Reveal
              as="h3"
              className="max-w-xl font-display text-[clamp(1.4rem,2.4vw,2rem)] font-bold leading-[1.2] tracking-tight"
            >
              {title}
            </Reveal>

            <ol className="mt-10 space-y-12">
              {items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={Math.min(i * 80, 240)} className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center bg-accent font-display text-sm font-extrabold tnum text-accent-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="mb-3 font-bold text-lg leading-snug text-foreground lg:text-xl">
                      {item.title}
                    </h4>
                    <div className="space-y-3">
                      {item.paragraphs.map((p) => (
                        <p key={p.slice(0, 40)} className="leading-relaxed text-muted-strong">
                          <FormattedText text={p} />
                        </p>
                      ))}
                    </div>
                    {item.quote ? (
                      <figure className="mt-5 border-l-[3px] border-accent pl-5">
                        <blockquote className="font-semibold leading-relaxed text-foreground">
                          {item.quote}
                        </blockquote>
                        {item.quoteBy ? (
                          <figcaption className="mt-1 text-sm text-muted">– {item.quoteBy}</figcaption>
                        ) : null}
                      </figure>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Pionowa grafika: podsumowanie i CTA zamykają listę po lewej,
                a prawa kolumna to sama grafika na pełną szerokość. */}
            {imagePortrait ? (
              <div className="mt-14 flex flex-col gap-8 border-t border-card-border pt-10">
                <Reveal as="p" className="text-lg font-medium leading-snug text-foreground lg:text-xl">
                  <FormattedText text={summary} />
                </Reveal>
                <Reveal>
                  <Button href={cta.href} size="lg">
                    {cta.label}
                  </Button>
                </Reveal>
              </div>
            ) : null}
          </div>

          {imagePortrait ? (
            /* PRAWA: sama grafika 4:5 — pełna szerokość kolumny, ale nie wyższa
               niż ekran (żeby przyklejona mieściła się w całości).
               Na telefonie: zaraz pod nagłówkiem sekcji. */
            <div className="order-first lg:order-none lg:sticky lg:top-28 lg:self-start">
              <Reveal className="mx-auto w-full max-w-[560px] overflow-hidden lg:mx-0 lg:w-[min(100%,calc((100dvh-9rem)*0.8))] lg:max-w-none">
                <Image src={image} alt={imageAlt} width={1080} height={1350} className="h-auto w-full" />
              </Reveal>
            </div>
          ) : (
            /* PRAWA: realne zdjęcie + podsumowanie + CTA */
            <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
              <Reveal className="surface-panel aspect-[16/10] overflow-hidden">
                <Image src={image} alt={imageAlt} width={1024} height={572} className="h-full w-full object-cover" />
              </Reveal>

              <Reveal as="p" className="text-lg font-medium leading-snug text-foreground lg:text-xl">
                <FormattedText text={summary} />
              </Reveal>

              <Reveal>
                <Button href={cta.href} size="lg">
                  {cta.label}
                </Button>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
