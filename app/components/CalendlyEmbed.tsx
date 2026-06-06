"use client";

import { useEffect, useRef } from "react";

type Props = {
  url: string;
};

/**
 * Inline Calendly widget. Ładuje skrypt widget.js raz per session
 * i renderuje kontener, którego Calendly oczekuje pod tą klasą.
 * Parametry koloru przekazujemy w URL — dopasowanie do systemu marki.
 */
export function CalendlyEmbed({ url }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SRC = "https://assets.calendly.com/assets/external/widget.js";
    const existing = document.querySelector(
      `script[src="${SRC}"]`,
    ) as HTMLScriptElement | null;

    if (!existing) {
      const script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const themedUrl = new URL(url);
  themedUrl.searchParams.set("primary_color", "9bc414");
  themedUrl.searchParams.set("text_color", "15160e");
  themedUrl.searchParams.set("background_color", "faf8f1");
  themedUrl.searchParams.set("hide_gdpr_banner", "1");

  return (
    <div
      ref={ref}
      className="calendly-inline-widget w-full"
      data-url={themedUrl.toString()}
      style={{ minWidth: "320px", height: "720px" }}
    />
  );
}
