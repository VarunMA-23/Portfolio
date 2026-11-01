import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { projectContent } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectContent.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectContent.projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = projectContent.projects;
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <ProjectDetail
      project={project}
      content={projectContent}
      previous={previous}
      next={next}
    />
  );
}
