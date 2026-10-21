import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Cozy Canines: Choosing the Right Winter Gear for Your Dog - Pooptopia",
  description:
    "As winter sets in, the frosty air and icy ground can be tough on your dog, especially if they’re not equipped to handle the chilly weather.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Cozy Canines: Choosing the Right Winter Gear for Your Dog"
      currentHref="/about/blog/cozy-canines-choosing-the-right-winter-gear-for-your-dog"
      date="2024-12-05"
      dateLabel="December 5, 2024"
      description=""
      blocks={liveBlogArticles["cozy-canines-choosing-the-right-winter-gear-for-your-dog"]}
    />
  );
}
