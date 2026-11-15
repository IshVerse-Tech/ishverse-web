/**
 * Module: RizeSiteHeader
 * Context: See ish-rize-docs/ishrize-landing-prompt.md — mirrors
 * GospelSiteHeader: glassmorphism sticky nav, product-level. Localized.
 *
 * Exports:
 *   RizeSiteHeader — server component (switcher + toggle are client islands)
 *
 * Internal links go through ProductLink so they keep the active locale and
 * section links work from every IshRize page, not only the home page.
 */

import { MobileMenu } from "../mobile-menu";
import { useTranslations } from "next-intl";
import { LogIn } from "lucide-react";
import { ProductLink } from "../product-link";
import { RizeLogo } from "./logo";
import { ThemeToggle } from "../theme-toggle";
import { LanguageSwitcher } from "../language-switcher";
import { rizeConfig } from "@/lib/rize";

export function RizeSiteHeader() {
  const t = useTranslations("rize");
  const common = useTranslations("company.nav");

  const links = [
    { href: "/#features", label: t("nav.features") },
    { href: "/#how-it-works", label: t("nav.howItWorks") },
    { href: "/#engine", label: t("nav.engine") },
    { href: "/#audiences", label: t("nav.institutions") },
    { href: "/pricing", label: t("footer.linkPricing") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-bg/70 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <ProductLink product="rize" className="inline-flex">
          <span className="sr-only">{rizeConfig.name}</span>
          <RizeLogo />
        </ProductLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <ProductLink
              key={l.href}
              product="rize"
              path={l.href}
              className="text-[13px] text-fg-secondary transition-colors hover:text-fg"
            >
              {l.label}
            </ProductLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <a
            href={rizeConfig.app.web}
            className="hidden items-center gap-1.5 text-[13px] text-fg-secondary transition-colors hover:text-fg sm:inline-flex"
          >
            <LogIn className="h-3.5 w-3.5" aria-hidden />
            {t("nav.signIn")}
          </a>
          <a
            href={`mailto:${rizeConfig.contact}?subject=IshRize%20Demo`}
            className="inline-flex items-center gap-2 rounded-[10px] bg-fg px-4 py-2.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-90"
          >
            <span className="hidden sm:inline">{t("nav.requestDemo")}</span>
            <span className="sm:hidden">{t("nav.requestDemoShort")}</span>
          </a>
        </div>
        <MobileMenu label={common("menu")}>
          <nav className="grid gap-2" aria-label={common("menu")}>
            {links.map((link) => (
              <ProductLink key={link.href} product="rize" path={link.href} className="py-3">
                {link.label}
              </ProductLink>
            ))}
            <a href="https://ishverse.com/#products" className="py-3">
              {common("explore")}
            </a>
            <a href="mailto:support@ishverse.com" className="break-words py-3">
              support@ishverse.com
            </a>
          </nav>
          <div className="mt-4 flex items-center justify-between border-t border-divider pt-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}
