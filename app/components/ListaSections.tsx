/**
 * SEKCJE STATYCZNE PODSTRONY /lista
 * ---------------------------------
 * Wszystko poza samym testem (ten siedzi w ChecklistTest) i formularzem
 * (ContactSection). Komponenty serwerowe — zero JS po stronie klienta poza
 * guzikiem pobierania PDF-a, który musi odpalić zdarzenie do GTM.
 */

import Image from "next/image";
import { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PdfDownloadButton } from "./PdfDownloadButton";
import {
  LISTA_HERO,
  LISTA_HOWTO,
  LISTA_INTRO,
  LISTA_LABELS,
  LISTA_PATHS,
  LISTA_POINTS,
  LISTA_SCOPE,
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

          {/* Zdjęcie realizacji — ta sama kadrowana ramka co w hero strony
              głównej. Zastąpiło spis piętnastu punktów: przy teście, który
              pokazuje jeden punkt na raz, wyliczanka wszystkich tytułów na
              wejściu i tak przeczyła idei, a dokładała ścianę tekstu. */}
          <Reveal delay={200} className="lg:pl-4">
            <div className="relative">
              <span className="absolute -left-px -top-px z-10 h-7 w-px bg-accent" aria-hidden="true" />
              <span className="absolute -left-px -top-px z-10 h-px w-7 bg-accent" aria-hidden="true" />

              <div className="relative aspect-[4/5] w-full overflow-hidden border border-card-border-strong bg-surface-sunken">
                <Image
                  src={LISTA_HERO.image}
                  alt={LISTA_HERO.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <span className="absolute -bottom-px -right-px z-10 h-7 w-px bg-accent" aria-hidden="true" />
              <span className="absolute -bottom-px -right-px z-10 h-px w-7 bg-accent" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sekcja zwijana                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Nagłówek, który sam jest przełącznikiem. Natywny <details> zamiast stanu
 * w Reakcie: działa bez JS-a, jest dostępny z klawiatury i — co ważne przy
 * tej podstronie — treść zostaje w kodzie strony, więc Google ją widzi.
 * Domyślnie zwinięte, bo to był cały sens zmiany: nie witać ścianą tekstu.
 */
function Collapsible({
  heading,
  teaser,
  children,
}: {
  heading: string;
  teaser: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-t border-card-border pt-10 lg:pt-14">
      {/* Przełącznik stoi TUŻ PRZY nagłówku, nie przy prawej krawędzi sekcji.
          Przy szerokim ekranie „Rozwiń” odsunięte na drugi koniec wiersza
          ginęło klientom z oczu i sekcje wyglądały na martwe. */}
      <summary className="flex cursor-pointer list-none flex-col gap-3 [&::-webkit-details-marker]:hidden">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight">
            {heading}
          </h2>

          <span className="inline-flex shrink-0 items-center gap-2.5 text-sm font-semibold text-muted-strong transition-colors group-hover:text-foreground">
            <span className="group-[[open]]:hidden">{LISTA_LABELS.expand}</span>
            <span className="hidden group-[[open]]:inline">{LISTA_LABELS.collapse}</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/25 transition-colors group-hover:border-foreground group-hover:bg-accent">
              <svg
                viewBox="0 0 12 12"
                width="12"
                height="12"
                aria-hidden="true"
                className="transition-transform duration-300 group-[[open]]:rotate-180"
              >
                <path
                  d="M2 4.5l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </div>

        <p className="max-w-2xl leading-relaxed text-muted">{teaser}</p>
      </summary>

      <div className="pt-10">{children}</div>
    </details>
  );
}

/* -------------------------------------------------------------------------- */
/*  ZANIM ZACZNIESZ — kontekst + ciemny pas z liczbami                        */
/* -------------------------------------------------------------------------- */

export function ListaIntro() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="container-content">
          <Collapsible heading={LISTA_INTRO.heading} teaser={LISTA_INTRO.teaser}>
            <div className="max-w-3xl space-y-5">
              {LISTA_INTRO.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-strong">
                  {paragraph}
                </p>
              ))}
            </div>
          </Collapsible>
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
    <section className="py-16 lg:py-20">
      <div className="container-content">
        <Collapsible heading={LISTA_HOWTO.heading} teaser={LISTA_HOWTO.teaser}>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-strong">
          {LISTA_HOWTO.lead}
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-px bg-card-border md:grid-cols-2">
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
        </Collapsible>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CO SPRAWDZAMY — spis piętnastu punktów, zwinięty                          */
/* -------------------------------------------------------------------------- */

/**
 * Tytuły wszystkich punktów w jednym miejscu, dla kogoś, kto przed startem
 * chce wiedzieć, w co wchodzi. Zwinięte, żeby nie wracała ściana tekstu,
 * i bez odnośników — sam test pokazuje jeden punkt na raz, więc kotwice do
 * pojedynczych punktów nie mają już do czego prowadzić.
 */
export function ListaScope() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-content">
        <Collapsible heading={LISTA_SCOPE.heading} teaser={LISTA_SCOPE.teaser}>
          <ol className="max-w-3xl divide-y divide-card-border border-y border-card-border">
            {LISTA_POINTS.map((point) => (
              <li key={point.id} className="flex items-baseline gap-4 py-3.5">
                <span className="font-display text-sm font-extrabold tnum text-subtle">
                  {String(point.id).padStart(2, "0")}
                </span>
                <span className="text-[1.0625rem] leading-snug text-muted-strong">
                  {point.title}
                </span>
              </li>
            ))}
          </ol>
        </Collapsible>
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
