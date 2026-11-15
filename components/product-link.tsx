/**
 * Module: ProductLink
 * Context: See DESIGN.md §13 — product pages served on their own subdomains.
 * Keeps local previews navigable (/workout/support) and product-subdomain
 * links clean (workout.ishverse.com/support), preserving the active locale.
 *
 * `path` is relative to the product home: "/support", or "/#features" for a
 * section on the home page. Section links resolve to exactly the home URL
 * plus the hash ("/pt#features"), so on the home page they only scroll and
 * from any other product page they open home at that section.
 *
 * Exports: ProductLink
 */
"use client";
import { useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "next-intl";
const subscribe = () => () => {};
const getServerSnapshot = () => "";
const getSnapshot = () => window.location.hostname;

export type ProductId = "workout" | "bloom" | "rize";

export function ProductLink({
  product,
  path = "",
  children,
  className,
}: {
  product: ProductId;
  path?: string;
  children: ReactNode;
  className?: string;
}) {
  const locale = useLocale();
  const host = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const onProductHost = host === `${product}.ishverse.com`;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const base = `${prefix}${onProductHost ? "" : `/${product}`}`;
  const home = base || "/";
  const href = path.startsWith("/#") ? `${home}${path.slice(1)}` : path ? `${base}${path}` : home;
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
