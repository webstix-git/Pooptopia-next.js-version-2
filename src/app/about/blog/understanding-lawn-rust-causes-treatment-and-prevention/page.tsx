import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Understanding Lawn Rust: Causes, Treatment, and Prevention - Pooptopia",
  description:
    "Lawn rust, also known simply as \"rust,\" is a common fungal disease that affects grass, giving it a yellowish-orange tint. This disease can detract from the appearance of your lawn and, if left untreated, can weaken the grass.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Understanding Lawn Rust: Causes, Treatment, and Prevention"
      currentHref="/about/blog/understanding-lawn-rust-causes-treatment-and-prevention"
      date="2024-07-30"
      dateLabel="July 30, 2024"
      description=""
      blocks={liveBlogArticles["understanding-lawn-rust-causes-treatment-and-prevention"]}
    />
  );
}
