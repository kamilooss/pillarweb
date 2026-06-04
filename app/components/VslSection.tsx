import { Reveal } from "./Reveal";
import { PortfolioVideo } from "./PortfolioVideo";
import { Button } from "./Button";
import { VSL } from "../lib/content";

/**
 * VSL — film sprzedażowy jako pojedynczy, centralny "eksponat".
 * Jasny motyw (ciemny pas marki należy do OverlayCTA), kompozycja
 * wyśrodkowana (inny rytm niż lewo-wyrównana reszta strony = "seans"),
 * kadr w wyróżnionym arkuszu z limonkową krawędzią. Nagłówek nad wideo,
 * guzik CTA pod wideo. Bez opisów — wideo mówi samo.
 */
export function VslSection() {
  const { headingPrefix, headingAccent, video, poster, aspect, duration, name, cta } =
    VSL;

  return (
    <section
      id="vsl"
      className="border-t border-card-border bg-surface py-24 lg:py-32"
      aria-label="Film sprzedażowy"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="mx-auto max-w-4xl text-left sm:text-center font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.12] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <Reveal delay={90} className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <PortfolioVideo
            src={video}
            poster={poster}
            aspect={aspect}
            name={name}
            duration={duration}
            frameClassName="surface-panel surface-panel--accent edge-accent-top"
            large
          />
        </Reveal>

        <Reveal delay={140} className="mt-10 flex justify-center lg:mt-12">
          <Button href={cta.href} size="xl" className="min-w-[320px]">
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
