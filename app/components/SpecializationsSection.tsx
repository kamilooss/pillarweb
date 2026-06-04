"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { SPECIALIZATIONS } from "../lib/content";

// Asymetryczny rytm 3 — 2 — 3 zamiast ośmiu równych kwadratów.
// Środkowy rząd to dwa szersze, kinowe kadry (oddech kompozycji).
const TILE_SPAN = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];
const WIDE = new Set([3, 4]);

export function SpecializationsSection() {
  const { headingPrefix, headingAccent, items } = SPECIALIZATIONS;

  return (
    <section className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-y-12">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 60} className={TILE_SPAN[i]}>
              <div className="group">
                <div
                  className={`relative overflow-hidden border border-card-border bg-surface-sunken aspect-[4/3] ${
                    WIDE.has(i) ? "lg:aspect-[16/9]" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.05]"
                  />
                  {/* Linia marki — wjeżdża od lewej na hover (znacznik strukturalny) */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold leading-snug text-foreground lg:text-lg">
                    {item.label}
                  </h3>
                  <span className="arch-index text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
