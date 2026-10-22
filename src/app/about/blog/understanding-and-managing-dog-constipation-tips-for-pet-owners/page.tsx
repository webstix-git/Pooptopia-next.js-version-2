import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Understanding and Managing Dog Constipation: Tips for Pet Owners - Pooptopia",
  description:
    "Constipation in dogs is a common issue that can be uncomfortable and concerning for your pet. If you notice your dog straining during bowel movements or showing signs of discomfort, it’s essential to understand the causes and remedies for constipation.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Understanding and Managing Dog Constipation: Tips for Pet Owners"
      currentHref="/about/blog/understanding-and-managing-dog-constipation-tips-for-pet-owners"
      date="2024-09-12"
      dateLabel="September 12, 2024"
      description=""
      blocks={liveBlogArticles["understanding-and-managing-dog-constipation-tips-for-pet-owners"]}
    />
  );
}
