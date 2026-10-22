import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "How Daylight Savings Time Affects Your Dog: What You Need to Know - Pooptopia",
  description:
    "Daylight Savings Time (DST) can disrupt not just our schedules but our pets' routines as well. As clocks change and daylight hours shift, your dog might experience changes in behavior, sleep patterns, and more.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="How Daylight Savings Time Affects Your Dog: What You Need to Know"
      currentHref="/about/blog/how-daylight-savings-time-affects-your-dog-what-you-need-to-know"
      date="2024-09-17"
      dateLabel="September 17, 2024"
      description=""
      blocks={liveBlogArticles["how-daylight-savings-time-affects-your-dog-what-you-need-to-know"]}
    />
  );
}
