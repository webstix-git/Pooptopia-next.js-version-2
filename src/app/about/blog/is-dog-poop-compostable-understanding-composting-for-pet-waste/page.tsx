import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Is Dog Poop Compostable? Understanding Composting for Pet Waste - Pooptopia",
  description:
    "Composting is a great way to reduce waste and enrich your garden soil. But is dog poop compostable?",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Is Dog Poop Compostable? Understanding Composting for Pet Waste"
      currentHref="/about/blog/is-dog-poop-compostable-understanding-composting-for-pet-waste"
      date="2024-09-19"
      dateLabel="September 19, 2024"
      description=""
      blocks={liveBlogArticles["is-dog-poop-compostable-understanding-composting-for-pet-waste"]}
    />
  );
}
