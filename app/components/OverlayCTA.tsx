"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Button } from "./Button";

/**
 * Czarny panel-overlay, który nasuwa się od dołu na poprzednią sekcję,
 * trzyma się przez moment w viewport (użytkownik czyta), a potem wysuwa
 * się do góry odsłaniając kolejną sekcję.
 *
 * Mechanika:
 *  - Sentinel (niewidoczny div, h-[200vh]) renderuje się w normalnym flow
 *    między ContentVideoSection a DifferentiatorSection. To on definiuje
 *    "zasięg" animacji w document scrollu.
 *  - Panel jest position: fixed inset-0 — ZAWSZE pokrywa viewport, ale
 *    transform translateY ukrywa go poza ekranem dopóki sentinel nie wejdzie
 *    w odpowiedni zakres.
 *  - W trakcie sentinela: panel slidije z 100% (poniżej viewportu) do 0%
 *    (pełne pokrycie), zostaje w 0% przez fazę pinu, a potem -100% (powyżej).
 *  - Dzięki temu poprzednia sekcja zostaje widoczna PO ZA panelem (jak na
 *    brunocis.co) — to panel realnie najeżdża na nią od dołu.
 *
 * z-30 — pod stickim headerem (z-50) ORAZ pod floating CTA "Porozmawiajmy"
 * (z-40), żeby koliste CTA zawsze pozostało widoczne na wierzchu.
 */
export function OverlayCTA() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sentinelRef,
    offset: ["start end", "end start"],
  });

  // Sentinel: h-[30vh] + marginTop calc(-10vh - 8rem).
  //   - sentinel.top  = ContentVideoSection.bottom - 10vh
  //   - sentinel.bottom = ContentVideoSection.bottom + 20vh
  //   - DifferentiatorSection startuje 20vh PO końcu CV (pusta przestrzeń
  //     między nimi nigdy nie jest widoczna — schowana pod panelem)
  // Trigger (progress=0) wciąż wypada w momencie pojawienia się CTA
  // "Wznieś swój biznes" (sentinel.top - viewport = wrapper.top + 90vh).
  //
  // Cykl: 30vh (sentinel) + 100vh (viewport) = 130vh, w 4 fazach:
  //   0    → 0.15  buffer    (~20vh) — panel ukryty, użytkownik widzi
  //                                    i może kliknąć CTA "Wznieś swój
  //                                    biznes" — brak natychmiastowego
  //                                    najazdu
  //   0.15 → 0.45  slide-in  (~39vh) — czarne tło wjeżdża z dołu
  //   0.45 → 0.70  pin       (~32vh) — panel pełnoekranowy, STOI W
  //                                    MIEJSCU; użytkownik musi scrollować
  //                                    aby ruszyć dalej
  //   0.70 → 1.00  slide-out (~39vh) — panel zjeżdża do góry; przy
  //                                    progress=1 viewport.top trafia
  //                                    dokładnie na DifferentiatorSection
  const panelY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.45, 0.7, 1],
    ["100%", "100%", "0%", "0%", "-100%"],
    { clamp: true }
  );

  const headingContent = (
    <>
      Każdy miesiąc ze słabą stroną to nie tylko utracone zapytania.{" "}
      <span className="text-accent">
        To miesiąc, w którym Twoja ekipa może nie mieć co robić.
      </span>{" "}
      To trudniejsze planowanie i brak kontroli nad tym, co będzie za kolejne
      miesiące. Wszystkie firmy budowlane, które rosną przewidywalnie, mają
      jedną wspólną —{" "}
      <span className="text-accent">
        klienci sami do nich trafiają z działań marketingowych w internecie.
      </span>
    </>
  );

  const ctaBlock = (
    <div className="mt-10 lg:mt-12">
      <Button href="#kontakt" size="lg">
        Zarezerwuj bezpłatną konsultację, póki mamy wolne miejsca
      </Button>
      <p className="mt-4 text-sm text-muted-strong">
        Ilość miejsc ograniczona ze względu na zasoby czasowe firmy
      </p>
    </div>
  );

  // Reduced motion: zwykła czarna sekcja w flow, bez animacji slidu.
  if (reduced) {
    return (
      <section
        className="bg-black py-24 lg:py-32"
        aria-labelledby="overlay-cta-heading"
      >
        <div className="container-content">
          <div className="max-w-5xl">
            <h2
              id="overlay-cta-heading"
              className="font-display font-bold text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.2] tracking-tight text-left text-foreground"
            >
              {headingContent}
            </h2>
            {ctaBlock}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div
        ref={sentinelRef}
        className="relative h-[30vh] pointer-events-none"
        style={{ marginTop: "calc(-10vh - 8rem)" }}
        aria-hidden="true"
      />

      <motion.section
        aria-labelledby="overlay-cta-heading"
        style={{ y: panelY }}
        className="fixed inset-0 z-30 flex items-center bg-black will-change-transform"
      >
        <div className="container-content w-full">
          <div className="max-w-5xl">
            <h2
              id="overlay-cta-heading"
              className="font-display font-bold text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.2] tracking-tight text-left text-foreground"
            >
              {headingContent}
            </h2>
            {ctaBlock}
          </div>
        </div>
      </motion.section>
    </>
  );
}
