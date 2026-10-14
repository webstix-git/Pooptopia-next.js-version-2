import type { GoogleReviewFeed } from "@/lib/google-reviews";
import { ReviewCard } from "@/components/ReviewCard";

export function GoogleReviews({ feed }: { feed: GoogleReviewFeed }) {
  const reviews = feed.reviews.slice(0, 9);

  return (
    <section className="google-reviews" data-screen-label="Google reviews" aria-label="Google reviews">
      <div className="wrap">
        <div className="google-reviews-head">
          <span className="eyebrow">Google reviews</span>
          <h2 className="titan">What Our Customers Are Saying</h2>
        </div>

        <ul className="google-reviews-grid">
          {reviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} compact />
            </li>
          ))}
        </ul>

        <a className="section-btn google-reviews-more" href="/reviews">
          Read all Google reviews
        </a>
      </div>
    </section>
  );
}
