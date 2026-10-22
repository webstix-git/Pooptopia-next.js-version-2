import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Loving Your Dog: Building a Stronger Bond with Your Companion - Pooptopia",
  description:
    "Dogs bring endless joy, companionship, and loyalty to our lives. In return, it’s our responsibility as pet owners to provide them with love, care, and a fulfilling life.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Loving Your Dog: Building a Stronger Bond with Your Companion"
      currentHref="/about/blog/loving-your-dog-building-a-stronger-bond-with-your-companion"
      date="2024-10-03"
      dateLabel="October 3, 2024"
      description=""
      blocks={liveBlogArticles["loving-your-dog-building-a-stronger-bond-with-your-companion"]}
    />
  );
}
