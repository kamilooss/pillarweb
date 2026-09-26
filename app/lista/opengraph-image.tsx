/**
 * Obrazek podglądu (Open Graph / Twitter) dla /lista.
 *
 * Generowany przez `next/og` na etapie builda — link wrzucony na Facebooka,
 * wysłany w ManyChacie albo w wiadomości pokazuje kafelek w barwach marki
 * zamiast gołego adresu. Bez zewnętrznych fontów: ImageResponse ma wbudowany
 * krój z polskimi znakami, a dociąganie Manrope z Google Fonts przy każdym
 * buildzie byłoby zbędnym punktem awarii.
 */

import { ImageResponse } from "next/og";

export const alt =
  "15 miejsc na stronie firmy budowlanej, przez które klient z budżetem wychodzi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#15160e";
const PAPER = "#f1efe6";
const LIME = "#c7f542";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          color: INK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 6, background: LIME }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#55534a",
            }}
          >
            Lista kontrolna · 15 punktów
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>
            15 miejsc na stronie
          </div>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>
            firmy budowlanej,
          </div>
          <div style={{ display: "flex", marginTop: 6 }}>
            <div
              style={{
                fontSize: 66,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: -1.5,
                background: LIME,
                padding: "2px 14px",
              }}
            >
              przez które tracisz zlecenia
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid rgba(21,22,14,0.16)`,
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 26, color: "#33322b" }}>
            Przejdź test w 15 minut · pillarweb.pl/lista
          </div>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 2 }}>PILLAR WEB</div>
        </div>
      </div>
    ),
    size,
  );
}
