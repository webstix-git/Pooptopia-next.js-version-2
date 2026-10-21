import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Hidden Dangers of Dog Poop in Winter - Pooptopia",
  description:
    "Dog waste might seem like a minor inconvenience, especially during winter when snow and cold can obscure its presence.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Hidden Dangers of Dog Poop in Winter"
      currentHref="/about/blog/the-hidden-dangers-of-dog-poop-in-winter"
      date="2025-01-24"
      dateLabel="January 24, 2025"
      description=""
      blocks={liveBlogArticles["the-hidden-dangers-of-dog-poop-in-winter"]}
    />
  );
}
