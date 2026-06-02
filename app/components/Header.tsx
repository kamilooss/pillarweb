"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { NAV_LINKS, SITE } from "../lib/content";

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .8l.6 3a1 1 0 01-.3 1L5.5 8.2a12 12 0 005.3 5.3l1.4-1.3a1 1 0 011-.3l3 .6a1 1 0 01.8 1V16a1 1 0 01-1 1A14 14 0 012 4z" />
  </svg>
);

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
          ? "border-b border-card-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between gap-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Główna nawigacja">
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
                    className="flex items-center gap-1 px-4 py-2 text-[15px] text-muted-strong transition-colors hover:text-foreground"
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
                        <div className="w-[640px] border border-card-border bg-card-elevated p-2 shadow-[0_30px_60px_-30px_rgba(21,22,14,0.4)]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block px-4 py-3 transition-colors hover:bg-card"
                            >
                              <div className="flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-2 w-2 bg-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                                {child.label}
                              </div>
                              <div className="mt-1 text-sm leading-relaxed text-muted">
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
                className="px-4 py-2 text-[15px] text-muted-strong transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="group flex items-center gap-2.5 text-foreground transition-colors"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/25 transition-colors group-hover:border-foreground group-hover:bg-accent">
              <PhoneIcon />
            </span>
            <span className="font-medium tnum">{SITE.phone}</span>
          </a>
          <Button href={SITE.contactAnchor} className="ml-2">
            {SITE.cta}
          </Button>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
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
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-background lg:hidden"
          >
            <div className="container-content flex flex-col gap-1 py-8">
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
                    <div className="flex flex-col gap-2 pb-4 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-muted transition-colors hover:text-foreground"
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/25">
                    <PhoneIcon className="h-[22px] w-[22px]" />
                  </span>
                  <span className="tnum">{SITE.phone}</span>
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
