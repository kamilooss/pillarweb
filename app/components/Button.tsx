import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

type Variant = ButtonVariant;
type Size = ButtonSize;

const variants: Record<Variant, string> = {
  primary:
    "cta-pulse bg-accent text-accent-foreground hover:bg-accent-hover active:scale-[0.98]",
  outline:
    "border border-foreground/30 text-foreground bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent active:scale-[0.98]",
  ghost:
    "text-foreground/80 hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
  xl: "px-10 py-5 text-lg",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

/**
 * Klasy guzika bez samego komponentu — dla elementów, które muszą być zwykłym
 * <a> (np. pobranie pliku z atrybutem `download`), a mają wyglądać identycznie.
 */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return `inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-200 ease-out cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
