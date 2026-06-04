"use client";

import { useEffect, useState } from "react";

// Marker wersji — pozwala potwierdzić, że telefon NIE serwuje starego cache.
const BUILD = "dbg-1";

/**
 * Panel diagnostyczny widoczny TYLKO gdy w adresie jest `?debug`
 * (np. pillarweb-rho.vercel.app/?debug). Pokazuje szerokości viewportu,
 * skalę visualViewport i najszerszy element — do namierzenia buga obrotu.
 * Zwykli użytkownicy go nie widzą.
 */
export function ViewportDebug() {
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    if (!/[?&]debug/.test(window.location.search)) return;

    const update = () => {
      const de = document.documentElement;
      const vv = window.visualViewport;
      let widest: HTMLElement | null = null;
      let max = 0;
      document.querySelectorAll("body *").forEach((node) => {
        const el = node as HTMLElement;
        const right = el.getBoundingClientRect().right;
        if (right > max) {
          max = right;
          widest = el;
        }
      });
      let sel = "?";
      if (widest) {
        const el: HTMLElement = widest;
        const raw = el.getAttribute("class") || "";
        const cls = raw ? "." + raw.trim().split(/\s+/).slice(0, 2).join(".") : "";
        sel = el.tagName.toLowerCase() + cls;
      }
      setInfo(
        `[${BUILD}] inW=${window.innerWidth} cW=${de.clientWidth} sW=${de.scrollWidth}\n` +
          `vvW=${vv ? Math.round(vv.width) : "-"} scale=${vv ? vv.scale.toFixed(2) : "-"} dpr=${window.devicePixelRatio}\n` +
          `widestRight=${Math.round(max)} -> ${sel}`,
      );
    };

    update();
    const onChange = () => {
      update();
      setTimeout(update, 400);
    };
    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
    };
  }, []);

  if (info === null) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2147483647,
        background: "rgba(200,0,0,0.92)",
        color: "#fff",
        font: "11px/1.35 monospace",
        padding: "4px 6px",
        whiteSpace: "pre-wrap",
        pointerEvents: "none",
      }}
    >
      {info}
    </div>
  );
}
