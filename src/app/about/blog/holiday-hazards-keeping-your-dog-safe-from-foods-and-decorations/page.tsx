import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Holiday Hazards: Keeping Your Dog Safe from Foods and Decorations - Pooptopia",
  description:
    "The holiday season is a time for joy, laughter, and celebration, but it can also be fraught with dangers for our furry companions.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Holiday Hazards: Keeping Your Dog Safe from Foods and Decorations"
      currentHref="/about/blog/holiday-hazards-keeping-your-dog-safe-from-foods-and-decorations"
      date="2024-12-12"
      dateLabel="December 12, 2024"
      description=""
      blocks={liveBlogArticles["holiday-hazards-keeping-your-dog-safe-from-foods-and-decorations"]}
    />
  );
}
