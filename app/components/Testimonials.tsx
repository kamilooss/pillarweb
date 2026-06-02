"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "motion/react";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
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

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const animated = useCountUp(stat.value, 1800, inView && !reduced);
  const display = reduced || !inView ? stat.value : animated;

  return (
    <div
      ref={ref}
      className="border-card-border-strong px-2 py-8 sm:border-l sm:px-8 sm:py-2 sm:first:border-l-0"
    >
      <div className="font-display text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-none tracking-tight tnum text-foreground">
        {stat.prefix}
        {display.toLocaleString("pl-PL")}
        {stat.suffix}
      </div>
      <div className="mt-4 max-w-[20ch] text-[15px] leading-snug text-muted-strong">
        {stat.label}
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonial = TESTIMONIALS[0];

  return (
    <section className="border-t border-card-border py-20 lg:py-28" aria-label="Wyniki i opinie">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          To nie są obietnice. To{" "}
          <span className="underline-accent">wyniki firm</span>, które nam zaufały.
        </Reveal>

        {/* Rejestr wyników — count-up, hairline dividery */}
        <div className="mt-14 grid grid-cols-1 border-y border-card-border-strong py-2 sm:grid-cols-3 lg:mt-16">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>

        {/* Cytat — redline po lewej, lewo-wyrównany */}
        <Reveal className="mt-16 lg:mt-20">
          <figure className="max-w-3xl border-l-[3px] border-accent pl-6 lg:pl-9">
            <blockquote className="space-y-5">
              {testimonial.quote.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.6] text-muted-strong"
                >
                  {paragraph.map((seg, sidx) => (
                    <span
                      key={sidx}
                      className={seg.accent ? "font-semibold text-foreground" : ""}
                    >
                      {seg.text}
                    </span>
                  ))}
                </p>
              ))}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.author}, ${testimonial.role}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover grayscale"
                unoptimized
              />
              <div>
                <div className="font-bold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted">{testimonial.role}</div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14">
          <Button href={SITE.contactAnchor} size="lg" className="min-w-[260px]">
            Wznieś swój biznes na wyższy poziom
          </Button>
        </div>
      </div>
    </section>
  );
}
