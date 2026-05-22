import Image from "next/image";
import { Reveal } from "./Reveal";
import { SPECIALIZATIONS } from "../lib/content";

export function SpecializationsSection() {
  const { headingPrefix, headingAccent, items } = SPECIALIZATIONS;
  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-content">
        <Reveal as="h2" className="font-display font-bold text-center text-[clamp(1.5rem,3vw,2.5rem)] leading-tight tracking-tight max-w-5xl mx-auto">
          {headingPrefix}{" "}
          <span className="text-accent">{headingAccent}</span>
        </Reveal>

        {/* Pierwszy rząd: 4 specjalizacje */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20">
          {firstRow.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 group">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h3 className="text-accent font-medium text-lg">
                {item.label}
              </h3>
            </Reveal>
          ))}
        </div>

        {/* Drugi rząd: 3 specjalizacje, wyśrodkowane */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 lg:max-w-5xl lg:mx-auto">
          {secondRow.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 group">
                <Image
                  src={item.image}
                  alt={item.label}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <h3 className="text-accent font-medium text-lg">
                {item.label}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
