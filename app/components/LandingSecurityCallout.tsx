import { Reveal } from "./Reveal";

/**
 * KRÓTKI BLOK BEZPIECZEŃSTWA pod procesem — "Po wdrożeniu strona jest Twoja".
 * Kompaktowy arkusz z limonkową krawędzią górną + ikona tarczy. Zapowiedź
 * pełnej sekcji własności (LandingOwnership). Bespoke dla /landing-page.
 */
interface SecurityCalloutContent {
  title: string;
  body: string;
}

export function LandingSecurityCallout({
  content,
}: {
  content: SecurityCalloutContent;
}) {
  return (
    <section className="border-t border-card-border bg-background py-16 lg:py-20">
      <div className="container-content">
        <Reveal className="surface-panel edge-accent-top relative mx-auto flex max-w-4xl flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:gap-7 lg:p-9">
          <span
            aria-hidden="true"
            className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center bg-accent text-accent-foreground"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              {content.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-strong">{content.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
