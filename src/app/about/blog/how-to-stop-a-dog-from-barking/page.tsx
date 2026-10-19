import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "How to Stop a Dog from Barking: A Guide to Sanity - Pooptopia",
  description:
    "If you’ve ever had your dog suddenly go full alert mode because a leaf blew past the window, or bark at absolutely nothing, then you know the struggle of excessive barking.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="How to Stop a Dog from Barking: A Guide to Sanity"
      currentHref="/about/blog/how-to-stop-a-dog-from-barking"
      date="2025-02-20"
      dateLabel="February 20, 2025"
      description="If you’ve ever had your dog suddenly go full alert mode because a leaf blew past the window, or bark at absolutely nothing, then you know the struggle of excessive barking."
      blocks={liveBlogArticles["how-to-stop-a-dog-from-barking-a-guide-to-sanity"]}
    />
  );
}
