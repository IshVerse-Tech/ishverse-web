/**
 * Module: Reveal
 * Context: See DESIGN.md §6 — the one shared scroll-reveal, no per-section
 * one-offs.
 *
 * Wraps children in the standard entrance: opacity 0→1 + translateY 16px→0,
 * 500ms, cubic-bezier(0.16,1,0.3,1). `delay` staggers siblings (60ms steps).
 * prefers-reduced-motion is handled entirely in CSS (`motion-reduce:`
 * variants force the element visible with no transition) — a static
 * fallback, not a slower animation.
 *
 * The scroll variant is visible in the server HTML. It only starts hidden
 * (`reveal-pending`, styled in globals.css) once the inline `js` class is on
 * <html>, and a CSS failsafe shows it anyway if hydration is slow or the
 * bundle never loads — so slow connections never see blank sections.
 *
 * `immediate` is for content that is already in the viewport on load (the
 * hero). The scroll variant server-renders at opacity-0 and only becomes
 * visible once the bundle has downloaded, hydrated and the observer has
 * fired — which makes an above-the-fold heading an LCP candidate gated on
 * JavaScript. `immediate` instead paints at full opacity and animates
 * transform only, via CSS, so first paint is complete and LCP is unaffected.
 * Use it for anything above the fold; use the default everywhere else.
 *
 * Exports:
 *   Reveal — client wrapper div
 */

"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Must not exceed the CSS failsafe delay in globals.css (`reveal-failsafe`,
 * 3.5s): if the app hydrates later than this, the failsafe has (or is about
 * to have) shown pending content, so every Reveal simply starts shown.
 */
const FAILSAFE_MS = 3500;
let hydratedLate: boolean | null = null;

export function Reveal({
  children,
  delay = 0,
  className = "",
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Decide once, before paint, whether the page hydrated in time to run the
  // scroll animation. Early: tell the CSS to drop its failsafe. Late: show.
  useLayoutEffect(() => {
    if (immediate) return;
    if (hydratedLate === null) {
      hydratedLate = performance.now() > FAILSAFE_MS;
      if (!hydratedLate) document.documentElement.classList.add("reveal-ready");
    }
    // Before paint on purpose: the CSS failsafe may already have shown this
    // content, so switching to `shown` here avoids it flashing hidden again.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hydratedLate) setShown(true);
  }, [immediate]);

  useEffect(() => {
    if (immediate || hydratedLate) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  // Painted opaque from the server; only the transform animates, so this
  // never delays the first contentful paint of whatever it wraps.
  if (immediate) {
    return (
      <div
        style={{ animationDelay: `${delay}ms` }}
        className={`animate-[reveal-rise_500ms_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "reveal-pending"
      } ${className}`}
    >
      {children}
    </div>
  );
}
