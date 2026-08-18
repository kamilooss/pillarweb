"use client";

import { useEffect, useState } from "react";

type Props = {
  url: string;
};

/**
 * Buduje URL osadzenia Calendly. `host` dokładamy tylko po stronie klienta
 * (parametr `embed_domain`, którego Calendly używa do trybu inline) — dzięki
 * temu render serwerowy i pierwszy render klienta są identyczne (bez rozjazdu
 * hydratacji). Kolory dopasowują widok do systemu marki.
 */
function buildSrc(url: string, host: string | null): string {
  const u = new URL(url);
  u.searchParams.set("primary_color", "9bc414");
  u.searchParams.set("text_color", "15160e");
  u.searchParams.set("background_color", "faf8f1");
  u.searchParams.set("hide_gdpr_banner", "1");
  u.searchParams.set("embed_type", "Inline");
  if (host) u.searchParams.set("embed_domain", host);
  return u.toString();
}

/**
 * Inline Calendly — osadzony jako ZWYKŁY <iframe>, bez ładowania skryptu
 * widget.js. Powód: skrypt widget.js bywa blokowany przez menedżery zgód
 * (Cookiebot) i ad-blockery, przez co `Calendly.initInlineWidget` nigdy się
 * nie wykonuje i kontener zostaje pusty. Bezpośredni iframe renderuje się
 * niezależnie od tego i nie potrzebuje zewnętrznego JS.
 *
 * Wysokość jest stała (bez auto-resize przez postMessage z widget.js) —
 * Calendly renderuje wewnętrzny scroll, gdy trzeba.
 */
export function CalendlyEmbed({ url }: Props) {
  const [src, setSrc] = useState(() => buildSrc(url, null));

  useEffect(() => {
    setSrc(buildSrc(url, window.location.host));
  }, [url]);

  return (
    <iframe
      src={src}
      title="Kalendarz rezerwacji spotkania"
      className="w-full"
      style={{ minWidth: "320px", height: "700px", border: 0 }}
    />
  );
}
