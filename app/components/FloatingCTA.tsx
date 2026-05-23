"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SITE } from "../lib/content";

export function FloatingCTA() {
  const reduced = useReducedMotion();
  const [pastHero, setPastHero] = useState(false);
  const [hideForContact, setHideForContact] = useState(false);

  // Pojawia się dopiero gdy Hero jest w większości przewinięte (≤30% widoczne)
  useEffect(() => {
    const hero = document.getElementById("main");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Znika gdy sekcja kontaktowa wchodzi w viewport
  useEffect(() => {
    const target = document.getElementById("kontakt");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHideForContact(entry.isIntersecting),
      { rootMargin: "0px 0px 220px 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !hideForContact;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.85,
      }}
      transition={{
        duration: reduced ? 0.15 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <Link
        href={SITE.contactAnchor}
        aria-label="Porozmawiajmy — przejdź do formularza kontaktowego"
        className="floating-cta group flex items-center justify-center w-[110px] h-[110px] rounded-full bg-accent text-accent-foreground font-display font-extrabold uppercase tracking-tight text-center"
      >
        <span className="text-[11px] leading-[1.1] tracking-tight px-2">
          Porozmawiajmy
        </span>
      </Link>
    </motion.div>
  );
}
