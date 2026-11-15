/**
 * Module: WorkoutLayout
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — Workout product pages.
 * Product shell; pages supply their own metadata.
 * Exports: WorkoutLayout
 */
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { WorkoutShell } from "@/components/workout/shell";
// Product favicon for every Workout page (support/privacy included).
export const metadata: Metadata = {
  icons: { icon: "/workout/icon.png", apple: "/workout/icon.png" },
};

export default async function WorkoutLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WorkoutShell>{children}</WorkoutShell>;
}
