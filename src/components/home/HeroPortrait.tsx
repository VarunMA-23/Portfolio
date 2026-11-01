import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import type { HeroContent as HeroContentData } from "@/types/content";

function StatBadge({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        "absolute hidden flex-col rounded-card border border-border bg-surface px-4 py-3 shadow-soft md:flex",
        className,
      )}
    >
      <span className="font-serif text-2xl font-bold text-ink">{value}</span>
      <span className="text-xs font-medium text-muted">{label}</span>
    </div>
  );
}

export function HeroPortrait({ content }: { content: HeroContentData }) {
  const [clients, experience] = content.stats;

  return (
    <div className="relative mx-auto w-full max-w-md motion-safe:animate-fade-up motion-safe:[animation-delay:150ms] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -top-6 right-4 hidden size-28 rounded-full bg-accent/40 blur-2xl md:block"
      />
      <div aria-hidden="true" className="shape-blob absolute inset-x-8 bottom-0 top-10 bg-peach" />

      <span
        aria-hidden="true"
        className="absolute -left-2 top-8 hidden -rotate-6 font-script text-2xl text-accent-text lg:block"
      >
        {content.scriptAccent}
      </span>

      <Sparkles
        aria-hidden="true"
        className="absolute -right-2 top-0 hidden size-8 text-star md:block"
      />

      <Image
        src={content.portrait.src}
        alt={content.portrait.alt}
        width={content.portrait.width}
        height={content.portrait.height}
        priority
        unoptimized
        sizes="(min-width: 1024px) 480px, 80vw"
        className="shape-blob relative mx-auto h-auto w-full max-w-sm object-cover lg:max-w-md"
      />

      <StatBadge
        value={clients?.value ?? ""}
        label={clients?.label ?? ""}
        className="right-0 top-6"
      />
      <StatBadge
        value={experience?.value ?? ""}
        label={experience?.label ?? ""}
        className="-left-4 bottom-6"
      />
    </div>
  );
}
