import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { blogPosts } from "@/lib/blog";
import { blogSlug } from "@/lib/blog-href";
import { liveBlogCategories } from "@/lib/live-blog-categories";
import { blogPostMatches } from "@/lib/search";

const categories = ["All Posts", "Dog Health", "Dog Poop", "Lawn Health & Dog Poop", "Our Why"];
const postsPerPage = 12;
const liveSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog": "can-you-put-neosporin-on-a-dog-what-you-need-to-know",
  "how-to-stop-a-dog-from-barking": "how-to-stop-a-dog-from-barking-a-guide-to-sanity",
  "how-to-get-rid-of-skunk-smell": "how-to-get-rid-of-skunk-smell-on-your-dog",
};

function getPostCategories(href: string) {
  const slug = liveSlugOverrides[blogSlug(href)] ?? blogSlug(href);
  return liveBlogCategories[slug] ?? [];
}

export function BlogPage({
  selectedCategory = "All Posts",
  currentPage = 1,
  query = "",
}: {
  selectedCategory?: string;
  currentPage?: number;
  query?: string;
}) {
  const activeCategory = categories.includes(selectedCategory) ? selectedCategory : "All Posts";
  const searchQuery = query.trim();
  const categoryPosts = activeCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter((post) => getPostCategories(post.href).includes(activeCategory));
  const posts = searchQuery
    ? blogPosts.filter((post) => blogPostMatches(post, searchQuery))
    : categoryPosts;
  const pageCount = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const page = Math.min(Math.max(currentPage, 1), pageCount);
  const visiblePosts = posts.slice((page - 1) * postsPerPage, page * postsPerPage);

  function getPageHref(pageNumber: number) {
    const params = new URLSearchParams();
    if (activeCategory !== "All Posts") params.set("blogcategory", activeCategory);
    if (searchQuery) params.set("q", searchQuery);
    if (pageNumber > 1) params.set("page", String(pageNumber));
    const queryString = params.toString();
    return queryString ? `/about/blog?${queryString}` : "/about/blog";
  }

  return (
    <main className="reference-page reference-blog-page">
      <ReferencePageHero
        eyebrow="Woof to Waste Blog"
        title="Tips for Happier Dogs and Cleaner Yards"
        description="From everyday dog-care tips to keeping your yard clean through every season, we’re sharing helpful advice and simple ideas for life with your four-legged friends."
      />
      <section className="reference-blog-content">
        <div className="wrap">
          <div className="blog-toolbar">
            <nav className="reference-blog-categories" aria-label="Blog categories">
              {categories.map((category) => {
                const href = category === "All Posts"
                  ? "/about/blog"
                  : `/about/blog?blogcategory=${encodeURIComponent(category)}`;
                return (
                  <Link
                    key={category}
                    className={category === activeCategory ? "is-active" : ""}
                    href={href}
                    aria-current={category === activeCategory ? "page" : undefined}
                  >
                    {category}
                  </Link>
                );
              })}
            </nav>
            <form className="blog-search" action="/about/blog" method="get" role="search">
              <label className="sr-only" htmlFor="blog-search">
                Search blog posts
              </label>
              <input
                id="blog-search"
                name="q"
                type="search"
                defaultValue={searchQuery}
                placeholder="Search blog posts"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          {searchQuery ? (
            <p className="blog-search-status">
              {posts.length === 0
                ? `No articles match “${searchQuery}”.`
                : `${posts.length} ${posts.length === 1 ? "article matches" : "articles match"} “${searchQuery}”.`}
            </p>
          ) : null}
          <BlogCards posts={visiblePosts} />
          {pageCount > 1 ? (
            <nav className="reference-blog-pagination" aria-label="Blog pagination">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <Link
                  key={pageNumber}
                  className={pageNumber === page ? "is-active" : ""}
                  href={getPageHref(pageNumber)}
                  aria-current={pageNumber === page ? "page" : undefined}
                >
                  {pageNumber}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </section>
    </main>
  );
}
