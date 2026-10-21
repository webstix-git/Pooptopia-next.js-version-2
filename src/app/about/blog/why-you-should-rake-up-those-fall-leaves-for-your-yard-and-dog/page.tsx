import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why You Should Rake Up Those Fall Leaves (For Your Yard and Dog) - Pooptopia",
  description:
    "Ah, fall! The season of pumpkin spice lattes, cozy sweaters, and... leaf-covered yards.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why You Should Rake Up Those Fall Leaves (For Your Yard and Dog)"
      currentHref="/about/blog/why-you-should-rake-up-those-fall-leaves-for-your-yard-and-dog"
      date="2024-11-10"
      dateLabel="November 10, 2024"
      description=""
      blocks={liveBlogArticles["why-you-should-rake-up-those-fall-leaves-for-your-yard-and-dog"]}
    />
  );
}
