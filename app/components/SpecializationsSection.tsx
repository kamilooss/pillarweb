"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Reveal } from "./Reveal";
import { SPECIALIZATIONS } from "../lib/content";

// Asymetryczny rytm 3 — 2 — 3 zamiast ośmiu równych kwadratów.
// Środkowy rząd to dwa szersze, kinowe kadry (oddech kompozycji).
const TILE_SPAN = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];
const WIDE = new Set([3, 4]);

export function SpecializationsSection() {
  const { headingPrefix, headingAccent, items } = SPECIALIZATIONS;

  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.25], [60, 0], {
    clamp: true,
  });

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div ref={sectionRef} className="container-content">
        <motion.h2
          style={reduced ? undefined : { y: headingY }}
          className="font-display font-bold text-center text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-tight max-w-5xl mx-auto text-balance will-change-transform"
        >
          {headingPrefix}{" "}
          <span className="text-accent">{headingAccent}</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-5 gap-y-10 lg:gap-y-12 mt-16 lg:mt-20">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 3) * 0.06}
              className={TILE_SPAN[i]}
            >
              <div className="group">
                <div
                  className={`relative overflow-hidden rounded-xl surface-panel aspect-[4/3] ${
                    WIDE.has(i) ? "lg:aspect-[16/9]" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.05]"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  {/* Linia marki — wjeżdża od lewej na hover (znacznik architektoniczny) */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-base lg:text-lg leading-snug text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </h3>
                  <span className="arch-index text-sm text-accent/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
