import { cn } from "@/lib/cn";
import type { SocialLink } from "@/types/content";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks({ links, className }: { links: SocialLink[]; className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={link.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-accent-soft focus-visible:bg-accent-soft"
          >
            <SocialIcon name={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
