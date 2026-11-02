import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { SocialIconName } from "@/types/content";

const icons: Record<SocialIconName, ReactNode> = {
  x: (
    <>
      <path d="M5 5l14 14" />
      <path d="M19 5L5 19" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6.5 10v8" />
      <path d="M6.5 6.4v.1" />
      <path d="M11 18v-4.5a3 3 0 0 1 6 0V18" />
      <path d="M11 18v-8" />
    </>
  ),
  dribbble: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M5.4 8.2c3.6 2.8 8 4 13.2 3.5" />
      <path d="M8.6 4.6c3 3.2 4.9 7.3 5.6 14.2" />
      <path d="M4 14.6c4-.6 8.4.4 11.7 3.3" />
    </>
  ),
  github: (
    <>
      <path d="M9 19.5c-4 1.2-4-2.1-5.5-2.5" />
      <path d="M15 21v-3.4c0-1 .1-1.4-.5-2 2.4-.3 4.7-1.2 4.7-5.3a4.1 4.1 0 0 0-1.1-2.8 3.8 3.8 0 0 0-.1-2.8s-.9-.3-3 1.2a10.3 10.3 0 0 0-5.4 0C7.5 4.4 6.6 4.7 6.6 4.7a3.8 3.8 0 0 0-.1 2.8A4.1 4.1 0 0 0 5.4 10.3c0 4.1 2.3 5 4.7 5.3-.6.6-.6 1.1-.5 2V21" />
    </>
  ),
  leetcode: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
    />
  ),
};

export function SocialIcon({ name, className }: { name: SocialIconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
    >
      {icons[name]}
    </svg>
  );
}
