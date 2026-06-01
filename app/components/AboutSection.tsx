import Image from "next/image";
import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { ABOUT } from "../lib/content";

export function AboutSection() {
  const { heading, paragraphs, image, imageAlt } = ABOUT;

  return (
    <section className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start">
          <div>
            <span className="arch-tick mb-7 inline-flex">Pillar Web</span>
            <ParallaxReveal as="h2" className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight mb-8 mt-5">
              {heading}
            </ParallaxReveal>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.04}
                  as="p"
                  className={
                    i === 0
                      ? "text-foreground text-lg lg:text-xl leading-relaxed"
                      : "text-muted-strong leading-relaxed"
                  }
                >
                  {p}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="surface-panel rounded-2xl overflow-hidden aspect-[3/4] lg:sticky lg:top-32">
              <Image
                src={image}
                alt={imageAlt}
                width={767}
                height={1024}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
