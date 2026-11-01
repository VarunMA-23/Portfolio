import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

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

describe("Hero", () => {
  it("renders exactly one h1 with the hero headline", () => {
    render(<Hero />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1, name: "Varun" })).toBeInTheDocument();
    expect(screen.getByText("real-world impact")).toHaveClass("text-accent-text");
  });

  it("links the primary CTA to the projects page", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /View My Work/ })).toHaveAttribute("href", "/projects");
  });

  it("links the secondary CTA to GitHub", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /View GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/VarunMA-23",
    );
  });

  it("shows availability as text, the portrait, and the stat badges", () => {
    render(<Hero />);

    expect(screen.getByText("Open to AI/ML roles and collaborations")).toBeInTheDocument();
    expect(screen.getByAltText("Portrait of Varun Manjunatha Ankanahalli")).toBeInTheDocument();
    expect(screen.getByText("3x")).toBeInTheDocument();
    expect(screen.getByText("24")).toBeInTheDocument();
  });
});
