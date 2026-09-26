/**
 * Module: ProductDestination
 * Context: See DESIGN.md §14 — product subdomains with local preview parity.
 * Production links use each canonical subdomain; local previews use internal routes.
 * Exports: ProductDestination
 */
"use client";
import { useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "next-intl";
const subscribe = () => () => {};
const localSnapshot = () => ["localhost", "127.0.0.1"].includes(window.location.hostname);
const serverSnapshot = () => false;
export function ProductDestination({
  href,
  path,
  children,
  className,
}: {
  href: string;
  path: string;
  children: ReactNode;
  className?: string;
}) {
  const local = useSyncExternalStore(subscribe, localSnapshot, serverSnapshot);
  const locale = useLocale();
  const prefix = locale === "en" ? "" : `/${locale}`;
  return (
    <a href={local ? `${prefix}${path}` : `${href}${prefix || "/"}`} className={className}>
      {children}
    </a>
  );
}
