import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { projectContent } from "@/data/projects";
import { ProjectDetail } from "./ProjectDetail";

const [project, next] = projectContent.projects;
const previous = projectContent.projects[projectContent.projects.length - 1];

describe("ProjectDetail", () => {
  it("renders one h1 with the project title and the summary", () => {
    render(
      <ProjectDetail
        project={project}
        content={projectContent}
        previous={previous}
        next={next}
      />,
    );

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(project.title);
    expect(screen.getByText(project.summary)).toBeInTheDocument();
  });

  it("renders overview paragraphs, highlights, and the stack", () => {
    render(
      <ProjectDetail
        project={project}
        content={projectContent}
        previous={previous}
        next={next}
      />,
    );

    for (const paragraph of project.overview) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
    for (const highlight of project.highlights) {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    }
    for (const item of project.stack) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("shows the contact note and links back to all projects and neighbouring projects", () => {
    render(
      <ProjectDetail
        project={project}
        content={projectContent}
        previous={previous}
        next={next}
      />,
    );

    expect(screen.getByRole("link", { name: /All projects/ })).toHaveAttribute("href", "/projects");
    expect(screen.getByText("Feature yet to be built")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: new RegExp(previous.title) })).toHaveAttribute(
      "href",
      `/projects/${previous.slug}`,
    );
    expect(screen.getByRole("link", { name: new RegExp(next.title) })).toHaveAttribute(
      "href",
      `/projects/${next.slug}`,
    );
  });
});
