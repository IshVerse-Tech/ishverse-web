/**
 * Module: WorkoutShell
 * Context: See DESIGN.md §13 — Workout product pages.
 * Shared product navigation, theme controls, and support links.
 * Exports: WorkoutShell
 */
import { MobileMenu } from "@/components/mobile-menu";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ProductLink } from "./product-link";
import { workoutConfig } from "@/lib/workout";
export function WorkoutShell({ children }: { children: ReactNode }) {
  const t = useTranslations("workout");
  return (
    <div className="workout-site">
      <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-4">
        {t("skip")}
      </a>
      <header className="sticky top-0 z-50 border-b border-divider bg-bg/90 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <ProductLink className="flex min-w-0 items-center gap-2">
            <Image src="/workout/icon.png" alt="" width={32} height={32} className="rounded-xl" />
            <span className="whitespace-nowrap text-sm font-bold tracking-tight sm:text-base">
              ISH <span className="font-light">WORKOUT</span>
            </span>
          </ProductLink>
          <nav aria-label={t("navigation")} className="hidden items-center gap-4 text-sm md:flex">
            <ProductLink path="/#features" className="hidden md:block">
              {t("features")}
            </ProductLink>
            <ProductLink path="/support">{t("support")}</ProductLink>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
          <MobileMenu label={t("menu")}>
            <nav aria-label={t("navigation")} className="grid gap-2">
              <ProductLink path="/#features" className="py-3">
                {t("features")}
              </ProductLink>
              <ProductLink path="/support" className="py-3">
                {t("support")}
              </ProductLink>
              <ProductLink path="/privacy" className="py-3">
                {t("privacy")}
              </ProductLink>
              <a href="https://ishverse.com/#products" className="py-3">
                {t("allProducts")}
              </a>
            </nav>
            <div className="mt-4 flex items-center justify-between border-t border-divider pt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </MobileMenu>
        </div>
      </header>
      {children}
      <footer className="border-t border-divider">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-12 md:flex-row">
          <div>
            <p className="font-semibold">ISH Workout</p>
            <p className="mt-2 text-sm text-fg-secondary">{t("family")}</p>
          </div>
          <nav
            aria-label={t("footer")}
            className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:flex sm:flex-wrap sm:gap-6"
          >
            <ProductLink path="/support">{t("support")}</ProductLink>
            <ProductLink path="/privacy">{t("privacy")}</ProductLink>
            <a href="https://ishverse.com">IshVerse</a>
            <a className="col-span-2 break-words" href={`mailto:${workoutConfig.support}`}>
              {workoutConfig.support}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
