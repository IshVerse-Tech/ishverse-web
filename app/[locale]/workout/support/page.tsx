/**
 * Module: WorkoutSupport
 * Context: See DESIGN.md §13 — Workout product pages.
 * Localized help and contact details; no support form collects health data.
 * Exports: WorkoutSupport
 */
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { workoutConfig } from "@/lib/workout";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "workout" });
  return {
    title: `ISH Workout — ${t("support")}`,
    description: t("supportIntro"),
    alternates: {
      canonical: `${workoutConfig.url}${locale === "en" ? "" : `/${locale}`}/support`,
      languages: {},
    },
  };
}
export default async function WorkoutSupport({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("workout");
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-accent-text">ISH Workout</p>
      <h1 className="mt-4 text-4xl font-bold">{t("supportTitle")}</h1>
      <p className="mt-6 text-lg text-fg-secondary">{t("supportIntro")}</p>
      <a
        href={`mailto:${workoutConfig.support}?subject=ISH%20Workout%20support`}
        className="mt-8 inline-block rounded-xl bg-accent px-6 py-4 text-accent-on"
      >
        {t("emailAction")}
      </a>
      <p className="mt-4 text-sm">{workoutConfig.support}</p>
      <p className="mt-6 leading-relaxed text-fg-secondary">{t("include")}</p>
      <div className="mt-12 space-y-8">
        {[0, 1, 2].map((i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold">{t(`help.${i}.title`)}</h2>
            <p className="mt-3 leading-relaxed text-fg-secondary">{t(`help.${i}.body`)}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
