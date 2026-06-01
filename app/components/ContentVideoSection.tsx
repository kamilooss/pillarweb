"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
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
          <span key={i} className="text-accent">
            {p.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function ContentVideoSection() {
  const { heading, videoSrc, problems } = CONTENT_SECTION;

  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Nagłówek nad wideo — slide-up wraz z wejściem sekcji w viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.25], [60, 0], {
    clamp: true,
  });

  // Pin scroll-progress — driving reveals while sticky content is pinned.
  // Outer container ma lg:h-[200vh] więc pin trwa 100vh = pełne viewport
  // scrolla. Reveal-y są mapowane na zakresy tego progresu.
  const { scrollYProgress: pinProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const item1Opacity = useTransform(pinProgress, [0.08, 0.18], [0, 1]);
  const item1Y = useTransform(pinProgress, [0.08, 0.18], [32, 0]);
  const item2Opacity = useTransform(pinProgress, [0.26, 0.36], [0, 1]);
  const item2Y = useTransform(pinProgress, [0.26, 0.36], [32, 0]);
  const item3Opacity = useTransform(pinProgress, [0.44, 0.54], [0, 1]);
  const item3Y = useTransform(pinProgress, [0.44, 0.54], [32, 0]);
  const summaryOpacity = useTransform(pinProgress, [0.62, 0.72], [0, 1]);
  const summaryY = useTransform(pinProgress, [0.62, 0.72], [32, 0]);
  const ctaOpacity = useTransform(pinProgress, [0.80, 0.90], [0, 1]);
  const ctaY = useTransform(pinProgress, [0.80, 0.90], [32, 0]);

  const itemReveals = [
    { opacity: item1Opacity, y: item1Y },
    { opacity: item2Opacity, y: item2Y },
    { opacity: item3Opacity, y: item3Y },
  ];

  // Entrance fade-in dla nagłówka "Słaba strona..." i grafiki —
  // wchodzą razem zanim pin się zaaktywuje
  const entranceAnim = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -15% 0px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section ref={sectionRef} className="bg-background pt-16 lg:pt-24">
      {/* Nagłówek nad filmem — animacja i rozmiar spójny z Testimonials */}
      <div className="container-content">
        <motion.h2
          style={reduced ? undefined : { y: headingY }}
          className="font-display font-bold text-center text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-5xl mx-auto mb-12 lg:mb-16 will-change-transform"
        >
          {heading.prefix}{" "}
          <span className="text-accent">{heading.accent}</span>
        </motion.h2>
      </div>

      {/* Video bez overlay'owego nagłówka */}
      <div className="container-content">
        <div className="surface-panel relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/*
        Pinned reveal section.
        - Outer kontener (pinRef) ma lg:h-[200vh] — daje 100vh scrolla podczas
          którego sticky inner trzyma się na top:0.
        - Heading + grafika są visible od razu jak sekcja wjeżdża w viewport
          (fade-in od dołu). Pin zaczyna się gdy pinRef.top = viewport.top.
        - Items 1-3, summary, CTA pojawiają się progresywnie podczas pinu,
          mapowane na pinProgress 0.08 → 0.90.
        - Po progress 0.90 pin trzyma jeszcze ~100px buffera, potem zwalnia
          i strona normalnie scrolluje dalej.
        - Mobile (<lg): brak pinu, content flow normalny, reveal-y odpalają
          się wraz z naturalnym scrollem.
      */}
      <div
        ref={pinRef}
        className="relative mt-40 lg:mt-60 mb-24 lg:mb-32 lg:h-[200vh]"
      >
        <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
          <div className="container-content lg:pt-16 lg:pb-12">
            <div className="w-full">
              <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-start">
                {/* LEWA: nagłówek + 3 podpunkty */}
                <div>
                  <motion.h3
                    {...(reduced ? {} : entranceAnim)}
                    className="text-accent font-display font-bold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-2xl"
                  >
                    {problems.title}
                  </motion.h3>

                  <ol className="mt-12 space-y-10">
                    {problems.items.map((item, i) => (
                      <motion.div
                        key={i}
                        style={
                          reduced
                            ? undefined
                            : {
                                opacity: itemReveals[i].opacity,
                                y: itemReveals[i].y,
                              }
                        }
                        className="will-change-[opacity,transform]"
                      >
                        <h4 className="text-accent font-bold text-lg lg:text-xl mb-3">
                          {i + 1}. {item.title}
                        </h4>
                        <p className="text-muted-strong leading-relaxed">
                          <FormattedText text={item.body} />
                        </p>
                      </motion.div>
                    ))}
                  </ol>
                </div>

                {/* PRAWA: grafika + summary + CTA */}
                <div className="flex flex-col gap-10">
                  <motion.div
                    {...(reduced ? {} : entranceAnim)}
                    className="surface-panel aspect-[16/10] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={problems.image}
                      alt="Porównanie problemu i efektów dobrze działającej strony internetowej dla firmy budowlanej"
                      width={1024}
                      height={572}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </motion.div>

                  <motion.p
                    style={
                      reduced
                        ? undefined
                        : { opacity: summaryOpacity, y: summaryY }
                    }
                    className="text-foreground text-lg lg:text-xl leading-snug font-medium will-change-[opacity,transform]"
                  >
                    <FormattedText text={problems.summary} />
                  </motion.p>

                  <motion.div
                    style={
                      reduced ? undefined : { opacity: ctaOpacity, y: ctaY }
                    }
                    className="will-change-[opacity,transform]"
                  >
                    <Button href={problems.cta.href} size="lg">
                      {problems.cta.label}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
