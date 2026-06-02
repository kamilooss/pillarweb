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

        <Reveal className="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-10">
          {LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
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
