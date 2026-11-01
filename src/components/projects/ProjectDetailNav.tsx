import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";

type ProjectDetailNavProps = {
  previous: Project;
  next: Project;
  previousLabel: string;
  nextLabel: string;
};

export function ProjectDetailNav({
  previous,
  next,
  previousLabel,
  nextLabel,
}: ProjectDetailNavProps) {
  return (
    <nav aria-label="Project navigation" className="mt-12 border-t border-border pt-8 lg:mt-16">
      <ul className="grid gap-4 sm:grid-cols-2">
        <li>
          <Link
            href={`/projects/${previous.slug}`}
            className="flex h-full items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:bg-accent-soft/60"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-ink"
            >
              <ArrowLeft className="size-5" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                {previousLabel}
              </span>
              <span className="mt-1 text-base font-semibold text-ink">{previous.title}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={`/projects/${next.slug}`}
            className="flex h-full items-center justify-end gap-4 rounded-card border border-border bg-surface p-5 text-right transition-colors hover:bg-accent-soft/60"
          >
            <span className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                {nextLabel}
              </span>
              <span className="mt-1 text-base font-semibold text-ink">{next.title}</span>
            </span>
            <span
              aria-hidden="true"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-ink"
            >
              <ArrowRight className="size-5" />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
