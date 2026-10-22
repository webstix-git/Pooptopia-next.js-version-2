import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Hidden Household Hazards: Common Items That Are Dangerous to Dogs - Pooptopia",
  description:
    "As a responsible dog owner, you’re likely aware of many common hazards that could harm your dog, such as chocolate, toxic plants, or certain cleaning products.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Hidden Household Hazards: Common Items That Are Dangerous to Dogs"
      currentHref="/about/blog/hidden-household-hazards-common-items-that-are-dangerous-to-dogs"
      date="2024-10-22"
      dateLabel="October 22, 2024"
      description=""
      blocks={liveBlogArticles["hidden-household-hazards-common-items-that-are-dangerous-to-dogs"]}
    />
  );
}
