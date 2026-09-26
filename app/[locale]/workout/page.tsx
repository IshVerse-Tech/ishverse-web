/**
 * Module: WorkoutHome
 * Context: See DESIGN.md §13 — Workout product pages.
 * Localized marketing page, canonical on the Workout subdomain.
 * Exports: WorkoutHome
 */
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { WorkoutLanding } from "@/components/workout/landing";
import { workoutConfig } from "@/lib/workout";
import { routing } from "@/i18n/routing";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "workout" });
  const url = workoutConfig.url + (locale === "en" ? "/" : `/${locale}`);
  return {
    title: `ISH Workout — ${t("title")}`,
    description: t("description"),
    icons: { icon: "/workout/icon.png" },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, workoutConfig.url + (l === "en" ? "/" : `/${l}`)]),
      ),
    },
    openGraph: {
      title: "ISH Workout",
      description: t("description"),
      url,
      siteName: "ISH Workout",
      images: [{ url: `${workoutConfig.url}/workout/icon.png`, width: 1024, height: 1024 }],
    },
    twitter: {
      card: "summary",
      title: "ISH Workout",
      description: t("description"),
      images: [`${workoutConfig.url}/workout/icon.png`],
    },
  };
}
export default async function WorkoutHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WorkoutLanding />;
}
