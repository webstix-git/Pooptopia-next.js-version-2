import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Sitemap - Pooptopia",
  description: "Every page on the Pooptopia site, from services and the service area to contact and policies.",
};

export default function Page() {
  return <ComingSoon />;
}
