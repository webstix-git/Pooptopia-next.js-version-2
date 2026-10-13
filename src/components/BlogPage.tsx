import { BlogCards } from "@/components/BlogCards";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { blogPosts } from "@/lib/blog";

export function BlogPage() {
  return (
    <main className="reference-page reference-blog-page">
      <ReferencePageHero
        eyebrow="Woof to Waste Blog"
        title="Tips for Happier Dogs and Cleaner Yards"
        description="From everyday dog-care tips to keeping your yard clean through every season, we’re sharing helpful advice and simple ideas for life with your four-legged friends."
      />
      <section className="reference-blog-content">
        <div className="wrap">
          <BlogCards posts={blogPosts.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
