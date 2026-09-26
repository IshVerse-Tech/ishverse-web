/**
 * Module: ProductLink
 * Context: See DESIGN.md §13 — Workout product pages.
 * Keeps local previews navigable and product-subdomain links clean.
 * Exports: ProductLink
 */
"use client";
import { useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "next-intl";
const subscribe = () => () => {};
const getSnapshot = () => window.location.hostname === "workout.ishverse.com";
const getServerSnapshot = () => false;

export function ProductLink({
  path = "",
  children,
  className,
}: {
  path?: string;
  children: ReactNode;
  className?: string;
}) {
  const locale = useLocale();
  const productHost = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const prefix = locale === "en" ? "" : `/${locale}`;
  return (
    <a className={className} href={`${prefix}${productHost ? "" : "/workout"}${path}` || "/"}>
      {children}
    </a>
  );
}
