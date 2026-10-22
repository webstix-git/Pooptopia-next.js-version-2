import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Role of Diet in Dog Poop Quality - Pooptopia",
  description:
    "As a pet owner, you might not give much thought to your dog's poop beyond the necessity of cleaning it up. However, your dog's stool can provide valuable insights into their overall health and well-being, with diet playing a pivotal role in determining the quality of their poop.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Role of Diet in Dog Poop Quality"
      currentHref="/about/blog/the-role-of-diet-in-dog-poop-quality"
      date="2024-06-09"
      dateLabel="June 9, 2024"
      description=""
      blocks={liveBlogArticles["the-role-of-diet-in-dog-poop-quality"]}
    />
  );
}
