import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Dogs Eat Poop: The Smelly Truth We Can’t Ignore - Pooptopia",
  description:
    "As dog owners, we’ve all experienced our fair share of bizarre canine behavior.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Dogs Eat Poop: The Smelly Truth We Can’t Ignore"
      currentHref="/about/blog/why-dogs-eat-poop-the-smelly-truth-we-cant-ignore"
      date="2025-01-12"
      dateLabel="January 12, 2025"
      description=""
      blocks={liveBlogArticles["why-dogs-eat-poop-the-smelly-truth-we-can’t-ignore"]}
    />
  );
}
