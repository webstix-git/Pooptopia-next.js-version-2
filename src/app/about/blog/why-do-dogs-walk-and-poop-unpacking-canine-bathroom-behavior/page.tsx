import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Why Do Dogs Walk and Poop? Unpacking Canine Bathroom Behavior - Pooptopia",
  description:
    "If you’ve ever taken your dog for a walk and found yourself wondering why they wander in circles, stop and sniff endlessly, or even seem to walk and poop simultaneously, you’re not alone.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Why Do Dogs Walk and Poop? Unpacking Canine Bathroom Behavior"
      currentHref="/about/blog/why-do-dogs-walk-and-poop-unpacking-canine-bathroom-behavior"
      date="2025-01-10"
      dateLabel="January 10, 2025"
      description=""
      blocks={liveBlogArticles["why-do-dogs-walk-and-poop-unpacking-canine-bathroom-behavior"]}
    />
  );
}
