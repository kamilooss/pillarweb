"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BUNNY_LIBRARY_ID } from "../lib/content";

type Props = {
  /** Video GUID z biblioteki Bunny Stream (adaptacyjny streaming). */
  videoId: string;
  /** Klatka-poster (ładuje się od razu; trzyma layout zanim wjedzie odtwarzacz). */
  poster: string;
  /** Natywne proporcje kadru, np. "1600 / 873" — brak przycinania. */
  aspect: string;
  /** Nazwa realizacji (do etykiet a11y). */
  name: string;
  /** Długość filmu, np. "1:31". */
  duration: string;
  /** Klasy ramki kadru. Domyślnie jasny arkusz; np. dodaj `surface-panel--accent edge-accent-top` dla wyróżnionego eksponatu. */
  frameClassName?: string;
  /** Zapętlać po zakończeniu — dla krótkich realizacji TAK, dla długiego VSL NIE. */
  loop?: boolean;
};

/**
 * Kadr wideo w języku "PLAN": uniesiony arkusz (surface-panel), ostre narożniki.
 * Odtwarzacz Bunny Stream (adaptacyjny streaming) WŁĄCZA SIĘ SAM, wyciszony,
 * gdy kadr wejdzie w widok (IntersectionObserver) — i zatrzymuje się, gdy
 * wyjedzie z widoku, żeby nie marnować transferu. Dźwięk: kontrolki Bunny
 * (przycisk wyciszenia) lub kliknięcie plakatu przed startem = od razu z głosem.
 * `prefers-reduced-motion` wyłącza autoplay (plakat + klik) — dostępność.
 */
export function PortfolioVideo({
  videoId,
  poster,
  aspect,
  name,
  duration,
  frameClassName = "surface-panel",
  loop = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false); // czy odtwarzacz jest zamontowany
  const [sound, setSound] = useState(false); // czy z dźwiękiem (tylko po świadomym kliknięciu)
  const [reduced, setReduced] = useState(false);

  // Wykryj preferencję ograniczenia ruchu (wyłącza autoplay).
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Autoplay wyciszony, gdy kadr jest w widoku; stop, gdy wyjedzie.
  useEffect(() => {
    if (reduced) return; // brak autoplay przy "ogranicz ruch"
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
        else if (!sound) setActive(false); // nie ubijaj odtwarzacza, którym widz steruje z dźwiękiem
      },
      { rootMargin: "150px 0px 150px 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, sound]);

  const params = new URLSearchParams({
    autoplay: "true",
    muted: sound ? "false" : "true",
    loop: loop ? "true" : "false",
    preload: "true",
    responsive: "true",
  }).toString();

  return (
    <div
      ref={ref}
      className={`${frameClassName} group relative overflow-hidden`}
      style={{ aspectRatio: aspect }}
    >
      {/* Poster — zawsze pod spodem: trzyma layout i jest tłem zanim wjedzie odtwarzacz */}
      <Image
        src={poster}
        alt={`Podgląd wideo: ${name}`}
        fill
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover"
      />

      {active && (
        <iframe
          src={`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${videoId}?${params}`}
          title={`Film: ${name}`}
          loading="eager"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 bg-ink-block"
        />
      )}

      {!active && (
        <button
          type="button"
          onClick={() => {
            setSound(true); // świadome kliknięcie = od razu z dźwiękiem
            setActive(true);
          }}
          aria-label={`Odtwórz film z dźwiękiem: ${name}`}
          className="relative block h-full w-full cursor-pointer"
        >
          {/* Delikatny vignette — żeby lime play i czas czytały się na każdym posterze */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,21,13,0)_45%,rgba(20,21,13,0.28)_100%)] opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          />

          {/* Hi-vis przycisk play — kwadrat marki, ostre narożniki */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-accent text-accent-foreground shadow-[0_14px_30px_-12px_rgba(20,21,13,0.65)] transition-transform duration-300 ease-out group-hover:scale-110 lg:h-[72px] lg:w-[72px]"
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          {/* Czas trwania — techniczny "spec" badge */}
          <span
            aria-hidden="true"
            className="tnum absolute bottom-3 right-3 bg-ink-block/85 px-2 py-1 text-xs font-bold tracking-wide text-surface"
          >
            {duration}
          </span>

          {/* Linia marki — wjeżdża od lewej na hover (znacznik strukturalny) */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100"
          />
        </button>
      )}
    </div>
  );
}
