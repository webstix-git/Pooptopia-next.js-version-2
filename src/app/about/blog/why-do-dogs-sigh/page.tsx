import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Do Dogs Sigh? - Pooptopia",
  description: "Understanding Your Dog’s Sighs and What They Mean",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Do Dogs Sigh?"
      currentHref="/about/blog/why-do-dogs-sigh"
      date="2024-11-06"
      dateLabel="November 6, 2024"
      description=""
      blocks={liveBlogArticles["why-do-dogs-sigh"]}
    />
  );
}
