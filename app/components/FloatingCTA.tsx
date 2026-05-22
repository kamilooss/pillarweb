"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SITE } from "../lib/content";

export function FloatingCTA() {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(false);
  const [hideForContact, setHideForContact] = useState(false);

  // Opóźnione pojawienie po załadowaniu strony
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 1400);
    return () => clearTimeout(t);
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

  const visible = shown && !hideForContact;

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
        className="floating-cta group flex items-center justify-center w-[120px] h-[120px] rounded-full bg-accent text-accent-foreground font-display font-extrabold uppercase tracking-tight text-center"
      >
        <span className="text-[12px] leading-[1.1] tracking-tight px-2">
          Porozmawiajmy
        </span>
      </Link>
    </motion.div>
  );
}
