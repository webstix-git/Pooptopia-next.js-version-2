import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Dog Poop's Toll on Lawn Gear & Why Cleanup is Key - Pooptopia",
  description:
    "Dog poop is more than just an unsightly nuisance on your lawn; it can have significant negative impacts on your lawn equipment and overall yard health. Ignoring the need to clean up dog waste before mowing can lead to various problems, from equipment damage to spreading harmful bacteria.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Dog Poop's Toll on Lawn Gear & Why Cleanup is Key"
      currentHref="/about/blog/dog-poops-toll-on-lawn-gear-why-cleanup-is-key"
      date="2024-06-11"
      dateLabel="June 11, 2024"
      description=""
      blocks={liveBlogArticles["dog-poops-toll-on-lawn-gear-why-cleanup-is-key"]}
    />
  );
}
