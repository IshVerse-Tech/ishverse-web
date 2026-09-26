/**
 * Module: WorkoutLayout
 * Context: See DESIGN.md §13 — Workout product pages.
 * Product shell; pages supply their own metadata.
 * Exports: WorkoutLayout
 */
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { WorkoutShell } from "@/components/workout/shell";
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
