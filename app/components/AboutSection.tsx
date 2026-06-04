import Image from "next/image";
import { Reveal } from "./Reveal";
import { ABOUT } from "../lib/content";

export function AboutSection() {
  const { heading, paragraphs, image, imageAlt } = ABOUT;

  return (
    <section className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <span className="arch-tick mb-7 inline-flex">Pillar Web</span>
            <Reveal
              as="h2"
              className="mb-8 mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight"
            >
              {heading}
            </Reveal>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  delay={Math.min(i * 40, 200)}
                  as="p"
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-foreground lg:text-xl"
                      : "leading-relaxed text-muted-strong"
                  }
                >
                  {p}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={80}>
            <div className="aspect-[3/4] overflow-hidden border border-card-border bg-surface-sunken lg:sticky lg:top-32">
              <Image
                src={image}
                alt={imageAlt}
                width={767}
                height={1024}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
