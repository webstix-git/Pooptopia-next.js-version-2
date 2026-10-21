import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Does My Dog Sleep on His Back? - Pooptopia",
  description:
    "If you’ve ever noticed your dog sprawled out on his back, legs in the air, you may have wondered what this peculiar sleeping position means.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Does My Dog Sleep on His Back?"
      currentHref="/about/blog/why-does-my-dog-sleep-on-his-back"
      date="2024-11-28"
      dateLabel="November 28, 2024"
      description=""
      blocks={liveBlogArticles["why-does-my-dog-sleep-on-his-back"]}
    />
  );
}
