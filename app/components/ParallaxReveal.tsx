"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p" | "div";
};

/**
 * Scroll-coupled wjazd elementu od y=60 do y=0 w pierwszych 25% progresu
 * scrolla [start end, end start], dokładnie tak samo jak nagłówek
 * "To nie są obietnice..." w sekcji Testimonials.
 */
export function ParallaxReveal({ children, className, as = "h2" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.25], [60, 0], { clamp: true });

  const Component = motion[as] as typeof motion.div;
  const combined = `${className ?? ""}${reduced ? "" : " will-change-transform"}`.trim();

  return (
    <Component
      ref={ref}
      style={reduced ? undefined : { y }}
      className={combined}
    >
      {children}
    </Component>
  );
}
