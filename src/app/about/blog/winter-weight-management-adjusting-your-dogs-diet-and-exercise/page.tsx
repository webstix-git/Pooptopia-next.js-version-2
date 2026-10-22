import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Winter Weight Management: Adjusting Your Dog’s Diet and Exercise - Pooptopia",
  description:
    "As temperatures drop and snow blankets the ground, your dog’s activity levels may plummet right along with them.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Winter Weight Management: Adjusting Your Dog’s Diet and Exercise"
      currentHref="/about/blog/winter-weight-management-adjusting-your-dogs-diet-and-exercise"
      date="2024-12-17"
      dateLabel="December 17, 2024"
      description=""
      blocks={liveBlogArticles["winter-weight-management-adjusting-your-dog%E2%80%99s-diet-and-exercise"]}
    />
  );
}
