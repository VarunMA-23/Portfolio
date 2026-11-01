import { Brain, HeartPulse, Network, ScanLine, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project, ProjectIconName, ProjectTint } from "@/types/content";

const icons = {
  brain: Brain,
  shield: ShieldCheck,
  network: Network,
  scan: ScanLine,
  heart: HeartPulse,
} satisfies Record<ProjectIconName, typeof Brain>;

const tints = {
  peach: "bg-peach",
  sky: "bg-sky",
  mint: "bg-mint",
  blush: "bg-blush",
} satisfies Record<ProjectTint, string>;

export function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const Icon = icons[project.icon];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-image",
        tints[project.tint],
        className,
      )}
    >
      <span className="absolute -right-6 -top-6 size-28 rounded-full bg-surface/40" />
      <span className="absolute -bottom-8 -left-4 size-24 rounded-full bg-surface/30" />
      <span className="relative inline-flex size-20 items-center justify-center rounded-full bg-surface/85 text-accent-text shadow-soft">
        <Icon className="size-9" />
      </span>
    </div>
  );
}
