"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Tag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "ul"
  | "li"
  | "figure"
  | "blockquote"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span";

type Props = {
  children: ReactNode;
  className?: string;
  /** Opóźnienie w MILISEKUNDACH. */
  delay?: number;
  y?: number;
  as?: Tag;
  id?: string;
};

/**
 * Fade-up reveal po wejściu w viewport.
 * Respektuje prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  id,
}: Props) {
  const reduced = useReducedMotion();
  const Component = motion[as] as typeof motion.div;

  if (reduced) {
    const Static = as;
    return (
      <Static className={className} id={id}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
