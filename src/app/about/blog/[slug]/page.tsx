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
  "why-do-my-dogs-feet-smell-like-fritos": "why-do-my-dog’s-feet-smell-like-fritos",
  "diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dogs-mind":
    "diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dog’s-mind",
  "new-years-resolutions-health-goals-for-dogs-in-2025":
    "new-year’s-resolutions-health-goals-for-dogs-in-2025",
  "protecting-your-dogs-paws-in-winter-tips-for-happyhealthy-feet":
    "protecting-your-dog’s-paws-in-winter-tips-for-happyhealthy-feet",
  "why-dogs-eat-poop-the-smelly-truth-we-cant-ignore":
    "why-dogs-eat-poop-the-smelly-truth-we-can’t-ignore",
  "winter-weight-management-adjusting-your-dogs-diet-and-exercise":
    "winter-weight-management-adjusting-your-dog’s-diet-and-exercise",
  "year-in-review-celebrating-your-dogs-wins-in-2024":
    "year-in-review-celebrating-your-dog’s-wins-in-2024",
  "the-science-behind-dog-poop-what-your-dogs-poop-can-tell-you":
    "the-science-behind-dog-poop-what-your-dog’s-poop-can-tell-you",
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
  const asciiByLiveSlug = Object.fromEntries(
    Object.entries(localSlugOverrides)
      .filter(([, liveSlug]) => [...liveSlug].some((char) => char.charCodeAt(0) > 127))
      .map(([asciiSlug, liveSlug]) => [liveSlug, asciiSlug]),
  );

  return blogPosts
    .filter((post) => !post.href.startsWith("/about/blog/"))
    .map((post) => {
      const liveSlug = getLiveSlug(post.href);
      return { slug: asciiByLiveSlug[liveSlug] ?? liveSlug };
    });
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
