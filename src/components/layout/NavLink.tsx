"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

function isActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const active = isActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full px-4 py-2 text-base text-ink transition-colors hover:bg-accent-soft/70",
        active && "bg-accent-soft",
      )}
    >
      {item.label}
    </Link>
  );
}
