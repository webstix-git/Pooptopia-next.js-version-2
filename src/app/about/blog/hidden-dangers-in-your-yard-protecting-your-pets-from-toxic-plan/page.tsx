import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Hidden Dangers in Your Yard: Protecting Pets from Toxic Plants - Pooptopia",
  description:
    "As pet owners, we strive to provide a safe and healthy environment for our furry friends. However, our own backyards can harbor hidden dangers that pose serious health risks to dogs and cats.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Hidden Dangers in Your Yard: Protecting Pets from Toxic Plants"
      currentHref="/about/blog/hidden-dangers-in-your-yard-protecting-your-pets-from-toxic-plan"
      date="2024-08-08"
      dateLabel="August 8, 2024"
      description=""
      blocks={liveBlogArticles["hidden-dangers-in-your-yard-protecting-your-pets-from-toxic-plan"]}
    />
  );
}
