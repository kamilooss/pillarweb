import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/Button";
import { TESTIMONIALS } from "../../lib/content";

/**
 * Opinie — wygląd cytatu z sekcji Testimonials (czerwona linia lime po lewej,
 * awatar w kole, bez rejestru liczb). Pełne brzmienie opinii z content.ts.
 */
export function TestimonialsT({
  headingPrefix,
  headingAccent,
  cta,
  ctaNote,
}: {
  headingPrefix: string;
  headingAccent: string;
  cta: { label: string; href: string };
  ctaNote: string;
}) {
  return (
    <section className="border-t border-card-border py-20 lg:py-28" aria-label="Opinie klientów">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {headingPrefix} <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:mt-16 lg:grid-cols-2 lg:gap-14">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal key={testimonial.author}>
              <figure className="border-l-[3px] border-accent pl-6 lg:pl-9">
                <blockquote className="space-y-5">
                  {testimonial.quote.map((paragraph, idx) => (
                    <p key={idx} className="text-[clamp(1.02rem,1.3vw,1.15rem)] leading-[1.6] text-muted-strong">
                      {paragraph.map((seg, sidx) => (
                        <span key={sidx} className={seg.accent ? "font-semibold text-foreground" : ""}>
                          {seg.text}
                        </span>
                      ))}
                    </p>
                  ))}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.author}, ${testimonial.role}`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover grayscale"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Button href={cta.href} size="lg" className="max-w-full min-w-[260px]">
            {cta.label}
          </Button>
          <p className="mt-4 text-sm text-muted-strong">{ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
