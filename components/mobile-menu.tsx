/**
 * Module: MobileMenu
 * Context: See DESIGN.md §14 — compact mobile navigation.
 * A labeled disclosure with Escape, outside-click, and link-close behavior.
 * Exports: MobileMenu
 */
"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
// Literal class names so Tailwind generates both variants.
const HIDE_FROM = { md: "md:hidden", lg: "lg:hidden" } as const;

export function MobileMenu({
  label,
  children,
  until = "md",
}: {
  label: string;
  children: ReactNode;
  /** Breakpoint from which the full header replaces this menu (default md, 768px). */
  until?: keyof typeof HIDE_FROM;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <div ref={root} className={HIDE_FROM[until]}>
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-navigation"
        onClick={() => setOpen(!open)}
        className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-divider px-3 text-sm font-medium"
      >
        {label}
        {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
      </button>
      {open && (
        <div
          id="mobile-site-navigation"
          className="absolute inset-x-0 top-full max-h-[75svh] overflow-y-auto border-b border-divider bg-bg px-5 py-6 shadow-xl"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
