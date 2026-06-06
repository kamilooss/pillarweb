import { Reveal } from "./Reveal";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { BOOKING } from "../lib/content";

const CalendarPlusIcon = ({ className }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="3" y1="11" x2="21" y2="11" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <line x1="10" y1="16" x2="14" y2="16" />
  </svg>
);

export function BookingSection() {
  const { eyebrow, headingPrefix, headingAccent, subtext, calendlyUrl, note } =
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

        <Reveal delay={280} className="mx-auto mt-10 max-w-2xl lg:mt-12">
          <div className="flex items-start gap-4 border-l-4 border-accent bg-card px-5 py-5 lg:gap-5 lg:px-6 lg:py-6">
            <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <CalendarPlusIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-muted-strong">
                {note.heading}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground lg:text-base">
                {note.body}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={360} className="mt-10 lg:mt-12">
          <div className="surface-panel overflow-hidden p-2 sm:p-4">
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
