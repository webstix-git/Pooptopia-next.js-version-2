import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Do Dogs Eat Dirt? - Pooptopia",
  description:
    "If you’ve ever seen your dog munching on a bit of dirt, you might have wondered why they’re engaging in this puzzling behavior. Eating dirt, also known as soil eating or pica, is a relatively common issue in dogs and can stem from various causes.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Do Dogs Eat Dirt?"
      currentHref="/about/blog/why-do-dogs-eat-dirt"
      date="2024-09-10"
      dateLabel="September 10, 2024"
      description=""
      blocks={liveBlogArticles["why-do-dogs-eat-dirt"]}
    />
  );
}
