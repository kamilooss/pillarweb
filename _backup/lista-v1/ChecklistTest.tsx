"use client";

/**
 * INTERAKTYWNY TEST — podstrona /lista
 * ------------------------------------
 * Odtwarza lead magnet „15 miejsc na stronie firmy budowlanej” jako test
 * TAK/NIE: wynik liczy się na żywo, a po piętnastej odpowiedzi odsłania się
 * werdykt z progami z PDF-a.
 *
 * Trzy rzeczy warte uwagi:
 *
 * 1. Treść „JEŚLI NIE” i „NAPRAWA” JEST ZAWSZE W DOM-ie, tylko zwinięta
 *    trikiem `grid-template-rows: 0fr → 1fr`. Dzięki temu Google indeksuje
 *    pełną treść listy (a to jest główny powód, dla którego ta podstrona
 *    w ogóle ma sens dla SEO), a zwijanie da się animować bez znajomości
 *    wysokości elementu.
 *
 * 2. Odpowiedzi trzymamy w localStorage — ktoś otwiera link z ManyChata,
 *    robi połowę testu, wraca wieczorem i ma gdzie skończył. Odczyt dzieje
 *    się PO montażu (flaga `hydrated`), żeby serwer i klient wyrenderowały
 *    to samo.
 *
 * 3. Gotowy wynik („7/15”) ląduje w sessionStorage. Formularz na dole strony
 *    odczytuje go przy wysyłce i dokleja do rekordu w Airtable — dzięki temu
 *    przed rozmową wiesz, gdzie ta strona przecieka.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "./Reveal";
import {
  LISTA_ANSWERS_STORAGE_KEY,
  LISTA_POINTS,
  LISTA_RESULT,
  LISTA_SCORE_STORAGE_KEY,
  LISTA_VERDICTS,
} from "../lib/content-lista";

type Answer = "tak" | "nie";
type Answers = Record<number, Answer>;

const TOTAL = LISTA_POINTS.length;

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
    <path
      d="M2.5 8.5l3.5 3.5 7.5-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
    <path
      d="M3.5 3.5l9 9M12.5 3.5l-9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 12 12"
    width="12"
    height="12"
    aria-hidden="true"
    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export function ChecklistTest() {
  const [answers, setAnswers] = useState<Answers>({});
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  /* --- Wczytanie zapisanego postępu (po montażu, żeby nie rozjechać SSR) --- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LISTA_ANSWERS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Answers;
        setAnswers(parsed);
        // Punkty z odpowiedzią NIE wracają rozwinięte — to tam jest naprawa.
        const reopened: Record<number, boolean> = {};
        for (const [id, value] of Object.entries(parsed)) {
          if (value === "nie") reopened[Number(id)] = true;
        }
        setOpen(reopened);
      }
    } catch {
      // Brak dostępu do localStorage (tryb prywatny) — test działa dalej,
      // tylko bez zapamiętywania postępu.
    }
    setHydrated(true);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () => Object.values(answers).filter((a) => a === "tak").length,
    [answers],
  );
  const complete = answeredCount === TOTAL;

  /* --- Zapis postępu + wyniku dla formularza --- */
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LISTA_ANSWERS_STORAGE_KEY, JSON.stringify(answers));
      if (complete) {
        sessionStorage.setItem(LISTA_SCORE_STORAGE_KEY, `${score}/${TOTAL}`);
      } else {
        sessionStorage.removeItem(LISTA_SCORE_STORAGE_KEY);
      }
    } catch {
      // jw. — brak pamięci przeglądarki nie psuje samego testu
    }
  }, [answers, complete, score, hydrated]);

  const answer = useCallback((id: number, value: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    // NIE rozwija naprawę od razu, TAK zwija — nikt nie musi nic klikać,
    // żeby zobaczyć to, co go dotyczy.
    setOpen((prev) => ({ ...prev, [id]: value === "nie" }));
  }, []);

  const toggle = useCallback((id: number) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAll = useCallback(() => {
    setOpen(Object.fromEntries(LISTA_POINTS.map((p) => [p.id, true])));
  }, []);

  const reset = useCallback(() => {
    setAnswers({});
    setOpen({});
    try {
      localStorage.removeItem(LISTA_ANSWERS_STORAGE_KEY);
      sessionStorage.removeItem(LISTA_SCORE_STORAGE_KEY);
    } catch {
      /* jw. */
    }
  }, []);

  const verdict =
    LISTA_VERDICTS.find((v) => score >= v.min && score <= v.max) ??
    LISTA_VERDICTS[LISTA_VERDICTS.length - 1];

  const leaks = LISTA_POINTS.filter((p) => answers[p.id] === "nie");
  const allOpen = LISTA_POINTS.every((p) => open[p.id]);

  return (
    <>
      <section id="test" className="relative scroll-mt-28 py-16 lg:py-24">
        <div className="container-content">
          {/* ---------- Pasek postępu (przykleja się pod nagłówkiem) ---------- */}
          <div className="sticky top-20 z-30 -mx-5 mb-10 border-y border-card-border bg-background/92 px-5 py-3 backdrop-blur-md md:-mx-8 md:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="font-display text-sm font-extrabold tracking-tight tnum">
                  {answeredCount} <span className="text-muted">z {TOTAL} punktów</span>
                </div>
                <div className="mt-0.5 truncate text-xs text-muted tnum">
                  {answeredCount === 0
                    ? "Zaznacz TAK albo NIE przy każdym punkcie"
                    : `TAK: ${score} · NIE: ${answeredCount - score}`}
                </div>
              </div>

              {complete ? (
                <a
                  href="#wynik"
                  className="shrink-0 rounded-md bg-accent px-4 py-2.5 font-display text-sm font-bold text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  Zobacz wynik
                </a>
              ) : (
                <button
                  type="button"
                  onClick={expandAll}
                  disabled={allOpen}
                  className="hidden shrink-0 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground disabled:opacity-40 sm:block"
                >
                  Rozwiń wszystkie opisy
                </button>
              )}
            </div>

            <div
              className="mt-3 h-1 w-full overflow-hidden bg-surface-sunken"
              role="progressbar"
              aria-valuenow={answeredCount}
              aria-valuemin={0}
              aria-valuemax={TOTAL}
              aria-label="Postęp testu"
            >
              <div
                className="h-full bg-accent transition-[width] duration-500 ease-out"
                style={{ width: `${(answeredCount / TOTAL) * 100}%` }}
              />
            </div>
          </div>

          {/* ---------- Piętnaście punktów ---------- */}
          <ol className="space-y-5">
            {LISTA_POINTS.map((point) => {
              const value = answers[point.id];
              const isOpen = Boolean(open[point.id]);

              return (
                // `data-scroll-offset` — zapas pod przyklejony pasek postępu
                // przy skoku z kotwicy (obsługuje SmoothScroll). `scroll-mt`
                // robi to samo dla natywnego skoku, gdy ktoś wejdzie prosto
                // z linku z hashem.
                <li
                  key={point.id}
                  id={`punkt-${point.id}`}
                  data-scroll-offset="92"
                  className="scroll-mt-44"
                >
                  <article
                    className={`surface-panel relative p-6 transition-colors duration-300 md:p-8 ${
                      value === "nie" ? "edge-accent-top" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <span className="arch-index shrink-0 text-[2.5rem] md:text-[3.25rem]">
                        {String(point.id).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight md:text-2xl">
                            {point.title}
                          </h3>
                          {value === "tak" && (
                            <span className="inline-flex items-center gap-1.5 border border-card-border-strong px-2 py-0.5 text-xs font-bold uppercase tracking-[0.12em] text-muted-strong">
                              <CheckIcon /> Zaliczone
                            </span>
                          )}
                          {value === "nie" && (
                            <span className="inline-flex items-center gap-1.5 bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground">
                              <CrossIcon /> Do naprawy
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-strong">
                          {point.check}
                        </p>

                        {/* Odpowiedź */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          <AnswerButton
                            label="TAK"
                            selected={value === "tak"}
                            tone="ink"
                            onClick={() => answer(point.id, "tak")}
                          />
                          <AnswerButton
                            label="NIE"
                            selected={value === "nie"}
                            tone="accent"
                            onClick={() => answer(point.id, "nie")}
                          />

                          <button
                            type="button"
                            onClick={() => toggle(point.id)}
                            aria-expanded={isOpen}
                            aria-controls={`punkt-${point.id}-opis`}
                            className="inline-flex items-center gap-2 pl-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
                          >
                            {isOpen ? "Zwiń" : "O co chodzi w tym punkcie?"}
                            <ChevronIcon open={isOpen} />
                          </button>
                        </div>

                        {/* Opis + naprawa. Zawsze w DOM (SEO), zwijany przez grid. */}
                        <div
                          id={`punkt-${point.id}-opis`}
                          aria-hidden={!isOpen}
                          className="grid transition-[grid-template-rows] duration-300 ease-out"
                          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                        >
                          <div className="overflow-hidden">
                            <div className="mt-6 space-y-5 border-t border-card-border pt-6">
                              <div>
                                <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle">
                                  Jeśli nie
                                </div>
                                <p className="mt-2 leading-relaxed text-muted-strong">
                                  {point.ifNo}
                                </p>
                              </div>
                              <div className="border-l-2 border-accent pl-4">
                                <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
                                  Naprawa
                                </div>
                                <p className="mt-2 leading-relaxed text-muted-strong">
                                  {point.fix}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- Wynik ---------- */}
      <section id="wynik" className="scroll-mt-28 border-t border-card-border py-16 lg:py-24">
        <div className="container-content">
          {!complete ? (
            <div className="mx-auto max-w-2xl border border-dashed border-card-border-strong bg-card p-8 text-center md:p-12">
              <div className="font-display text-2xl font-extrabold tracking-tight">
                {LISTA_RESULT.lockedHeading}
              </div>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-strong">
                {LISTA_RESULT.lockedBody}
              </p>
              <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.18em] text-subtle tnum">
                {LISTA_RESULT.lockedCounter(TOTAL - answeredCount)}
              </p>
            </div>
          ) : (
            <Reveal className="surface-panel surface-panel--accent p-8 md:p-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
                <div className="text-center lg:text-left">
                  <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle">
                    {LISTA_RESULT.heading}
                  </div>
                  <div className="mt-3 flex items-baseline justify-center gap-2 lg:justify-start">
                    <span className="font-display text-[5rem] font-extrabold leading-none tracking-tight tnum md:text-[6.5rem]">
                      {score}
                    </span>
                    <span className="font-display text-2xl font-bold text-muted tnum">
                      {LISTA_RESULT.scoreSuffix}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight">
                    <span className="underline-accent">{verdict.label}</span>
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-strong">{verdict.body}</p>

                  <div className="mt-8 border-t border-card-border pt-8">
                    <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle">
                      {LISTA_RESULT.leaksLabel}
                    </div>
                    {leaks.length === 0 ? (
                      <p className="mt-3 leading-relaxed text-muted-strong">
                        {LISTA_RESULT.leaksEmpty}
                      </p>
                    ) : (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {leaks.map((leak) => (
                          <li key={leak.id}>
                            <a
                              href={`#punkt-${leak.id}`}
                              className="inline-flex items-center gap-2 border border-card-border-strong bg-card-elevated px-3 py-2 text-sm font-medium transition-colors hover:border-foreground"
                            >
                              <span className="font-display font-extrabold tnum text-subtle">
                                {String(leak.id).padStart(2, "0")}
                              </span>
                              {leak.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={reset}
                    className="mt-8 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {LISTA_RESULT.resetLabel}
                  </button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function AnswerButton({
  label,
  selected,
  tone,
  onClick,
}: {
  label: string;
  selected: boolean;
  /** „ink” = odpowiedź neutralna (TAK), „accent” = oznaczenie hi-vis (NIE). */
  tone: "ink" | "accent";
  onClick: () => void;
}) {
  const base =
    "min-w-[5.5rem] rounded-md border px-5 py-2.5 font-display text-sm font-extrabold tracking-[0.08em] transition-all duration-200 cursor-pointer active:scale-[0.97]";
  const idle =
    "border-card-border-strong bg-card-elevated text-muted-strong hover:border-foreground hover:text-foreground";
  const active =
    tone === "accent"
      ? "border-accent bg-accent text-accent-foreground"
      : "border-foreground bg-foreground text-background";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`${base} ${selected ? active : idle}`}
    >
      {label}
    </button>
  );
}
