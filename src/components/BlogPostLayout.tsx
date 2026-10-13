import type { ReactNode } from "react";
import { blogPosts } from "@/lib/blog";

export function BlogPostLayout({ children, currentHref }: { children: ReactNode; currentHref?: string }) {
  const recent = blogPosts.filter((post) => post.href !== currentHref).slice(0, 3);
  const categories = ["All Posts", "Dog Health", "Dog Poop", "Lawn Health & Dog Poop", "Our Why"];

  return (
    <div className="blog-layout">
      <div className="blog-main">{children}</div>
      <aside className="blog-aside">
        <div className="blog-aside-card blog-category-card">
          <h2>Categories</h2>
          <ul className="blog-category-list">
            {categories.map((category, index) => (
              <li key={category}>
                <a className={index === 0 ? "is-active" : ""} href="/about/blog">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="blog-aside-card blog-signup-card">
          <h2>Sign up for blog updates!</h2>
          <p>Join my email list to receive updates and information.</p>
          <form className="blog-signup-form">
            <label className="sr-only" htmlFor="blog-email">Email address</label>
            <input id="blog-email" type="email" name="email" placeholder="Email address" />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="blog-aside-card blog-recent-card">
          <h2>Recent Posts</h2>
          <ul className="blog-related">
            {recent.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  {...(post.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <img src={post.image} alt="" />
                  <span>
                    <time dateTime={post.date}>{post.dateLabel}</time>
                    <strong>{post.title}</strong>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
