import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPage } from "@/components/BlogPage";
import { BlogPageWithSearchParams } from "@/components/BlogPageWithSearchParams";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

export default function Page() {
  return (
    <Suspense fallback={<BlogPage />}>
      <BlogPageWithSearchParams />
    </Suspense>
  );
}
