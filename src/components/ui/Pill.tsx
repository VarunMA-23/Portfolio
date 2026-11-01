import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
