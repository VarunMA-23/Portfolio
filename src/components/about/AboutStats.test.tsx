import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { aboutContent } from "@/data/about";
import { AboutStats } from "./AboutStats";

describe("AboutStats", () => {
  it("renders every stat as a list item with its value and label", () => {
    render(<AboutStats stats={aboutContent.stats} />);

    expect(screen.getByRole("heading", { level: 2, name: "At a glance" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(aboutContent.stats.length);
    expect(screen.getByText("3x")).toBeInTheDocument();
    expect(screen.getByText("National hackathon wins")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("Flagship AI systems built")).toBeInTheDocument();
    expect(screen.queryByText("Public GitHub repositories")).not.toBeInTheDocument();
  });
});
