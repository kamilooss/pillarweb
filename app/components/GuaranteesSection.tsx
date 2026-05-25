import Image from "next/image";
import { Reveal } from "./Reveal";
import { GUARANTEES } from "../lib/content";

export function GuaranteesSection() {
  const { headingLine1, headingLine2, subheadingPrefix, subheadingAccent, items } = GUARANTEES;

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <Reveal as="h2" className="font-display font-bold text-center text-[clamp(1.5rem,3vw,2.75rem)] leading-tight tracking-tight whitespace-normal lg:whitespace-nowrap">
          {headingLine1}{" "}
          <span className="text-accent">{headingLine2}</span>
        </Reveal>

        <Reveal delay={0.05} as="p" className="text-center text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          {subheadingPrefix}{" "}
          <span className="text-accent">{subheadingAccent}</span>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-16 lg:mt-24">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="flex flex-col">
              <h3 className="text-accent text-center font-bold text-lg lg:text-xl mb-6">
                {item.number} {item.title}
              </h3>

              <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-card">
                <Image
                  src={item.image}
                  alt=""
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              <p className="text-muted-strong leading-relaxed">
                {item.bodyParts.map((part, j) =>
                  "accent" in part && part.accent ? (
                    <span key={j} className="text-accent">{part.text}</span>
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
