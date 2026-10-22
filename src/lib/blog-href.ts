import type { BlogPost } from "@/lib/blog";

const localSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog-what-you-need-to-know": "can-you-put-neosporin-on-a-dog",
  "how-to-stop-a-dog-from-barking-a-guide-to-sanity": "how-to-stop-a-dog-from-barking",
  "how-to-get-rid-of-skunk-smell-on-your-dog": "how-to-get-rid-of-skunk-smell",
  "why-do-my-dog’s-feet-smell-like-fritos": "why-do-my-dogs-feet-smell-like-fritos",
  "diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dog’s-mind":
    "diy-cognitive-dog-toys-for-home-how-to-stimulate-your-dogs-mind",
  "new-year’s-resolutions-health-goals-for-dogs-in-2025":
    "new-years-resolutions-health-goals-for-dogs-in-2025",
  "protecting-your-dog’s-paws-in-winter-tips-for-happyhealthy-feet":
    "protecting-your-dogs-paws-in-winter-tips-for-happyhealthy-feet",
  "why-dogs-eat-poop-the-smelly-truth-we-can’t-ignore":
    "why-dogs-eat-poop-the-smelly-truth-we-cant-ignore",
  "winter-weight-management-adjusting-your-dog’s-diet-and-exercise":
    "winter-weight-management-adjusting-your-dogs-diet-and-exercise",
  "year-in-review-celebrating-your-dog’s-wins-in-2024":
    "year-in-review-celebrating-your-dogs-wins-in-2024",
  "the-science-behind-dog-poop-what-your-dog’s-poop-can-tell-you":
    "the-science-behind-dog-poop-what-your-dogs-poop-can-tell-you",
};

export function blogSlug(href: string) {
  return decodeURIComponent(href.split("/").pop() ?? "");
}

export function getLocalBlogHref(post: Pick<BlogPost, "href">) {
  if (post.href.startsWith("/about/blog/")) return post.href;

  const liveSlug = blogSlug(post.href);
  const localSlug = localSlugOverrides[liveSlug] ?? liveSlug;
  return `/about/blog/${encodeURIComponent(localSlug)}`;
}

export function liveSlugForLocalHref(href: string) {
  const rawSlug = blogSlug(href);
  return Object.entries(localSlugOverrides).find(([, localSlug]) => localSlug === rawSlug)?.[0] ?? rawSlug;
}
