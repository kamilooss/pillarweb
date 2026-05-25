"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
} from "motion/react";
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

  const pinRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsGridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(resultsGridRef, {
    once: true,
    amount: 0.15,
  });
  const reduced = useReducedMotion();

  // Pinned scroll-progress driving 8 reveals: 4 pillars × (subhead → body).
  // Outer lg:h-[300vh] → 200vh sticky duration, ~22% progress per pillar.
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  // Results heading — krótka, szybka animacja wejścia od 60px poniżej do
  // pozycji naturalnej w pierwszych 25% scrolla sekcji. Spójna z nagłówkiem
  // "To nie są obietnice..." w sekcji Testimonials.
  const { scrollYProgress: resultsProgress } = useScroll({
    target: resultsRef,
    offset: ["start end", "end start"],
  });
  const resultsHeadingY = useTransform(resultsProgress, [0, 0.25], [60, 0], {
    clamp: true,
  });

  // Pillar 1 — lewa kolumna
  const t1O = useTransform(scrollYProgress, [0.04, 0.12], [0, 1]);
  const t1Y = useTransform(scrollYProgress, [0.04, 0.12], [28, 0]);
  const t1X = useTransform(scrollYProgress, [0.04, 0.12], [-36, 0]);
  const b1O = useTransform(scrollYProgress, [0.15, 0.23], [0, 1]);
  const b1Y = useTransform(scrollYProgress, [0.15, 0.23], [28, 0]);

  // Pillar 2 — prawa kolumna
  const t2O = useTransform(scrollYProgress, [0.27, 0.35], [0, 1]);
  const t2Y = useTransform(scrollYProgress, [0.27, 0.35], [28, 0]);
  const t2X = useTransform(scrollYProgress, [0.27, 0.35], [36, 0]);
  const b2O = useTransform(scrollYProgress, [0.38, 0.46], [0, 1]);
  const b2Y = useTransform(scrollYProgress, [0.38, 0.46], [28, 0]);

  // Pillar 3 — lewa kolumna
  const t3O = useTransform(scrollYProgress, [0.5, 0.58], [0, 1]);
  const t3Y = useTransform(scrollYProgress, [0.5, 0.58], [28, 0]);
  const t3X = useTransform(scrollYProgress, [0.5, 0.58], [-36, 0]);
  const b3O = useTransform(scrollYProgress, [0.61, 0.69], [0, 1]);
  const b3Y = useTransform(scrollYProgress, [0.61, 0.69], [28, 0]);

  // Pillar 4 — prawa kolumna
  const t4O = useTransform(scrollYProgress, [0.73, 0.81], [0, 1]);
  const t4Y = useTransform(scrollYProgress, [0.73, 0.81], [28, 0]);
  const t4X = useTransform(scrollYProgress, [0.73, 0.81], [36, 0]);
  const b4O = useTransform(scrollYProgress, [0.84, 0.92], [0, 1]);
  const b4Y = useTransform(scrollYProgress, [0.84, 0.92], [28, 0]);

  const pillarStyles = [
    { title: { opacity: t1O, y: t1Y, x: t1X }, body: { opacity: b1O, y: b1Y } },
    { title: { opacity: t2O, y: t2Y, x: t2X }, body: { opacity: b2O, y: b2Y } },
    { title: { opacity: t3O, y: t3Y, x: t3X }, body: { opacity: b3O, y: b3Y } },
    { title: { opacity: t4O, y: t4Y, x: t4X }, body: { opacity: b4O, y: b4Y } },
  ];

  return (
    <section className="bg-background">
      {/* Mobile: zwykły flow z prostym revealem na każdym akapicie */}
      <div className="lg:hidden py-24">
        <div className="container-content">
          <Reveal
            as="h2"
            className="font-display font-bold text-center text-[clamp(1.6rem,4.5vw,2.5rem)] leading-tight tracking-tight max-w-3xl mx-auto"
          >
            {heading.prefix}
            <br />
            <span className="text-accent">{heading.accent}</span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="flex flex-col">
                <h3 className="text-accent font-bold text-lg lg:text-xl mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-strong leading-relaxed">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: pinowany scroll-reveal.
          Nagłówek pozostaje widoczny przez cały czas; 4 akapity odsłaniają się
          po kolei naprzemiennie L/R (1: L, 2: R, 3: L, 4: R), każdy najpierw
          subnagłówkiem a następnie treścią w miarę przewijania. */}
      <div ref={pinRef} className="hidden lg:block relative lg:h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container-content w-full">
            <h2 className="font-display font-bold text-center text-[clamp(1.6rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-4xl mx-auto">
              {heading.prefix}
              <br />
              <span className="text-accent">{heading.accent}</span>
            </h2>

            <div className="mt-16 xl:mt-20 grid grid-cols-2 gap-x-16 gap-y-14 max-w-6xl mx-auto">
              {pillars.map((p, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={p.title}
                    className={`max-w-md ${
                      isLeft ? "justify-self-start" : "justify-self-end"
                    }`}
                  >
                    <motion.h3
                      style={reduced ? undefined : pillarStyles[i].title}
                      className="text-accent font-bold text-lg lg:text-xl mb-3 will-change-[opacity,transform]"
                    >
                      {p.title}
                    </motion.h3>
                    <motion.p
                      style={reduced ? undefined : pillarStyles[i].body}
                      className="text-muted-strong leading-relaxed will-change-[opacity,transform]"
                    >
                      {p.body}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja wyników — spacing i animacja nagłówka spójne z Testimonials
          (pt-16 lg:pt-24 nad nagłówkiem, motion.h2 z y 60→0). */}
      <div
        ref={resultsRef}
        className="container-content pt-16 lg:pt-24 pb-24 lg:pb-36"
      >
        <motion.h2
          style={reduced ? undefined : { y: resultsHeadingY }}
          className="font-display font-bold text-center text-[clamp(1.6rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-4xl mx-auto will-change-transform"
        >
          {results.headingPrefix}{" "}
          {results.headingAccent}
          <span className="text-accent">{results.headingSuffix}</span>
        </motion.h2>

        <div
          ref={resultsGridRef}
          className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start mt-20 overflow-x-clip"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -180 }}
            animate={
              reduced
                ? undefined
                : gridInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -180 }
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="will-change-[opacity,transform]"
          >
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
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 180 }}
            animate={
              reduced
                ? undefined
                : gridInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 180 }
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6 will-change-[opacity,transform]"
          >
            {results.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">
                <span className="[&>strong]:text-accent">
                  <FormattedText text={p} />
                </span>
              </p>
            ))}
            <p className="text-foreground leading-relaxed">
              <span className="[&>strong]:text-accent">
                <FormattedText text={results.closing} />
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
