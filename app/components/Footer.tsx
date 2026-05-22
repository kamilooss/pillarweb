import Link from "next/link";
import { FOOTER } from "../lib/content";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-10 mt-16">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center gap-6">
          {FOOTER.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-accent transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-muted text-sm">{FOOTER.copyright}</div>
      </div>
    </footer>
  );
}
