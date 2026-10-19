"use client";

import { useSearchParams } from "next/navigation";
import { BlogPage } from "@/components/BlogPage";

export function BlogPageWithSearchParams() {
  const searchParams = useSearchParams();
  return <BlogPage selectedCategory={searchParams.get("blogcategory") ?? undefined} />;
}
