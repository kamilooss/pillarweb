"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { FAQ } from "../lib/content";

function ChevronUp({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={`flex-shrink-0 text-accent transition-transform duration-300 ${
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
  // odpowiedź ma podwójne new-liney jako separator paragrafów,
  // i • dla list. Tutaj parsujemy.
  const lines = answer.split("\n").filter((l) => l.trim().length > 0);
  const blocks: { type: "p" | "li"; text: string }[] = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("•")) {
      return { type: "li", text: trimmed.replace(/^•\s*/, "") };
    }
    return { type: "p", text: trimmed };
  });

  return (
    <div className="border border-card-border rounded-xl bg-card-elevated overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 lg:px-8 py-5 lg:py-6 text-left hover:bg-card transition-colors cursor-pointer"
      >
        <span className="font-bold text-[17px] lg:text-lg leading-snug">
          {question}
        </span>
        <ChevronUp open={open} />
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
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-1 space-y-3 text-muted-strong leading-relaxed">
              {blocks.map((block, i) =>
                block.type === "li" ? (
                  <div key={i} className="flex gap-2">
                    <span className="text-accent">•</span>
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
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <Reveal as="h2" className="font-display font-bold text-center text-[clamp(1.75rem,3.5vw,3rem)] tracking-tight">
          {FAQ.heading}
        </Reveal>

        <div className="mt-14 lg:mt-20 max-w-3xl mx-auto space-y-3">
          {FAQ.items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
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
