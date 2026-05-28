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

export function SpecializationsSection() {
  const { headingPrefix, headingAccent, items } = SPECIALIZATIONS;

  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Heading delikatnie wjeżdża w górę — identyczna krzywa i timing jak nagłówek
  // sekcji wyników w DifferentiatorSection (y: 60 → 0 na pierwszych 25%
  // scrolla sekcji).
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
          className="font-display font-bold text-center text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-tight max-w-5xl mx-auto will-change-transform"
        >
          {headingPrefix}{" "}
          <span className="text-accent">{headingAccent}</span>
        </motion.h2>

        {/* Dwa równe rzędy po 4 kafelki (8 specjalizacji) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.06} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 group">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h3 className="text-accent font-medium text-lg">
                {item.label}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
