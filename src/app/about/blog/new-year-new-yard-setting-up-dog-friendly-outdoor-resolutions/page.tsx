import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "New Year, New Yard: Setting Up Dog-Friendly Outdoor Resolutions - Pooptopia",
  description:
    "As the calendar flips to January and the world feels fresh with opportunity, many of us set resolutions to improve our health, happiness, and homes.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="New Year, New Yard: Setting Up Dog-Friendly Outdoor Resolutions"
      currentHref="/about/blog/new-year-new-yard-setting-up-dog-friendly-outdoor-resolutions"
      date="2025-01-03"
      dateLabel="January 3, 2025"
      description=""
      blocks={liveBlogArticles["new-year-new-yard-setting-up-dog-friendly-outdoor-resolutions"]}
    />
  );
}
