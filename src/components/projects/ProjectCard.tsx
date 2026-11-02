import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import type { Project } from "@/types/content";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-4 shadow-soft transition-colors focus-within:ring-2 focus-within:ring-ink">
      <ProjectVisual project={project} className="h-44 md:h-48" />

      <div className="mt-5 flex flex-1 flex-col">
        {/* Achievement badge — shown on hackathon projects */}
        {project.achievement && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-star/15 px-3 py-1 text-xs font-semibold text-ink ring-1 ring-star/30">
              <Trophy className="size-3 shrink-0 text-star" aria-hidden="true" />
              {project.achievement}
            </span>
          </div>
        )}

        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          {project.category}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold leading-8 text-ink">
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none motion-safe:transition-colors group-hover:text-accent-text"
          >
            {project.title}
          </Link>
        </h2>
        <p className="mt-2 text-base leading-7 text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-end pt-5">
          <span
            aria-hidden="true"
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-surface motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </div>
    </article>
  );
}
