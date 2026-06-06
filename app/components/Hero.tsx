import { Fragment } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { HERO, SITE, ASSET_BASE } from "../lib/content";

// Domyślne zdjęcie realizacji — jasny, dzienny kadr zamiast ciemnego wideo.
const DEFAULT_HERO_IMAGE = `${ASSET_BASE}/generalni-wykonawcy-pillarweb.webp`;

interface HeroProps {
  content?: typeof HERO;
  /** Override obrazka hero (np. dla podstron podnisz). */
  heroImage?: string;
  /** Override alt-text obrazka. */
  heroImageAlt?: string;
}

export function Hero({
  content = HERO,
  heroImage = DEFAULT_HERO_IMAGE,
  heroImageAlt = "Realizacja firmy budowlanej — nowoczesny budynek w świetle dziennym",
}: HeroProps = {}) {
  // Słowa nagłówka pogrupowane w linie; akcent (hi-vis lime) na akcencie content.
  const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
    content.titleLine1.split(" ").map((text) => ({ text })),
    [
      { text: content.titleLine2Prefix },
      ...content.titleLine2Accent
        .split(" ")
        .map((text) => ({ text, accent: true })),
    ],
  ];
  let wordIndex = -1;

  return (
    <section
      id="main"
      className="relative w-full overflow-hidden bg-background"
      aria-label="Sekcja powitalna"
    >
      <div className="container-content relative">
        {/* Szkielet strukturalny — krawędzie kolumn "Pillar" (desktop) */}
        <div className="arch-rules hidden md:block" aria-hidden="true" />

        <div className="grid min-h-[100dvh] grid-cols-1 items-center gap-10 pt-28 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-20">
          {/* Treść */}
          <div className="lg:col-span-7 lg:pr-10">
            <span
              className="tick-label mb-7 animate-fade-up lg:mb-9"
              style={{ animationDelay: "0.05s" }}
            >
              {content.brandLine}
            </span>

            <h1 className="font-display font-extrabold uppercase leading-[1.06] tracking-tight text-[clamp(2.35rem,5.6vw,5rem)]">
              {HEADLINE_LINES.map((line, li) => (
                <span key={li} className="block pb-[0.08em]">
                  {line.map((word, wi) => {
                    wordIndex += 1;
                    const accent = word.accent;
                    return (
                      <Fragment key={wi}>
                        {wi > 0 && " "}
                        <span
                          className="inline-block animate-fade-up"
                          style={{ animationDelay: `${0.15 + wordIndex * 0.06}s` }}
                        >
                          {accent ? <span className="mark">{word.text}</span> : word.text}
                        </span>
                      </Fragment>
                    );
                  })}
                </span>
              ))}
            </h1>

            <p
              className="mt-7 max-w-[48ch] text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-muted-strong animate-fade-up lg:mt-9"
              style={{ animationDelay: "0.55s" }}
            >
              {content.subtitleParts.map((part, i) => (
                <Fragment key={i}>
                  {i > 0 && " "}
                  <span className={part.accent ? "font-semibold text-foreground underline-accent" : undefined}>
                    {part.text}
                  </span>
                </Fragment>
              ))}
            </p>

            <div
              className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row sm:items-center sm:gap-6 lg:mt-12"
              style={{ animationDelay: "0.72s" }}
            >
              <MagneticButton
                href={content.cta.href}
                className="px-8 py-4 text-base sm:whitespace-nowrap sm:text-[15px]"
              >
                {content.cta.label}
              </MagneticButton>

              <a
                href={`tel:${SITE.phoneTel}`}
                className="group inline-flex items-center gap-3 text-muted-strong transition-colors hover:text-foreground"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/25 transition-colors group-hover:border-foreground group-hover:bg-accent">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
                  </svg>
                </span>
                <span className="font-semibold tracking-tight tnum">{SITE.phone}</span>
              </a>
            </div>
          </div>

          {/* Kadrowane zdjęcie realizacji — strukturalna ramka */}
          <div className="lg:col-span-5">
            <div
              className="relative animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Narożny znacznik marki (lewy-górny) */}
              <span className="absolute -left-px -top-px z-10 h-7 w-px bg-accent" aria-hidden="true" />
              <span className="absolute -left-px -top-px z-10 h-px w-7 bg-accent" aria-hidden="true" />

              <div className="relative aspect-[4/5] w-full overflow-hidden border border-card-border-strong bg-surface-sunken">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Narożny znacznik marki (prawy-dolny) */}
              <span className="absolute -bottom-px -right-px z-10 h-7 w-px bg-accent" aria-hidden="true" />
              <span className="absolute -bottom-px -right-px z-10 h-px w-7 bg-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
