"use client";

import { Fragment } from "react";

const INDUSTRIES = [
  "Producenci Budowlani",
  "Firmy Budujące Domy",
  "Generalni Wykonawcy",
  "Deweloperzy",
  "Firmy Wykończeniowe",
  "Firmy Od Elewacji i Dachów",
  "Firmy Remontowe",
  "Firmy Instalacyjne",
];

export function IndustriesMarquee() {
  return (
    <section
      aria-label="Branże, dla których pracujemy"
      className="industries-marquee"
    >
      <div className="industries-marquee__viewport">
        <div className="industries-marquee__track" aria-hidden="false">
          {[0, 1].map((copy) => (
            <Fragment key={copy}>
              {INDUSTRIES.map((item, i) => (
                <Fragment key={`${copy}-${i}`}>
                  <span className="industries-marquee__item">{item}</span>
                  <span
                    className="industries-marquee__sep"
                    aria-hidden="true"
                  />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
