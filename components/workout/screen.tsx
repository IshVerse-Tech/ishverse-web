/**
 * Module: WorkoutScreen
 * Context: See DESIGN.md §13 — consistent native screenshot presentation.
 * Keeps the full screenshot at its original aspect ratio inside a fitted frame.
 * Exports: WorkoutScreen
 */
import Image from "next/image";
export function WorkoutScreen({
  src,
  alt,
  priority = false,
  compact = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full min-w-0 rounded-[2.4rem] border border-divider bg-surface p-2 shadow-xl ${compact ? "max-w-60" : "max-w-64 sm:max-w-72"}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        priority={priority}
        sizes={
          compact
            ? "(max-width: 640px) calc((100vw - 80px) / 2), 224px"
            : "(max-width: 640px) 240px, 272px"
        }
        className="block h-auto w-full rounded-[1.9rem]"
      />
    </div>
  );
}
