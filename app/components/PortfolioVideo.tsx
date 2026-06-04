"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  /** Ścieżka do nagrania (H.264 mp4, faststart). */
  src: string;
  /** Klatka-poster (ładuje się od razu; wideo dopiero po kliknięciu). */
  poster: string;
  /** Natywne proporcje kadru, np. "1600 / 873" — brak przycinania. */
  aspect: string;
  /** Nazwa realizacji (do etykiet a11y). */
  name: string;
  /** Długość filmu, np. "1:31". */
  duration: string;
};

/**
 * Kadr realizacji w języku "PLAN": uniesiony arkusz (surface-panel),
 * ostre narożniki, lime jako hi-vis przycisk play. Nagranie ładuje się
 * dopiero po kliknięciu — poster trzyma layout i nie marnuje transferu.
 */
export function PortfolioVideo({ src, poster, aspect, name, duration }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="surface-panel group relative overflow-hidden"
      style={{ aspectRatio: aspect }}
    >
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="h-full w-full bg-ink-block object-cover"
        >
          <track kind="captions" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Odtwórz film: ${name}`}
          className="relative block h-full w-full cursor-pointer"
        >
          <Image
            src={poster}
            alt={`Podgląd realizacji ${name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
            unoptimized
          />

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
