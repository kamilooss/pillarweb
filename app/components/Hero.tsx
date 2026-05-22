"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "./Button";
import { HERO } from "../lib/content";

export function Hero() {
  return (
    <section
      id="main"
      className="relative min-h-screen w-full overflow-hidden bg-background"
      aria-label="Sekcja powitalna"
    >
      {/* Video background */}
      <div className="absolute inset-0 top-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={HERO.videoSrc} type="video/mp4" />
        </video>
        {/* Gradient overlay dla czytelności tekstu */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative container-content pt-32 pb-16 lg:pt-40 lg:pb-24 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-end max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground tracking-[0.2em] text-sm font-medium mb-6"
          >
            {HERO.brandLine}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.25rem,6vw,5rem)] uppercase"
          >
            {HERO.titleLine1}
            <br />
            {HERO.titleLine2Prefix}{" "}
            <span className="text-accent">{HERO.titleLine2Accent}</span>
          </motion.h1>

          <ul className="mt-12 lg:mt-16 grid gap-6 max-w-2xl">
            {HERO.pillars.map((pillar, i) => (
              <motion.li
                key={pillar.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                  <Image
                    src={pillar.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="w-full h-full"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg lg:text-xl">
                    {pillar.title}
                  </h2>
                  <p className="text-muted-strong text-[15px] mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-12 pb-4"
        >
          <Button href={HERO.cta.href} size="lg" className="min-w-[260px]">
            {HERO.cta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
