/**
 * Module: ProductLink
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — product pages served on their own subdomains.
 * Keeps local previews navigable (/workout/support) and product-subdomain
 * links clean (workout.ishverse.com/support), preserving the active locale.
 * Exports: ProductLink
 */
"use client";
import { useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "next-intl";
const subscribe = () => () => {};
const getServerSnapshot = () => "";
const getSnapshot = () => window.location.hostname;

export function ProductLink({
  product,
  path = "",
  children,
  className,
}: {
  product: "workout" | "bloom";
  path?: string;
  children: ReactNode;
  className?: string;
}) {
  const locale = useLocale();
  const host = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const onProductHost = host === `${product}.ishverse.com`;
  const prefix = locale === "en" ? "" : `/${locale}`;
  return (
    <a className={className} href={`${prefix}${onProductHost ? "" : `/${product}`}${path}` || "/"}>
      {children}
    </a>
  );
}
