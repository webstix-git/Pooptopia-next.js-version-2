import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { skunkArticle } from "@/lib/skunk-article";

export const metadata: Metadata = {
  title: "How to Get Rid of Skunk Smell on Your Dog - Pooptopia",
  description:
    "We all love our dogs, until they come barreling into the house, tail wagging, eyes bright, smelling like they just got back from a week-long road trip with a skunk.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="How to Get Rid of Skunk Smell on Your Dog"
      currentHref="/about/blog/how-to-get-rid-of-skunk-smell"
      date="2025-02-13"
      dateLabel="February 13, 2025"
      description="We all love our dogs, until they come barreling into the house, tail wagging, eyes bright, smelling like they just got back from a week-long road trip with a skunk."
      blocks={skunkArticle}
    />
  );
}
