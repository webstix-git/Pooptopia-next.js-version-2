import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "What to Look for When Choosing a Doggie Daycare - Pooptopia",
  description:
    "Choosing the right doggie daycare is crucial for the health and happiness of your furry friend. With so many options available, it can be challenging to determine which facility will provide the best care.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="What to Look for When Choosing a Doggie Daycare"
      currentHref="/about/blog/what-to-look-for-when-choosing-a-doggie-daycare"
      date="2024-05-26"
      dateLabel="May 26, 2024"
      description=""
      blocks={liveBlogArticles["what-to-look-for-when-choosing-a-doggie-daycare"]}
    />
  );
}
