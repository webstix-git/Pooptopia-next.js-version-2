import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { neosporinArticle } from "@/lib/neosporin-article";

export const metadata: Metadata = {
  title: "Can You Put Neosporin on a Dog? What You Need to Know - Pooptopia",
  description:
    "If you’ve ever owned a dog, you know that at some point, they’re going to come limping inside with a mysterious scrape, scratch, or cut.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Can You Put Neosporin on a Dog? What You Need to Know"
      currentHref="/about/blog/can-you-put-neosporin-on-a-dog"
      date="2025-02-27"
      dateLabel="February 27, 2025"
      description="If you’ve ever owned a dog, you know that at some point, they’re going to come limping inside with a mysterious scrape, scratch, or cut."
      blocks={neosporinArticle}
    />
  );
}
