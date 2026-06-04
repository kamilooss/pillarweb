"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { DIFFERENTIATOR } from "../lib/content";

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-bold text-foreground">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function DifferentiatorSection() {
  const { heading, pillars, results } = DIFFERENTIATOR;
  // Skill: zero em-dash w nagłówkach — zdejmujemy wiodący myślnik bez zmiany słów.
  const resultsStat = results.headingSuffix.replace(/^\s*[—–-]\s*/, "");

  return (
    <section className="border-t border-card-border bg-background">
      {/* Różnicowanie — 4 filary w strukturalnym gridzie */}
      <div className="container-content py-20 lg:py-28">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading.prefix}{" "}
          <span className="underline-accent">{heading.accent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-card-border pt-12 md:grid-cols-2 lg:mt-16">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="flex gap-5">
              <span className="arch-index flex-shrink-0 text-4xl lg:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-bold text-lg text-foreground lg:text-xl">
                  {p.title}
                </h3>
                <p className="leading-relaxed text-muted-strong">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Sekcja wyników — dowód */}
      <div className="border-t border-card-border bg-surface-sunken">
        <div className="container-content py-20 lg:py-28">
          <Reveal
            as="h2"
            className="max-w-3xl font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-extrabold leading-[1.12] tracking-tight"
          >
            {results.headingPrefix}{" "}
            <span className="underline-accent">{results.headingAccent}</span>
          </Reveal>
          <Reveal
            as="p"
            delay={60}
            className="mt-5 font-display text-[clamp(1.15rem,2vw,1.6rem)] font-bold tnum text-foreground"
          >
            {resultsStat}
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
            <Reveal className="surface-panel overflow-hidden">
              <Image
                src={results.image}
                alt="Wyniki kampanii Google Ads dla firmy budowlanej prowadzonej przez Pillarweb"
                width={1400}
                height={900}
                className="h-auto w-full"
                unoptimized
              />
            </Reveal>

            <Reveal delay={80} className="space-y-6">
              {results.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-strong">
                  <FormattedText text={p} />
                </p>
              ))}
              <p className="leading-relaxed text-muted-strong">
                <FormattedText text={results.closing} />
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
