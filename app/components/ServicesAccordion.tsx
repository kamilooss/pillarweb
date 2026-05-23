"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

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
    image: "/images/services/strona-lepsza-niz-konkurencja.svg",
  },
  {
    title: "Klienci z Twojego miasta sami znajdą Cię w Google",
    description:
      "Strona zoptymalizowana pod frazy, które wpisują Twoi klienci — żebyś był widoczny wtedy, gdy ktoś szuka wykonawcy w Twojej okolicy.",
    image: "/images/services/klienci-znajda-w-google.svg",
  },
  {
    title: "Kompleksowe wdrożenie bez Twojego udziału",
    description:
      "Copywriting, analityka, struktura dopracowana pod konwersje i pełne wdrożenie w jednym procesie. Jeden zespół, zero chaosu z koordynowaniem różnych dostawców.",
    image: "/images/services/kompleksowe-wdrozenie.svg",
  },
  {
    title: "Innowacyjne technologie AI",
    description:
      "Chatbot AI, który sprzedaje za Ciebie 24/7. Automatyczne odpowiedzi na pytania klientów, umawianie wycen i zbieranie leadów — działa nieważne gdzie jesteś.",
    image: "/images/services/innowacyjne-ai.svg",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesAccordion() {
  const [active, setActive] = useState(0);
  const activeItem = SERVICES[active];

  return (
    <section
      className="relative bg-background pt-16 lg:pt-24 pb-[clamp(5.75rem,10vw,10rem)]"
      aria-label="Co dostajesz w ramach współpracy"
    >
      <div className="container-content">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-24 items-start">
          {/* LEFT — accordion */}
          <ul className="lg:order-1 order-2">
            {SERVICES.map((item, i) => {
              const isActive = i === active;
              const panelId = `service-panel-${i}`;
              return (
                <li
                  key={item.title}
                  className="border-b border-card-border last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="group w-full text-left py-8 lg:py-10 flex items-start gap-5 lg:gap-6 cursor-pointer"
                  >
                    <span
                      className={`flex-1 font-display font-bold leading-[1.2] tracking-tight text-[clamp(1.2rem,2.25vw,1.85rem)] transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-foreground/75 group-hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-2 lg:mt-3 flex-shrink-0 relative w-6 h-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <span
                        className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full transition-colors duration-300 ${
                          isActive ? "bg-accent" : "bg-foreground/55 group-hover:bg-foreground"
                        }`}
                      />
                      <span
                        className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full transition-colors duration-300 ${
                          isActive ? "bg-accent" : "bg-foreground/55 group-hover:bg-foreground"
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
                        <div className="pb-9 lg:pb-12 pr-6 lg:pr-10">
                          <p className="text-muted-strong text-[15px] lg:text-[17px] leading-[1.7] max-w-prose">
                            {item.description}
                          </p>

                          {/* Mobile-only graphic inside the open panel */}
                          <div className="mt-6 lg:hidden">
                            <div className="relative w-full max-w-[420px] aspect-square">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 0px, 90vw"
                                className="object-contain"
                                unoptimized
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
          <div className="hidden lg:block lg:order-2 order-1">
            <div className="lg:sticky lg:top-28">
              <div className="relative w-full aspect-square max-w-[560px] mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.image}
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -6 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                      unoptimized
                      priority
                    />
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
