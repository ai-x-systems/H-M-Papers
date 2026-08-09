import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * H&M Papers logo — a circular badge/emblem containing the business name.
 * Because the mark already contains the full "H&M Papers" wordmark, this
 * renders the badge alone, without an adjacent text lockup.
 */
export function Logo({
  className = "",
  size = 44,
  onDark = false,
}: {
  className?: string;
  size?: number;
  onDark?: boolean;
}) {
  const badge = (
    <Image
      src={siteConfig.logo.src}
      alt={siteConfig.logo.alt}
      width={size}
      height={size}
      priority
      className="block rounded-full"
    />
  );

  if (!onDark) {
    return <span className={`inline-flex shrink-0 ${className}`}>{badge}</span>;
  }

  // The badge's background is a light cream, so on the dark footer we set
  // it inside a small light disc to keep its edges clean rather than
  // showing a hard square behind a circular mark.
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-paper p-0.5 ${className}`}
    >
      {badge}
    </span>
  );
}
