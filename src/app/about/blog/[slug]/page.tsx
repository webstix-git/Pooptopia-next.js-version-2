import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/BlogDetailPage";
import { blogPosts } from "@/lib/blog";
import { liveBlogArticles } from "@/lib/live-blog-articles";
import { liveBlogImages } from "@/lib/live-blog-images";
import type { ArticleBlock } from "@/lib/neosporin-article";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const localSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog": "can-you-put-neosporin-on-a-dog-what-you-need-to-know",
  "how-to-stop-a-dog-from-barking": "how-to-stop-a-dog-from-barking-a-guide-to-sanity",
  "how-to-get-rid-of-skunk-smell": "how-to-get-rid-of-skunk-smell-on-your-dog",
};

function getLiveSlug(postHref: string) {
  return decodeURIComponent(postHref.split("/").pop() ?? "");
}

function getPost(slug: string) {
  const liveSlug = localSlugOverrides[slug] ?? slug;
  return blogPosts.find(
    (post) =>
      getLiveSlug(post.href) === liveSlug ||
      post.href === `/about/blog/${slug}`,
  );
}

export function generateStaticParams() {
  return blogPosts.filter((post) => !post.href.startsWith("/about/blog/")).map((post) => ({
    slug: post.href.startsWith("/about/blog/")
      ? post.href.split("/").pop() ?? ""
      : encodeURIComponent(getLiveSlug(post.href)),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(decodeURIComponent(slug));
  return post
    ? { title: `${post.title} - Pooptopia`, description: post.title }
    : { title: "Blog - Pooptopia" };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPost(decodedSlug);

  if (!post) notFound();

  const liveSlug = getLiveSlug(post.href);
  const articleBlocks = liveBlogArticles[liveSlug] ?? liveBlogArticles[encodeURIComponent(liveSlug)];
  const blocks: ArticleBlock[] = articleBlocks ?? [
    {
      type: "image",
      src: liveBlogImages[liveSlug] ?? liveBlogImages[encodeURIComponent(liveSlug)] ?? post.image,
      alt: post.title,
      caption: post.title,
    },
  ];
  const postsWithoutExcerpt = new Set([
    "protecting-your-dog’s-paws-in-winter-tips-for-happyhealthy-feet",
    "why-dogs-eat-poop-the-smelly-truth-we-can’t-ignore",
    "year-in-review-celebrating-your-dog’s-wins-in-2024",
    "new-year’s-resolutions-health-goals-for-dogs-in-2025",
    "winter-weight-management-adjusting-your-dog’s-diet-and-exercise",
    "the-science-behind-dog-poop-what-your-dog’s-poop-can-tell-you",
    "how-will-picking-up-dog-poop-keep-my-lawn-in-good-condition",
    "what-to-look-for-when-choosing-a-doggie-daycare",
    "how-dogs-are-considered-property-in-terms-of-the-law",
  ]);
  const description = postsWithoutExcerpt.has(liveSlug) ? "" : post.title;

  return (
    <BlogDetailPage
      title={post.title}
      currentHref={`/about/blog/${decodedSlug}`}
      date={post.date}
      dateLabel={post.dateLabel}
      description={description}
      blocks={blocks}
    />
  );
}
