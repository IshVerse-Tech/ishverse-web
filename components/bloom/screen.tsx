/**
 * Module: BloomScreen
 * Context: See docs/design/DESIGN-SYSTEM.md (Product pages) — fitted device frames.
 * iPhone screens use the shared product frame (2.4rem outer / 1.9rem inner
 * radius, 8px padding, matching Workout and Gospel). The iPad variant keeps
 * the same 8px padding with tablet radii. Original aspect ratios are
 * preserved; nothing is cropped and there is no detached background box.
 * Exports: BloomScreen
 */
import Image from "next/image";

const frames = {
  // Hero: a single 256–288px screenshot.
  hero: {
    frame: "max-w-64 rounded-[2.4rem] sm:max-w-72",
    image: "rounded-[1.9rem]",
    width: 1206,
    height: 2622,
    sizes: "(max-width: 640px) 240px, 272px",
  },
  // Paired screens: equal columns capped at 240px, stacked below 400px.
  compact: {
    frame: "max-w-60 rounded-[2.4rem]",
    image: "rounded-[1.9rem]",
    width: 1206,
    height: 2622,
    sizes: "(max-width: 399px) 224px, (max-width: 640px) calc((100vw - 80px) / 2), 224px",
  },
  // iPad Pro 13-inch App Store screenshots (3:4).
  tablet: {
    frame: "max-w-md rounded-[1.75rem]",
    image: "rounded-[1.25rem]",
    width: 1548,
    height: 2064,
    sizes: "(max-width: 480px) calc(100vw - 48px), 432px",
  },
} as const;

export function BloomScreen({
  src,
  alt,
  variant = "hero",
  priority = false,
}: {
  src: string;
  alt: string;
  variant?: keyof typeof frames;
  priority?: boolean;
}) {
  const f = frames[variant];
  return (
    <div
      className={`mx-auto w-full min-w-0 border border-divider bg-surface p-2 shadow-xl ${f.frame}`}
    >
      <Image
        src={src}
        alt={alt}
        width={f.width}
        height={f.height}
        priority={priority}
        sizes={f.sizes}
        className={`block h-auto w-full ${f.image}`}
      />
    </div>
  );
}
