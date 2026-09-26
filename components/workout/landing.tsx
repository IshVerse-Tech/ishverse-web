/**
 * Module: WorkoutLanding
 * Context: See DESIGN.md §13 — Workout product pages.
 * Real native app screens alongside localized, feature-accurate copy.
 * Exports: WorkoutLanding
 */
import { WorkoutScreen } from "./screen";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Footprints,
  Droplets,
  Dumbbell,
  Scale,
  ListChecks,
  Utensils,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { workoutConfig } from "@/lib/workout";
import { ProductLink } from "./product-link";
const icons = [Footprints, Dumbbell, Scale, Droplets, Utensils, ListChecks];
export function WorkoutLanding() {
  const t = useTranslations("workout");
  return (
    <main id="main">
      <section className="overflow-hidden border-b border-divider">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:gap-16 sm:px-6 sm:py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-text">
              {t("family")}
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-prose text-base sm:text-lg leading-relaxed text-fg-secondary">
              {t("description")}
            </p>
            <a
              href={workoutConfig.appStore}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-4 font-medium text-accent-on transition-colors hover:bg-accent-dark"
            >
              {t("appStore")}
              <ArrowUpRight size={18} aria-hidden />
            </a>
            <p className="mt-4 text-sm text-fg-secondary">{t("availability")}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-fg-secondary">
              {["trust1", "trust2", "trust3"].map((k) => (
                <span key={k} className="rounded-full border border-divider px-3 py-2">
                  {t(k)}
                </span>
              ))}
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm">
            <WorkoutScreen src="/workout/dashboard.png" alt={t("screenAlt")} priority />
            <figcaption className="mt-6 text-center text-xs text-fg-secondary">
              {t("screenCaption")}
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-text">
            {t("features")}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl tracking-tight md:text-5xl">
            {t("featuresTitle")}
          </h2>
          <p className="mt-4 max-w-prose leading-relaxed text-fg-secondary">{t("nativeNote")}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {icons.map((Icon, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className="h-full rounded-2xl border border-divider bg-surface p-5 sm:p-8">
                <Icon className="text-accent" size={24} aria-hidden />
                <h3 className="mt-6 text-xl font-semibold">{t(`cards.${i}.title`)}</h3>
                <p className="mt-3 leading-relaxed text-fg">{t(`cards.${i}.body`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-divider bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div className="mx-auto grid w-full max-w-lg grid-cols-1 items-start gap-8 min-[400px]:grid-cols-2 sm:gap-6">
            <WorkoutScreen src="/workout/run.png" alt={t("runAlt")} compact />
            <WorkoutScreen src="/workout/weight.png" alt={t("weightAlt")} compact />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-text">
              {t("routineLabel")}
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl tracking-tight">
              {t("routineTitle")}
            </h2>
            <ol className="mt-8 space-y-8">
              {[0, 1, 2].map((i) => (
                <li className="flex gap-5" key={i}>
                  <span className="text-sm font-semibold text-gold-text">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold">{t(`steps.${i}.title`)}</h3>
                    <p className="mt-2 leading-relaxed text-fg">{t(`steps.${i}.body`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-24 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">{t("privacyTitle")}</h2>
          <p className="mt-5 leading-relaxed text-fg-secondary">{t("privacyBody")}</p>
          <ProductLink
            path="/privacy"
            className="mt-6 inline-block text-accent-text underline underline-offset-4"
          >
            {t("privacy")}
          </ProductLink>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{t("faqTitle")}</h2>
          {[0, 1, 2].map((i) => (
            <details key={i} className="border-b border-divider py-5">
              <summary className="cursor-pointer font-medium">{t(`faq.${i}.q`)}</summary>
              <p className="mt-3 leading-relaxed text-fg">{t(`faq.${i}.a`)}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="border-t border-divider bg-surface px-4 py-14 sm:px-6 sm:py-24 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">{t("ctaTitle")}</h2>
        <p className="mx-auto mt-4 max-w-prose text-fg">{t("ctaBody")}</p>
        <a
          href={workoutConfig.appStore}
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-accent px-6 py-4 font-medium text-accent-on hover:bg-accent-dark"
        >
          {t("appStore")}
          <ArrowUpRight size={18} aria-hidden />
        </a>
      </section>
    </main>
  );
}
