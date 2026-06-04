"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

const SERVICES: ServiceItem[] = [
  {
    title: "Strona, która wygląda lepiej niż 99% Twojej konkurencji",
    description:
      "Tworzymy dopracowane strony, które budują marki premium i wyróżniają firmy na tle ich konkurencji.",
    image: "/images/services/strona-lepsza-niz-konkurencja.webp",
  },
  {
    title: "Klienci z Twojego miasta sami znajdą Cię w Google",
    description:
      "Strona zoptymalizowana pod frazy, które wpisują Twoi klienci — żebyś był widoczny wtedy, gdy ktoś szuka wykonawcy w Twojej okolicy.",
    image: "/images/services/klienci-znajda-w-google.webp",
  },
  {
    title: "Kompleksowe wdrożenie bez Twojego udziału",
    description:
      "Copywriting, analityka, struktura dopracowana pod konwersje i pełne wdrożenie w jednym procesie. Jeden zespół, zero chaosu z koordynowaniem różnych dostawców.",
    image: "/images/services/kompleksowe-wdrozenie.webp",
  },
  {
    title: "Innowacyjne technologie AI",
    description:
      "Chatbot AI, który sprzedaje za Ciebie 24/7. Automatyczne odpowiedzi na pytania klientów, umawianie wycen i zbieranie leadów — działa nieważne gdzie jesteś.",
    image: "/images/services/innowacyjne-ai.webp",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesAccordion() {
  const [active, setActive] = useState(0);
  const activeItem = SERVICES[active];

  return (
    <section
      className="relative border-t border-card-border bg-background py-20 lg:py-28"
      aria-label="Co dostajesz w ramach współpracy"
    >
      <div className="container-content">
        <Reveal
          as="h2"
          className="mb-12 max-w-3xl font-display text-[clamp(1.9rem,3.7vw,3rem)] font-extrabold leading-[1.08] tracking-tight lg:mb-16"
        >
          Co dostajesz w ramach <span className="underline-accent">współpracy</span>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-24">
          {/* LEFT — accordion */}
          <ul className="order-2 lg:order-1">
            {SERVICES.map((item, i) => {
              const isActive = i === active;
              const panelId = `service-panel-${i}`;
              return (
                <li key={item.title} className="border-b border-card-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="group flex w-full cursor-pointer items-start gap-4 py-8 text-left lg:gap-6 lg:py-10"
                  >
                    <span
                      className={`mt-1 flex-shrink-0 px-1.5 py-0.5 font-display text-sm font-bold tnum transition-colors duration-300 lg:mt-1.5 ${
                        isActive ? "bg-accent text-accent-foreground" : "text-subtle"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-display text-[clamp(1.2rem,2.25vw,1.85rem)] font-bold leading-[1.2] tracking-tight transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-foreground/55 group-hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative mt-2 h-6 w-6 flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:mt-3 ${
                        isActive ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <span
                        className={`absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 transition-colors duration-300 ${
                          isActive ? "bg-foreground" : "bg-foreground/40 group-hover:bg-foreground"
                        }`}
                      />
                      <span
                        className={`absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 transition-colors duration-300 ${
                          isActive ? "bg-foreground" : "bg-foreground/40 group-hover:bg-foreground"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={panelId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="border-l-2 border-accent pb-9 pl-6 pr-6 lg:pb-12 lg:pr-10">
                          <p className="max-w-prose text-[15px] leading-[1.7] text-muted-strong lg:text-[17px]">
                            {item.description}
                          </p>

                          {/* Mobile-only graphic inside the open panel */}
                          <div className="mt-6 lg:hidden">
                            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden border border-card-border bg-ink-block">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 0px, 90vw"
                                className="object-contain p-6"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* RIGHT — synced graphic (desktop only) */}
          <div className="order-1 hidden lg:order-2 lg:block">
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden border border-card-border bg-ink-block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.image}
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -6 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="absolute inset-0 p-10"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={activeItem.image}
                        alt={activeItem.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
