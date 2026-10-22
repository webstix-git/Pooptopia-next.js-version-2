import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Great Debate: Homemade Dog Food vs. Kibble - Pooptopia",
  description:
    "As pet owners, we constantly seek the best for our furry companions, aiming to provide them with a happy, healthy life. When it comes to nutrition, the choices can be overwhelming, with countless brands and types of dog food available.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Great Debate: Homemade Dog Food vs. Kibble"
      currentHref="/about/blog/the-great-debate-homemade-dog-food-vs-kibble"
      date="2024-07-25"
      dateLabel="July 25, 2024"
      description=""
      blocks={liveBlogArticles["the-great-debate-homemade-dog-food-vs-kibble"]}
    />
  );
}
