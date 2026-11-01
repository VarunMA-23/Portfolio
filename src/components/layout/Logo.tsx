import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex min-h-11 items-center font-serif text-2xl font-bold text-ink",
        className,
      )}
    >
      {siteConfig.logo}
      <span className="text-accent-text" aria-hidden="true">
        .
      </span>
    </Link>
  );
}
