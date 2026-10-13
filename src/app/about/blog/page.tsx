import type { Metadata } from "next";
import { BlogPage } from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

export default function Page() {
  return <BlogPage />;
}
