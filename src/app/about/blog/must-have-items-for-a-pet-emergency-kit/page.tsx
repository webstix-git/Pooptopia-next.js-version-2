import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Must-Have Items for a Pet Emergency Kit - Pooptopia",
  description:
    "Every responsible pet owner wants to ensure the safety and well-being of their furry friends. Emergencies can happen at any time, whether at home, on the road, or out in nature.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Must-Have Items for a Pet Emergency Kit"
      currentHref="/about/blog/must-have-items-for-a-pet-emergency-kit"
      date="2024-08-06"
      dateLabel="August 6, 2024"
      description=""
      blocks={liveBlogArticles["must-have-items-for-a-pet-emergency-kit"]}
    />
  );
}
