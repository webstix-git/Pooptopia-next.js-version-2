import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "What to Do If Your Dog Gets Stung by a Bee - Pooptopia",
  description:
    "A sunny day in the backyard can quickly turn stressful if your dog gets stung by a bee. Bees are natural explorers, just like your furry friend, but a curious sniff or playful pounce can lead to an unfortunate encounter.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="What to Do If Your Dog Gets Stung by a Bee"
      currentHref="/about/blog/what-to-do-if-your-dog-gets-stung-by-a-bee"
      date="2024-08-20"
      dateLabel="August 20, 2024"
      description=""
      blocks={liveBlogArticles["what-to-do-if-your-dog-gets-stung-by-a-bee"]}
    />
  );
}
