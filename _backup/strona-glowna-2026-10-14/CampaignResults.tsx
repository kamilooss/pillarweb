import Image from "next/image";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { CAMPAIGN_RESULTS } from "../lib/content";

/**
 * WYNIKI KAMPANII — dowód liczbowy strony głównej.
 *
 * Zastąpiła sekcję „To nie są obietnice…" (Testimonials) i blok `results`
 * z DifferentiatorSection. Kopie obu leżą w /_backup/wyniki-kampanii.
 *
 * Grafiki to gotowe kreacje 9:16 z konta Google Ads klienta, wgrywane w
 * CAŁOŚCI (razem ze stopką marki). Dlatego pod obrazkiem nie powtarzamy liczb,
 * które już na nim są — tekst niesie tylko to, czego grafika nie mówi:
 * branżę, cel biznesowy i definicję kontaktu.
 *
 * Etykiety „Cel" / „Co liczymy jako kontakt" celowo naśladują pasek
 * WYDATEK / KOSZT KONTAKTU / OKRES z samych grafik — włosowa linia u góry,
 * wersaliki, szeroki tracking. Sekcja i kreacje mówią tym samym językiem.
 *
 * Karty mają twardy sufit 380 px: przy 9:16 szersza karta rośnie w pionie
 * szybciej, niż zyskuje na czytelności (3 kreacje obok siebie = ~675 px
 * wysokości, co jeszcze mieści się w ekranie).
 */
interface CampaignResultsProps {
  /** Override nagłówka — na /lista sekcja wchodzi pod własnym tytułem. */
  headingPrefix?: string;
  headingAccent?: string;
  /** false = nagłówek bez akapitu pod spodem (tak leci na /lista). */
  showIntro?: boolean;
}

export function CampaignResults({
  headingPrefix: headingPrefixOverride,
  headingAccent: headingAccentOverride,
  showIntro = true,
}: CampaignResultsProps = {}) {
  const { heading, intro, labels, cases, cta } = CAMPAIGN_RESULTS;
  const headingPrefix = headingPrefixOverride ?? heading.prefix;
  const headingAccent = headingAccentOverride ?? heading.accent;

  return (
    <section
      id="wyniki-kampanii"
      className="border-t border-card-border bg-surface-sunken py-20 lg:py-28"
      aria-label="Wyniki kampanii Google Ads na naszych stronach"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-4xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        {showIntro && (
          <Reveal
            as="p"
            delay={60}
            className="mt-7 max-w-3xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-muted-strong"
          >
            {intro}
          </Reveal>
        )}

        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {cases.map((item, i) => (
            <article key={item.industry}>
              {/* Nagłówek przypadku — numer indeksu, branża i „spec" po prawej */}
              <Reveal className="grid grid-cols-1 gap-x-12 gap-y-8 border-t border-card-border-strong pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:pt-10">
                <div className="flex gap-5">
                  <span className="arch-index flex-shrink-0 text-4xl lg:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-extrabold leading-tight tracking-tight text-foreground">
                    {item.industry}
                  </h3>
                </div>

                <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                  <div className="border-t border-card-border-strong pt-3">
                    <dt className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-subtle">
                      {labels.goal}
                    </dt>
                    <dd className="mt-2 leading-snug text-muted-strong">{item.goal}</dd>
                  </div>
                  <div className="border-t border-card-border-strong pt-3">
                    <dt className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-subtle">
                      {labels.conversion}
                    </dt>
                    <dd className="mt-2 leading-snug text-muted-strong">
                      {item.conversion}
                    </dd>
                  </div>
                </dl>
              </Reveal>

              {/* Kreacje — jedna na miesiąc.
                  Na telefonie przesuwany pas zamiast słupka: siedem kreacji
                  9:16 jedna pod drugą dawało ~6200 px samej tej sekcji.
                  Karta na 80vw zostawia widoczny skrawek następnej, więc widać,
                  że da się przesunąć. Od sm w górę wraca zwykła siatka.
                  Ujemny margines równa się dokładnie paddingowi
                  .container-content (1.25rem), a overflow-x domyka pas w sobie. */}
              <div className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-5 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:snap-none sm:scroll-pl-0 sm:grid-cols-2 sm:gap-8 sm:overflow-x-visible sm:px-0 sm:pb-0 lg:mt-12 lg:grid-cols-3">
                {item.shots.map((shot, j) => (
                  <Reveal
                    key={shot.image}
                    delay={j * 70}
                    as="figure"
                    className="w-[80vw] max-w-[380px] shrink-0 snap-start sm:w-full sm:shrink"
                  >
                    <figcaption className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-subtle">
                      {shot.period}
                    </figcaption>
                    <div className="overflow-hidden border border-card-border bg-background shadow-[0_24px_50px_-34px_rgba(21,22,14,0.35)]">
                      {/* Bez `sizes`: images.unoptimized=true w next.config.ts,
                          więc next/image nie generuje srcSet i atrybut i tak
                          zostaje odrzucony. Plik (1080 px, ~88 kB webp) leci
                          statycznie z edge, leniwie — nad ekranem go nie ma. */}
                      <Image
                        src={shot.image}
                        alt={shot.alt}
                        width={1080}
                        height={1920}
                        className="h-auto w-full"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <Button href={cta.href} size="lg" className="max-w-full min-w-[260px]">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
