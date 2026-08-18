"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ReactNode } from "react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { CONTACT, THANKYOU, BOOKING } from "../lib/content";

interface ContactSectionProps {
  content?: typeof CONTACT;
  /**
   * Źródło zgłoszenia — decyduje, do której tabeli w Airtable trafi kontakt
   * (rozdziela dane ze strony głównej od /landing-page).
   * Musi pasować do kluczy w TABLE_BY_SOURCE w app/api/contact/route.ts.
   */
  source?: "home" | "landing-page";
  /**
   * Rozszerzony formularz (pełna kwalifikacja: budżet, termin, zakres,
   * skąd o nas wie, rodzaj spotkania + kalendarz). Włączony tylko na stronie
   * głównej — landing page i podstrony zostają przy krótkim formularzu.
   */
  extended?: boolean;
}

// Wybór jednej z tych opcji w „Jak nas znalazłeś?" odsłania dwa dodatkowe
// pola: źródło polecenia oraz kod promocyjny.
const REFERRAL_VALUES = ["Polecenie", "Grupa na Facebook"];

// Rodzaj spotkania — wybór którejkolwiek opcji odsłania kalendarz Calendly.
const MEETING_OPTIONS = ["Samo audio", "Wideo"];

export function ContactSection({
  content = CONTACT,
  source = "home",
  extended = false,
}: ContactSectionProps = {}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Sterują polami warunkowymi (tylko w wariancie rozszerzonym).
  const [howFound, setHowFound] = useState("");
  const [meetingType, setMeetingType] = useState("");

  const showReferralExtras = REFERRAL_VALUES.includes(howFound);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      // Po wysłaniu — przejście na stronę z podziękowaniem (Thank You Page).
      // Nie zerujemy `submitting`: przycisk zostaje zablokowany do nawigacji.
      router.push(THANKYOU.route);
    } catch (err) {
      console.error("[ContactSection] Wysyłka nie powiodła się:", err);
      setSubmitting(false);
      setError(
        "Coś poszło nie tak przy wysyłaniu. Spróbuj ponownie lub napisz do nas bezpośrednio.",
      );
    }
  };

  return (
    <section id="kontakt" className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {content.headingLine1}{" "}
          <span className="underline-accent">{content.headingLine2}</span>
        </Reveal>

        <Reveal as="p" delay={60} className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong">
          {content.description}
        </Reveal>

        <Reveal delay={80}>
          <div
            role="note"
            className="mt-8 inline-flex items-center gap-3 bg-accent px-5 py-3 font-display font-bold text-accent-foreground"
          >
            <span aria-hidden className="inline-block h-2 w-2 bg-accent-foreground" />
            {content.urgencyNote}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-panel mt-10 grid grid-cols-1 gap-10 p-6 lg:mt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:p-12">
            {/* Lewa: branding + autor + opinia klienta.
                Sticky na desktopie — przy długim formularzu branding zostaje w polu widzenia. */}
            <div className="flex flex-col items-center text-center lg:sticky lg:top-28 lg:self-start">
              <div className="mb-12 mt-6 scale-[1.6]">
                <Logo />
              </div>

              <div className="mb-8 flex items-center gap-4">
                <Image
                  src={content.ownerPhoto}
                  alt={content.ownerName}
                  width={84}
                  height={84}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-lg font-bold">{content.ownerName}</div>
                  <div className="text-sm text-muted">{content.ownerRole}</div>
                </div>
              </div>

              {/* Opinia klienta — ukryta na mobile (zajmowała dużo miejsca nad
                  formularzem i myliła się ze zdjęciem CEO); widoczna od md+. */}
              <blockquote className="hidden space-y-3 text-sm leading-relaxed text-muted-strong md:block">
                {content.testimonial.quote.map((paragraph, i) => (
                  <p key={i}>
                    {i === 0 && "„"}
                    {paragraph}
                    {i === content.testimonial.quote.length - 1 && "”"}
                  </p>
                ))}
              </blockquote>

              <div className="mt-5 hidden items-center justify-center gap-2 text-sm md:flex">
                <span aria-hidden className="inline-block h-px w-4 bg-accent" />
                <span className="font-semibold">{content.testimonial.author}</span>
                <span className="text-muted">{content.testimonial.role}</span>
              </div>

              <p className="mt-10 border-t border-card-border pt-10 font-medium leading-relaxed text-foreground">
                {content.formNote}
              </p>
            </div>

            {/* Prawa: formularz */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Imię i nazwisko" name="name" type="text" required placeholder="Podaj imię i nazwisko" />
              <Field label="Adres e-mail" name="email" type="email" required placeholder="Podaj swój e-mail" />
              <Field label="Numer telefonu" name="phone" type="tel" required placeholder="Podaj swój numer telefonu" />

              <SelectField
                label="W czym się specjalizujesz?"
                name="specialization"
                required
                placeholder="Wybierz specjalizację"
                options={content.specializations}
              />

              {extended && (
                <>
                  <SectionLabel>O Twojej stronie</SectionLabel>

                  <Field
                    label="Aktualna strona lub profil w social mediach"
                    name="website"
                    type="text"
                    optional
                    placeholder="np. twojafirma.pl lub link do profilu"
                  />

                  <TextareaField
                    label="Czy Twoja strona ma zawierać jakieś funkcje lub elementy interaktywne?"
                    name="features"
                    optional
                    rows={3}
                    placeholder="np. kalkulator, konfigurator, formularz wyceny, mapa realizacji…"
                  />

                  <TextareaField
                    label="Czy Twoja strona ma zawierać jakieś konkretne podstrony?"
                    name="subpages"
                    optional
                    rows={3}
                    placeholder="np. Realizacje, Oferta, O nas, Blog, Kontakt…"
                  />

                  <Field
                    label="Na kiedy chcesz mieć gotową stronę?"
                    name="timeline"
                    type="text"
                    required
                    placeholder="np. jak najszybciej, za 2 miesiące, do końca roku…"
                  />

                  <RadioGroup
                    label="Masz już gotowe zdjęcia lub treści na stronę?"
                    name="hasContent"
                    required
                    options={["Tak", "Nie"]}
                  />

                  <SelectField
                    label="Jaki budżet planujesz przeznaczyć na stronę dla swojej firmy?"
                    name="budget"
                    required
                    placeholder="Wybierz przedział budżetu"
                    options={content.budgetOptions}
                  />

                  <SelectField
                    label="Jak nas znalazłeś?"
                    name="howFound"
                    required
                    placeholder="Wybierz źródło"
                    options={content.howFoundOptions}
                    onChange={(e) => setHowFound(e.target.value)}
                  />

                  {showReferralExtras && (
                    <>
                      <Field
                        label="Jeśli to polecenie lub grupa na Facebooku – podaj jaka lub od kogo"
                        name="referralSource"
                        type="text"
                        optional
                        placeholder="np. imię osoby polecającej lub nazwa grupy"
                      />
                      <Field
                        label="Masz kod promocyjny? Jeśli tak – wpisz go tutaj poniżej"
                        name="promoCode"
                        type="text"
                        optional
                        placeholder="Wpisz kod promocyjny"
                      />
                    </>
                  )}
                </>
              )}

              <TextareaField
                label={extended ? "Czy chcesz nam coś jeszcze przekazać?" : "Wiadomość"}
                name="message"
                optional
                rows={5}
                placeholder="Wpisz o co chciałbyś zapytać"
              />

              {extended && (
                <>
                  <SectionLabel>Preferowane spotkanie</SectionLabel>

                  <RadioGroup
                    label="Jaki rodzaj spotkania najbardziej Ci odpowiada?"
                    name="meetingType"
                    required
                    options={MEETING_OPTIONS}
                    hint="Spotkanie odbędzie się na Google Meet."
                    onChange={(e) => setMeetingType(e.target.value)}
                  />

                  {meetingType && (
                    <div>
                      <p className="mb-3 font-medium text-foreground">
                        Wybierz dogodny termin spotkania{" "}
                        <span className="font-normal text-muted">(data i godzina)</span>
                      </p>
                      <div className="overflow-hidden rounded-md border border-card-border bg-card-elevated p-1 sm:p-2">
                        <CalendlyEmbed url={BOOKING.calendlyUrl} />
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Zgoda RODO — wymagana, bramkuje wysyłkę formularza. */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-accent"
                />
                <label htmlFor="consent" className="text-sm leading-relaxed text-muted-strong">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez Pillar Web
                  w celu obsługi zapytania i kontaktu w sprawie oferty, zgodnie z{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Polityką Prywatności
                  </a>
                  . <span className="text-muted">*</span>
                </label>
              </div>

              <div className="space-y-3">
                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Wysyłanie..." : content.submitLabel}
                </Button>
                {error && (
                  <p role="alert" className="text-center text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}
                <p className="text-center text-sm text-muted-strong">{content.submitNote}</p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pola formularza                                                           */
/* -------------------------------------------------------------------------- */

// Znacznik wymagalności obok etykiety: „*" gdy wymagane, „(nie jest wymagane)"
// gdy opcjonalne.
function RequiredMark({ required, optional }: { required?: boolean; optional?: boolean }) {
  if (required) return <span className="text-muted">*</span>;
  if (optional) return <span className="font-normal text-muted">(nie jest wymagane)</span>;
  return null;
}

const INPUT_CLASS =
  "w-full rounded-md border border-card-border-strong bg-card-elevated px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-foreground focus:outline-none";

function Field({
  label,
  name,
  type,
  required,
  optional,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  optional?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-foreground">
        {label} <RequiredMark required={required} optional={optional} />
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={INPUT_CLASS}
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  required,
  optional,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  rows?: number;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-foreground">
        {label} <RequiredMark required={required} optional={optional} />
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className={`${INPUT_CLASS} resize-y`}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  optional,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  placeholder: string;
  options: readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-foreground">
        {label} <RequiredMark required={required} optional={optional} />
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        onChange={onChange}
        className="w-full appearance-none rounded-md border border-card-border-strong bg-card-elevated bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-12 text-foreground transition-colors focus:border-foreground focus:outline-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23555044'><path d='M5.25 7.5l4.75 5 4.75-5z'/></svg>\")",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({
  label,
  name,
  required,
  optional,
  options,
  hint,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  optional?: boolean;
  options: readonly string[];
  hint?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  // Zaznaczenie trzymamy w stanie (a nie przez CSS `:has(:checked)`) — dzięki
  // temu stan wyboru sterujemy jawnie stylem inline, bez zależności od
  // specyficzności utility czy wsparcia `:has` w silniku.
  const [selected, setSelected] = useState("");
  return (
    <fieldset>
      <legend className="mb-2 block font-medium text-foreground">
        {label} <RequiredMark required={required} optional={optional} />
      </legend>
      {hint && <p className="-mt-1 mb-3 text-sm text-muted">{hint}</p>}
      <div className="flex flex-wrap gap-3">
        {options.map((o) => {
          const isSelected = selected === o;
          return (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2.5 rounded-md border border-card-border-strong bg-card-elevated px-4 py-3 text-foreground transition-colors hover:border-foreground"
              style={
                isSelected
                  ? {
                      borderColor: "var(--color-foreground)",
                      backgroundColor: "var(--color-accent-soft)",
                    }
                  : undefined
              }
            >
              <input
                type="radio"
                name={name}
                value={o}
                required={required}
                checked={isSelected}
                onChange={(e) => {
                  setSelected(o);
                  onChange?.(e);
                }}
                className="h-4 w-4 cursor-pointer accent-accent"
              />
              <span className="font-medium">{o}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="border-t border-card-border pt-6 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-muted-strong">
      {children}
    </p>
  );
}
