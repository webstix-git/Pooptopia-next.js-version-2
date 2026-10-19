import type { Metadata } from "next";
import { BlogPage } from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Woof to Waste Blog - Pooptopia",
  description: "The Doggy Digest, the Woof to Waste blog from Pooptopia.",
};

// The category filter reads request-time search params, so this route must be
// allowed to render as a blocking page when Cache Components validates it.
export const instant = false;

type PageProps = {
  searchParams: Promise<{ blogcategory?: string | string[] }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedCategory = Array.isArray(params.blogcategory) ? params.blogcategory[0] : params.blogcategory;
  return <BlogPage selectedCategory={selectedCategory} />;
}
