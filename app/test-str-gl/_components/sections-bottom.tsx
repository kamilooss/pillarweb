import Image from "next/image";
import { Button } from "../../components/Button";
import { TestVideo } from "./TestVideo";
import { Reveal } from "../../components/Reveal";
import { TESTIMONIALS } from "../../lib/content";
import {
  COMPARISON,
  DELIVERABLES,
  FAQ,
  FOR_WHOM,
  GUARANTEES,
  OBJECTIONS,
  PRICE,
  PROOF,
} from "../copy";
import {
  GuaranteeIcon,
  H2,
  IconArrow,
  IconCheck,
  IconCross,
  IconPlus,
  Lead,
  Sheet,
  SheetGrid,
} from "./ui";

/* =========================================================================
   06 · CO DOSTAJESZ — siatka specyfikacji + 4 kroki.
   ========================================================================= */
export function TestDeliverables() {
  return (
    <Sheet id="co-dostajesz">
      <SheetGrid index="05" label={DELIVERABLES.label}>
        <Reveal>
          <H2>
            {DELIVERABLES.headingBefore}
            <span className="mark">{DELIVERABLES.headingMark}</span>
          </H2>
        </Reveal>
        <Reveal delay={60}>
          <Lead>{DELIVERABLES.lead}</Lead>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 border-l border-t border-card-border sm:grid-cols-2 xl:grid-cols-3">
          {DELIVERABLES.items.map((item, i) => (
            <li key={item.title} className="flex flex-col border-b border-r border-card-border bg-surface/60 p-7">
              <span className="flex items-center gap-3">
                <span aria-hidden className="inline-block h-2.5 w-2.5 bg-accent ring-1 ring-foreground/40" />
                <span className="tnum text-xs font-extrabold text-muted">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-5 text-lg font-extrabold leading-snug text-foreground">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-strong">{item.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-[clamp(1.25rem,1.8vw,1.5rem)] font-extrabold text-foreground">
          {DELIVERABLES.processHeading}
        </h3>
        <ol className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {DELIVERABLES.steps.map((step, i) => (
            <li key={step.title} className="relative border-t-[3px] border-foreground pt-6 first:border-accent">
              <span aria-hidden className="arch-index block text-[3.25rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-4 text-lg font-extrabold text-foreground">{step.title}</h4>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-strong">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[62ch] text-lg leading-relaxed text-foreground">
          {DELIVERABLES.timingBefore}
          <span className="mark font-bold">{DELIVERABLES.timingMark}</span>
          {DELIVERABLES.timingAfter}
        </p>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   06a · TABELA PORÓWNAWCZA — kolumna Pillar Web na tincie lime.
   ========================================================================= */
function Mark({ yes, label }: { yes: boolean; label: string }) {
  return yes ? (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-surface" title={label}>
      <IconCheck className="h-3.5 w-3.5" />
      <span className="sr-only">{label}: tak</span>
    </span>
  ) : (
    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-card-border-strong text-muted" title={label}>
      <IconCross className="h-3.5 w-3.5" />
      <span className="sr-only">{label}: nie</span>
    </span>
  );
}

export function TestComparison() {
  const cols = "grid-cols-[minmax(0,1fr)_4.5rem_4.5rem] sm:grid-cols-[minmax(0,1fr)_8rem_8rem]";
  return (
    <Sheet id="porownanie">
      <SheetGrid index="06" label={COMPARISON.label}>
        <Reveal>
          <H2>{COMPARISON.heading}</H2>
        </Reveal>
        <Reveal delay={60}>
          <Lead>{COMPARISON.lead}</Lead>
        </Reveal>

        <div className="surface-panel mt-12 overflow-hidden">
          <div className={`grid ${cols} items-end border-b-2 border-foreground`}>
            <span className="px-4 py-4 text-xs font-bold uppercase tracking-[0.16em] text-muted sm:px-6">
              {COMPARISON.columns.feature}
            </span>
            <span className="px-1 py-4 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.1em] text-muted sm:text-xs">
              {COMPARISON.columns.others}
            </span>
            <span className="bg-accent px-1 py-4 text-center text-[11px] font-extrabold uppercase leading-tight tracking-[0.1em] text-accent-foreground sm:text-xs">
              {COMPARISON.columns.us}
            </span>
          </div>
          {COMPARISON.groups.map((group) => (
            <div key={group.title}>
              <div className={`grid ${cols} border-b border-card-border bg-surface-sunken/60`}>
                <span className="px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-foreground sm:px-6">
                  {group.title}
                </span>
                <span />
                <span className="bg-accent-soft" />
              </div>
              {group.rows.map((row) => (
                <div key={row.feature} className={`grid ${cols} items-center border-b border-card-border last:border-b-0`}>
                  <span className="px-4 py-4 text-[15px] leading-snug text-foreground sm:px-6">{row.feature}</span>
                  <span className="flex justify-center py-4">
                    <Mark yes={row.others} label={COMPARISON.columns.others} />
                  </span>
                  <span className="flex h-full items-center justify-center bg-accent-soft py-4">
                    <Mark yes label={COMPARISON.columns.us} />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   07 · DOWODY — zrzuty z kont, tabela liczb, realizacje wideo, opinie.
   ========================================================================= */
export function TestProof() {
  return (
    <Sheet id="realizacje">
      <SheetGrid index="07" label={PROOF.label}>
        <Reveal>
          <H2>
            <span className="mark">{PROOF.headingMark}</span>
            {PROOF.headingAfter}
          </H2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-strong">{PROOF.lead}</p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {PROOF.cases.map((c) => (
            <article key={c.title} className="grid grid-cols-1 gap-8 border-t border-card-border pt-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h3 className="text-xl font-extrabold leading-snug text-foreground">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-strong">{c.text}</p>
                <table className="mt-6 w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-foreground text-xs font-bold uppercase tracking-[0.14em] text-muted">
                      <th className="py-2 pr-3 font-bold">{PROOF.tableHead.month}</th>
                      <th className="py-2 pr-3 text-right font-bold">{PROOF.tableHead.contacts}</th>
                      <th className="py-2 text-right font-bold">{PROOF.tableHead.cost}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((r) => (
                      <tr key={r.month} className="border-b border-card-border">
                        <td className="py-3 pr-3 text-sm text-muted-strong">{r.month}</td>
                        <td className="tnum py-3 pr-3 text-right text-lg font-extrabold text-foreground">{r.contacts}</td>
                        <td className="tnum py-3 text-right text-sm font-bold text-foreground">{r.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {"extra" in c && c.extra ? (
                  <p className="mt-6 border-l-[3px] border-accent bg-surface p-5 text-base leading-relaxed text-foreground">{c.extra}</p>
                ) : null}
              </div>
              <div className="lg:col-span-7">
                <div className={`grid gap-3 ${c.shots.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                  {c.shots.map((shot) => (
                    <div key={shot.image} className="relative aspect-[9/16] overflow-hidden border border-card-border bg-surface-sunken">
                      <Image
                        src={shot.image}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 1024px) 260px, 45vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Realizacje wideo */}
        <div className="mt-24 border-t-2 border-foreground pt-10">
          <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-tight text-foreground">
            {PROOF.portfolioHeading}
          </h3>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-strong lg:text-lg">{PROOF.portfolioIntro}</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
            {PROOF.projects.map((p, i) => (
              <figure key={p.name} className={i === 0 ? "md:col-span-2" : ""}>
                <TestVideo src={p.src} poster={p.poster} aspect={p.aspect} name={p.name} autoplay loop />
                <figcaption className="mt-5 flex flex-col gap-1 border-l-[3px] border-accent pl-4">
                  <span className="text-lg font-extrabold text-foreground">
                    {p.name}, <span className="font-semibold text-muted-strong">{p.type}</span>
                  </span>
                  <span className="text-[15px] leading-relaxed text-muted-strong">{p.body}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Opinie — pełne brzmienie z danych strony */}
        <div className="mt-24 border-t-2 border-foreground pt-10">
          <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold leading-tight text-foreground">
            {PROOF.testimonialsHeading}
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.author} className="surface-panel flex flex-col p-7 lg:p-8">
                <span aria-hidden className="font-display text-5xl font-extrabold leading-none text-foreground/20">„</span>
                <div className="mt-2 space-y-3 text-[15px] leading-relaxed text-muted-strong">
                  {t.quote.map((paragraph, pi) => (
                    <p key={pi}>
                      {paragraph.map((seg, si) =>
                        seg.accent ? (
                          <strong key={si} className="font-bold text-foreground">
                            {seg.text}
                          </strong>
                        ) : (
                          <span key={si}>{seg.text}</span>
                        ),
                      )}
                    </p>
                  ))}
                </div>
                <footer className="mt-auto flex items-center gap-4 border-t border-card-border pt-6">
                  <Image src={t.avatar} alt={t.author} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                  <span>
                    <span className="block font-bold text-foreground">{t.author}</span>
                    <span className="block text-sm text-muted">{t.role}</span>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-3">
          <Button href="#kontakt" size="lg">
            {PROOF.cta}
            <IconArrow className="h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-strong">{PROOF.ctaNote}</p>
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   08 · TWOJE „ALE” — panele rozwijane (natywne <details>, działają bez JS).
   ========================================================================= */
function Disclosure({ q, a, open = false }: { q: string; a: string; open?: boolean }) {
  return (
    <details open={open} className="group surface-panel">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 text-[17px] font-bold leading-snug text-foreground lg:text-lg [&::-webkit-details-marker]:hidden">
        <span>{q}</span>
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-card-border-strong transition-transform duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent">
          <IconPlus className="h-4 w-4" />
        </span>
      </summary>
      <p className="border-t border-card-border px-6 pb-6 pt-5 text-base leading-[1.7] text-muted-strong">{a}</p>
    </details>
  );
}

export function TestObjections() {
  return (
    <Sheet id="obiekcje">
      <SheetGrid index="08" label={OBJECTIONS.label}>
        <Reveal>
          <H2>{OBJECTIONS.heading}</H2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {OBJECTIONS.items.map((item, i) => (
            <Disclosure key={item.q} q={item.q} a={item.a} open={i === 0} />
          ))}
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   09 · DLA KOGO — branże z kwadratowymi punktami lime + „nie dla”.
   ========================================================================= */
export function TestForWhom() {
  return (
    <Sheet id="dla-kogo">
      <SheetGrid index="09" label={FOR_WHOM.label}>
        <Reveal>
          <H2>{FOR_WHOM.heading}</H2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-strong">{FOR_WHOM.lead}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          <ul className="border-t border-card-border">
            {FOR_WHOM.industries.map((ind) => (
              <li key={ind.name} className="flex items-start gap-4 border-b border-card-border py-4">
                <span aria-hidden className="mt-2 inline-block h-2.5 w-2.5 shrink-0 bg-accent ring-1 ring-foreground/40" />
                <span className="text-base leading-snug">
                  <span className="font-bold text-foreground">{ind.name}</span>
                  {"note" in ind && ind.note ? <span className="text-muted-strong">: {ind.note}</span> : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="surface-panel self-start p-7 lg:p-8">
            <div aria-hidden className="hatch-accent -mx-7 -mt-7 mb-7 h-3 lg:-mx-8 lg:-mt-8" />
            <h3 className="text-lg font-extrabold text-foreground">{FOR_WHOM.notHeading}</h3>
            <ul className="mt-5 space-y-4">
              {FOR_WHOM.not.map((item) => (
                <li key={item} className="flex items-start gap-4 text-base leading-snug text-muted-strong">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-card-border-strong text-foreground">
                    <IconCross className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   10 · CENA — jawna kwota, czynniki, przycisk.
   ========================================================================= */
export function TestPrice() {
  return (
    <Sheet id="cennik">
      <SheetGrid index="10" label={PRICE.label}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Reveal>
              <H2>
                <span className="mark">{PRICE.headingBefore.trim()}</span> {PRICE.headingAfter}
              </H2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-strong">{PRICE.body}</p>
            </Reveal>
          </div>
          <Reveal delay={100} className="surface-panel surface-panel--accent edge-accent-top self-start p-7 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{PRICE.from}</p>
            <p className="tnum mt-2 font-display text-[clamp(3rem,6vw,4.75rem)] font-extrabold leading-none tracking-[-0.03em] text-foreground">
              {PRICE.amount}
            </p>
            <div className="mt-8 border-t border-card-border pt-6">
              <p className="text-sm font-bold text-foreground">{PRICE.factorsLabel}</p>
              <ul className="mt-4 space-y-3">
                {PRICE.factors.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base text-muted-strong">
                    <span aria-hidden className="inline-block h-2 w-2 bg-accent ring-1 ring-foreground/40" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="#kontakt" size="lg" className="mt-8 w-full">
              {PRICE.cta}
            </Button>
            <p className="mt-3 text-center text-sm text-muted-strong">{PRICE.note}</p>
          </Reveal>
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   11 · FAQ — papier wcięty (zasada brandbooka).
   ========================================================================= */
export function TestFaq() {
  return (
    <Sheet id="faq" tone="sunken">
      <SheetGrid index="11" label={FAQ.label}>
        <Reveal>
          <H2>{FAQ.heading}</H2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQ.items.map((item) => (
            <Disclosure key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </SheetGrid>
    </Sheet>
  );
}

/* =========================================================================
   12 · GWARANCJE — cztery zobowiązania nad formularzem.
   ========================================================================= */
export function TestGuarantees() {
  return (
    <Sheet id="gwarancje">
      <SheetGrid index="12" label={GUARANTEES.label}>
        <Reveal>
          <H2>
            {GUARANTEES.headingBefore}
            <span className="mark">{GUARANTEES.headingMark}</span>
          </H2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GUARANTEES.items.map((g, i) => (
            <Reveal key={g.title} delay={i * 50} className="surface-panel flex gap-5 p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <GuaranteeIcon name={g.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-snug text-foreground">{g.title}</span>
                <span className="mt-2 block text-base leading-relaxed text-muted-strong">{g.body}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </SheetGrid>
    </Sheet>
  );
}
