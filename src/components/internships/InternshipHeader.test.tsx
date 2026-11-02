import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { internshipContent } from "@/data/internships";
import { InternshipHeader } from "./InternshipHeader";

describe("InternshipHeader", () => {
  it("renders the page heading, intro, and availability", () => {
    render(<InternshipHeader content={internshipContent} />);

    expect(
      screen.getByRole("heading", { level: 1, name: internshipContent.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(internshipContent.intro)).toBeInTheDocument();
    expect(screen.getByText(internshipContent.availability)).toBeInTheDocument();
  });

  it("renders the email and projects calls to action", () => {
    render(<InternshipHeader content={internshipContent} />);

    expect(screen.getByRole("link", { name: internshipContent.primaryCta.label })).toHaveAttribute(
      "href",
      internshipContent.primaryCta.href,
    );
    expect(
      screen.getByRole("link", { name: internshipContent.secondaryCta.label }),
    ).toHaveAttribute("href", internshipContent.secondaryCta.href);
  });
});
