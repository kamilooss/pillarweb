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

export function ContentVideoSection() {
  const { heading, videoSrc, problems } = CONTENT_SECTION;

  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.25], [60, 0], {
    clamp: true,
  });

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
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
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

      {/* Problemy + dyptyk */}
      <div className="container-content py-24 lg:py-32">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-start">
          <div>
            <Reveal as="h3" className="text-accent font-display font-bold text-[clamp(1.4rem,2.5vw,2.1rem)] leading-tight tracking-tight max-w-md">
              {problems.title}
            </Reveal>

            <ol className="mt-12 space-y-10">
              {problems.items.map((item, i) => (
                <Reveal key={i} delay={i * 0.05} as="div">
                  <h4 className="text-accent font-bold text-lg lg:text-xl mb-3">
                    {i + 1}. {item.title}
                  </h4>
                  <p className="text-muted-strong leading-relaxed">
                    <FormattedText text={item.body} />
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="aspect-[16/10] rounded-xl overflow-hidden">
                <Image
                  src={problems.image}
                  alt="Porównanie problemu i efektów dobrze działającej strony internetowej dla firmy budowlanej"
                  width={1024}
                  height={572}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-foreground text-lg lg:text-xl leading-snug font-medium">
                {problems.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Button href={problems.cta.href} size="lg">
                {problems.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
