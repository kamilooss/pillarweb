import { Reveal } from "./Reveal";

const LOGOS = [
  { src: "/images/logos/mowi-asa.svg", alt: "Mowi ASA" },
  { src: "/images/logos/logo-2.svg", alt: "" },
  { src: "/images/logos/logo-3.svg", alt: "" },
  { src: "/images/logos/logo-4.svg", alt: "" },
  { src: "/images/logos/logo-5.svg", alt: "", prominent: true },
];

export function LogosShowcase() {
  return (
    <section className="border-t border-card-border bg-background" aria-labelledby="logos-title">
      <div className="container-content py-14 lg:py-20">
        <Reveal
          as="h2"
          id="logos-title"
          className="text-center font-display text-xs font-bold uppercase tracking-[0.24em] text-subtle"
        >
          Działamy z największymi
        </Reveal>

        {/* Telefon: slider logo przewijany w PRAWO. Tablet/desktop bez zmian. */}
        <div className="logos-marquee mt-10 sm:hidden" aria-hidden="true">
          <div className="logos-marquee__track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt=""
                loading="eager"
                decoding="async"
                className={`w-auto shrink-0 opacity-55 [filter:brightness(0)] ${
                  logo.prominent ? "h-11" : "h-7"
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-10 hidden max-w-5xl items-center gap-x-6 gap-y-10 sm:grid sm:grid-cols-3 lg:flex lg:justify-between lg:gap-10">
          {LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                loading="eager"
                decoding="async"
                aria-hidden={logo.alt === "" ? true : undefined}
                className={`w-auto opacity-55 transition-opacity duration-300 hover:opacity-100 [filter:brightness(0)] ${
                  logo.prominent ? "h-11" : "h-7"
                }`}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
