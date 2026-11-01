"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Project, ProjectCategory } from "@/types/content";
import { ProjectGrid } from "./ProjectGrid";

type FilterValue = "All" | ProjectCategory;

function buildFilters(projects: Project[]): FilterValue[] {
  const categories = Array.from(new Set(projects.map((project) => project.category)));
  return ["All", ...categories];
}

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const filters = buildFilters(projects);
  const [active, setActive] = useState<FilterValue>("All");

  const visible =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors",
                active === filter
                  ? "border-ink bg-ink text-surface"
                  : "border-border bg-surface text-ink hover:bg-accent-soft/60",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="text-sm font-medium text-muted">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>

      <div className="mt-8">
        <ProjectGrid projects={visible} />
      </div>
    </div>
  );
}
