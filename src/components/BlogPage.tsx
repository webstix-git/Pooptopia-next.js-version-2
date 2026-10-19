import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { blogPosts } from "@/lib/blog";
import { liveBlogCategories } from "@/lib/live-blog-categories";

const categories = ["All Posts", "Dog Health", "Dog Poop", "Lawn Health & Dog Poop", "Our Why"];
const liveSlugOverrides: Record<string, string> = {
  "can-you-put-neosporin-on-a-dog": "can-you-put-neosporin-on-a-dog-what-you-need-to-know",
  "how-to-stop-a-dog-from-barking": "how-to-stop-a-dog-from-barking-a-guide-to-sanity",
  "how-to-get-rid-of-skunk-smell": "how-to-get-rid-of-skunk-smell-on-your-dog",
};

function getPostCategories(href: string) {
  const rawSlug = decodeURIComponent(href.split("/").pop() ?? "");
  const slug = liveSlugOverrides[rawSlug] ?? rawSlug;
  return liveBlogCategories[slug] ?? [];
}

export function BlogPage({ selectedCategory = "All Posts" }: { selectedCategory?: string }) {
  const activeCategory = categories.includes(selectedCategory) ? selectedCategory : "All Posts";
  const posts = activeCategory === "All Posts"
    ? blogPosts
    : blogPosts.filter((post) => getPostCategories(post.href).includes(activeCategory));

  return (
    <main className="reference-page reference-blog-page">
      <ReferencePageHero
        eyebrow="Woof to Waste Blog"
        title="Tips for Happier Dogs and Cleaner Yards"
        description="From everyday dog-care tips to keeping your yard clean through every season, we’re sharing helpful advice and simple ideas for life with your four-legged friends."
      />
      <section className="reference-blog-content">
        <div className="wrap">
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
          <BlogCards posts={posts} />
        </div>
      </section>
    </main>
  );
}
