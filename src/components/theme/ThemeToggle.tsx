"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectThemeMode, setTheme } from "@/store/slices/themeSlice";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

export function ThemeToggle() {
  const mode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    document.documentElement.classList.toggle("dark", initial === "dark");
    dispatch(setTheme(initial));
  }, [dispatch]);

  function handleToggle() {
    const next = mode === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    dispatch(setTheme(next));
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle color theme"
      aria-pressed={mode === "dark"}
      className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-accent-soft"
    >
      <Moon aria-hidden="true" className="size-5 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  );
}
