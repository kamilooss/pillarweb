"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { PROCESS } from "../lib/content";

interface ProcessSectionProps {
  content?: typeof PROCESS;
}

export function ProcessSection({ content = PROCESS }: ProcessSectionProps = {}) {
  const { heading, important, image, steps } = content;
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    /**
     * Aktywny krok = ten, który przecina środek viewportu.
     * IntersectionObserver z rootMargin -50%/-50% tworzy "linię" na środku
     * ekranu — bez nasłuchu na scroll (zgodnie z zasadami wydajności).
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="jak-pracujemy" className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {heading.prefix}{" "}
          <span className="underline-accent">{heading.accent}</span>{" "}
          {heading.suffix}
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-6 max-w-3xl leading-relaxed text-muted-strong"
        >
          <span className="mr-1 bg-accent px-1.5 py-0.5 font-display text-xs font-extrabold uppercase tracking-wider text-accent-foreground">
            Ważne
          </span>{" "}
          {important.prefix}{" "}
          <span className="font-semibold text-foreground">{important.accent}</span>{" "}
          {important.suffix}
        </Reveal>

        {/* Layout: lewa lista | prawa sticky image */}
        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            {steps.map((step, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={step.number}
                  data-idx={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative border-t border-card-border py-10 first:border-t-0"
                >
                  {/* Pasek aktywnego kroku */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] origin-top bg-accent"
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-baseline justify-between gap-4 pl-5"
                  >
                    <h3 className="font-display text-xl font-bold leading-tight tracking-tight lg:text-2xl">
                      {step.title}
                    </h3>
                    <span className="arch-index flex-shrink-0 text-2xl lg:text-3xl">
                      {step.number}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 14 : 0,
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pl-5"
                  >
                    <p className="max-w-lg leading-relaxed text-muted-strong">
                      {step.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Sticky image */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="aspect-[3/4] max-h-[80vh] overflow-hidden border border-card-border bg-surface-sunken">
                <Image
                  src={image}
                  alt="Konsultacja z klientem dotycząca stworzenia strony internetowej dla firmy budowlanej"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden">
            <div className="aspect-[4/5] overflow-hidden border border-card-border bg-surface-sunken">
              <Image
                src={image}
                alt=""
                width={768}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
