import { Button } from "./Button";

/**
 * Świadomy, pojedynczy ciemny pas ("color-block") w środku jasnej strony —
 * mocny przerywnik przed sekcją różnicującą. Na ciemnym tle lime czyta się
 * najlepiej, więc akcenty marki zostają w kolorze.
 */
export function OverlayCTA() {
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
            Każdy miesiąc ze słabą stroną to nie tylko utracone zapytania.{" "}
            <span className="text-accent">
              To miesiąc, w którym Twoja ekipa może nie mieć co robić.
            </span>{" "}
            To trudniejsze planowanie i brak kontroli nad tym, co będzie za
            kolejne miesiące. Wszystkie firmy budowlane, które rosną
            przewidywalnie, mają jedną wspólną cechę:{" "}
            <span className="text-accent">
              klienci sami do nich trafiają z działań marketingowych w
              internecie.
            </span>
          </h2>

          <div className="mt-10 lg:mt-12">
            <Button href="#kontakt" size="lg">
              Zarezerwuj bezpłatną konsultację, póki mamy wolne miejsca
            </Button>
            <p className="mt-4 text-sm text-surface/60">
              Ilość miejsc ograniczona ze względu na zasoby czasowe firmy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
