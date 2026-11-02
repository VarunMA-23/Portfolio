import { Brain, Check, Code, Layers, Server } from "lucide-react";
import { cn } from "@/lib/cn";
import type { InternshipTrack, InternshipTrackIcon, ProjectTint } from "@/types/content";

const icons = {
  code: Code,
  layers: Layers,
  brain: Brain,
  server: Server,
} satisfies Record<InternshipTrackIcon, typeof Code>;

const tints = {
  peach: "bg-peach",
  sky: "bg-sky",
  mint: "bg-mint",
  blush: "bg-blush",
} satisfies Record<ProjectTint, string>;

export function InterestCard({ track, index }: { track: InternshipTrack; index: number }) {
  const Icon = icons[track.icon];
  const headingId = `interest-track-${index}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-soft"
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-12 items-center justify-center rounded-full text-accent-text",
          tints[track.tint],
        )}
      >
        <Icon className="size-6" />
      </span>

      <h3 id={headingId} className="mt-4 font-serif text-xl font-bold leading-7 text-ink">
        {track.title}
      </h3>

      <ul className="mt-4 space-y-2">
        {track.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-base leading-7 text-muted">
            <Check aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-accent-text" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
