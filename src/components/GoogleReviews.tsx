import type { GoogleReviewFeed } from "@/lib/google-reviews";
import { ReviewCard } from "@/components/ReviewCard";

type GoogleReviewsProps = {
  feed: GoogleReviewFeed;
  className?: string;
  label?: string;
  title?: string;
  summary?: string;
  moreHref?: string;
  moreLabel?: string;
  external?: boolean;
};

export function GoogleReviews({
  feed,
  className,
  label = "Pooptopia Reviews",
  title = "What clients say about Pooptopia.",
  summary,
  moreHref = "/reviews",
  moreLabel = "Read All Pooptopia Reviews",
  external = false,
}: GoogleReviewsProps) {
  const reviews = feed.reviews.slice(0, 9);

  return (
    <section
      className={className ? `google-reviews ${className}` : "google-reviews"}
      data-screen-label={label}
      aria-label={label}
    >
      <div className="wrap">
        <div className="google-reviews-head">
          <span className="eyebrow">Pooptopia Reviews</span>
          <h2 className="titan">{title}</h2>
          {summary ? <p>{summary}</p> : null}
        </div>

        <ul className="google-reviews-grid">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} compact />
            </li>
          ))}
        </ul>

        <a
          className="section-btn google-reviews-more"
          href={moreHref}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {moreLabel}
        </a>
      </div>
    </section>
  );
}
