"use client";

/**
 * TEST 15 PUNKTÓW — podstrona /lista
 * ----------------------------------
 * Kreator: na ekranie stoi JEDEN punkt naraz. Klient czyta, co sprawdzić,
 * co traci i jak to naprawić, po czym klika „Jest OK” albo „Do poprawy”
 * i od razu przechodzi dalej. Po piętnastym punkcie pokazuje się wynik.
 *
 * Dlaczego jeden punkt naraz (decyzja Kamila, 27.09.2026): pierwsza wersja
 * pokazywała wszystkie piętnaście kart pod sobą i to przytłaczało. Świadomy
 * koszt tej zmiany: w kodzie strony jest tylko bieżący punkt, więc Google nie
 * zaindeksuje już całej treści listy. Poprzednia wersja leży w
 * _backup/lista-v1/.
 *
 * Dwie rzeczy warte uwagi:
 *
 * 1. Odpowiedzi trzymamy w localStorage — ktoś otwiera link z ManyChata, robi
 *    połowę testu, wraca wieczorem i wchodzi dokładnie tam, gdzie skończył.
 *    Odczyt po montażu (flaga `hydrated`), żeby serwer i klient renderowały
 *    to samo.
 *
 * 2. Gotowy wynik („7/15”) ląduje w sessionStorage. Formularz na dole strony
 *    odczytuje go przy wysyłce i dokleja do rekordu w Airtable.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import {
  LISTA_ANSWERS_STORAGE_KEY,
  LISTA_LABELS,
  LISTA_POINTS,
  LISTA_RESULT,
  LISTA_SCORE_STORAGE_KEY,
  LISTA_VERDICTS,
} from "../lib/content-lista";

type Answer = "ok" | "fix";
type Answers = Record<number, Answer>;

const TOTAL = LISTA_POINTS.length;
/** Odstęp od górnej krawędzi przy przeskoku do kolejnego punktu (nagłówek + luz). */
const SCROLL_OFFSET = -112;

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

const WrenchIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={className}>
    <path
      d="M10.6 1.8a3.6 3.6 0 00-4.3 4.6L1.9 10.8a1.4 1.4 0 102 2l4.4-4.4a3.6 3.6 0 004.6-4.3l-2.1 2.1-1.9-.5-.5-1.9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = ({ back = false }: { back?: boolean }) => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    aria-hidden="true"
    className={back ? "rotate-180" : ""}
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Czyta zapisany postęp i ODRZUCA wszystko, co nie pasuje do obecnego formatu.
 *
 * Powód: pierwsza wersja testu zapisywała odpowiedzi jako „tak”/„nie”. Po
 * przejściu na „ok”/„fix” taki zapis nadal miał piętnaście kluczy, więc
 * komponent uznawał test za ukończony i witał wynikiem 0/15 zamiast pierwszym
 * pytaniem. Dotyczyło każdego, kto wszedł na /lista przed 27.09.2026.
 */
function wczytajOdpowiedzi(raw: string): Answers | null {
  let dane: unknown;
  try {
    dane = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!dane || typeof dane !== "object" || Array.isArray(dane)) return null;

  // Set<number>, bo LISTA_POINTS jest `as const` i p.id ma typ literalny.
  const dozwoloneId = new Set<number>(LISTA_POINTS.map((p) => p.id));
  const wynik: Answers = {};
  for (const [klucz, wartosc] of Object.entries(dane as Record<string, unknown>)) {
    const id = Number(klucz);
    if (!dozwoloneId.has(id)) return null;
    if (wartosc !== "ok" && wartosc !== "fix") return null;
    wynik[id] = wartosc;
  }
  return Object.keys(wynik).length > 0 ? wynik : null;
}

export function ChecklistTest() {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  /** Przewijamy dopiero po interakcji — nie przy wejściu na stronę. */
  const shouldScroll = useRef(false);

  /* --- Wczytanie zapisanego postępu --- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LISTA_ANSWERS_STORAGE_KEY);
      const zapisane = raw ? wczytajOdpowiedzi(raw) : null;
      if (zapisane) {
        setAnswers(zapisane);
        if (Object.keys(zapisane).length === TOTAL) {
          setShowResult(true);
        } else {
          // Wracamy na pierwszy punkt bez odpowiedzi.
          const pierwszyPusty = LISTA_POINTS.findIndex((p) => !zapisane[p.id]);
          setIndex(pierwszyPusty === -1 ? 0 : pierwszyPusty);
        }
      } else if (raw) {
        // Zapis w starym formacie — kasujemy, żeby nie wracał przy odświeżeniu.
        localStorage.removeItem(LISTA_ANSWERS_STORAGE_KEY);
        sessionStorage.removeItem(LISTA_SCORE_STORAGE_KEY);
      }
    } catch {
      // Brak dostępu do localStorage (tryb prywatny) — test działa, tylko bez
      // zapamiętywania postępu.
    }
    setHydrated(true);
  }, []);

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () => Object.values(answers).filter((a) => a === "ok").length,
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
      // jw.
    }
  }, [answers, complete, score, hydrated]);

  /* --- Przeskok do góry karty po zmianie punktu --- */
  useEffect(() => {
    if (!shouldScroll.current) return;
    shouldScroll.current = false;
    const el = cardRef.current;
    if (!el) return;

    // Jeśli góra karty i tak jest w wygodnym miejscu, nie szarpiemy stroną.
    const gora = el.getBoundingClientRect().top;
    if (gora > 80 && gora < 240) return;

    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: SCROLL_OFFSET });
    } else {
      // Bez Lenisa (np. prefers-reduced-motion wyłączyło smooth scroll)
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET });
    }
  }, [index, showResult]);

  const answer = useCallback(
    (id: number, value: Answer) => {
      const nowe = { ...answers, [id]: value };
      setAnswers(nowe);
      shouldScroll.current = true;

      if (Object.keys(nowe).length === TOTAL) {
        setShowResult(true);
        return;
      }
      // Następny punkt bez odpowiedzi, licząc od bieżącego w prawo.
      const kolejny =
        LISTA_POINTS.findIndex((p, i) => i > index && !nowe[p.id]) !== -1
          ? LISTA_POINTS.findIndex((p, i) => i > index && !nowe[p.id])
          : LISTA_POINTS.findIndex((p) => !nowe[p.id]);
      setIndex(kolejny);
    },
    [answers, index],
  );

  const goTo = useCallback((i: number) => {
    shouldScroll.current = true;
    setShowResult(false);
    setIndex(i);
  }, []);

  const backToResult = useCallback(() => {
    shouldScroll.current = true;
    setShowResult(true);
  }, []);

  const reset = useCallback(() => {
    setAnswers({});
    setIndex(0);
    setShowResult(false);
    shouldScroll.current = true;
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
  const leaks = LISTA_POINTS.filter((p) => answers[p.id] === "fix");

  const point = LISTA_POINTS[index];
  const current = answers[point.id];

  return (
    <section id="test" className="scroll-mt-28 border-t border-card-border py-16 lg:py-24">
      <div className="container-content">
        <div ref={cardRef} className="mx-auto max-w-3xl scroll-mt-28">
          {showResult ? (
            <ResultPanel
              score={score}
              verdict={verdict}
              leaks={leaks}
              onGoTo={goTo}
              onReset={reset}
            />
          ) : (
            <>
              {/* --- Postęp --- */}
              <div className="mb-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-sm font-extrabold tracking-tight tnum">
                    Punkt {index + 1} <span className="text-muted">z {TOTAL}</span>
                  </span>
                  <span className="text-xs text-muted tnum">
                    {answeredCount === 0
                      ? "Odpowiedziano: 0"
                      : `Jest OK: ${score} · Do poprawy: ${answeredCount - score}`}
                  </span>
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

              {/* --- Karta punktu --- */}
              <article
                key={point.id}
                className={`surface-panel animate-fade-up p-6 md:p-10 ${
                  current === "fix" ? "edge-accent-top" : ""
                }`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="arch-index shrink-0 text-[2.5rem] md:text-[3.25rem]">
                    {String(point.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight md:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-strong">
                      {point.check}
                    </p>
                  </div>
                </div>

                {/* Opis i naprawa — widoczne od razu, bez rozwijania. */}
                <div className="mt-7 space-y-5 border-t border-card-border pt-6">
                  <div>
                    <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-subtle">
                      {LISTA_LABELS.ifFix}
                    </div>
                    <p className="mt-2 leading-relaxed text-muted-strong">{point.ifNo}</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <div className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
                      {LISTA_LABELS.repair}
                    </div>
                    <p className="mt-2 leading-relaxed text-muted-strong">{point.fix}</p>
                  </div>
                </div>

                {/* --- Odpowiedź --- */}
                <div className="mt-8 flex flex-col gap-3 border-t border-card-border pt-6 sm:flex-row">
                  <AnswerButton
                    label={LISTA_LABELS.answerOk}
                    icon={<CheckIcon />}
                    selected={current === "ok"}
                    tone="ink"
                    onClick={() => answer(point.id, "ok")}
                  />
                  <AnswerButton
                    label={LISTA_LABELS.answerFix}
                    icon={<WrenchIcon />}
                    selected={current === "fix"}
                    tone="accent"
                    onClick={() => answer(point.id, "fix")}
                  />
                </div>
              </article>

              {/* --- Nawigacja --- */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  disabled={index === 0}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
                >
                  <ArrowIcon back />
                  {LISTA_LABELS.back}
                </button>

                {complete && (
                  <button
                    type="button"
                    onClick={backToResult}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4"
                  >
                    {LISTA_LABELS.backToResult}
                    <ArrowIcon />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function ResultPanel({
  score,
  verdict,
  leaks,
  onGoTo,
  onReset,
}: {
  score: number;
  verdict: (typeof LISTA_VERDICTS)[number];
  leaks: (typeof LISTA_POINTS)[number][];
  onGoTo: (i: number) => void;
  onReset: () => void;
}) {
  return (
    <Reveal id="wynik" className="surface-panel surface-panel--accent scroll-mt-28 p-8 md:p-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
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
              <p className="mt-3 leading-relaxed text-muted-strong">{LISTA_RESULT.leaksEmpty}</p>
            ) : (
              <>
                <p className="mt-2 text-sm text-muted">{LISTA_RESULT.leaksHint}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {leaks.map((leak) => (
                    <li key={leak.id}>
                      <button
                        type="button"
                        onClick={() => onGoTo(LISTA_POINTS.findIndex((p) => p.id === leak.id))}
                        className="inline-flex cursor-pointer items-center gap-2 border border-card-border-strong bg-card-elevated px-3 py-2 text-left text-sm font-medium transition-colors hover:border-foreground"
                      >
                        <span className="font-display font-extrabold tnum text-subtle">
                          {String(leak.id).padStart(2, "0")}
                        </span>
                        {leak.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onReset}
            className="mt-8 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {LISTA_RESULT.resetLabel}
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function AnswerButton({
  label,
  icon,
  selected,
  tone,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  /** „ink” = u mnie w porządku, „accent” = oznaczenie hi-vis miejsca do naprawy. */
  tone: "ink" | "accent";
  onClick: () => void;
}) {
  const base =
    "flex flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-md border px-6 py-4 font-display text-[15px] font-extrabold tracking-tight transition-all duration-200 active:scale-[0.98]";
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
      {icon}
      {label}
    </button>
  );
}
