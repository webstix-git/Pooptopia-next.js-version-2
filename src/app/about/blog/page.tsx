import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPage } from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

type BlogSearchParams = Promise<{
  blogcategory?: string | string[];
  page?: string | string[];
  q?: string | string[];
}>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

async function BlogListing({ searchParams }: { searchParams: BlogSearchParams }) {
  const params = await searchParams;
  const page = Number.parseInt(firstParam(params.page) || "1", 10);
  return (
    <BlogPage
      selectedCategory={firstParam(params.blogcategory) || undefined}
      currentPage={Number.isFinite(page) && page > 0 ? page : 1}
      query={firstParam(params.q)}
    />
  );
}

export default function Page({ searchParams }: { searchParams: BlogSearchParams }) {
  return (
    <Suspense fallback={<BlogPage />}>
      <BlogListing searchParams={searchParams} />
    </Suspense>
  );
}
