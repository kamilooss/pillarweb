"use client";

import { Fragment, useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Button } from "./Button";
import { HERO } from "../lib/content";

const line1Words = HERO.titleLine1.split(" ");
const line2AccentWords = HERO.titleLine2Accent.split(" ");
const subtitleTokens = HERO.subtitleParts.flatMap((part) =>
  part.text.split(" ").map((text) => ({ text, accent: part.accent }))
);

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = headingRef.current;
    const h2 = subtitleRef.current;
    if (!h1 || !h2) return;

    const h1Words = h1.querySelectorAll<HTMLElement>(".hero-word");
    const h2Words = h2.querySelectorAll<HTMLElement>(".hero-word");

    gsap.set([...h1Words, ...h2Words], { yPercent: 110 });
    h1.style.visibility = "visible";
    h2.style.visibility = "visible";

    const tl = gsap.timeline();
    tl.to(
      h1Words,
      {
        yPercent: 0,
        duration: 1,
        stagger: 0.08,
        ease: "expo.out",
      },
      0.15
    );
    tl.to(
      h2Words,
      {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "expo.out",
      },
      "-=0.55"
    );

    return () => {
      tl.kill();
    };
  }, []);

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
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Content — wyśrodkowane w obszarze wideo (video zaczyna się od top-20) */}
      <div className="relative container-content min-h-screen flex items-center justify-center pt-20">
        <div className="flex flex-col items-center text-center max-w-6xl">
          <h1
            ref={headingRef}
            style={{ visibility: "hidden" }}
            className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.25rem,5.8vw,5.25rem)] uppercase"
          >
            <span className="block overflow-hidden pb-[0.08em]">
              {line1Words.map((w, i) => (
                <Fragment key={`l1-${i}`}>
                  {i > 0 && " "}
                  <span className="hero-word inline-block">{w}</span>
                </Fragment>
              ))}
            </span>
            <span className="block overflow-hidden pb-[0.08em] md:whitespace-nowrap">
              <span className="hero-word inline-block">
                {HERO.titleLine2Prefix}
              </span>
              {line2AccentWords.map((w, i) => (
                <Fragment key={`l2-${i}`}>
                  {" "}
                  <span className="hero-word inline-block text-accent">
                    {w}
                  </span>
                </Fragment>
              ))}
            </span>
          </h1>

          <h2
            ref={subtitleRef}
            style={{ visibility: "hidden" }}
            aria-label={HERO.subtitle}
            className="mt-6 lg:mt-8 max-w-4xl font-display font-bold tracking-wide leading-snug uppercase text-muted-strong text-[clamp(0.95rem,1.7vw,1.5rem)]"
          >
            {subtitleTokens.map((token, i) => (
              <Fragment key={`s-${i}`}>
                {i > 0 && " "}
                <span className="inline-block overflow-hidden align-bottom pb-[0.15em]">
                  <span
                    className={`hero-word inline-block${
                      token.accent ? " text-accent" : ""
                    }`}
                  >
                    {token.text}
                  </span>
                </span>
              </Fragment>
            ))}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <Button href={HERO.cta.href} size="lg" className="min-w-[260px]">
              {HERO.cta.label}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
