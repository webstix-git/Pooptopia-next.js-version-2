import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Do Dogs Lick Their Paws? - Pooptopia",
  description:
    "It’s not uncommon to see dogs licking their paws from time to time. While occasional licking is normal and part of grooming, excessive paw licking can be a sign that something isn’t right.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Do Dogs Lick Their Paws?"
      currentHref="/about/blog/why-do-dogs-lick-their-paws"
      date="2024-11-20"
      dateLabel="November 20, 2024"
      description=""
      blocks={liveBlogArticles["why-do-dogs-lick-their-paws"]}
    />
  );
}
