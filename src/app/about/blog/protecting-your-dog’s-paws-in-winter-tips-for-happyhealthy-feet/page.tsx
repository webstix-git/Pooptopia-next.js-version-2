import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Protecting Your Dog’s Paws in Winter: Tips for Happy/Healthy Feet - Pooptopia",
  description:
    "Winter weather brings a unique set of challenges for our furry companions, especially when it comes to their paws.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Protecting Your Dog’s Paws in Winter: Tips for Happy/Healthy Feet"
      currentHref="/about/blog/protecting-your-dog’s-paws-in-winter-tips-for-happyhealthy-feet"
      date="2025-01-15"
      dateLabel="January 15, 2025"
      description=""
      blocks={liveBlogArticles["protecting-your-dog’s-paws-in-winter-tips-for-happyhealthy-feet"]}
    />
  );
}
