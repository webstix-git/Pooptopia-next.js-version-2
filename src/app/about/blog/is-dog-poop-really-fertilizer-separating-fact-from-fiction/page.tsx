import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Is Dog Poop Really Fertilizer? Separating Fact from Fiction - Pooptopia",
  description:
    "Dog owners often wonder if their furry friend's waste can be repurposed as fertilizer for their garden or lawn. After all, it's organic matter, right?",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Is Dog Poop Really Fertilizer? Separating Fact from Fiction"
      currentHref="/about/blog/is-dog-poop-really-fertilizer-separating-fact-from-fiction"
      date="2024-06-03"
      dateLabel="June 3, 2024"
      description=""
      blocks={liveBlogArticles["is-dog-poop-really-fertilizer-separating-fact-from-fiction"]}
    />
  );
}
