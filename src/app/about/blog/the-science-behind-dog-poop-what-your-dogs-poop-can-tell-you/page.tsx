import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Science Behind Dog Poop: What Your Dog’s Poop Can Tell You - Pooptopia",
  description:
    "Dog poop is more than just a nuisance to clean up; it's a vital indicator of your dog’s overall health. By paying close attention to the characteristics of your dog's stool, you can gain valuable insights into their digestive health, diet, and even detect potential medical issues early.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Science Behind Dog Poop: What Your Dog’s Poop Can Tell You"
      currentHref="/about/blog/the-science-behind-dog-poop-what-your-dogs-poop-can-tell-you"
      date="2024-06-07"
      dateLabel="June 7, 2024"
      description=""
      blocks={liveBlogArticles["the-science-behind-dog-poop-what-your-dog’s-poop-can-tell-you"]}
    />
  );
}
