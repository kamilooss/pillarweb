import Image from "next/image";
import { Reveal } from "./Reveal";
import { GUARANTEES } from "../lib/content";

export function GuaranteesSection() {
  const { headingLine1, headingLine2, subheadingPrefix, subheadingAccent, items } =
    GUARANTEES;

  return (
    <section className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.7rem,3.4vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingLine1}{" "}
          <span className="underline-accent">{headingLine2}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={60}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong lg:text-xl"
        >
          {subheadingPrefix}{" "}
          <span className="font-semibold text-foreground">{subheadingAccent}</span>
        </Reveal>

        {/* Numerowany pas z włosowymi pionowymi liniami — bez pudełek-kart */}
        <div className="mt-14 grid gap-12 border-t border-card-border pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-card-border lg:mt-16">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex flex-col first:md:pl-0 last:md:pr-0 md:px-8 lg:px-10"
            >
              <div className="flex items-baseline gap-4 lg:min-h-[4rem]">
                <span className="arch-index text-5xl lg:text-6xl">
                  {item.number.replace(".", "")}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight lg:text-2xl">
                  {item.title}
                </h3>
              </div>

              <div className="relative mt-7 aspect-[4/3] overflow-hidden border border-card-border bg-surface-sunken">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="mt-6 leading-relaxed text-muted-strong">
                {item.bodyParts.map((part, j) =>
                  "accent" in part && part.accent ? (
                    <span key={j} className="font-semibold text-foreground underline-accent">
                      {part.text}
                    </span>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
