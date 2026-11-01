export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition duration-200 motion-safe:hover:-translate-y-0.5";

export const buttonVariants = {
  primary: "bg-ink text-surface hover:bg-ink/90",
  secondary: "border border-border bg-surface text-ink hover:bg-accent-soft/60",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
