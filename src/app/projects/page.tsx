import type { Metadata } from "next";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { projectContent } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Flagship AI/ML systems by Varun Manjunatha Ankanahalli: decisioning agents, real-time moderation, causal memory, and healthcare diagnostics.",
};

export default function ProjectsPage() {
  return <ProjectsHeader content={projectContent} />;
}
