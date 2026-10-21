import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Secret Language of Dog Poop: What It Reveals About Your Dog - Pooptopia",
  description:
    "Dog poop might not be the most glamorous topic, but it’s one of the best ways to monitor your furry friend’s health.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Secret Language of Dog Poop: What It Reveals About Your Dog"
      currentHref="/about/blog/the-secret-language-of-dog-poop-what-it-reveals-about-your-dog"
      date="2025-01-29"
      dateLabel="January 29, 2025"
      description=""
      blocks={liveBlogArticles["the-secret-language-of-dog-poop-what-it-reveals-about-your-dog"]}
    />
  );
}
