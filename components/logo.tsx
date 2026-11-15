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
import { siteConfig } from "@/lib/site";

export function IshVerseMark({ size = 28, alt = "" }: { size?: number; alt?: string }) {
  return (
    <Image
      src="/brand/ishverse-mark.png"
      alt={alt}
      width={size}
      height={size}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <IshVerseMark />
      <span className="text-[16px] font-bold tracking-[0.2px] text-fg">
        {siteConfig.wordmark.strong}
        <span className="font-normal text-fg-secondary">{siteConfig.wordmark.light}</span>
      </span>
    </span>
  );
}

/** Small "Part of IshVerse" link used in every product footer. */
export function IshVerseFamilyLink({ label }: { label: string }) {
  return (
    <a
      href={siteConfig.url}
      className="inline-flex items-center gap-2 text-sm text-fg-secondary transition-colors hover:text-fg"
    >
      <IshVerseMark size={20} />
      {label}
    </a>
  );
}
