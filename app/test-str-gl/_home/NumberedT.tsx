import { ReactNode } from "react";
import { Reveal } from "../../components/Reveal";
import { FormattedText } from "./FormattedText";

/**
 * Siatka numerowanych punktów — wygląd 1:1 z DifferentiatorSection strony
 * głównej („Nie jesteśmy agencją od wszystkiego”): nagłówek z podkreśleniem
 * lime, dwie kolumny, indeks ghost 01, 02… Dodatki dla /test-str-gl:
 * opcjonalny wstęp, punkty z kilkoma akapitami (z **pogrubieniem**) i
 * miejsce na treść pod siatką (children).
 */
export type NumberedItem = { title: string; paragraphs: readonly string[] };

export function NumberedT({
  id,
  tone = "paper",
  headingPrefix,
  headingAccent,
  intro,
  items,
  children,
}: {
  id?: string;
  tone?: "paper" | "sunken";
  headingPrefix: string;
  headingAccent: string;
  intro?: string;
  items: readonly NumberedItem[];
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-card-border ${tone === "sunken" ? "bg-surface-sunken" : "bg-background"}`}
    >
      <div className="container-content py-20 lg:py-28">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        {intro && (
          <Reveal
            as="p"
            delay={60}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong lg:text-xl"
          >
            {intro}
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-card-border pt-12 md:grid-cols-2 lg:mt-16">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 70} className="flex gap-5">
              <span className="arch-index flex-shrink-0 text-4xl lg:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-3 font-bold text-lg text-foreground lg:text-xl">{p.title}</h3>
                <div className="space-y-3">
                  {p.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed text-muted-strong">
                      <FormattedText text={para} />
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
