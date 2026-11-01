import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { aboutContent } from "@/data/about";
import { SkillsSection } from "./SkillsSection";

describe("SkillsSection", () => {
  it("renders the section heading and one group heading per skill group", () => {
    render(<SkillsSection content={aboutContent.skills} />);

    expect(
      screen.getByRole("heading", { level: 2, name: aboutContent.skills.title }),
    ).toBeInTheDocument();
    for (const group of aboutContent.skills.groups) {
      expect(screen.getByRole("heading", { level: 3, name: group.title })).toBeInTheDocument();
    }
  });

  it("lists every skill inside its group", () => {
    render(<SkillsSection content={aboutContent.skills} />);

    for (const group of aboutContent.skills.groups) {
      const region = screen.getByRole("region", { name: group.title });
      for (const skill of group.skills) {
        expect(within(region).getByText(skill)).toBeInTheDocument();
      }
    }
  });
});
