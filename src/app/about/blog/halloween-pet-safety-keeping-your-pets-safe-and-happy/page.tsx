import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Halloween Pet Safety: Keeping Your Pets Safe and Happy - Pooptopia",
  description:
    "Halloween is a time of fun, costumes, candy, and festivities, but it can also present hidden dangers to our pets.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Halloween Pet Safety: Keeping Your Pets Safe and Happy"
      currentHref="/about/blog/halloween-pet-safety-keeping-your-pets-safe-and-happy"
      date="2024-10-24"
      dateLabel="October 24, 2024"
      description=""
      blocks={liveBlogArticles["halloween-pet-safety-keeping-your-pets-safe-and-happy"]}
    />
  );
}
