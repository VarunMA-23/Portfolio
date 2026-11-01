"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NavLink } from "./NavLink";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:bg-accent-soft"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-b border-border bg-background px-6 pb-6 pt-2 shadow-soft"
      >
        <nav aria-label="Primary mobile">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink item={item} onNavigate={() => setOpen(false)} />
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="/contact" className="mt-4 w-full" onNavigate={() => setOpen(false)}>
          Let&apos;s Talk
        </ButtonLink>
      </div>
    </div>
  );
}
