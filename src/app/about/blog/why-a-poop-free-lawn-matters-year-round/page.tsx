import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why a Poop-Free Lawn Matters Year-Round - Pooptopia",
  description:
    "As a dog owner, you know the joys and challenges that come with your furry friend. While their companionship is priceless, there’s one responsibility we’d all love to pass off: picking up dog poop.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why a Poop-Free Lawn Matters Year-Round"
      currentHref="/about/blog/why-a-poop-free-lawn-matters-year-round"
      date="2025-01-22"
      dateLabel="January 22, 2025"
      description=""
      blocks={liveBlogArticles["why-a-poop-free-lawn-matters-year-round"]}
    />
  );
}
