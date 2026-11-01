import { describe, expect, it } from "vitest";
import reducer, { selectThemeMode, setTheme, toggleTheme } from "./themeSlice";

describe("themeSlice", () => {
  it("defaults to light mode", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({ mode: "light" });
  });

  it("sets the requested theme", () => {
    expect(reducer({ mode: "light" }, setTheme("dark"))).toEqual({ mode: "dark" });
  });

  it("toggles between light and dark", () => {
    expect(reducer({ mode: "light" }, toggleTheme())).toEqual({ mode: "dark" });
    expect(reducer({ mode: "dark" }, toggleTheme())).toEqual({ mode: "light" });
  });

  it("selects the current mode", () => {
    expect(selectThemeMode({ theme: { mode: "dark" } })).toBe("dark");
  });
});
