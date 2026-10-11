import { ReactNode } from "react";

/**
 * Wspólne elementy testowej strony głównej — system „Plan” z brandbooka:
 * papier, tusz, lime wyłącznie jako wypełnienie, ostre powierzchnie, 6 px dla
 * kontrolek, koło dla ikon i portretu, linie włosowe tuszu 12%.
 *
 * Różnica wobec obecnej strony głównej: każda sekcja to „arkusz” z tabliczką
 * po lewej (indeks ghost + nazwa arkusza), a treść stoi w prawych 9 kolumnach.
 */

export function Sheet({
  id,
  children,
  tone = "paper",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "paper" | "sunken";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-card-border py-20 lg:py-28 ${
        tone === "sunken" ? "bg-surface-sunken" : ""
      } ${className}`}
    >
      <div className="container-content relative">
        {/* Pionowe linie kolumn po bokach kontenera — rysunek konstrukcyjny. */}
        <div aria-hidden className="arch-rules hidden lg:block" />
        {children}
      </div>
    </section>
  );
}

/** Tabliczka arkusza: indeks ghost + nazwa sekcji. Lewa kolumna na desktopie. */
export function SheetTag({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 lg:block">
      <span aria-hidden className="arch-index block text-[3.25rem] lg:text-[5.5rem]">
        {index}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted lg:mt-4 lg:block">
        {label}
      </span>
    </div>
  );
}

/** Układ arkusza: tabliczka (3 kolumny) + treść (9 kolumn). */
export function SheetGrid({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-3 lg:pt-2">
        <div className="lg:sticky lg:top-28">
          <SheetTag index={index} label={label} />
        </div>
      </div>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </div>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`max-w-[48rem] font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mt-6 max-w-[48ch] text-lg leading-relaxed text-muted-strong lg:text-xl ${className}`}>
      {children}
    </p>
  );
}

/** Etykieta techniczna z kreską lime 40 × 2 px. Kolor #55534A — spełnia WCAG AA. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
      <span aria-hidden className="inline-block h-[2px] w-10 bg-accent" />
      {children}
    </p>
  );
}

/** Narożniki kadru lime (lewy górny + prawy dolny) — motyw z hero brandbooka. */
export function CornerMarks() {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 h-7 w-7 border-l-2 border-t-2 border-accent" />
      <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 h-7 w-7 border-b-2 border-r-2 border-accent" />
    </>
  );
}

/* ---------- Ikony (inline SVG, tusz; brak biblioteki ikon w projekcie) ---------- */

type IconProps = { className?: string };

export function IconCheck({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconCross({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" className={className} aria-hidden>
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
    </svg>
  );
}

export function IconArrow({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconPhone({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </svg>
  );
}

export function IconPlus({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function GuaranteeIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2" />
        </svg>
      );
  }
}
