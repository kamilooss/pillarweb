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

  return (
    <section className="py-24 lg:py-36">
      <div className="container-content">
        <Reveal as="h2" className="font-display font-bold text-center text-[clamp(1.6rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-4xl mx-auto">
          {heading.prefix}
          <br />
          <span className="text-accent">{heading.accent}</span>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mt-20 lg:mt-24">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="flex flex-col">
              <h3 className="text-accent font-bold text-[17px] leading-snug mb-5">
                {p.title}
              </h3>
              <p className="text-muted-strong text-[15px] leading-[1.7]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Results section */}
        <Reveal as="h2" className="font-display font-bold text-center text-[clamp(1.6rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-4xl mx-auto mt-32 lg:mt-44">
          {results.headingPrefix}{" "}
          <span className="text-accent">{results.headingAccent}</span>
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start mt-20">
          <Reveal>
            <div className="rounded-xl overflow-hidden border border-card-border">
              <Image
                src={results.image}
                alt="Wyniki kampanii Google Ads dla firmy budowlanej prowadzonej przez Pillarweb"
                width={1400}
                height={900}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            {results.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">
                <span className="[&>strong]:text-accent">
                  <FormattedText text={p} />
                </span>
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-16 lg:mt-24 max-w-4xl text-foreground leading-relaxed">
            <span className="[&>strong]:text-accent">
              <FormattedText text={results.closing} />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
