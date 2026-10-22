import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Flies & Maggots: Understanding the Impact of Dog Poop - Pooptopia",
  description:
    "Dog owners often find themselves battling a persistent enemy in their yards: flies and maggots attracted to their furry friend's waste. Beyond being a nuisance, these pests can have significant implications for both human health and environmental well-being.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Flies & Maggots: Understanding the Impact of Dog Poop"
      currentHref="/about/blog/flies-maggots-understanding-the-impact-of-dog-poop"
      date="2024-05-30"
      dateLabel="May 30, 2024"
      description=""
      blocks={liveBlogArticles["flies-maggots-understanding-the-impact-of-dog-poop"]}
    />
  );
}
