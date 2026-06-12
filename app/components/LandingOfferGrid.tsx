import { Reveal } from "./Reveal";

/**
 * CO ZAWIERA LANDING PAGE — 9 bloków oferty.
 * Numerowana siatka (ghostowy index + tytuł + opis), 3 kolumny na desktopie,
 * domknięcie hasłowe na dole. Bespoke dla /landing-page.
 * id="co-zawiera" — kotwica dla CTA pomocniczego w hero i nawigacji.
 */
interface OfferContent {
  headingPrefix: string;
  headingAccent: string;
  items: readonly { readonly title: string; readonly body: string }[];
  closingLead: string;
  closingEmphasis: string;
}

export function LandingOfferGrid({ content }: { content: OfferContent }) {
  const { headingPrefix, headingAccent, items, closingLead, closingEmphasis } =
    content;

  return (
    <section
      id="co-zawiera"
      className="border-t border-card-border bg-background py-20 lg:py-28"
      aria-label="Co zawiera landing page"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 border-t border-card-border pt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 60} className="flex flex-col">
              <span className="arch-index text-4xl lg:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 mt-4 font-display text-lg font-bold leading-snug tracking-tight text-foreground lg:text-xl">
                {item.title}
              </h3>
              <p className="leading-relaxed text-muted-strong">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-extrabold leading-[1.2] tracking-tight text-foreground">
            {closingLead}{" "}
            <span className="underline-accent">{closingEmphasis}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
