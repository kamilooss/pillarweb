"use client";

import Image from "next/image";
import { Reveal } from "../../components/Reveal";

/**
 * „Dla kogo” — wygląd 1:1 z SpecializationsSection strony głównej (kafle
 * branż ze zdjęciami w rytmie 3 — 2 — 3) + wstęp, dopiski przy branżach
 * i panel „Nie pracujemy z firmami, które:” w stylu arkusza z cennika.
 */
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

export type ForWhomContent = {
  headingPrefix: string;
  headingAccent: string;
  lead: string;
  items: readonly { label: string; image: string; note?: string }[];
  notHeading: string;
  not: readonly string[];
};

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 flex-shrink-0 text-foreground" aria-hidden="true">
      <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  );
}

export function ForWhomT({ content, id }: { content: ForWhomContent; id?: string }) {
  const { headingPrefix, headingAccent, lead, items, notHeading, not } = content;

  return (
    <section id={id} className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix} <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <Reveal as="p" delay={60} className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong lg:text-xl">
          {lead}
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
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold leading-snug text-foreground lg:text-lg">{item.label}</h3>
                  <span className="arch-index text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {item.note ? <p className="mt-1.5 text-sm leading-relaxed text-muted-strong">{item.note}</p> : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-16 lg:mt-20">
          <article className="surface-panel edge-accent-top relative overflow-hidden p-7 lg:p-12">
            <h3 className="font-display text-xl font-bold leading-tight lg:text-2xl">{notHeading}</h3>
            <ul className="mt-8 grid gap-y-5 md:grid-cols-2 md:gap-x-12">
              {not.map((item) => (
                <li key={item} className="flex gap-3">
                  <CrossIcon />
                  <span className="text-[15px] font-semibold leading-snug text-foreground lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
