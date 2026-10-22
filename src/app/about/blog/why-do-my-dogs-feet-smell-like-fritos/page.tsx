import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Do My Dog’s Feet Smell Like Fritos? - Pooptopia",
  description:
    "Have you ever leaned in for a sniff of your dog’s paws and noticed a peculiar, yet familiar scent—something that reminds you of Fritos, corn chips, or even popcorn? If so, you’re not alone!",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Do My Dog’s Feet Smell Like Fritos?"
      currentHref="/about/blog/why-do-my-dogs-feet-smell-like-fritos"
      date="2024-10-31"
      dateLabel="October 31, 2024"
      description=""
      blocks={liveBlogArticles["why-do-my-dog%E2%80%99s-feet-smell-like-fritos"]}
    />
  );
}
