import { ReferencePageHero } from "@/components/ReferencePageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function ReviewsPage() {
  const feed = await getGoogleReviews();

  return (
    <main className="reference-page reference-reviews-page">
      <ReferencePageHero
        eyebrow="Customer Reviews"
        title="Don&apos;t Just Take Our Word for It."
        description="We love helping local dog owners enjoy cleaner yards, and it means a lot when they share their experience with us. Here&apos;s what our customers have to say about Pooptopia."
      />
      <section className="reference-reviews-content">
        <div className="wrap">
          <div className="reference-reviews-grid">
            {(feed?.reviews ?? []).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
