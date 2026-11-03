import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { leetcodeContent } from "@/data/leetcode";
import { LeetCodeStats } from "./LeetCodeStats";

describe("LeetCodeStats", () => {
  it("renders one h2 and links to the LeetCode profile", () => {
    render(<LeetCodeStats />);

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View LeetCode profile/ })).toHaveAttribute(
      "href",
      leetcodeContent.profileUrl,
    );
  });

  it("shows the total solved count and each difficulty count", () => {
    render(<LeetCodeStats />);

    const total = leetcodeContent.difficulties.reduce((sum, item) => sum + item.solved, 0);

    expect(screen.getByText(String(total))).toBeInTheDocument();
    for (const difficulty of leetcodeContent.difficulties) {
      expect(screen.getByText(difficulty.label)).toBeInTheDocument();
      expect(screen.getAllByText(String(difficulty.solved)).length).toBeGreaterThan(0);
    }
  });
});
