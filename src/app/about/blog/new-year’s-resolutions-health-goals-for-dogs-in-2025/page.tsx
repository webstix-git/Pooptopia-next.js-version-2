import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "New Year’s Resolutions: Health Goals for Dogs in 2025 - Pooptopia",
  description:
    "As the year comes to a close, it’s the perfect time to reflect on your dog’s well-being and set new health goals for the coming year.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="New Year’s Resolutions: Health Goals for Dogs in 2025"
      currentHref="/about/blog/new-year’s-resolutions-health-goals-for-dogs-in-2025"
      date="2024-12-26"
      dateLabel="December 26, 2024"
      description=""
      blocks={liveBlogArticles["new-year%E2%80%99s-resolutions-health-goals-for-dogs-in-2025"]}
    />
  );
}
