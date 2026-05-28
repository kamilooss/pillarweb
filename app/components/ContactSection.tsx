"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { ParallaxReveal } from "./ParallaxReveal";
import { Button } from "./Button";
import { CONTACT } from "../lib/content";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // TODO: Podłącz submit do backendu — np. /api/contact (Resend, Formspree,
    // własny endpoint) albo bezpośrednio do Slack/Discord webhook.
    console.log("Form submitted:", data);

    // Symulacja delay aby było widać feedback
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="pt-16 lg:pt-24 pb-24 lg:pb-36">
      <div className="container-content">
        <ParallaxReveal as="h2" className="font-display font-bold text-center text-[clamp(1.75rem,3.5vw,3rem)] leading-tight tracking-tight text-balance">
          {CONTACT.headingLine1}{" "}
          <span className="text-accent">{CONTACT.headingLine2}</span>
        </ParallaxReveal>

        <ParallaxReveal as="p" className="text-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed text-lg">
          {CONTACT.description}
        </ParallaxReveal>

        <Reveal delay={0.08}>
          <div
            role="note"
            className="mt-10 max-w-3xl mx-auto flex items-center justify-center gap-3 rounded-xl border border-accent/40 bg-accent/10 px-5 py-3 text-accent font-semibold text-center"
          >
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            {CONTACT.urgencyNote}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 lg:mt-12 max-w-6xl mx-auto rounded-2xl border border-card-border bg-card p-6 lg:p-12 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-10 lg:gap-16">
            {/* Lewa: branding + autor + opinia klienta */}
            <div className="flex flex-col items-center text-center">
              <div className="scale-[1.6] mt-6 mb-12">
                <Logo />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={CONTACT.ownerPhoto}
                  alt={CONTACT.ownerName}
                  width={84}
                  height={84}
                  className="rounded-full w-20 h-20 object-cover"
                  unoptimized
                />
                <div className="text-left">
                  <div className="font-bold text-lg">{CONTACT.ownerName}</div>
                  <div className="text-sm text-muted">{CONTACT.ownerRole}</div>
                </div>
              </div>

              <blockquote className="text-muted-strong leading-relaxed text-sm space-y-3">
                {CONTACT.testimonial.quote.map((paragraph, i) => (
                  <p key={i}>
                    {i === 0 && "„"}
                    {paragraph}
                    {i === CONTACT.testimonial.quote.length - 1 && "”"}
                  </p>
                ))}
              </blockquote>

              <div className="mt-5 text-sm">
                <span className="font-semibold">— {CONTACT.testimonial.author}</span>
                <span className="text-muted"> {CONTACT.testimonial.role}</span>
              </div>

              <p className="mt-10 pt-10 border-t border-card-border text-accent font-medium leading-relaxed">
                {CONTACT.formNote}
              </p>
            </div>

            {/* Prawa: formularz */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Field label="Imię i nazwisko" name="name" type="text" required placeholder="Podaj imię i nazwisko" />
              <Field label="Adres e-mail" name="email" type="email" required placeholder="Podaj swój e-mail" />
              <Field label="Numer telefonu" name="phone" type="tel" required placeholder="Podaj swój numer telefonu" />

              <div>
                <label htmlFor="specialization" className="block text-foreground font-medium mb-2">
                  W czym się specjalizujesz? <span className="text-accent">*</span>
                </label>
                <select
                  id="specialization"
                  name="specialization"
                  required
                  defaultValue=""
                  className="w-full bg-card-elevated border border-card-border rounded-xl px-4 py-3 text-foreground focus:border-accent focus:outline-none transition-colors appearance-none bg-no-repeat bg-[length:1.25rem] bg-[right_1rem_center] pr-12"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23a0a0a0'><path d='M5.25 7.5l4.75 5 4.75-5z'/></svg>\")",
                  }}
                >
                  <option value="" disabled>Wybierz specjalizację</option>
                  {CONTACT.specializations.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Wiadomość <span className="text-muted font-normal">(nie jest wymagane)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Wpisz o co chciałbyś zapytać"
                  className="w-full bg-card-elevated border border-card-border rounded-xl px-4 py-3 text-foreground placeholder:text-subtle focus:border-accent focus:outline-none transition-colors resize-y"
                />
              </div>

              {submitted ? (
                <div className="rounded-xl bg-accent/10 border border-accent/30 px-5 py-4 text-accent">
                  Dziękujemy! Odezwiemy się w ciągu 24 godzin.
                </div>
              ) : (
                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Wysyłanie..." : CONTACT.submitLabel}
                  </Button>
                  <p className="text-center text-accent text-sm">
                    {CONTACT.submitNote}
                  </p>
                </div>
              )}
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
      <label htmlFor={name} className="block text-foreground font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card-elevated border border-card-border rounded-xl px-4 py-3 text-foreground placeholder:text-subtle focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}
