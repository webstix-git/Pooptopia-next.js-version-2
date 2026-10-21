import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Thanksgiving Pet Safety: How to Keep Your Pets Safe - Pooptopia",
  description:
    "Thanksgiving is a time of celebration, gathering with family and friends, and indulging in delicious feasts. While we enjoy all the trimmings, it's essential to remember that many of the foods, decorations, and activities associated with Thanksgiving can pose dangers to our pets.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Thanksgiving Pet Safety: How to Keep Your Pets Safe"
      currentHref="/about/blog/thanksgiving-pet-safety-how-to-keep-your-pets-safe"
      date="2024-11-26"
      dateLabel="November 26, 2024"
      description=""
      blocks={liveBlogArticles["thanksgiving-pet-safety-how-to-keep-your-pets-safe"]}
    />
  );
}
