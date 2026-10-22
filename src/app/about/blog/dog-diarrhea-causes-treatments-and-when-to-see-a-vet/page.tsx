import type { Metadata } from "next";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { liveBlogArticles } from "@/lib/live-blog-articles";

export const metadata: Metadata = {
  title: "Dog Diarrhea: Causes, Treatments, and When to See a Vet - Pooptopia",
  description:
    "As a pet owner, seeing your dog suffer from diarrhea can be alarming. Not only can it be uncomfortable for your dog, but it can also be a messy and stressful situation for you.",
};

export default function Page() {
  return (
    <BlogDetailPage
      title="Dog Diarrhea: Causes, Treatments, and When to See a Vet"
      currentHref="/about/blog/dog-diarrhea-causes-treatments-and-when-to-see-a-vet"
      date="2024-10-17"
      dateLabel="October 17, 2024"
      description=""
      blocks={liveBlogArticles["dog-diarrhea-causes-treatments-and-when-to-see-a-vet"]}
    />
  );
}
