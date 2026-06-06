import { Reveal } from "./Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { BOOKING } from "../lib/content";

export function BookingSection() {
  const { eyebrow, headingPrefix, headingAccent, subtext, calendlyUrl } =
    BOOKING;

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-muted-strong"
          >
            {eyebrow}
          </Reveal>

          <Reveal
            as="h1"
            delay={120}
            className="mt-5 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            {headingPrefix}{" "}
            <span className="underline-accent">{headingAccent}</span>
          </Reveal>

          <Reveal
            as="p"
            delay={200}
            className="mt-6 text-lg leading-relaxed text-muted-strong"
          >
            {subtext}
          </Reveal>
        </div>

        <Reveal delay={280} className="mt-12 lg:mt-16">
          <div className="surface-panel overflow-hidden p-2 sm:p-4">
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
