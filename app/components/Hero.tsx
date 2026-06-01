import { Fragment } from "react";
import { MagneticButton } from "./MagneticButton";
import { HERO, SITE } from "../lib/content";

// Słowa nagłówka pogrupowane w dwie linie; akcent (lime) na "FIRM BUDOWLANYCH".
const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  HERO.titleLine1.split(" ").map((text) => ({ text })),
  [
    { text: HERO.titleLine2Prefix },
    ...HERO.titleLine2Accent.split(" ").map((text) => ({ text, accent: true })),
  ],
];

export function Hero() {
  let wordIndex = -1;

  return (
    <section
      id="main"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-background"
      aria-label="Sekcja powitalna"
    >
      {/* Tło wideo — kadrowany materiał, nie zwykłe tło */}
      <div className="absolute inset-0 top-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={HERO.videoSrc} type="video/mp4" />
        </video>
        {/* Grade pod tekst po lewej + dół, plus delikatna winieta */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/55"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 [box-shadow:inset_0_0_180px_60px_rgba(0,0,0,0.7)]"
          aria-hidden="true"
        />
      </div>

      {/* Szkielet hairline — "arkusz planu" kadrujący treść (tylko desktop) */}
      <div className="absolute inset-0 top-20 hidden md:block" aria-hidden="true">
        <div className="container-content relative h-full">
          <div className="arch-rules" />
          {/* Znaczniki narożne marki — róg górny-lewy i dolny-prawy */}
          <span className="absolute left-5 top-8 h-6 w-px bg-accent/70 lg:left-8" />
          <span className="absolute left-5 top-8 h-px w-6 bg-accent/70 lg:left-8" />
          <span className="absolute right-5 bottom-8 h-6 w-px bg-accent/70 lg:right-8" />
          <span className="absolute right-5 bottom-8 h-px w-6 -translate-x-[calc(100%-1px)] bg-accent/70 lg:right-8" />
        </div>
      </div>

      {/* Treść — zakotwiczona w dolnej części, oś po lewej (redakcyjnie).
         Reveal robiony animacjami CSS (zawsze odpalą, niezależnie od JS). */}
      <div className="relative container-content min-h-[100dvh] flex flex-col justify-end pt-28 pb-20 lg:pb-28">
        <div className="max-w-5xl text-left">
          <span
            className="arch-tick mb-7 lg:mb-9 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            {HERO.brandLine}
          </span>

          <h1 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.25rem,5.5vw,4.75rem)] uppercase">
            {HEADLINE_LINES.map((line, li) => (
              <span
                key={li}
                className={`block pb-[0.12em] ${
                  li === 1 ? "md:whitespace-nowrap" : ""
                }`}
              >
                {line.map((word, wi) => {
                  wordIndex += 1;
                  return (
                    <Fragment key={wi}>
                      {wi > 0 && " "}
                      <span
                        className={`inline-block animate-fade-up ${
                          word.accent ? "text-accent" : ""
                        }`}
                        style={{ animationDelay: `${0.15 + wordIndex * 0.06}s` }}
                      >
                        {word.text}
                      </span>
                    </Fragment>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className="mt-7 lg:mt-9 max-w-[54ch] text-muted-strong leading-relaxed text-[clamp(1rem,1.45vw,1.3rem)] animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            {HERO.subtitleParts.map((part, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className={part.accent ? "text-accent" : undefined}>
                  {part.text}
                </span>
              </Fragment>
            ))}
          </p>

          <div
            className="mt-11 lg:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 animate-fade-up"
            style={{ animationDelay: "0.72s" }}
          >
            <MagneticButton
              href={HERO.cta.href}
              className="px-8 py-4 text-base sm:text-[15px] sm:whitespace-nowrap"
            >
              {HERO.cta.label}
            </MagneticButton>

            <a
              href={`tel:${SITE.phoneTel}`}
              className="group inline-flex items-center gap-3 text-muted-strong hover:text-accent transition-colors"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card-border-strong group-hover:border-accent transition-colors">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="text-accent"
                >
                  <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
                </svg>
              </span>
              <span className="font-semibold tracking-tight">{SITE.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
