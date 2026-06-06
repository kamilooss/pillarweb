import { Reveal } from "./Reveal";
import { PortfolioVideo } from "./PortfolioVideo";
import { PORTFOLIO } from "../lib/content";

/**
 * REALIZACJE — portfolio wideo w języku "PLAN".
 * Stos arkuszy-realizacji: ghostowy index + hi-vis podpis "dla kogo"
 * + nazwa + opis, a pod spodem kadr wideo (klik = odtworzenie).
 * Inny rytm layoutu niż reszta strony: tytuł-blok NAD pełnym kadrem,
 * zamiast splitu tekst-obok-mediów.
 */
interface PortfolioSectionProps {
  /** Pełna override sekcji (heading, intro, projects). */
  content?: typeof PORTFOLIO;
  /** Sam override nagłówka/intro — projekty zostają z PORTFOLIO (przydatne dla podstron). */
  headingPrefix?: string;
  headingAccent?: string;
  intro?: string;
}

export function PortfolioSection({
  content = PORTFOLIO,
  headingPrefix: headingPrefixOverride,
  headingAccent: headingAccentOverride,
  intro: introOverride,
}: PortfolioSectionProps = {}) {
  const { projects } = content;
  const headingPrefix = headingPrefixOverride ?? content.headingPrefix;
  const headingAccent = headingAccentOverride ?? content.headingAccent;
  const intro = introOverride ?? content.intro;

  return (
    <section
      id="realizacje"
      className="border-t border-card-border bg-surface-sunken py-20 lg:py-28"
      aria-label="Realizacje"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.1] tracking-tight"
        >
          {headingPrefix}{" "}
          <span className="underline-accent">{headingAccent}</span>
        </Reveal>

        <Reveal
          as="p"
          delay={80}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-strong"
        >
          {intro}
        </Reveal>

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-28">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.slug} className="max-w-5xl">
              {/* Tytuł-blok: index + podpis dla kogo + nazwa + opis */}
              <header className="mb-6 flex items-start gap-4 sm:gap-6 lg:mb-8">
                <span className="arch-index shrink-0 text-[clamp(2rem,5vw,3.5rem)] leading-[0.8]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <span className="mark inline-block font-display text-xs font-extrabold uppercase tracking-[0.16em]">
                    {project.clientType}
                  </span>
                  <h3 className="mt-3 font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-bold leading-[1.1] tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 max-w-2xl leading-relaxed text-muted-strong">
                    {project.description}
                  </p>
                </div>
              </header>

              <PortfolioVideo
                src={project.video}
                poster={project.poster}
                aspect={project.aspect}
                name={project.name}
                duration={project.duration}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
