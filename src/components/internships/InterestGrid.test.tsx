import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { internshipContent } from "@/data/internships";
import { InterestGrid } from "./InterestGrid";

describe("InterestGrid", () => {
  it("renders the section heading and one card per track", () => {
    render(<InterestGrid content={internshipContent.interests} />);

    expect(
      screen.getByRole("heading", { level: 2, name: internshipContent.interests.title }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(internshipContent.interests.tracks.length);
  });

  it("lists every bullet inside its track card", () => {
    render(<InterestGrid content={internshipContent.interests} />);

    for (const track of internshipContent.interests.tracks) {
      expect(screen.getByRole("heading", { level: 3, name: track.title })).toBeInTheDocument();

      const article = screen.getByRole("article", { name: track.title });
      for (const bullet of track.bullets) {
        expect(within(article).getByText(bullet)).toBeInTheDocument();
      }
    }
  });
});
