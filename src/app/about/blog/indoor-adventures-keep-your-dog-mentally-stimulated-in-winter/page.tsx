import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Indoor Adventures: Keep Your Dog Mentally Stimulated In Winter - Pooptopia",
  description:
    "As winter tightens its frosty grip, keeping your dog physically active and mentally engaged indoors can be a challenge.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Indoor Adventures: Keep Your Dog Mentally Stimulated In Winter"
      currentHref="/about/blog/indoor-adventures-keep-your-dog-mentally-stimulated-in-winter"
      date="2024-12-10"
      dateLabel="December 10, 2024"
      description=""
      blocks={liveBlogArticles["indoor-adventures-keep-your-dog-mentally-stimulated-in-winter"]}
    />
  );
}
