"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function useRevealInView<T extends HTMLElement>({
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -6% 0px",
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setRevealed(true);
      return;
    }

    const node = ref.current;

    if (!node || (once && revealed)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setRevealed(true);

        if (once) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, revealed, rootMargin, threshold]);

  return { ref, revealed };
}

type ViewportRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ViewportReveal({
  children,
  className = "reveal-item",
  delay = 0,
}: ViewportRevealProps) {
  const { ref, revealed } = useRevealInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={revealed ? "visible" : "hidden"}
      className={`reveal-base ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
