import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { AboutContent } from "@/types/content";

export function AboutPortrait({ content }: { content: AboutContent }) {
  return (
    <div className="relative mx-auto w-full max-w-sm motion-safe:animate-fade-up motion-safe:[animation-delay:150ms] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -top-6 right-2 hidden size-28 rounded-full bg-accent/40 blur-2xl md:block"
      />
      <div aria-hidden="true" className="shape-blob absolute inset-x-6 bottom-0 top-8 bg-peach" />

      <span
        aria-hidden="true"
        className="absolute -left-2 top-6 hidden -rotate-6 font-script text-2xl text-accent-text lg:block"
      >
        Always learning, always shipping
      </span>

      <Sparkles
        aria-hidden="true"
        className="absolute -right-2 top-0 hidden size-8 text-star md:block"
      />

      <Image
        src={content.portrait.src}
        alt={content.portrait.alt}
        width={content.portrait.width}
        height={content.portrait.height}
        unoptimized
        sizes="(min-width: 1024px) 420px, 80vw"
        className="shape-blob relative mx-auto h-auto w-full max-w-sm object-cover"
      />
    </div>
  );
}
