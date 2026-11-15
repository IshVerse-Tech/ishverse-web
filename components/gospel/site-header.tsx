/**
 * Module: GospelSiteHeader
 * Context: Ported from ishgospel-web — glassmorphism sticky nav, product-level.
 * Localized (Phase 4).
 *
 * Exports:
 *   GospelSiteHeader — server component (switcher + toggle are client islands)
 *
 * Also used on the about, legal and verse pages, so section links go through
 * ProductLink: they keep the locale and open the IshGospel home at the section.
 */

import { MobileMenu } from "../mobile-menu";
import { useLocale, useTranslations } from "next-intl";
import { Smartphone } from "lucide-react";
import { ProductLink } from "../product-link";
import { companyHref } from "@/lib/site";
import { GospelLogo } from "./logo";
import { ThemeToggle } from "../theme-toggle";
import { LanguageSwitcher } from "../language-switcher";
import { gospelConfig } from "@/lib/gospel";

export function GospelSiteHeader() {
  const t = useTranslations("gospel");
  const common = useTranslations("company.nav");
  const locale = useLocale();

  const links = [
    { href: "/#features", label: t("nav.features") },
    { href: "/#pillars", label: t("nav.pillars") },
    { href: "/#pricing", label: t("nav.pricing") },
    { href: "/#waitlist", label: t("footer.linkDownload") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-bg/70 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-bg focus:px-4 focus:py-2 focus:ring-2 focus:ring-accent"
        >
          {common("skip")}
        </a>
        <ProductLink product="gospel" className="inline-flex">
          <span className="sr-only">{gospelConfig.name}</span>
          <GospelLogo />
        </ProductLink>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={common("primary")}>
          {links.map((l) => (
            <ProductLink
              key={l.href}
              product="gospel"
              path={l.href}
              className="text-[13px] text-fg-secondary transition-colors hover:text-fg"
            >
              {l.label}
            </ProductLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <ProductLink
            product="gospel"
            path="/#waitlist"
            className="inline-flex items-center gap-2 rounded-[10px] bg-fg px-4 py-2.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-90"
          >
            <Smartphone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{t("nav.getApp")}</span>
            <span className="sm:hidden">{t("nav.getAppShort")}</span>
          </ProductLink>
        </div>
        <MobileMenu until="lg" label={common("menu")}>
          <nav className="grid gap-2" aria-label={common("menu")}>
            {links.map((link) => (
              <ProductLink key={link.href} product="gospel" path={link.href} className="py-3">
                {link.label}
              </ProductLink>
            ))}
            <a href={companyHref(locale, "#products")} className="py-3">
              {common("explore")}
            </a>
            <a href="mailto:support@ishverse.com" className="break-words py-3">
              support@ishverse.com
            </a>
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-divider pt-4">
            <LanguageSwitcher placement="menu" />
            <ThemeToggle />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}
