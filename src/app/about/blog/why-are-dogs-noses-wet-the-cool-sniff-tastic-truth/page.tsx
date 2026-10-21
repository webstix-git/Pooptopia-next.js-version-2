import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Are Dogs' Noses Wet? The Cool, Sniff-Tastic Truth - Pooptopia",
  description:
    "If you’ve ever booped your dog’s nose and felt that cool, damp sensation, you’re probably familiar with the age-old question: Why are dogs' noses wet?",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Are Dogs' Noses Wet? The Cool, Sniff-Tastic Truth"
      currentHref="/about/blog/why-are-dogs-noses-wet-the-cool-sniff-tastic-truth"
      date="2025-02-06"
      dateLabel="February 6, 2025"
      description=""
      blocks={liveBlogArticles["why-are-dogs-noses-wet-the-cool-sniff-tastic-truth"]}
    />
  );
}
