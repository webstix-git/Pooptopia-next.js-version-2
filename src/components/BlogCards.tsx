import type { BlogPost } from "@/lib/blog";
import { getLocalBlogHref, liveSlugForLocalHref } from "@/lib/blog-href";
import { liveBlogCategories } from "@/lib/live-blog-categories";
import { liveBlogDescriptions } from "@/lib/live-blog-descriptions";
import { liveBlogImages } from "@/lib/live-blog-images";

function getBlogImage(post: BlogPost) {
  const liveSlug = liveSlugForLocalHref(post.href);
  return liveBlogImages[liveSlug] ?? post.image;
}

function getBlogDescription(post: BlogPost) {
  const liveSlug = liveSlugForLocalHref(post.href);
  return liveBlogDescriptions[liveSlug] ?? "Read helpful tips for happier dogs and cleaner yards.";
}

function getBlogCategories(post: BlogPost) {
  const liveSlug = liveSlugForLocalHref(post.href);
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
