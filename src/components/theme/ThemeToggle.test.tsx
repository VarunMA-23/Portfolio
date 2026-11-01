import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { makeStore } from "@/store";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";
import { ThemeToggle } from "./ThemeToggle";

function renderToggle() {
  const store = makeStore();
  render(
    <Provider store={store}>
      <ThemeToggle />
    </Provider>,
  );
  return store;
}

describe("ThemeToggle", () => {
  it("defaults to light mode with no stored preference", () => {
    renderToggle();
    expect(screen.getByRole("button", { name: "Toggle color theme" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(document.documentElement).not.toHaveClass("dark");
  });

  it("toggles the store, the dark class, and localStorage", async () => {
    const user = userEvent.setup();
    const store = renderToggle();
    const button = screen.getByRole("button", { name: "Toggle color theme" });

    await user.click(button);
    expect(store.getState().theme.mode).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    await user.click(button);
    expect(store.getState().theme.mode).toBe("light");
    expect(button).toHaveAttribute("aria-pressed", "false");
    expect(document.documentElement).not.toHaveClass("dark");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("restores a stored dark preference on mount", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
    renderToggle();
    expect(document.documentElement).toHaveClass("dark");
    expect(screen.getByRole("button", { name: "Toggle color theme" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });
});
