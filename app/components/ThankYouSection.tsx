"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { SITE, THANKYOU } from "../lib/content";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
  </svg>
);

export function ThankYouSection() {
  const reduced = useReducedMotion();
  const {
    headingPrefix,
    headingAccent,
    subtext,
    responseLead,
    responseAccent,
    responseTail,
    phone,
    roadmap,
    backLabel,
  } = THANKYOU;

  return (
    <>
      {/* 1 — POTWIERDZENIE
          Centrowanie świadome: moment potwierdzenia, nie sekcja sprzedażowa. */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-content flex flex-col items-center text-center">
          {/* Znacznik "zrobione" — ta sama afordancja co sukces formularza,
              powiększona do roli głównego wizualu strony. */}
          <motion.div
            initial={reduced ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }}
            className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent lg:h-24 lg:w-24"
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <motion.path
                d="M5 12.5L10 17.5L19 7"
                stroke="var(--color-accent-foreground)"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduced ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>
          </motion.div>

          <Reveal
            as="h1"
            delay={120}
            className="max-w-3xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            {headingPrefix}{" "}
            <span className="underline-accent">{headingAccent}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong"
          >
            {subtext}
          </Reveal>

          <Reveal
            as="p"
            delay={280}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground"
          >
            {responseLead}{" "}
            <span className="mark font-semibold">{responseAccent}</span>{" "}
            {responseTail}
          </Reveal>
        </div>
      </section>

      {/* 2 — TELEFON
          Jeden świadomy ciemny pas — ustalony język marki na "drogi" akcent.
          Numer w lime na tuszu: maksymalny kontrast, dozwolony na ciemnym. */}
      <section className="bg-ink-block text-background">
        <div className="container-content flex flex-col items-start justify-between gap-8 py-12 lg:flex-row lg:items-center lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight lg:text-3xl">
              {phone.heading}
            </h2>
            <p className="mt-3 leading-relaxed text-background/70">{phone.sub}</p>
          </div>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="group inline-flex items-center gap-4 lg:flex-shrink-0"
            aria-label={`Zadzwoń teraz: ${SITE.phone}`}
          >
            <span className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-105">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                {phone.label}
              </span>
              <span className="tnum mt-1.5 font-display text-3xl font-extrabold tracking-tight text-accent underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors duration-300 group-hover:decoration-accent lg:text-4xl">
                {SITE.phone}
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* 3 — MAPA DALSZYCH KROKÓW
          Pionowa oś czasu w języku "planu". Krok 1 oznaczony jako zrobiony. */}
      <section className="py-20 lg:py-28">
        <div className="container-content">
          <Reveal
            as="h2"
            className="max-w-3xl font-display text-[clamp(1.7rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
          >
            {roadmap.headingPrefix}{" "}
            <span className="underline-accent">{roadmap.headingAccent}</span>
          </Reveal>

          <div className="surface-panel mt-12 p-6 lg:mt-16 lg:p-12">
            <ol className="relative">
              {roadmap.steps.map((step, i) => {
                const isLast = i === roadmap.steps.length - 1;
                const done = "done" in step && step.done;
                return (
                  <motion.li
                    key={step.title}
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative flex gap-5 pb-10 last:pb-0 lg:gap-7"
                  >
                    {/* Łącznik pionowy — lime dla ukończonego odcinka, hairline dla reszty */}
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className={`absolute left-[21px] top-12 bottom-0 w-px lg:left-[25px] ${
                          done ? "bg-accent" : "bg-foreground/15"
                        }`}
                      />
                    )}

                    {/* Węzeł */}
                    <div className="relative z-10 flex-shrink-0">
                      {done ? (
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent lg:h-[52px] lg:w-[52px]">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12.5L10 17.5L19 7"
                              stroke="var(--color-accent-foreground)"
                              strokeWidth="2.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="tnum inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground/20 bg-surface font-display text-lg font-extrabold text-muted-strong lg:h-[52px] lg:w-[52px] lg:text-xl">
                          {i + 1}
                        </span>
                      )}
                    </div>

                    {/* Treść */}
                    <div className="pt-1.5 lg:pt-2.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-lg font-bold leading-tight tracking-tight lg:text-xl">
                          {step.title}
                        </h3>
                        {done && (
                          <span className="bg-accent px-2 py-0.5 font-display text-[11px] font-extrabold uppercase tracking-wider text-accent-foreground">
                            {roadmap.doneLabel}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 max-w-xl leading-relaxed text-muted-strong">
                        {step.body}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-strong transition-colors hover:text-foreground"
            >
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                &larr;
              </span>
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
