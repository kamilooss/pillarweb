"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { CONTENT_SECTION } from "../lib/content";

/**
 * Renderuje markdown-style **bold** w paragrafach.
 */
function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-semibold text-foreground">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function ContentVideoSection() {
  const { heading, problems } = CONTENT_SECTION;

  return (
    <section className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-4xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading.prefix}{" "}
          <span className="underline-accent">{heading.accent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          {/* LEWA: tytuł problemu + 3 podpunkty */}
          <div>
            <Reveal
              as="h3"
              className="max-w-xl font-display text-[clamp(1.4rem,2.4vw,2rem)] font-bold leading-[1.2] tracking-tight"
            >
              {problems.title}
            </Reveal>

            <ol className="mt-10 space-y-9">
              {problems.items.map((item, i) => (
                <Reveal as="li" key={i} delay={i * 80} className="flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center bg-accent font-display text-sm font-extrabold tnum text-accent-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="mb-2 font-bold text-lg text-foreground lg:text-xl">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-muted-strong">
                      <FormattedText text={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* PRAWA: realne zdjęcie + podsumowanie + CTA */}
          <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="surface-panel aspect-[16/10] overflow-hidden">
              <Image
                src={problems.image}
                alt="Porównanie problemu i efektów dobrze działającej strony internetowej dla firmy budowlanej"
                width={1024}
                height={572}
                className="h-full w-full object-cover"
              />
            </Reveal>

            <Reveal as="p" className="text-lg font-medium leading-snug text-foreground lg:text-xl">
              <FormattedText text={problems.summary} />
            </Reveal>

            <Reveal>
              <Button href={problems.cta.href} size="lg">
                {problems.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
