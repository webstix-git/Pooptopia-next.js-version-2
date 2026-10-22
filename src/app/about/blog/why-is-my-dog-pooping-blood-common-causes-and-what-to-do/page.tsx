import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Is My Dog Pooping Blood? Common Causes and What to Do - Pooptopia",
  description:
    "Seeing your dog poop blood can be an alarming experience for any pet owner. It’s natural to be concerned and wonder what’s causing this distressing symptom.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Is My Dog Pooping Blood? Common Causes and What to Do"
      currentHref="/about/blog/why-is-my-dog-pooping-blood-common-causes-and-what-to-do"
      date="2024-10-10"
      dateLabel="October 10, 2024"
      description=""
      blocks={liveBlogArticles["why-is-my-dog-pooping-blood-common-causes-and-what-to-do"]}
    />
  );
}
