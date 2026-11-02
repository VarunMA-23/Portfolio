import { ArrowUpRight, Mail } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { ContactChannel } from "@/types/content";

export function ContactCard({ channel }: { channel: ContactChannel }) {
  return (
    <a
      href={channel.href}
      {...(channel.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group flex h-full flex-col rounded-panel border border-border bg-surface p-6 shadow-soft transition-colors hover:border-accent-text focus-visible:border-accent-text md:p-8"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent-text">
        {channel.icon === "mail" ? (
          <Mail aria-hidden="true" className="size-6" />
        ) : (
          <SocialIcon name="linkedin" className="size-6" />
        )}
      </span>
      <span className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        {channel.label}
      </span>
      <span className="mt-2 break-words font-serif text-2xl font-bold text-ink">
        {channel.value}
      </span>
      <span className="mt-3 text-base leading-7 text-muted">{channel.description}</span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-text">
        {channel.cta}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
        />
        {channel.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </span>
    </a>
  );
}
