/**
 * Logo Pillarweb — inline SVG.
 * TODO: Zastąp finalnym SVG z pillarweb-logo.svg (pobierz z
 * https://pillarweb.pl/wp-content/uploads/2026/04/pillarweb-logo.svg
 * i wklej zawartość poniżej, lub umieść w /public/logo.svg).
 *
 * To jest aproksymacja oryginału — kolumna z rozchodzącymi się
 * liniami symbolizująca "filar" i "tulipan".
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="Pillarweb — strona główna"
      className={`inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 32 36"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto fill-current text-foreground"
        aria-hidden="true"
      >
        <path d="M16 0c-1 4-4 6-7 7l3 9-3 8c2-1 4-2 7-2s5 1 7 2l-3-8 3-9c-3-1-6-3-7-7z" />
        <path d="M9 11c-1 3-3 5-6 6l3 8-2 7c1-1 3-1 5-1l1-9-1-11z" opacity="0.7" />
        <path d="M23 11c1 3 3 5 6 6l-3 8 2 7c-1-1-3-1-5-1l-1-9 1-11z" opacity="0.7" />
      </svg>
      <span className="font-display text-[15px] leading-none tracking-[0.18em]">
        <span className="font-extrabold">PILLAR</span>
        <span className="font-light text-muted-strong">WEB</span>
      </span>
    </a>
  );
}
