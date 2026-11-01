"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WatchIntroButton({ label }: { label: string }) {
  // TODO: open the intro video once a source is available.
  return (
    <Button variant="secondary" aria-label={`${label} (coming soon)`} onClick={() => undefined}>
      <Play aria-hidden="true" className="size-4" />
      {label}
    </Button>
  );
}
