import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Caring for Your Dog's Paws, Coat, and Nose in the Winter - Pooptopia",
  description:
    "Winter can be a magical time for both humans and dogs. The cold air, snow, and outdoor fun are invigorating for many dogs, but the colder months also bring challenges that pet owners need to be aware of.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Caring for Your Dog's Paws, Coat, and Nose in the Winter"
      currentHref="/about/blog/caring-for-your-dogs-paws-coat-and-nose-in-the-winter"
      date="2024-11-07"
      dateLabel="November 7, 2024"
      description=""
      blocks={liveBlogArticles["caring-for-your-dogs-paws-coat-and-nose-in-the-winter"]}
    />
  );
}
