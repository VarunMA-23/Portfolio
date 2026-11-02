import Link from "next/link";
import { ArrowUpRight, ExternalLink, Trophy } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { projectContent } from "@/data/projects";
import type { Project } from "@/types/content";

function HackathonBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-star/15 px-3 py-1 text-xs font-semibold text-ink ring-1 ring-star/30">
      <Trophy className="size-3 shrink-0 text-star" aria-hidden="true" />
      {text}
    </span>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-4 shadow-soft transition-colors focus-within:ring-2 focus-within:ring-ink">
      <ProjectVisual project={project} className="h-44 md:h-48" />

      <div className="mt-5 flex flex-1 flex-col">
        {/* Achievement badge */}
        {project.achievement && (
          <div className="mb-3">
            <HackathonBadge text={project.achievement} />
          </div>
        )}

        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          {project.category}
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold leading-8 text-ink">
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none motion-safe:transition-colors group-hover:text-accent-text"
          >
            {project.title}
          </Link>
        </h3>

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

        {/* Footer row: GitHub link + arrow */}
        <div className="mt-auto flex items-center justify-between pt-5">
          {project.links?.find((l) => l.label === "GitHub") ? (
            <a
              href={project.links.find((l) => l.label === "GitHub")!.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              View on GitHub
            </a>
          ) : (
            <span />
          )}

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

export function FeaturedProjects() {
  const featured = projectContent.projects.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="relative overflow-hidden py-16 lg:py-24"
    >
      {/* Subtle section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden="true" />

      <Container>
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Pill>Hackathon Wins</Pill>
            <h2
              id="featured-projects-heading"
              className="mt-4 font-serif text-4xl font-bold tracking-tight text-ink lg:text-[3.25rem] lg:leading-[3.75rem]"
            >
              Built under pressure,{" "}
              <span className="text-accent-text">recognised nationally.</span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted lg:text-lg lg:leading-8">
              Three competition projects that landed prizes and podium finishes — each solving a
              real problem with a working system, not a slide deck.
            </p>
          </div>

          <ButtonLink
            href="/projects"
            variant="secondary"
            className="shrink-0 self-start sm:self-auto"
          >
            All projects
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </div>

        {/* Cards grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug} className="h-full">
              <FeaturedCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
