import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "What Human Foods Can Dogs Eat? - Pooptopia",
  description:
    "As dog owners, it's natural to want to share our favorite snacks with our furry friends. However, not all human foods are safe for dogs. Some can even be toxic.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="What Human Foods Can Dogs Eat?"
      currentHref="/about/blog/what-human-foods-can-dogs-eat"
      date="2024-08-13"
      dateLabel="August 13, 2024"
      description=""
      blocks={liveBlogArticles["what-human-foods-can-dogs-eat"]}
    />
  );
}
