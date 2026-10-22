import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Fall Safety Tips for Pets - Pooptopia",
  description:
    "As autumn arrives and the days get cooler, it’s essential to keep your pets' safety in mind. Fall brings its own set of challenges and hazards that can affect your furry friends.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Fall Safety Tips for Pets"
      currentHref="/about/blog/fall-safety-tips-for-pets"
      date="2024-09-03"
      dateLabel="September 3, 2024"
      description=""
      blocks={liveBlogArticles["fall-safety-tips-for-pets"]}
    />
  );
}
