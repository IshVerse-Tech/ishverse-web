/**
 * Module: Logo
 * Context: docs/design/DESIGN-SYSTEM.md — the founder-selected blue/gold ribbon
 * mark is the primary IshVerse logo. Wordmark: "ISH" bold + "VERSE" light.
 *
 * Exports:
 *   IshVerseMark — the ribbon mark alone (decorative unless `alt` is given)
 *   Logo         — mark + wordmark; size via `className`
 */

import Image from "next/image";
import { useLocale } from "next-intl";
import { companyHref, siteConfig } from "@/lib/site";

export function IshVerseMark({
  size = 28,
  alt = "",
  eager = false,
}: {
  size?: number;
  alt?: string;
  /** Load immediately — for marks in the header, above the fold. */
  eager?: boolean;
}) {
  return (
    <Image
      src="/brand/ishverse-mark.png"
      alt={alt}
      width={size}
      height={size}
      loading={eager ? "eager" : "lazy"}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <IshVerseMark eager />
      <span className="text-[16px] font-bold tracking-[0.2px] text-fg">
        {siteConfig.wordmark.strong}
        <span className="font-normal text-fg-secondary">{siteConfig.wordmark.light}</span>
      </span>
    </span>
  );
}

/** Small "Part of IshVerse" link used in every product footer. */
export function IshVerseFamilyLink({ label }: { label: string }) {
  const locale = useLocale();
  return (
    <a
      href={companyHref(locale)}
      className="inline-flex min-h-6 items-center gap-2 text-sm text-fg-secondary transition-colors hover:text-fg"
    >
      <IshVerseMark size={20} />
      {label}
    </a>
  );
}
