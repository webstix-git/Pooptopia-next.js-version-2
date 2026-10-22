import type { BlogPost } from "@/lib/blog";

const localSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog-what-you-need-to-know": "can-you-put-neosporin-on-a-dog",
  "how-to-stop-a-dog-from-barking-a-guide-to-sanity": "how-to-stop-a-dog-from-barking",
  "how-to-get-rid-of-skunk-smell-on-your-dog": "how-to-get-rid-of-skunk-smell",
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
