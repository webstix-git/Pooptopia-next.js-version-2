import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Can Dogs Get Colds? Understanding Canine Respiratory Health - Pooptopia",
  description:
    "Just like humans, dogs can experience respiratory issues, including what we commonly refer to as “colds.” While dogs don’t get colds in the exact same way humans do, they can suffer from similar symptoms due to respiratory infections or illnesses.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Can Dogs Get Colds? Understanding Canine Respiratory Health"
      currentHref="/about/blog/can-dogs-get-colds-understanding-canine-respiratory-health"
      date="2024-09-05"
      dateLabel="September 5, 2024"
      description=""
      blocks={liveBlogArticles["can-dogs-get-colds-understanding-canine-respiratory-health"]}
    />
  );
}
