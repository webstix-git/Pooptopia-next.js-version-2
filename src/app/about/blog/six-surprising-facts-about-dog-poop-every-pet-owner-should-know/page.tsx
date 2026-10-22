import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Six Surprising Facts About Dog Poop Every Pet Owner Should Know - Pooptopia",
  description:
    "Dog poop might seem like a mundane part of pet ownership, but there's more to those little piles than meets the eye. From health risks to environmental impact, understanding the hidden truths about dog waste can help you become a more responsible pet owner.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Six Surprising Facts About Dog Poop Every Pet Owner Should Know"
      currentHref="/about/blog/six-surprising-facts-about-dog-poop-every-pet-owner-should-know"
      date="2024-08-15"
      dateLabel="August 15, 2024"
      description=""
      blocks={liveBlogArticles["six-surprising-facts-about-dog-poop-every-pet-owner-should-know"]}
    />
  );
}
