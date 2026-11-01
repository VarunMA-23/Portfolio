import { describe, expect, it } from "vitest";
import { projectContent } from "@/data/projects";

describe("projectContent", () => {
  it("has unique slugs", () => {
    const slugs = projectContent.projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("provides complete content for every project", () => {
    for (const project of projectContent.projects) {
      expect(project.title).not.toBe("");
      expect(project.summary).not.toBe("");
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.overview.length).toBeGreaterThan(0);
      expect(project.highlights.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.metrics.length).toBeGreaterThan(0);
    }
  });

  it("uses every filter category at least once", () => {
    const categories = new Set(projectContent.projects.map((project) => project.category));
    expect(categories.size).toBeGreaterThan(1);
  });
});
