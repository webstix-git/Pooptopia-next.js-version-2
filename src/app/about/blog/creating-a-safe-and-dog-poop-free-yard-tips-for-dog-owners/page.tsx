import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Creating a Safe and Dog Poop-Free Yard: Tips for Dog Owners - Pooptopia",
  description:
    "A lush and inviting yard is a source of joy for both pets and their owners. However, maintaining a safe and dog poop-free outdoor space requires proactive care and attention.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Creating a Safe and Dog Poop-Free Yard: Tips for Dog Owners"
      currentHref="/about/blog/creating-a-safe-and-dog-poop-free-yard-tips-for-dog-owners"
      date="2024-05-28"
      dateLabel="May 28, 2024"
      description=""
      blocks={liveBlogArticles["creating-a-safe-and-dog-poop-free-yard-tips-for-dog-owners"]}
    />
  );
}
