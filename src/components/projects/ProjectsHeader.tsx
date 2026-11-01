import { Container } from "@/components/layout/Container";
import { Pill } from "@/components/ui/Pill";
import type { ProjectContent } from "@/types/content";
import { ProjectsExplorer } from "./ProjectsExplorer";

export function ProjectsHeader({ content }: { content: ProjectContent }) {
  return (
    <section aria-labelledby="projects-heading" className="relative overflow-hidden py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <Pill>{content.eyebrow}</Pill>
          <h1
            id="projects-heading"
            className="mt-6 font-serif text-4xl font-bold leading-[2.75rem] tracking-tight text-ink lg:text-[3.5rem] lg:leading-[4rem]"
          >
            {content.title}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-7 text-muted lg:text-lg lg:leading-8">
            {content.description}
          </p>
        </div>
      </Container>

      <Container className="mt-10">
        <ProjectsExplorer projects={content.projects} />
      </Container>
    </section>
  );
}
