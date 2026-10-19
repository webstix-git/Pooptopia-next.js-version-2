"use client";

import { useSearchParams } from "next/navigation";
import { BlogPage } from "@/components/BlogPage";

export function BlogPageWithSearchParams() {
  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get("page") ?? "1", 10);
  return (
    <BlogPage
      selectedCategory={searchParams.get("blogcategory") ?? undefined}
      currentPage={Number.isFinite(page) && page > 0 ? page : 1}
    />
  );
}
