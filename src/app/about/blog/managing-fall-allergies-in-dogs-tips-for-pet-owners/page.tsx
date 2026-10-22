import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Managing Fall Allergies in Dogs: Tips for Pet Owners - Pooptopia",
  description:
    "As the seasons change, so can your dog’s allergies. Fall allergies can bring about various symptoms, including itching, sneezing, and more.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Managing Fall Allergies in Dogs: Tips for Pet Owners"
      currentHref="/about/blog/managing-fall-allergies-in-dogs-tips-for-pet-owners"
      date="2024-09-26"
      dateLabel="September 26, 2024"
      description=""
      blocks={liveBlogArticles["managing-fall-allergies-in-dogs-tips-for-pet-owners"]}
    />
  );
}
