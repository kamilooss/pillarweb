"use client";

/**
 * Guzik pobierania lead magnetu (/lista).
 *
 * Zwykły <a download>, nie next/link — plik ma się ściągnąć, a nie odpalić
 * nawigację klienta. Przed pobraniem wrzuca zdarzenie do dataLayer, żeby GTM
 * miał z czego zbudować konwersję w GA4 i grupę remarketingową w Pixelu
 * (zdarzenie: `pobranie_lead_magnetu`).
 */

import { ReactNode } from "react";
import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "./Button";
import { LISTA_PDF, LISTA_PDF_FILENAME } from "../lib/content-lista";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const DownloadIcon = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
    <path
      d="M8 1.5v8.5m0 0L4.75 6.75M8 10l3.25-3.25M2 12.5v1a1 1 0 001 1h10a1 1 0 001-1v-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function PdfDownloadButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const handleClick = () => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pobranie_lead_magnetu",
        lead_magnet: "15-miejsc-strona-firmy-budowlanej",
        strona: "/lista",
      });
    } catch {
      // Brak dataLayer nie może blokować pobrania pliku.
    }
  };

  return (
    <a
      href={LISTA_PDF}
      download={LISTA_PDF_FILENAME}
      onClick={handleClick}
      className={buttonClasses({ variant, size, className })}
    >
      <DownloadIcon />
      {children}
    </a>
  );
}
