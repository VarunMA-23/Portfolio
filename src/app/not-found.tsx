import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has not been built yet.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
