import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "How Dogs Are Considered Property in Terms of the Law - Pooptopia",
  description:
    "Dogs hold a special place in the hearts of many, often seen as family members and cherished companions. However, in the eyes of the law, dogs are considered property.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="How Dogs Are Considered Property in Terms of the Law"
      currentHref="/about/blog/how-dogs-are-considered-property-in-terms-of-the-law"
      date="2024-05-26"
      dateLabel="May 26, 2024"
      description=""
      blocks={liveBlogArticles["how-dogs-are-considered-property-in-terms-of-the-law"]}
    />
  );
}
