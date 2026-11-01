import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { aboutContent } from "@/data/about";
import { AboutHeader } from "./AboutHeader";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} className={className} />
  ),
}));

describe("AboutHeader", () => {
  it("renders exactly one h1 with the accent phrase and the bio", () => {
    render(<AboutHeader content={aboutContent} />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(/survive production/);
    expect(screen.getByText("survive production")).toHaveClass("text-accent-text");
    expect(screen.getByText(aboutContent.intro[0])).toBeInTheDocument();
  });

  it("shows the portrait, meta details, availability, and GitHub link", () => {
    render(<AboutHeader content={aboutContent} />);

    expect(screen.getByAltText("Portrait of Varun Manjunatha Ankanahalli")).toBeInTheDocument();
    expect(screen.getByText("B.E. CSE (Data Science), CMRIT")).toBeInTheDocument();
    expect(
      screen.getByText("Open to AI/ML roles, collaborations, and ambitious hackathons"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /View GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/VarunMA-23",
    );
  });

  it("links the resume and contact CTAs", () => {
    render(<AboutHeader content={aboutContent} />);

    expect(screen.getByRole("link", { name: /Download Resume/ })).toHaveAttribute(
      "href",
      "/pdf/New%20Resume%20%282%29.pdf",
    );
    expect(screen.getByRole("link", { name: /Get in Touch/ })).toHaveAttribute("href", "/contact");
  });

  it("hides the resume CTA when no resume is configured", () => {
    render(<AboutHeader content={{ ...aboutContent, resume: undefined }} />);

    expect(screen.queryByRole("link", { name: /Download Resume/ })).not.toBeInTheDocument();
  });
});
