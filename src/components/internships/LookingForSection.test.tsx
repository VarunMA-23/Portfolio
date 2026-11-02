import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { internshipContent } from "@/data/internships";
import { LookingForSection } from "./LookingForSection";

describe("LookingForSection", () => {
  it("renders the heading and every goal item as a list item", () => {
    render(<LookingForSection content={internshipContent.lookingFor} />);

    expect(
      screen.getByRole("heading", { level: 2, name: internshipContent.lookingFor.title }),
    ).toBeInTheDocument();

    const list = screen.getByRole("list");
    for (const item of internshipContent.lookingFor.items) {
      expect(within(list).getByText(item)).toBeInTheDocument();
    }
  });
});
