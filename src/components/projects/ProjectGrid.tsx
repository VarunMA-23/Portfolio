import type { Project } from "@/types/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug} className="h-full">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
