/**
 * Module: BloomShell
 * Context: See DESIGN.md §13 — product pages share one shell pattern
 * (Workout, Bloom): product mark, nav, language + theme controls, mobile menu,
 * and a footer that links back to the IshVerse parent.
 * Exports: BloomShell
 */
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { companyHref } from "@/lib/site";
import type { ReactNode } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ProductLink } from "@/components/product-link";
import { IshVerseFamilyLink } from "@/components/logo";
import { bloomConfig } from "@/lib/bloom";

export function BloomShell({ children }: { children: ReactNode }) {
  const t = useTranslations("bloom");
  const locale = useLocale();
  return (
    <div className="bloom-site">
      <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-4">
        {t("skip")}
      </a>
      <header className="sticky top-0 z-50 border-b border-divider bg-bg/90 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <ProductLink product="bloom" className="flex min-w-0 items-center gap-2">
            <Image src="/bloom/symbol.svg" alt="" loading="eager" width={32} height={32} />
            <span className="whitespace-nowrap text-sm font-bold tracking-tight sm:text-base">
              Ish<span className="font-light">Bloom</span>
            </span>
          </ProductLink>
          <nav aria-label={t("navigation")} className="hidden items-center gap-4 text-sm md:flex">
            <ProductLink product="bloom" path="/#features">
              {t("features")}
            </ProductLink>
            <ProductLink product="bloom" path="/support">
              {t("support")}
            </ProductLink>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
          <MobileMenu label={t("menu")}>
            <nav aria-label={t("navigation")} className="grid gap-2">
              <ProductLink product="bloom" path="/#features" className="py-3">
                {t("features")}
              </ProductLink>
              <ProductLink product="bloom" path="/support" className="py-3">
                {t("support")}
              </ProductLink>
              <ProductLink product="bloom" path="/privacy" className="py-3">
                {t("privacy")}
              </ProductLink>
              <a href={companyHref(locale, "#products")} className="py-3">
                {t("allProducts")}
              </a>
            </nav>
            <div className="mt-4 flex items-center justify-between border-t border-divider pt-4">
              <LanguageSwitcher placement="menu" />
              <ThemeToggle />
            </div>
          </MobileMenu>
        </div>
      </header>
      {children}
      <footer className="border-t border-divider">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-12 md:flex-row">
          <div>
            <p className="font-semibold">IshBloom</p>
            <div className="mt-3">
              <IshVerseFamilyLink label={t("family")} />
            </div>
          </div>
          <nav
            aria-label={t("footer")}
            className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:flex sm:flex-wrap sm:gap-6 [&>a]:inline-flex [&>a]:min-h-6 [&>a]:items-center"
          >
            <ProductLink product="bloom" path="/support">
              {t("support")}
            </ProductLink>
            <ProductLink product="bloom" path="/privacy">
              {t("privacy")}
            </ProductLink>
            <a href={companyHref(locale)}>IshVerse</a>
            <a className="col-span-2 break-words" href={`mailto:${bloomConfig.support}`}>
              {bloomConfig.support}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
