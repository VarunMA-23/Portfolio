"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { buttonBase, buttonVariants, type ButtonVariant } from "./buttonStyles";

type LinkProps = ComponentProps<typeof Link>;

type ButtonLinkProps = Omit<LinkProps, "href" | "className" | "children" | "onClick"> & {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  onClick?: LinkProps["onClick"];
  onNavigate?: () => void;
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  onNavigate,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        onNavigate?.();
      }}
      className={cn(buttonBase, buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
