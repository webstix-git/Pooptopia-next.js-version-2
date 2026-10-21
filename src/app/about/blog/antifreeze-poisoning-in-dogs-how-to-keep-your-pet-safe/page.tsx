import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Antifreeze Poisoning in Dogs: How to Keep Your Pet Safe - Pooptopia",
  description:
    "Antifreeze poisoning in dogs is a serious and potentially fatal condition that requires immediate attention.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Antifreeze Poisoning in Dogs: How to Keep Your Pet Safe"
      currentHref="/about/blog/antifreeze-poisoning-in-dogs-how-to-keep-your-pet-safe"
      date="2024-11-21"
      dateLabel="November 21, 2024"
      description=""
      blocks={liveBlogArticles["antifreeze-poisoning-in-dogs-how-to-keep-your-pet-safe"]}
    />
  );
}
