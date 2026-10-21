import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Frosty Frolics: Safe Winter Fun with Your Dog - Pooptopia",
  description:
    "Winter can be a magical time to bond with your dog. The crisp air, snow-covered landscapes, and holiday cheer create the perfect backdrop for outdoor adventures.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Frosty Frolics: Safe Winter Fun with Your Dog"
      currentHref="/about/blog/frosty-frolics-safe-winter-fun-with-your-dog"
      date="2024-12-24"
      dateLabel="December 24, 2024"
      description=""
      blocks={liveBlogArticles["frosty-frolics-safe-winter-fun-with-your-dog"]}
    />
  );
}
