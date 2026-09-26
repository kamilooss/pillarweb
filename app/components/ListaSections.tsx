/**
 * SEKCJE STATYCZNE PODSTRONY /lista
 * ---------------------------------
 * Wszystko poza samym testem (ten siedzi w ChecklistTest) i formularzem
 * (ContactSection). Komponenty serwerowe — zero JS po stronie klienta poza
 * guzikiem pobierania PDF-a, który musi odpalić zdarzenie do GTM.
 */

import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PdfDownloadButton } from "./PdfDownloadButton";
import {
  LISTA_HERO,
  LISTA_HOWTO,
  LISTA_INTRO,
  LISTA_PATHS,
  LISTA_POINTS,
} from "../lib/content-lista";

/* -------------------------------------------------------------------------- */
/*  HERO — obietnica + guzik z PDF-em (ma być NAD listą) + spis punktów        */
/* -------------------------------------------------------------------------- */

export function ListaHero() {
  return (
    // id="main" — cel linku „Przejdź do treści” i punkt odniesienia dla
    // pływającego CTA (FloatingCTA obserwuje właśnie ten element).
    <section id="main" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <Reveal as="div" className="tick-label">
              {LISTA_HERO.eyebrow}
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="mt-7 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-tight"
            >
              {LISTA_HERO.headingLine1}{" "}
              <span className="underline-accent">{LISTA_HERO.headingAccent}</span>{" "}
              {LISTA_HERO.headingLine2}
            </Reveal>

            <Reveal as="p" delay={100} className="mt-7 max-w-xl text-lg leading-relaxed text-muted-strong">
              {LISTA_HERO.lead}
            </Reveal>

            <Reveal as="p" delay={130} className="mt-4 max-w-xl text-lg leading-relaxed text-muted-strong">
              {LISTA_HERO.leadSecond}
            </Reveal>

            <Reveal delay={170} className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <PdfDownloadButton>{LISTA_HERO.pdfButton}</PdfDownloadButton>
                <Button href="#test" variant="outline" size="lg">
                  {LISTA_HERO.startButton}
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted">{LISTA_HERO.pdfNote}</p>
            </Reveal>
          </div>

          {/* Spis piętnastu punktów — pełni rolę rysunkowego indeksu: od razu
              widać, czego dotyczy test, a każdy wiersz jest kotwicą. */}
          <Reveal delay={200} className="surface-panel edge-accent-top self-start p-6 md:p-8">
            <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle">
              Co sprawdzamy
            </div>
            <ol className="mt-5 divide-y divide-card-border">
              {LISTA_POINTS.map((point) => (
                <li key={point.id}>
                  <a
                    href={`#punkt-${point.id}`}
                    className="group flex items-baseline gap-4 py-2.5 transition-colors hover:text-foreground"
                  >
                    <span className="font-display text-sm font-extrabold tnum text-subtle transition-colors group-hover:text-foreground">
                      {String(point.id).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] leading-snug text-muted-strong transition-colors group-hover:text-foreground">
                      {point.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ZANIM ZACZNIESZ — kontekst + ciemny pas z liczbami                        */
/* -------------------------------------------------------------------------- */

export function ListaIntro() {
  return (
    <>
      <section className="border-t border-card-border py-16 lg:py-24">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal
              as="h2"
              className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight"
            >
              {LISTA_INTRO.heading}
            </Reveal>

            <Reveal delay={60} className="space-y-5">
              {LISTA_INTRO.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-strong">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-block text-background">
        <div className="container-content py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {LISTA_INTRO.stats.map((stat) => (
              <div key={stat.value} className="border-t border-background/20 pt-5">
                <div className="font-display text-[2.5rem] font-extrabold leading-none tracking-tight tnum text-accent">
                  {stat.value}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  JAK PRZEJŚĆ TEN TEST                                                      */
/* -------------------------------------------------------------------------- */

export function ListaHowTo() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {LISTA_HOWTO.heading}
        </Reveal>

        <Reveal as="p" delay={60} className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong">
          {LISTA_HOWTO.lead}
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-px bg-card-border md:grid-cols-2">
          {LISTA_HOWTO.steps.map((step, i) => (
            <li key={step.title} className="bg-background p-6 md:p-8">
              <div className="flex items-start gap-5">
                <span className="arch-index shrink-0 text-[2.25rem]">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted-strong">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CO TERAZ — trzy drogi. Czwarta jest nagłówkiem formularza niżej.          */
/* -------------------------------------------------------------------------- */

export function ListaPaths() {
  return (
    <section className="border-t border-card-border py-16 lg:py-24">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {LISTA_PATHS.heading}
        </Reveal>

        <Reveal as="p" delay={60} className="mt-5 text-lg text-muted-strong">
          {LISTA_PATHS.lead}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LISTA_PATHS.items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={80 + i * 60}
              className="surface-panel flex h-full flex-col p-6 md:p-8"
            >
              <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle tnum">
                Droga {i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-extrabold leading-snug tracking-tight">
                {item.label}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-strong">{item.body}</p>
              {i === 0 && (
                <div className="mt-6">
                  <PdfDownloadButton variant="outline" size="md">
                    Pobierz PDF
                  </PdfDownloadButton>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
