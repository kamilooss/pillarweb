import type { NextConfig } from "next";

const config: NextConfig = {
  // Konfiguracja zewnętrznych obrazów — pozwala next/image używać assetów
  // bezpośrednio z pillarweb.pl (CDN). Po pobraniu assetów lokalnie do /public
  // można usunąć remotePatterns i zmienić ścieżki w lib/content.ts na lokalne.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pillarweb.pl",
        pathname: "/wp-content/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Zoptymalizowane obrazy (szczególnie zdalne z pillarweb.pl) trzymane w
    // cache CDN przez 31 dni — bez tego Next ponawia pobranie z wolnego
    // origin WordPressa po wygaśnięciu (domyślnie ~60 s).
    minimumCacheTTL: 2678400,
  },
  experimental: {
    optimizePackageImports: ["motion"],
  },
};

export default config;
