import type { Metadata } from "next";
import { AboutReferencePage } from "@/components/AboutReferencePage";

export const metadata: Metadata = {
  title: "About Pooptopia | Family-Owned Dog Waste Removal",
  description: "Learn why Pooptopia restores backyards for families and their dogs.",
};

export default function Page() {
  return <AboutReferencePage />;
}
