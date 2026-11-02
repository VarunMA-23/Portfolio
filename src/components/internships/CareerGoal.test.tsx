import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { internshipContent } from "@/data/internships";
import { CareerGoal } from "./CareerGoal";

describe("CareerGoal", () => {
  it("renders the heading and every goal paragraph", () => {
    render(<CareerGoal content={internshipContent.goal} />);

    expect(
      screen.getByRole("heading", { level: 2, name: internshipContent.goal.title }),
    ).toBeInTheDocument();

    for (const paragraph of internshipContent.goal.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
  });
});
