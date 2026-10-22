import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Tips for a Safe and Fun Beach Day with Your Dog - Pooptopia",
  description:
    "Taking your dog to the beach can be a wonderful experience for both of you. The open space, the water, and the fresh air provide excellent opportunities for exercise and bonding.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Tips for a Safe and Fun Beach Day with Your Dog"
      currentHref="/about/blog/tips-for-a-safe-and-fun-beach-day-with-your-dog"
      date="2024-08-22"
      dateLabel="August 22, 2024"
      description=""
      blocks={liveBlogArticles["tips-for-a-safe-and-fun-beach-day-with-your-dog"]}
    />
  );
}
