import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { projectContent } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

const project = projectContent.projects[0];

describe("ProjectCard", () => {
  it("links the whole card to the detail page with one clear name", () => {
    render(<ProjectCard project={project} />);

    const link = screen.getByRole("link", { name: project.title });
    expect(link).toHaveAttribute("href", `/projects/${project.slug}`);
  });

  it("shows category, summary, and tags", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getAllByText(project.category).length).toBeGreaterThan(0);
    expect(screen.getByText(project.summary)).toBeInTheDocument();
    for (const tag of project.tags) {
      expect(screen.getAllByText(tag).length).toBeGreaterThan(0);
    }
  });

  it("renders the card as an article with an h2 title", () => {
    render(<ProjectCard project={project} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: project.title })).toBeInTheDocument();
  });
});
