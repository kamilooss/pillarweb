import { Fragment } from "react";
import { Button } from "./Button";

/**
 * Świadomy, pojedynczy ciemny pas ("color-block") w środku jasnej strony —
 * mocny przerywnik przed sekcją różnicującą. Na ciemnym tle lime czyta się
 * najlepiej, więc akcenty marki zostają w kolorze.
 *
 * Dla podstron podnisz: można nadpisać treść przez prop `content`.
 */

type OverlayCTASegment = { text: string; accent?: boolean };

export interface OverlayCTAContent {
  /**
   * Segmenty nagłówka. Segmenty z `accent: true` renderują się
   * w kolorze akcentu (lime). Renderujemy je inline z " " między nimi —
   * dlatego każdy segment to fragment zdania, nie samodzielne zdanie.
   */
  headingSegments: OverlayCTASegment[];
  buttonLabel: string;
  buttonHref: string;
  /** Mała notatka pod przyciskiem (np. "Ilość miejsc ograniczona…"). */
  footnote?: string;
}

const DEFAULT_CONTENT: OverlayCTAContent = {
  headingSegments: [
    {
      text:
        "Każdy miesiąc ze słabą stroną to nie tylko utracone zapytania.",
    },
    {
      text: "To miesiąc, w którym Twoja ekipa może nie mieć co robić.",
      accent: true,
    },
    {
      text:
        "To trudniejsze planowanie i brak kontroli nad tym, co będzie za kolejne miesiące. Wszystkie firmy budowlane, które rosną przewidywalnie, mają jedną wspólną cechę:",
    },
    {
      text:
        "klienci sami do nich trafiają z działań marketingowych w internecie.",
      accent: true,
    },
  ],
  buttonLabel: "Zarezerwuj bezpłatną konsultację, póki mamy wolne miejsca",
  buttonHref: "#kontakt",
  footnote: "Ilość miejsc ograniczona ze względu na zasoby czasowe firmy",
};

interface OverlayCTAProps {
  content?: OverlayCTAContent;
}

export function OverlayCTA({ content = DEFAULT_CONTENT }: OverlayCTAProps = {}) {
  return (
    <section
      aria-labelledby="overlay-cta-heading"
      className="relative overflow-hidden bg-ink-block py-24 lg:py-32"
    >
      {/* Górna krawędź marki */}
      <span className="absolute inset-x-0 top-0 h-[3px] bg-accent" aria-hidden="true" />

      <div className="container-content">
        <div className="max-w-5xl">
          <h2
            id="overlay-cta-heading"
            className="text-left font-display text-[clamp(1.9rem,3vw,2.5rem)] font-bold leading-[1.22] tracking-tight text-surface"
          >
            {content.headingSegments.map((seg, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className={seg.accent ? "text-accent" : undefined}>
                  {seg.text}
                </span>
              </Fragment>
            ))}
          </h2>

          <div className="mt-10 lg:mt-12">
            <Button href={content.buttonHref} size="lg">
              {content.buttonLabel}
            </Button>
            {content.footnote && (
              <p className="mt-4 text-sm text-surface/60">{content.footnote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
