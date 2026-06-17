import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    // Obrazy serwujemy jako statyczne pliki prosto z edge CDN, BEZ optymalizatora
    // na żądanie. Są już zoptymalizowane jako małe webp w /public/images, a
    // kodowanie AVIF "na zimno" dodawało ~3 s opóźnienia przy pierwszym wejściu
    // (zmierzone: optymalizator zimny 3.1 s vs statyczny edge 0.5 s dla 11 obrazów).
    // Statyczne serwowanie jest odporne na redeploye i nie ma limitów współbieżności.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Filmy z /public/videos (edge CDN) — długi, niezmienny cache u klienta,
        // żeby powtórne wejścia nie rewalidowały dużych plików.
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Obrazy z /public/images — cache u klienta + stale-while-revalidate,
        // żeby powtórne wejścia nie rewalidowały każdego pliku z osobna.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["motion"],
  },
};

export default config;
