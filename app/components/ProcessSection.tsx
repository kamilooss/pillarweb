"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { PROCESS } from "../lib/content";

export function ProcessSection() {
  const { heading, important, image, steps } = PROCESS;
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    /**
     * Aktywny krok wybierany jest deterministycznie: ten, którego środek jest
     * najbliżej środka viewportu. Symetryczne dla scrolla w górę i w dół —
     * nie pomijamy kroków przy zmianie kierunku.
     */
    let rafId: number | null = null;
    const update = () => {
      rafId = null;
      const viewportCenter = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDistance = Infinity;
      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(elCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIdx = idx;
        }
      });
      setActiveIdx(bestIdx);
    };
    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="jak-pracujemy" className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <ParallaxReveal as="h2" className="font-display font-bold text-center text-[clamp(1.6rem,3.2vw,2.5rem)] leading-tight tracking-tight max-w-4xl mx-auto">
          {heading.prefix}{" "}
          <span className="text-accent">{heading.accent}</span>{" "}
          {heading.suffix}
        </ParallaxReveal>

        <ParallaxReveal as="p" className="text-foreground text-center mt-10 max-w-3xl mx-auto leading-relaxed">
          <strong className="text-accent">WAŻNE!</strong> {important.prefix}{" "}
          <strong className="text-accent">{important.accent}</strong>{" "}
          {important.suffix}
        </ParallaxReveal>

        {/* Layout: lewa lista | prawa sticky image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-20 lg:mt-28">
          <div className="space-y-2">
            {steps.map((step, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="border-t border-card-border first:border-t-0 py-12"
                >
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <h3 className="font-display font-bold text-2xl lg:text-3xl">
                      {step.title}
                    </h3>
                    <span className="text-xl lg:text-2xl font-light text-accent">
                      {step.number}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-strong leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                  </motion.div>

                  {/* Progress bar */}
                  <div className="mt-6 h-px bg-card-border-strong overflow-hidden">
                    <motion.div
                      className="h-full bg-accent origin-left"
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{
                        duration: isActive ? 0.8 : 0.3,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky image */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[80vh] bg-card">
                <Image
                  src={image}
                  alt="Konsultacja z klientem dotycząca stworzenia strony internetowej dla firmy budowlanej"
                  width={768}
                  height={1024}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-card">
              <Image
                src={image}
                alt=""
                width={768}
                height={1024}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
