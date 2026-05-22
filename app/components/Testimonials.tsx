import Image from "next/image";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "../lib/content";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-36">
      <div className="container-content">
        <Reveal as="h2" className="text-accent font-display font-bold text-center text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-tight max-w-4xl mx-auto">
          To nie są obietnice.
          <br />
          To głosy firm, z którymi pracowaliśmy
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-20 lg:mt-28 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1} className="flex flex-col items-center text-center">
              <div className="space-y-5 max-w-md">
                {t.quote.map((p, idx) => (
                  <p
                    key={idx}
                    className="italic text-muted-strong text-[15px] lg:text-base leading-[1.7]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt={`${t.author}, ${t.role}`}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16 grayscale"
                  unoptimized
                />
                <div className="text-left italic">
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
