import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Can Dogs See TV? Understanding How Dogs Perceive Television - Pooptopia",
  description:
    "If you’ve ever caught your dog seemingly fixated on the television screen or barking at a particular animal on a TV show, you might wonder: Can dogs actually see and understand TV?",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Can Dogs See TV? Understanding How Dogs Perceive Television"
      currentHref="/about/blog/can-dogs-see-tv-understanding-how-dogs-perceive-television"
      date="2024-11-14"
      dateLabel="November 14, 2024"
      description=""
      blocks={liveBlogArticles["can-dogs-see-tv-understanding-how-dogs-perceive-television"]}
    />
  );
}
