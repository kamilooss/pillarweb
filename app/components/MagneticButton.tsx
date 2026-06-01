"use client";

import Link from "next/link";
import { useRef, ReactNode, PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Siła przyciągania do kursora (0–1). */
  strength?: number;
};

/**
 * Magnetyczny przycisk — element delikatnie dryfuje w stronę kursora.
 * Ruch liczony na motion values (poza cyklem renderu Reacta), nie na
 * useState — zero re-renderów na każdy ruch myszy. Wyłączony przy
 * prefers-reduced-motion i na urządzeniach dotykowych (pointer events).
 */
export function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.12 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.12 });

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={reduced ? undefined : { x: sx, y: sy }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`cta-pulse inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground font-semibold tracking-tight active:scale-[0.98] ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
