"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { CONTACT, THANKYOU } from "../lib/content";

export function ContactSection() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // TODO: Podłącz submit do backendu — np. /api/contact (Resend, Formspree,
    // własny endpoint) albo bezpośrednio do Slack/Discord webhook.
    console.log("Form submitted:", data);

    await new Promise((r) => setTimeout(r, 600));

    // Po wysłaniu — przejście na stronę z podziękowaniem (Thank You Page).
    // Nie zerujemy `submitting`: przycisk zostaje zablokowany do nawigacji.
    router.push(THANKYOU.route);
  };

  return (
    <section id="kontakt" className="border-t border-card-border py-20 lg:py-28">
      <div className="container-content">
        <Reveal
          as="h2"
          className="max-w-3xl font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.08] tracking-tight"
        >
          {CONTACT.headingLine1}{" "}
          <span className="underline-accent">{CONTACT.headingLine2}</span>
        </Reveal>

        <Reveal as="p" delay={60} className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-strong">
          {CONTACT.description}
        </Reveal>

        <Reveal delay={80}>
          <div
            role="note"
            className="mt-8 inline-flex items-center gap-3 bg-accent px-5 py-3 font-display font-bold text-accent-foreground"
          >
            <span aria-hidden className="inline-block h-2 w-2 bg-accent-foreground" />
            {CONTACT.urgencyNote}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-panel mt-10 grid gap-10 p-6 lg:mt-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:p-12">
            {/* Lewa: branding + autor + opinia klienta */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-12 mt-6 scale-[1.6]">
                <Logo />
              </div>

              <div className="mb-8 flex items-center gap-4">
                <Image
                  src={CONTACT.ownerPhoto}
                  alt={CONTACT.ownerName}
                  width={84}
                  height={84}
                  className="h-20 w-20 rounded-full object-cover"
                  unoptimized
                />
                <div className="text-left">
                  <div className="text-lg font-bold">{CONTACT.ownerName}</div>
                  <div className="text-sm text-muted">{CONTACT.ownerRole}</div>
                </div>
              </div>

              <blockquote className="space-y-3 text-sm leading-relaxed text-muted-strong">
                {CONTACT.testimonial.quote.map((paragraph, i) => (
                  <p key={i}>
                    {i === 0 && "„"}
                    {paragraph}
                    {i === CONTACT.testimonial.quote.length - 1 && "”"}
                  </p>
                ))}
              </blockquote>

              <div className="mt-5 flex items-center justify-center gap-2 text-sm">
                <span aria-hidden className="inline-block h-px w-4 bg-accent" />
                <span className="font-semibold">{CONTACT.testimonial.author}</span>
                <span className="text-muted">{CONTACT.testimonial.role}</span>
              </div>

              <p className="mt-10 border-t border-card-border pt-10 font-medium leading-relaxed text-foreground">
                {CONTACT.formNote}
              </p>
            </div>

            {/* Prawa: formularz */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Imię i nazwisko" name="name" type="text" required placeholder="Podaj imię i nazwisko" />
              <Field label="Adres e-mail" name="email" type="email" required placeholder="Podaj swój e-mail" />
              <Field label="Numer telefonu" name="phone" type="tel" required placeholder="Podaj swój numer telefonu" />

              <div>
                <label htmlFor="specialization" className="mb-2 block font-medium text-foreground">
                  W czym się specjalizujesz? <span className="text-muted">*</span>
                </label>
                <select
                  id="specialization"
                  name="specialization"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-md border border-card-border-strong bg-card-elevated bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-12 text-foreground transition-colors focus:border-foreground focus:outline-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23555044'><path d='M5.25 7.5l4.75 5 4.75-5z'/></svg>\")",
                  }}
                >
                  <option value="" disabled>
                    Wybierz specjalizację
                  </option>
                  {CONTACT.specializations.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-foreground">
                  Wiadomość <span className="font-normal text-muted">(nie jest wymagane)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Wpisz o co chciałbyś zapytać"
                  className="w-full resize-y rounded-md border border-card-border-strong bg-card-elevated px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-foreground focus:outline-none"
                />
              </div>

              <div className="space-y-3">
                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Wysyłanie..." : CONTACT.submitLabel}
                </Button>
                <p className="text-center text-sm text-muted-strong">{CONTACT.submitNote}</p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-medium text-foreground">
        {label} {required && <span className="text-muted">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-card-border-strong bg-card-elevated px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
