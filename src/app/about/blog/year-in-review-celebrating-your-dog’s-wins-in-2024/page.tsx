import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Year in Review: Celebrating Your Dog’s Wins in 2024 - Pooptopia",
  description:
    "As we bid farewell to 2024 and welcome a brand-new year, it’s the perfect time to reflect on all the joyful moments, milestones, and successes your dog has achieved over the past 12 months.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Year in Review: Celebrating Your Dog’s Wins in 2024"
      currentHref="/about/blog/year-in-review-celebrating-your-dog’s-wins-in-2024"
      date="2024-12-31"
      dateLabel="December 31, 2024"
      description=""
      blocks={liveBlogArticles["year-in-review-celebrating-your-dog%E2%80%99s-wins-in-2024"]}
    />
  );
}
