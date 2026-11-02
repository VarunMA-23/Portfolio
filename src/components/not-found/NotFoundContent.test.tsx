import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFoundContent } from "./NotFoundContent";

describe("NotFoundContent", () => {
  it("renders a single descriptive heading", () => {
    render(<NotFoundContent />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(/missing or still being built/i);
  });

  it("offers recovery links to live pages", () => {
    render(<NotFoundContent />);

    expect(screen.getByRole("link", { name: /Back to Home/ })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /Browse Projects/ })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: /Get in Touch/ })).toHaveAttribute("href", "/contact");
  });

  it("hides the decorative 404 marker from assistive technology", () => {
    render(<NotFoundContent />);

    expect(screen.getByText("404")).toHaveAttribute("aria-hidden", "true");
  });
});
