"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { NAV_LINKS, SITE } from "../lib/content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // blokada scrolla gdy mobile menu otwarte
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Główna nawigacja">
          {NAV_LINKS.map((link) => {
            if ("children" in link && link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[15px] text-foreground hover:text-accent transition-colors"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="w-[640px] rounded-xl border border-card-border bg-card-elevated p-2 shadow-2xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-4 py-3 hover:bg-card transition-colors group"
                            >
                              <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {child.label}
                              </div>
                              <div className="mt-1 text-sm text-muted leading-relaxed">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="text-accent"
            >
              <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
            </svg>
            <span className="font-medium">{SITE.phone}</span>
          </a>
          <Button href={SITE.contactAnchor}>{SITE.cta}</Button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-20 z-40 bg-background overflow-y-auto"
          >
            <div className="container-content py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-card-border">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-xl font-semibold"
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <div className="pb-4 pl-4 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-muted hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-6">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-3 text-lg font-semibold"
                >
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" className="text-accent" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
                  </svg>
                  {SITE.phone}
                </a>
                <Button
                  href={SITE.contactAnchor}
                  size="lg"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {SITE.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
