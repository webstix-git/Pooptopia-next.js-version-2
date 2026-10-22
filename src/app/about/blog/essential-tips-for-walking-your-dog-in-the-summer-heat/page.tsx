import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Essential Tips for Walking Your Dog in the Summer Heat - Pooptopia",
  description:
    "Walking your dog is an important part of their daily routine, providing them with exercise, mental stimulation, and a chance to explore the world. However, summer brings high temperatures that can make outdoor activities challenging and even dangerous for your furry friend.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Essential Tips for Walking Your Dog in the Summer Heat"
      currentHref="/about/blog/essential-tips-for-walking-your-dog-in-the-summer-heat"
      date="2024-08-01"
      dateLabel="August 1, 2024"
      description=""
      blocks={liveBlogArticles["essential-tips-for-walking-your-dog-in-the-summer-heat"]}
    />
  );
}
