import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Traveling Tails: Holiday Tips for Trips with Your Dog - Pooptopia",
  description:
    "The holiday season often means hitting the road or the skies to visit family and friends. If your furry companion is part of the travel plans, it’s essential to ensure their comfort, safety, and happiness during the journey.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Traveling Tails: Holiday Tips for Trips with Your Dog"
      currentHref="/about/blog/traveling-tails-holiday-tips-for-trips-with-your-dog"
      date="2024-12-19"
      dateLabel="December 19, 2024"
      description=""
      blocks={liveBlogArticles["traveling-tails-holiday-tips-for-trips-with-your-dog"]}
    />
  );
}
