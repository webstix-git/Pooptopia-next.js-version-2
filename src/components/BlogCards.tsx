import type { BlogPost } from "@/lib/blog";
import { liveBlogCategories } from "@/lib/live-blog-categories";
import { liveBlogDescriptions } from "@/lib/live-blog-descriptions";
import { liveBlogImages } from "@/lib/live-blog-images";

const localSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog-what-you-need-to-know": "can-you-put-neosporin-on-a-dog",
  "how-to-stop-a-dog-from-barking-a-guide-to-sanity": "how-to-stop-a-dog-from-barking",
  "how-to-get-rid-of-skunk-smell-on-your-dog": "how-to-get-rid-of-skunk-smell",
};

function getLocalBlogHref(post: BlogPost) {
  if (post.href.startsWith("/about/blog/")) return post.href;

  const liveSlug = decodeURIComponent(post.href.split("/").pop() ?? "");
  const localSlug = localSlugOverrides[liveSlug] ?? liveSlug;
  return `/about/blog/${encodeURIComponent(localSlug)}`;
}

function getBlogImage(post: BlogPost) {
  const rawSlug = decodeURIComponent(post.href.split("/").pop() ?? "");
  const liveSlug = Object.entries(localSlugOverrides).find(([, localSlug]) => localSlug === rawSlug)?.[0] ?? rawSlug;
  return liveBlogImages[liveSlug] ?? post.image;
}

function getBlogDescription(post: BlogPost) {
  const rawSlug = decodeURIComponent(post.href.split("/").pop() ?? "");
  const liveSlug = Object.entries(localSlugOverrides).find(([, localSlug]) => localSlug === rawSlug)?.[0] ?? rawSlug;
  return liveBlogDescriptions[liveSlug] ?? "Read helpful tips for happier dogs and cleaner yards.";
}

function getBlogCategories(post: BlogPost) {
  const rawSlug = decodeURIComponent(post.href.split("/").pop() ?? "");
  const liveSlug = Object.entries(localSlugOverrides).find(([, localSlug]) => localSlug === rawSlug)?.[0] ?? rawSlug;
  return liveBlogCategories[liveSlug] ?? [];
}

export function BlogCards({ posts }: { posts: BlogPost[] }) {
  return (
    <ul className="blog-grid">
      {posts.map((post) => (
        <li key={post.href}>
          <a
            className="blog-card"
            href={getLocalBlogHref(post)}
          >
            <img src={getBlogImage(post)} alt="" />
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <time dateTime={post.date}>{post.dateLabel}</time>
                {getBlogCategories(post).length ? <span>{getBlogCategories(post).join(", ")}</span> : null}
              </div>
              <h3>{post.title}</h3>
              <p className="blog-card-description">{getBlogDescription(post)}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
