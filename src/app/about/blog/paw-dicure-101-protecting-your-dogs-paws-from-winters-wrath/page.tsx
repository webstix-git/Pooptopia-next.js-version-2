import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Paw-dicure 101: Protecting Your Dog's Paws from Winter's Wrath - Pooptopia",
  description:
    "As the winter chill creeps in and snow blankets the ground, dog owners everywhere face a unique seasonal challenge: protecting their beloved pup’s paws.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Paw-dicure 101: Protecting Your Dog's Paws from Winter's Wrath"
      currentHref="/about/blog/paw-dicure-101-protecting-your-dogs-paws-from-winters-wrath"
      date="2024-12-03"
      dateLabel="December 3, 2024"
      description=""
      blocks={liveBlogArticles["paw-dicure-101-protecting-your-dogs-paws-from-winters-wrath"]}
    />
  );
}
