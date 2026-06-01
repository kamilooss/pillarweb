"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Button } from "./Button";
import { SITE, STATS, TESTIMONIALS } from "../lib/content";

type Stat = (typeof STATS)[number];

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const startTime = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const animated = useCountUp(stat.value, 1800, inView && !reduced);
  const display = reduced || !inView ? stat.value : animated;

  const isLast = index === STATS.length - 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center text-center px-6 lg:px-10 py-8 md:py-4
        ${
          !isLast
            ? "border-b md:border-b-0 md:border-r border-card-border-strong"
            : ""
        }`}
    >
      <div className="font-display font-extrabold text-foreground leading-none tracking-tight text-[clamp(2.25rem,4.6vw,3.75rem)] tabular-nums">
        {stat.prefix}
        {display.toLocaleString("pl-PL")}
        {stat.suffix}
      </div>
      <div className="mt-4 lg:mt-5 text-muted-strong text-[14px] lg:text-[15px] leading-snug max-w-[18ch]">
        {stat.label}
      </div>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Krótka, szybka animacja wejścia nagłówka — od ~60px poniżej do pozycji
  // naturalnej w pierwszych 25% scrolla sekcji, potem nagłówek STOI.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.25], [60, 0], {
    clamp: true,
  });

  // CTA pojawia się płynnie przy scrollu — opacity 0 → 1
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start 0.6"],
  });
  const ctaOpacity = useTransform(ctaProgress, [0, 1], [0, 1]);

  const testimonial = TESTIMONIALS[0];

  return (
    <section
      ref={sectionRef}
      className="pt-16 lg:pt-24 pb-24 lg:pb-36"
    >
      <div className="container-content">
        <motion.h2
          style={reduced ? undefined : { y: headingY }}
          className="font-display font-bold text-center text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-4xl mx-auto will-change-transform"
        >
          To nie są obietnice.
          <br />
          To wyniki firm, które <span className="text-accent">nam zaufały</span>
        </motion.h2>

        {/* Liczby — count-up, pozycja zablokowana (bez parallaxu) */}
        <div className="mt-20 lg:mt-28 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Testimonial — bez animacji, od razu pod liczbami */}
        <div className="mt-16 lg:mt-20 max-w-3xl mx-auto flex flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="font-display text-accent text-7xl lg:text-8xl leading-[0.6] select-none mb-6"
          >
            &ldquo;
          </span>
          <div className="space-y-6">
            {testimonial.quote.map((paragraph, idx) => (
              <p
                key={idx}
                className="italic text-muted-strong text-[17px] lg:text-[19px] leading-[1.7]"
              >
                {paragraph.map((seg, sidx) => (
                  <span
                    key={sidx}
                    className={seg.accent ? "text-accent font-medium" : ""}
                  >
                    {seg.text}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.author}, ${testimonial.role}`}
              width={64}
              height={64}
              className="rounded-full object-cover w-16 h-16 grayscale"
              unoptimized
            />
            <div className="text-left italic">
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-sm text-muted">{testimonial.role}</div>
            </div>
          </div>

          <motion.div
            ref={ctaRef}
            style={reduced ? undefined : { opacity: ctaOpacity }}
            className="mt-20 lg:mt-28 will-change-[opacity]"
          >
            <Button
              href={SITE.contactAnchor}
              size="lg"
              className="min-w-[260px]"
            >
              Wznieś swój biznes na wyższy poziom
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
