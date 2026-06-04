"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Offset pod stały nagłówek (h-20 = 80px) + odrobina luzu, żeby tytuł sekcji
// nie chował się pod headerem po przewinięciu z menu.
const HEADER_OFFSET = -96;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.24,
      smoothWheel: true,
      wheelMultiplier: 1.22,
      touchMultiplier: 1.92,
      syncTouch: false,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Płynny scroll dla linków kotwicznych (#sekcja) z offsetem pod nagłówek.
    // Robimy to ręcznie zamiast wbudowanej opcji `anchors` Lenisa — ta nie
    // wywołuje preventDefault, więc natywny skok kłóci się z pętlą Lenisa i
    // przewijanie potrafi nie zadziałać. lenis.scrollTo aktualizuje wewnętrzny
    // stan Lenisa, dzięki czemu pozycja się utrzymuje.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
