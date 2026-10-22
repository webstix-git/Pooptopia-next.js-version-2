import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "How will picking up dog poop keep my lawn in good condition? - Pooptopia",
  description:
    "Dog poop is rich in nitrogen, and while nitrogen is a key nutrient for grass, too much can cause \"nitrogen burn,\" leading to unsightly brown or yellow patches on your lawn. By removing dog waste promptly, Pooptopia helps prevent these burns, ensuring your grass remains green and vibrant.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="How will picking up dog poop keep my lawn in good condition?"
      currentHref="/about/blog/how-will-picking-up-dog-poop-keep-my-lawn-in-good-condition"
      date="2024-05-18"
      dateLabel="May 18, 2024"
      description=""
      blocks={liveBlogArticles["how-will-picking-up-dog-poop-keep-my-lawn-in-good-condition"]}
    />
  );
}
