"use client";

import { useEffect, useRef } from "react";

/**
 * Odtwarzacz testowej strony — natywny <video> z kopii w Vercel Blob.
 *
 * Dlaczego nie Bunny (PortfolioVideo): 11.10.2026 biblioteka Bunny 767469
 * zwraca 404 dla wszystkich filmów (tak samo jak dla zmyślonego GUID-a),
 * więc tutaj gramy z zapasowych plików mp4. Kadr w języku „Plan”: arkusz,
 * ostre narożniki, poster od razu, żeby trzymał miejsce.
 *
 * `autoplay`: wyciszony start, gdy kadr wjedzie w widok, pauza po wyjeździe
 * (oszczędza transfer). Bez autoplay przy prefers-reduced-motion.
 */
export function TestVideo({
  src,
  poster,
  aspect,
  name,
  autoplay = false,
  loop = false,
  accent = false,
}: {
  src: string;
  poster: string;
  aspect: string;
  name: string;
  autoplay?: boolean;
  loop?: boolean;
  accent?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !autoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.muted = true; // wymagane przez przeglądarki do autoplay
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "150px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [autoplay]);

  return (
    <div className={`overflow-hidden ${accent ? "surface-panel surface-panel--accent edge-accent-top" : "surface-panel"}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        aria-label={name}
        controls
        playsInline
        loop={loop}
        preload="none"
        style={{ aspectRatio: aspect }}
        className="block w-full bg-surface-sunken object-cover"
      />
    </div>
  );
}
