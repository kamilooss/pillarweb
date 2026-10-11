import Image from "next/image";
import { Button } from "../../components/Button";
import { Reveal } from "../../components/Reveal";
import {
  ABOUT,
  BAND,
  FILM,
  HERO,
  LOGOS,
  LOGOS_HEADING,
  PROBLEM,
  SOLUTION,
  TEST_PHONE,
  TRIED,
} from "../copy";
import { TestVideo } from "./TestVideo";
import { CornerMarks, Eyebrow, H2, IconArrow, IconPhone, Lead, Sheet, SheetGrid } from "./ui";

/* =========================================================================
   HERO — arkusz z siatką rysunku technicznego. Po lewej obietnica, po prawej
   makieta zapytania z „pięcioma konkretami” (wyraźnie podpisana jako przykład).
   ========================================================================= */
export function TestHero() {
  return (
    <section className="relative overflow-hidden border-b border-card-border pb-16 pt-28 lg:flex lg:min-h-[100dvh] lg:items-center lg:pb-20 lg:pt-32">
      {/* Siatka papieru technicznego: linie włosowe tuszu, płasko, bez gradientu tonalnego. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-content relative w-full">
        <div aria-hidden className="arch-rules hidden lg:block" />
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal as="h1" delay={60} className="mt-7">
              <span className="block text-[clamp(0.95rem,1.35vw,1.15rem)] font-extrabold uppercase tracking-[0.14em] text-foreground">
                {HERO.titleTop}
              </span>
              <span className="mt-5 block font-display text-[clamp(2.3rem,5.1vw,4.5rem)] font-extrabold leading-[1.04] tracking-[-0.025em] text-foreground">
                {HERO.titleBefore}
                <span className="mark" style={{ paddingRight: "0.06em" }}>{HERO.titleMark}</span>
                {HERO.titleAfter}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted-strong lg:text-xl">
                {HERO.lead}
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button href="#kontakt" size="lg">
                {HERO.cta}
                <IconArrow className="h-5 w-5" />
              </Button>
              <a
                href={`tel:${TEST_PHONE.tel}`}
                className="group inline-flex items-center gap-3 font-semibold text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-card-border-strong transition-colors duration-200 group-hover:border-accent group-hover:bg-accent">
                  <IconPhone className="h-4 w-4" />
                </span>
                <span className="text-sm text-muted">{HERO.phoneLead}</span>
                <span className="tnum text-lg">{TEST_PHONE.label}</span>
              </a>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-[52ch] border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-strong">
                {HERO.note}
              </p>
            </Reveal>
          </div>

          {/* Makieta zapytania — ilustracja „pięciu konkretów”. */}
          <Reveal delay={160} className="min-w-0 lg:col-span-5">
            <figure className="mx-auto w-full max-w-[460px]">
              <div className="relative">
              <CornerMarks />
              <div className="surface-panel surface-panel--accent edge-accent-top p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-card-border pb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    {HERO.sample.title}
                  </span>
                  <span className="inline-flex items-center gap-2 bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground">
                    <span aria-hidden className="h-1.5 w-1.5 bg-accent-foreground" />
                    {HERO.sample.chip}
                  </span>
                </div>
                <dl className="divide-y divide-card-border">
                  {HERO.sample.rows.map((row, i) => (
                    <div key={row.label} className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-3 py-4">
                      <span aria-hidden className="tnum text-xs font-bold text-subtle">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <dt className="text-sm text-muted">{row.label}</dt>
                        <dd className="tnum text-base font-bold text-foreground">{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <div aria-hidden className="hatch-accent mt-2 h-3 w-full" />
              </div>
              </div>
              <figcaption className="mt-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
                {HERO.sample.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   LOGOTYPY — pasek komórek oddzielonych liniami włosowymi.
   ========================================================================= */
export function TestLogos() {
  return (
    <section className="border-b border-card-border" aria-labelledby="test-logos-title">
      <div className="container-content grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
        <h2
          id="test-logos-title"
          className="text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-muted lg:col-span-3"
        >
          {LOGOS_HEADING}
        </h2>
        <ul className="grid grid-cols-2 border-l border-t border-card-border sm:grid-cols-5 lg:col-span-9">
          {LOGOS.map((logo, i) => (
            <li
              key={logo.src}
              className={`flex h-24 items-center justify-center border-b border-r border-card-border px-4 ${
                i === LOGOS.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                aria-hidden={logo.alt === "" ? true : undefined}
                loading="lazy"
                decoding="async"
                className={`w-auto opacity-60 [filter:brightness(0)] ${logo.prominent ? "h-10" : "h-6"}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =========================================================================
   02 · PROBLEM — pięć arkuszy: indeks, treść, liczba-bohater.
   ========================================================================= */
export function TestProblem() {
  return (
    <Sheet id="problem">
      <SheetGrid index="01" label={PROBLEM.label}>
        <Reveal>
          <H2>
            {PROBLEM.headingBefore}
            <span className="mark">{PROBLEM.headingMark}</span>
          </H2>
        </Reveal>
        <Reveal delay={60}>
          <Lead>{PROBLEM.lead}</Lead>
        </Reveal>

        <ol className="mt-14 border-b border-card-border">
          {PROBLEM.items.map((item, i) => (
            <li key={item.title} className="grid grid-cols-1 gap-6 border-t border-card-border py-10 md:grid-cols-12 md:gap-8 lg:py-12">
              <div className="md:col-span-7">
                <div className="flex items-start gap-4">
                  <span aria-hidden className="tnum mt-1 shrink-0 text-sm font-extrabold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(1.3rem,2vw,1.7rem)] font-extrabold leading-[1.2] tracking-[-0.01em] text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-5 space-y-4 pl-0 text-base leading-[1.7] text-muted-strong md:pl-9 lg:text-[17px]">
                  {item.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                  {"quote" in item && item.quote ? (
                    <blockquote className="mt-6 border-l-[3px] border-accent bg-surface px-5 py-4">
                      <p className="font-semibold text-foreground">{item.quote}</p>
                      <p className="mt-1 text-sm text-muted">– {item.quoteBy}</p>
                    </blockquote>
                  ) : null}
                </div>
              </div>
              <div className="md:col-span-5">
                <div
                  className={`surface-panel p-6 lg:p-7 ${
                    "highlight" in item && item.highlight ? "surface-panel--accent edge-accent-top" : ""
                  }`}
                >
                  <p className="tnum font-display text-[clamp(2.2rem,4vw,3.4rem)] font-extrabold leading-none tracking-[-0.03em] text-foreground">
                    {"highlight" in item && item.highlight ? (
                      <span className="mark">{item.stat.value}</span>
                    ) : (
                      item.stat.value
                    )}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.stat.caption}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <Reveal>
          <p className="mt-14 max-w-[52rem] text-[clamp(1.35rem,2.4vw,2rem)] font-bold leading-[1.3] tracking-[-0.01em] text-foreground">
            {PROBLEM.closingBefore}
            <span className="underline-accent">{PROBLEM.closingAccent}</span>
          </p>
        </Reveal>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   03 · CO JUŻ PRÓBOWAŁEŚ — tabela specyfikacji ośmiu kanałów.
   ========================================================================= */
export function TestTried() {
  return (
    <Sheet id="kanaly">
      <SheetGrid index="02" label={TRIED.label}>
        <Reveal>
          <H2>{TRIED.heading}</H2>
        </Reveal>
        <Reveal delay={60}>
          <Lead>{TRIED.lead}</Lead>
        </Reveal>

        <div className="mt-12 border-b border-card-border">
          {/* Nagłówki kolumn — tylko desktop */}
          <div className="hidden grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)_minmax(0,1.75fr)] gap-8 border-t-2 border-foreground py-4 text-xs font-bold uppercase tracking-[0.2em] text-muted lg:grid">
            <span>{TRIED.columns.channel}</span>
            <span>{TRIED.columns.gives}</span>
            <span>{TRIED.columns.ends}</span>
          </div>
          <ul>
            {TRIED.items.map((item, i) => (
              <li
                key={item.name}
                className="grid grid-cols-1 gap-3 border-t border-card-border py-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)_minmax(0,1.75fr)] lg:gap-8"
              >
                <div className="flex items-baseline gap-3">
                  <span aria-hidden className="tnum text-xs font-extrabold text-muted">
                    K{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-extrabold leading-snug text-foreground">{item.name}</h3>
                </div>
                <p className="text-base leading-relaxed text-muted-strong">
                  <span className="font-bold text-foreground lg:hidden">{TRIED.columns.gives}: </span>
                  {item.gives}
                </p>
                <p className="text-base leading-relaxed text-muted-strong">
                  <span className="font-bold text-foreground lg:hidden">{TRIED.columns.ends}: </span>
                  {item.ends}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   PAS CIEMNY — jedyny na stronie (zasada brandbooka). Belka lime 3 px.
   ========================================================================= */
export function TestBand() {
  return (
    <section className="relative overflow-hidden bg-ink-block py-24 lg:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-accent" />
      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.18] tracking-[-0.015em] text-surface">
                {BAND.headingBefore}
                <span className="text-accent">{BAND.headingAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-surface/70">{BAND.body}</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-3">
            <ol className="border-t border-surface/15">
              {BAND.gaps.map((gap, i) => (
                <li key={gap} className="flex items-start gap-5 border-b border-surface/15 py-5">
                  <span className="tnum font-display text-2xl font-extrabold leading-none text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold leading-snug text-surface">{gap}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   04 · ROZWIĄZANIE — trzy filary, mapa „problem → zmiana”, uczciwa nota.
   ========================================================================= */
export function TestSolution() {
  return (
    <Sheet id="rozwiazanie">
      <SheetGrid index="03" label={SOLUTION.label}>
        <Reveal>
          <H2>
            {SOLUTION.headingBefore}
            <span className="mark">{SOLUTION.headingMark}</span>
          </H2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-strong lg:text-xl">{SOLUTION.lead}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {SOLUTION.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60} className="surface-panel edge-accent-top flex flex-col p-7">
              <span aria-hidden className="arch-index text-[3.5rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-extrabold leading-snug text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-strong">{pillar.body}</p>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-16 max-w-[40rem] text-[clamp(1.25rem,1.8vw,1.5rem)] font-extrabold leading-snug text-foreground">
          {SOLUTION.changesHeading}
        </h3>
        <ol className="mt-6 border-b border-card-border">
          {SOLUTION.changes.map((change, i) => (
            <li
              key={change.problem}
              className="grid grid-cols-1 items-start gap-3 border-t border-card-border py-6 md:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.5fr)] md:gap-6"
            >
              <p className="flex items-baseline gap-3 text-base font-bold text-muted">
                <span aria-hidden className="tnum text-xs font-extrabold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {change.problem}
              </p>
              <span aria-hidden className="hidden h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground md:flex">
                <IconArrow className="h-4 w-4" />
              </span>
              <p className="text-base leading-relaxed text-foreground lg:text-[17px]">{change.answer}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-muted-strong lg:text-[17px]">{SOLUTION.referral}</p>

        <div className="mt-10 max-w-[62ch] border-l-[3px] border-accent bg-surface p-6">
          <span className="inline-block bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
            {SOLUTION.honestChip}
          </span>
          <p className="mt-3 text-base leading-relaxed text-foreground lg:text-[17px]">{SOLUTION.honest}</p>
        </div>

        <Reveal>
          <p className="mt-14 max-w-[52rem] text-[clamp(1.35rem,2.4vw,2rem)] font-bold leading-[1.3] tracking-[-0.01em] text-foreground">
            {SOLUTION.dreamBefore}
            <span className="underline-accent">{SOLUTION.dreamAccent}</span>
            {SOLUTION.dreamAfter}
          </p>
        </Reveal>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   FILM — centralny eksponat (jedyny wyjątek od wyrównania do lewej).
   ========================================================================= */
export function TestFilm() {
  return (
    <section className="relative border-t border-card-border bg-surface py-20 lg:py-28">
      <div className="container-content">
        <Reveal as="h2" className="mx-auto max-w-[40rem] text-center font-display text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-foreground">
          {FILM.heading}
        </Reveal>
        <Reveal delay={80} className="relative mx-auto mt-12 max-w-5xl">
          <CornerMarks />
          <TestVideo src={FILM.src} poster={FILM.poster} aspect={FILM.aspect} name={FILM.name} accent />
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Button href="#kontakt" size="lg">
            {FILM.cta}
            <IconArrow className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================================
   05 · KTO ZA TYM STOI — portret w kole (zasada kształtu), sekcja w „ja”.
   ========================================================================= */
export function TestAbout() {
  return (
    <Sheet id="kim-jestem">
      <SheetGrid index="04" label={ABOUT.label}>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <Reveal className="mx-auto w-full max-w-[340px] md:mx-0">
            <div className="relative aspect-square w-full">
              <span aria-hidden className="absolute -inset-3 rounded-full border border-card-border-strong" />
              <Image
                src={ABOUT.photo}
                alt={`${ABOUT.name}, ${ABOUT.role}`}
                fill
                sizes="(min-width: 768px) 340px, 80vw"
                className="rounded-full object-cover"
              />
            </div>
            <div className="mt-8 border-t border-card-border pt-5">
              <p className="text-lg font-extrabold text-foreground">{ABOUT.name}</p>
              <p className="text-sm text-muted">{ABOUT.role}</p>
            </div>
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <H2>{ABOUT.heading}</H2>
            </Reveal>
            <div className="mt-8 space-y-5 text-base leading-[1.7] text-muted-strong lg:text-lg">
              {ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </SheetGrid>
    </Sheet>
  );
}
