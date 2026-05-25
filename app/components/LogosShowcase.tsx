"use client";

import { Fragment } from "react";
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
    <section
      className="logos-showcase"
      aria-labelledby="logos-showcase-title"
    >
      <div className="container-content">
        <div className="logos-showcase__heading">
          <Reveal as="h2" className="logos-showcase__title">
            <span id="logos-showcase-title">Działamy z największymi</span>
          </Reveal>
        </div>
      </div>

      <div className="logos-marquee">
        <div className="logos-marquee__viewport">
          <div className="logos-marquee__track">
            {[0, 1, 2, 3].map((copy) => (
              <Fragment key={copy}>
                {LOGOS.map((logo, i) => (
                  <div key={`${copy}-${i}`} className="logos-marquee__slot">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      className={`logos-marquee__img${logo.prominent ? " logos-marquee__img--prominent" : ""}`}
                      aria-hidden={logo.alt === "" ? true : undefined}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
