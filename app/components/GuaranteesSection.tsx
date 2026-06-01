import Image from "next/image";
import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { GUARANTEES } from "../lib/content";

export function GuaranteesSection() {
  const { headingLine1, headingLine2, subheadingPrefix, subheadingAccent, items } =
    GUARANTEES;

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <ParallaxReveal
          as="h2"
          className="font-display font-bold text-center text-[clamp(1.5rem,3vw,2.75rem)] leading-tight tracking-tight whitespace-normal lg:whitespace-nowrap"
        >
          {headingLine1}{" "}
          <span className="text-accent">{headingLine2}</span>
        </ParallaxReveal>

        <ParallaxReveal
          as="p"
          className="text-center text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-balance"
        >
          {subheadingPrefix}{" "}
          <span className="text-accent">{subheadingAccent}</span>
        </ParallaxReveal>

        {/* Numerowany pas z włosowymi pionowymi liniami — bez pudełek-kart */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-0 mt-16 lg:mt-24 md:divide-x md:divide-card-border">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.1}
              className="flex flex-col md:px-8 lg:px-10 first:md:pl-0 last:md:pr-0"
            >
              <div className="flex items-baseline gap-4 lg:min-h-[4rem]">
                <span className="arch-index text-5xl lg:text-6xl">
                  {item.number.replace(".", "")}
                </span>
                <h3 className="font-display font-bold text-xl lg:text-2xl leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden surface-panel mt-7">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <p className="text-muted-strong leading-relaxed mt-6">
                {item.bodyParts.map((part, j) =>
                  "accent" in part && part.accent ? (
                    <span key={j} className="text-accent">
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
