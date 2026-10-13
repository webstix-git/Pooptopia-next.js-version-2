import { BlogArticle } from "@/components/BlogArticle";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import type { ArticleBlock } from "@/lib/neosporin-article";

type BlogDetailPageProps = {
  title: string;
  currentHref: string;
  date: string;
  dateLabel: string;
  description: string;
  blocks: ArticleBlock[];
};

export function BlogDetailPage({ title, currentHref, date, dateLabel, description, blocks }: BlogDetailPageProps) {
  return (
    <main className="reference-page reference-blog-detail-page">
      <ReferencePageHero eyebrow="Woof to Waste Blog" title={title} description={description} />
      <section className="reference-blog-detail-content">
        <div className="wrap">
          <BlogPostLayout currentHref={currentHref}>
            <div className="reference-blog-detail-date">
              <time dateTime={date}>{dateLabel}</time>
            </div>
            <BlogArticle blocks={blocks} />
          </BlogPostLayout>
        </div>
      </section>
    </main>
  );
}
