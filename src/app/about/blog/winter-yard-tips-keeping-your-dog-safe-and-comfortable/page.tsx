import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Winter Yard Tips: Keeping Your Dog Safe and Comfortable - Pooptopia",
  description:
    "Winter can transform your yard into a magical wonderland, but it also presents challenges for pet owners.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Winter Yard Tips: Keeping Your Dog Safe and Comfortable"
      currentHref="/about/blog/winter-yard-tips-keeping-your-dog-safe-and-comfortable"
      date="2025-01-08"
      dateLabel="January 8, 2025"
      description=""
      blocks={liveBlogArticles["winter-yard-tips-keeping-your-dog-safe-and-comfortable"]}
    />
  );
}
