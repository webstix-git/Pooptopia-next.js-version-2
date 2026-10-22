import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "The Myth of Rain Washing Away Dog Poop: Why You Should Scoop - Pooptopia",
  description:
    "Many dog owners believe that rain will wash away dog poop, making regular cleanup unnecessary. This myth is not only incorrect but also potentially harmful to your yard, local environment, and health.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="The Myth of Rain Washing Away Dog Poop: Why You Should Scoop"
      currentHref="/about/blog/the-myth-of-rain-washing-away-dog-poop-why-you-should-scoop"
      date="2024-06-05"
      dateLabel="June 5, 2024"
      description=""
      blocks={liveBlogArticles["the-myth-of-rain-washing-away-dog-poop-why-you-should-scoop"]}
    />
  );
}
