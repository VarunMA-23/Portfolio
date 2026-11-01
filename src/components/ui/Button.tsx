import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { buttonBase, buttonVariants, type ButtonVariant } from "./buttonStyles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonBase, buttonVariants[variant], className)} {...props} />
  );
}
