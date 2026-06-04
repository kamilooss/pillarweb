import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER, SITE } from "../lib/content";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-card-border">
      {/* Architektoniczny akcent — pojedyncza linia marki u góry */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-24 bg-accent"
      />
      <div className="container-content py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
          <div>
            <Logo />
          </div>

          <div>
            <div className="arch-tick mb-5">Kontakt</div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block font-display font-bold text-2xl tracking-tight hover:text-foreground transition-colors"
            >
              {SITE.phone}
            </a>
            <Link
              href={SITE.contactAnchor}
              className="mt-4 inline-block text-muted hover:text-foreground transition-colors text-sm"
            >
              {SITE.cta}
            </Link>
          </div>

          <div>
            <div className="arch-tick mb-5">Informacje</div>
            <ul className="space-y-3">
              {FOOTER.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>{FOOTER.copyright}</span>
          <span className="font-semibold tracking-tight text-muted-strong">
            {SITE.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
