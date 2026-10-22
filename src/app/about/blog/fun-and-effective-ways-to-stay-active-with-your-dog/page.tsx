import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Fun and Effective Ways to Stay Active with Your Dog - Pooptopia",
  description:
    "Dogs are naturally energetic and curious animals. They love to explore, run, and engage in activities that stimulate both their minds and bodies.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Fun and Effective Ways to Stay Active with Your Dog"
      currentHref="/about/blog/fun-and-effective-ways-to-stay-active-with-your-dog"
      date="2024-10-01"
      dateLabel="October 1, 2024"
      description=""
      blocks={liveBlogArticles["fun-and-effective-ways-to-stay-active-with-your-dog"]}
    />
  );
}
