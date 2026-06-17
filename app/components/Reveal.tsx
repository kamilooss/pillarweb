import { CSSProperties, ElementType, ReactNode } from "react";

type Tag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "ul"
  | "li"
  | "figure"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span";

type Props = {
  children: ReactNode;
  className?: string;
  /** Opóźnienie w MILISEKUNDACH. */
  delay?: number;
  /** Zachowane dla zgodności wywołań — przesunięcie Y pochodzi z keyframe CSS. */
  y?: number;
  as?: Tag;
  id?: string;
};

/**
 * Fade-up reveal oparty na CZYSTYM CSS (klasa .animate-fade-up, keyframe time-based).
 *
 * Świadomie NIE używa już motion/react `whileInView`: obserwator widoczności
 * bywał zawodny na mobile w połączeniu ze smooth-scrollem (Lenis) — gdy nie
 * odpalił, treść (w tym OBRAZY) zostawała na inline `opacity:0`, dając puste /
 * szare prostokąty. Czysty CSS `animate-fade-up` jest "samonaprawiający":
 * zawsze kończy na opacity:1, a przy prefers-reduced-motion odtwarza się
 * natychmiast. Animacja gra po załadowaniu (z opóźnieniem `delay`), niezależnie
 * od pozycji scrolla — więc obraz pojawia się zawsze, zanim użytkownik do niego
 * dotrze.
 */
export function Reveal({ children, className, delay = 0, as = "div", id }: Props) {
  const Component = as as ElementType;
  const style: CSSProperties | undefined = delay
    ? { animationDelay: `${delay}ms` }
    : undefined;

  return (
    <Component
      id={id}
      className={`animate-fade-up${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Component>
  );
}
