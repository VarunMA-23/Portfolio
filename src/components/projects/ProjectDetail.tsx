import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Project, ProjectContent } from "@/types/content";
import { ProjectDetailNav } from "./ProjectDetailNav";
import { ProjectVisual } from "./ProjectVisual";

type ProjectDetailProps = {
  project: Project;
  content: ProjectContent;
  previous: Project;
  next: Project;
};

export function ProjectDetail({ project, content, previous, next }: ProjectDetailProps) {
  const { detail } = content;

  return (
    <section aria-labelledby="project-heading" className="py-16 lg:py-24">
      <Container>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {detail.backLabel}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-16">
          <div className="motion-safe:animate-fade-up">
            <Pill>{project.category}</Pill>
            <h1
              id="project-heading"
              className="mt-6 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
            >
              {project.title}
            </h1>
            <p className="mt-4 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
              {project.summary}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <p className="inline-flex min-h-12 items-center rounded-full border border-dashed border-border px-5 text-sm font-semibold text-muted">
                {detail.ctaNote}
              </p>
              {project.links?.map((link) => (
                <ButtonLink
                  key={link.href}
                  href={link.href}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SocialIcon name="github" />
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <ProjectVisual project={project} className="h-56 md:h-72" />
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold leading-9 text-ink">
              {detail.overviewTitle}
            </h2>
            <div className="mt-4 space-y-4">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="max-w-prose text-base leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-10 font-serif text-3xl font-bold leading-9 text-ink">
              {detail.highlightsTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-card border border-border bg-surface p-4 text-base leading-7 text-ink"
                >
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <aside aria-labelledby="project-stack-heading" className="space-y-6">
            <div className="rounded-card border border-border bg-surface p-6 shadow-soft">
              <h2 id="project-stack-heading" className="text-base font-semibold text-ink">
                {detail.stackTitle}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid gap-4 rounded-card border border-border bg-surface p-6 shadow-soft">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl font-bold leading-8 text-ink">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <ProjectDetailNav
          previous={previous}
          next={next}
          previousLabel={detail.previousLabel}
          nextLabel={detail.nextLabel}
        />
      </Container>
    </section>
  );
}
