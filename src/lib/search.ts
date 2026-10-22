import { blogPosts, type BlogPost } from "@/lib/blog";
import { blogSlug, getLocalBlogHref } from "@/lib/blog-href";
import { liveBlogArticles } from "@/lib/live-blog-articles";
import { liveBlogDescriptions } from "@/lib/live-blog-descriptions";
import type { ArticleBlock } from "@/lib/neosporin-article";
import { searchCatalog } from "@/lib/site";

export type SiteSearchResult = {
  href: string;
  title: string;
  excerpt: string;
};

function articlePlainText(blocks: ArticleBlock[] | undefined) {
  if (!blocks) return "";
  return blocks
    .map((block) => {
      if (block.type === "image") return `${block.alt} ${block.caption}`;
      return block.inlines.map((run) => run.text).join("");
    })
    .join(" ");
}

function articleForSlug(slug: string) {
  const raw = encodeURIComponent(slug);
  return liveBlogArticles[slug] ?? liveBlogArticles[raw];
}

function descriptionForSlug(slug: string) {
  return liveBlogDescriptions[slug] ?? liveBlogDescriptions[encodeURIComponent(slug)] ?? "";
}

const blogTextByHref = new Map<string, string>(
  blogPosts.map((post) => {
    const slug = blogSlug(post.href);
    const text = `${post.title} ${descriptionForSlug(slug)} ${articlePlainText(articleForSlug(slug))}`;
    return [post.href, text.replace(/\s+/g, " ").trim()];
  }),
);

export function searchTerms(query: string) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

export function blogPostMatches(post: BlogPost, query: string) {
  const terms = searchTerms(query);
  if (!terms.length) return true;
  const haystack = (blogTextByHref.get(post.href) ?? post.title).toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

function excerptAround(text: string, terms: string[]) {
  const clean = text.replace(/\s+/g, " ").trim();
  const lower = clean.toLowerCase();
  const index = terms.reduce((found, term) => (found >= 0 ? found : lower.indexOf(term)), -1);
  if (index < 0) return clean.slice(0, 220);
  const start = Math.max(0, index - 80);
  const end = Math.min(clean.length, index + 140);
  const slice = clean.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${slice}${end < clean.length ? "…" : ""}`;
}

export function searchSite(query: string): SiteSearchResult[] {
  const terms = searchTerms(query);
  if (!terms.length) return [];

  const pages = searchCatalog.flatMap((item) => {
    const haystack = `${item.title} ${item.text}`.toLowerCase();
    if (!terms.every((term) => haystack.includes(term))) return [];
    const titleHit = terms.some((term) => item.title.toLowerCase().includes(term));
    return [{ href: item.href, title: item.title, excerpt: excerptAround(item.text, terms), rank: titleHit ? 2 : 1 }];
  });

  const posts = blogPosts.flatMap((post) => {
    const text = blogTextByHref.get(post.href) ?? post.title;
    if (!blogPostMatches(post, query)) return [];
    const titleHit = terms.some((term) => post.title.toLowerCase().includes(term));
    return [{
      href: getLocalBlogHref(post),
      title: post.title,
      excerpt: excerptAround(text, terms),
      rank: titleHit ? 3 : 1,
    }];
  });

  return [...pages, ...posts]
    .sort((a, b) => b.rank - a.rank || a.title.localeCompare(b.title))
    .map(({ href, title, excerpt }) => ({ href, title, excerpt }));
}
