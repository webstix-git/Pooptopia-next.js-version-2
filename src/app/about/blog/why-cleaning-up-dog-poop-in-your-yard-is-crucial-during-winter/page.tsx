import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Cleaning Up Dog Poop in Your Yard is Crucial During Winter - Pooptopia",
  description:
    "Winter brings a host of challenges for dog owners, and managing pet waste is no exception. As snow and ice blanket the ground, it might seem less important to clean up dog poop in your yard.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Cleaning Up Dog Poop in Your Yard is Crucial During Winter"
      currentHref="/about/blog/why-cleaning-up-dog-poop-in-your-yard-is-crucial-during-winter"
      date="2024-09-24"
      dateLabel="September 24, 2024"
      description=""
      blocks={liveBlogArticles["why-cleaning-up-dog-poop-in-your-yard-is-crucial-during-winter"]}
    />
  );
}
