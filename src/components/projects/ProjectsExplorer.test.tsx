import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { projectContent } from "@/data/projects";
import { ProjectsExplorer } from "./ProjectsExplorer";

const projects = projectContent.projects;
const healthcare = projects.filter((project) => project.category === "Healthcare");

describe("ProjectsExplorer", () => {
  it("starts with All selected and shows every project", () => {
    render(<ProjectsExplorer projects={projects} />);

    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });

  it("filters the grid by category and updates aria-pressed", async () => {
    const user = userEvent.setup();
    render(<ProjectsExplorer projects={projects} />);

    await user.click(screen.getByRole("button", { name: "Healthcare" }));

    expect(screen.getByRole("button", { name: "Healthcare" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "false");
    expect(screen.getAllByRole("article")).toHaveLength(healthcare.length);
    expect(screen.queryByRole("link", { name: "ShieldAI Moderation" })).not.toBeInTheDocument();
  });

  it("announces the visible project count", async () => {
    const user = userEvent.setup();
    render(<ProjectsExplorer projects={projects} />);

    expect(screen.getByText(`${projects.length} projects shown`)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "FinTech" }));

    expect(screen.getByText("1 project shown")).toBeInTheDocument();
  });
});
