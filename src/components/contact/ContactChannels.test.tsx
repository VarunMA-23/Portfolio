import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ContactChannel } from "@/types/content";
import { ContactChannels } from "./ContactChannels";

const channels: ContactChannel[] = [
  {
    icon: "mail",
    label: "Email",
    value: "hello@example.com",
    description: "Best for detailed questions.",
    href: "mailto:hello@example.com",
    cta: "Send an email",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Varun",
    description: "Connect and message.",
    href: "https://www.linkedin.com/in/example/",
    cta: "View LinkedIn profile",
    external: true,
  },
];

describe("ContactChannels", () => {
  it("renders the email channel as a mailto link", () => {
    render(<ContactChannels channels={channels} />);

    const email = screen.getByRole("link", { name: /^Email/ });

    expect(email).toHaveAttribute("href", "mailto:hello@example.com");
    expect(email).not.toHaveAttribute("target");
  });

  it("opens external channels in a new tab with a safe rel", () => {
    render(<ContactChannels channels={channels} />);

    const linkedin = screen.getByRole("link", { name: /^LinkedIn/ });

    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/example/");
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noreferrer noopener");
    expect(linkedin).toHaveAccessibleName(expect.stringContaining("opens in a new tab"));
  });

  it("renders every channel", () => {
    render(<ContactChannels channels={channels} />);

    expect(screen.getAllByRole("link")).toHaveLength(channels.length);
  });
});
