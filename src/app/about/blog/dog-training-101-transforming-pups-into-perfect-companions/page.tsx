import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Dog Training 101: Transforming Pups into Perfect Companions - Pooptopia",
  description:
    "Dog training is more than just teaching your furry friend a few tricks; it's about building a strong, positive relationship that ensures a happy, well-behaved pet. Whether you're a first-time dog owner or a seasoned handler, understanding the basics of dog training can make a world of difference.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Dog Training 101: Transforming Pups into Perfect Companions"
      currentHref="/about/blog/dog-training-101-transforming-pups-into-perfect-companions"
      date="2024-08-03"
      dateLabel="August 3, 2024"
      description=""
      blocks={liveBlogArticles["dog-training-101-transforming-pups-into-perfect-companions"]}
    />
  );
}
