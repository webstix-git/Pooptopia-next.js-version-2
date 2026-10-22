import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Importance of Picking Up Your Dog's Poop Even in Winter - Pooptopia",
  description:
    "As temperatures drop and snow begins to fall, many pet owners might be tempted to neglect picking up their dog’s poop, thinking that it will just freeze and eventually decompose naturally. However, maintaining diligent waste removal during the winter months is crucial for several reasons, ranging from environmental health to community well-being.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Importance of Picking Up Your Dog's Poop Even in Winter"
      currentHref="/about/blog/the-importance-of-picking-up-your-dogs-poop-even-in-winter"
      date="2024-06-01"
      dateLabel="June 1, 2024"
      description=""
      blocks={liveBlogArticles["the-importance-of-picking-up-your-dogs-poop-even-in-winter"]}
    />
  );
}
