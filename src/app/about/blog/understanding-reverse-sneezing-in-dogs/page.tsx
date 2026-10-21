import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Understanding Reverse Sneezing in Dogs - Pooptopia",
  description:
    "If you’ve ever heard your dog suddenly start making strange snorting or honking noises, you may have been alarmed, thinking they were having trouble breathing.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Understanding Reverse Sneezing in Dogs"
      currentHref="/about/blog/understanding-reverse-sneezing-in-dogs"
      date="2024-11-12"
      dateLabel="November 12, 2024"
      description=""
      blocks={liveBlogArticles["understanding-reverse-sneezing-in-dogs"]}
    />
  );
}
