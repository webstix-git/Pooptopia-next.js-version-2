"use client";

import { useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews";
import { ReviewCard } from "@/components/ReviewCard";

const PAGE_SIZE = 6;
const MAX_REVIEWS = 30;
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Pooptopia/@42.5860057,-87.8893958,17z/data=!3m1!4b1!4m6!3m5!1s0xa2a30284adc28299:0xc27dba6483cd5a74!8m2!3d42.5860057!4d-87.8893958!16s%2Fg%2F11vytnxdx2?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D";

export function ReviewsGrid({ reviews }: { reviews: GoogleReview[] }) {
  const [visibleCount, setVisibleCount] = useState(Math.min(12, MAX_REVIEWS, reviews.length));
  const visibleReviews = reviews.slice(0, Math.min(visibleCount, MAX_REVIEWS));
  const canShowMore = visibleCount < Math.min(MAX_REVIEWS, reviews.length);

  if (!reviews.length) {
    return <p className="reviews-empty">Google reviews are currently unavailable.</p>;
  }

  return (
    <>
      <div className="reference-reviews-grid">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      {canShowMore ? (
        <button
          className="section-btn reviews-more"
          type="button"
          onClick={() => setVisibleCount((current) => Math.min(current + PAGE_SIZE, MAX_REVIEWS, reviews.length))}
        >
          Read more reviews
        </button>
      ) : null}
      {!canShowMore ? (
        <a className="section-btn reviews-more" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
          Read all Google reviews
        </a>
      ) : null}
    </>
  );
}
