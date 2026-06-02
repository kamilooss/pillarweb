"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { FAQ } from "../lib/content";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={`flex-shrink-0 text-foreground transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M5 13l6-6 6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const lines = answer.split("\n").filter((l) => l.trim().length > 0);
  const blocks: { type: "p" | "li"; text: string }[] = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("•")) {
      return { type: "li", text: trimmed.replace(/^•\s*/, "") };
    }
    return { type: "p", text: trimmed };
  });

  return (
    <div className="surface-panel overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-foreground/[0.02] lg:px-8 lg:py-6"
      >
        <span className="text-[17px] font-bold leading-snug lg:text-lg">{question}</span>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 px-6 pb-6 pt-1 leading-relaxed text-muted-strong lg:px-8 lg:pb-8">
              {blocks.map((block, i) =>
                block.type === "li" ? (
                  <div key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" aria-hidden="true" />
                    <span>{block.text}</span>
                  </div>
                ) : (
                  <p key={i}>{block.text}</p>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="border-t border-card-border bg-surface-sunken py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold tracking-tight"
        >
          {FAQ.heading}
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-3 lg:mt-16">
          {FAQ.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 30, 200)}>
              <FaqItem
                question={item.question}
                answer={item.answer}
                open={open.has(i)}
                onToggle={() => toggle(i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
