import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Dog Boarding Tips: How to Prepare for a Stay Away from Home - Pooptopia",
  description:
    "Traveling for work, vacation, or other commitments often means leaving your furry friend behind. Whether it’s for a weekend getaway or an extended trip, boarding your dog can be a great solution to ensure they’re well cared for while you’re away.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Dog Boarding Tips: How to Prepare for a Stay Away from Home"
      currentHref="/about/blog/dog-boarding-tips-how-to-prepare-for-a-stay-away-from-home"
      date="2024-10-08"
      dateLabel="October 8, 2024"
      description=""
      blocks={liveBlogArticles["dog-boarding-tips-how-to-prepare-for-a-stay-away-from-home"]}
    />
  );
}
