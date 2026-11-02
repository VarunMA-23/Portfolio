import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/store";
import { Header } from "./Header";

type LinkMockProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & {
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
};

vi.mock("next/link", () => ({
  default: ({ href, onClick, children, ...props }: LinkMockProps) => (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  ),
}));

const { usePathnameMock } = vi.hoisted(() => ({
  usePathnameMock: vi.fn(() => "/"),
}));

vi.mock("next/navigation", () => ({
  usePathname: usePathnameMock,
}));

function renderHeader() {
  render(
    <Provider store={makeStore()}>
      <Header />
    </Provider>,
  );
}

describe("Header", () => {
  it("renders the primary navigation", () => {
    renderHeader();
    const navigation = screen.getByRole("navigation", { name: "Primary" });

    expect(
      within(navigation)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["Home", "About", "Projects", "Internships", "Contact"]);
  });

  it("links contact to LinkedIn and the call to action to email", () => {
    renderHeader();
    const navigation = screen.getByRole("navigation", { name: "Primary" });

    expect(within(navigation).getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/varun-ankanahalli-6512a03a9/",
    );
    expect(screen.getByRole("link", { name: "Let's Talk — email Varun" })).toHaveAttribute(
      "href",
      "mailto:v66581770@gmail.com",
    );
  });

  it("marks the current route with aria-current", () => {
    usePathnameMock.mockReturnValue("/about");
    renderHeader();

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
  });

  it("opens the mobile menu and closes it after navigating", async () => {
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const mobileNav = screen.getByRole("navigation", { name: "Primary mobile" });
    await user.click(within(mobileNav).getByRole("link", { name: "About" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu on Escape", async () => {
    const user = userEvent.setup();
    renderHeader();
    await user.click(screen.getByRole("button", { name: "Open menu" }));

    await user.keyboard("{Escape}");

    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
