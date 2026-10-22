import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "DIY Cognitive Dog Toys for Home: How to Stimulate Your Dog’s Mind - Pooptopia",
  description:
    "Dogs need more than just physical exercise; they also need mental stimulation to stay happy and healthy. Engaging your dog's brain helps prevent boredom, reduce anxiety, and curtail destructive behaviors.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="DIY Cognitive Dog Toys for Home: How to Stimulate Your Dog’s Mind"
      currentHref="/about/blog/diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dogs-mind"
      date="2024-10-29"
      dateLabel="October 29, 2024"
      description=""
      blocks={liveBlogArticles["diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dog%E2%80%99s-mind"]}
    />
  );
}
