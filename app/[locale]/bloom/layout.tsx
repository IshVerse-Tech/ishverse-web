/**
 * Module: BloomLayout
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — product pages share one shell (see Workout).
 * Localized product shell with theme + language controls and the IshBloom
 * favicon for every Bloom route; pages supply their own metadata.
 * Exports: metadata, BloomLayout
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import { BloomShell } from "@/components/bloom/shell";

export const metadata: Metadata = {
  icons: { icon: "/bloom/symbol.svg", apple: "/bloom/apple-icon.png" },
};

export default async function BloomLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BloomShell>{children}</BloomShell>;
}
