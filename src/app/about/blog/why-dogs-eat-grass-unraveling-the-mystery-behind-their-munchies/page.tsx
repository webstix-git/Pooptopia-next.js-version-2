import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Dogs Eat Grass: Unraveling the Mystery Behind their Munchies - Pooptopia",
  description:
    "If you're a dog owner, you've probably caught your furry friend snacking on the lawn more than once. It's a quirky and sometimes puzzling behavior that leaves many pet parents scratching their heads.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Dogs Eat Grass: Unraveling the Mystery Behind their Munchies"
      currentHref="/about/blog/why-dogs-eat-grass-unraveling-the-mystery-behind-their-munchies"
      date="2024-07-28"
      dateLabel="July 28, 2024"
      description=""
      blocks={liveBlogArticles["why-dogs-eat-grass-unraveling-the-mystery-behind-their-munchies"]}
    />
  );
}
