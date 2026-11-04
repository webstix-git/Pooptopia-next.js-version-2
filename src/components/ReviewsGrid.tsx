import { GOOGLE_REVIEWS_URL, type GoogleReview } from "@/lib/google-reviews";
import { ReviewCard } from "@/components/ReviewCard";

export function ReviewsGrid({ reviews }: { reviews: GoogleReview[] }) {
  if (!reviews.length) {
    return <p className="reviews-empty">Google reviews are currently unavailable.</p>;
  }

  return (
    <>
      <div className="reference-reviews-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <a className="section-btn reviews-more" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
        Read all Google reviews
      </a>
    </>
  );
}
