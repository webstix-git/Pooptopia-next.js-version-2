import { FaqList } from "@/components/FaqList";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ServiceArea } from "@/components/ServiceArea";
import { BlogCards } from "@/components/BlogCards";
import { blogPosts } from "@/lib/blog";
import { getGoogleReviews } from "@/lib/google-reviews";
import { homeFaqs, REQUEST_URL } from "@/lib/site";

function GoogleStars({ rating }: { rating: number }) {
  return (
    <span className="hero-google-stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.min(1, Math.max(0, rating - index));
        return (
          <span className="hero-google-star" key={index}>
            <svg viewBox="0 0 24 24">
              <path
                fill="#e4e7ee"
                d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="#f5b400"
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </span>
        );
      })}
    </span>
  );
}

const standouts = [
  {
    icon: "home",
    title: "Two of us, from the first visit.",
    body: "Kim and David come to every estimate together, just like our two-person teams in the field. We walk your yard with you, answer your questions, and help you choose the service that fits.",
  },
  {
    icon: "users",
    title: "Two-person teams. A thorough search.",
    body: "Every visit includes two trained team members. We search in perpendicular directions to help find waste that a single pass can miss.",
  },
  {
    icon: "clipboard-check",
    title: "Real people you can reach",
    body: "Questions about your yard or your service? You can call, text, or email the people who run Pooptopia. We get to know you and your dogs.",
  },
  {
    icon: "sparkles",
    title: "Targeted spot sanitization",
    body: "When waste leaves residue, we sanitize the affected area, including appropriate grass and other affected surfaces, to support yard hygiene.",
  },
  {
    icon: "dog",
    title: "Toys gathered and tidied",
    body: "We pick up and tidy your dog's toys as part of the visit. It's one of the small details that makes the service more complete.",
  },
  {
    icon: "camera",
    title: "Updates, recaps, and photos",
    body: "You hear from us when we arrive and when the work is complete. Each visit includes a detailed recap and a photo of your secured gate or completed yard.",
  },
  {
    icon: "droplets",
    title: "Equipment sanitized throughout the job",
    body: "If residue gets on equipment, we sanitize it on the spot. All equipment is sanitized after every job before it goes into another yard.",
  },
  {
    icon: "trash2",
    title: "Dog waste bagged and hauled away.",
    body: "We bag the dog waste and take it with us. You don't have to store it in your trash bin between pickups.",
  },
];

function StandoutIcon({ name }: { name: string }) {
  const paths = {
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
    sparkles: (
      <>
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
        <path d="M20 2v4" />
        <path d="M22 4h-4" />
        <circle cx="4" cy="20" r="2" />
      </>
    ),
    trash2: (
      <>
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
    dog: (
      <>
        <path d="M11.25 16.25h1.5L12 17z" />
        <path d="M16 14v.5" />
        <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
        <path d="M8 14v.5" />
        <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      </>
    ),
    camera: (
      <>
        <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
        <circle cx="12" cy="13" r="3" />
      </>
    ),
    "shield-check": (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    droplets: (
      <>
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </>
    ),
    "clipboard-check": (
      <>
        <rect width="8" height="4" x="8" y="2" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
    home: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
  } as const;

  return (
    <svg className="stands-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name as keyof typeof paths]}
    </svg>
  );
}

export async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <main id="top">
        <section className="hero" data-screen-label="Hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-pill">
                <svg className="hero-pin" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                KENOSHA, WI · RACINE, WI · WALWORTH COUNTY, WI · LAKE COUNTY, IL
              </p>
              <h1 className="titan">Stop dodging landmines in your own backyard.</h1>
              <p>
                The smell. The flies. The mess your dog tracks back into the house. It doesn&apos;t take
                long for skipped scooping to become another chore hanging over your week. Pooptopia™
                takes the rake out of your hands. We scoop, spot sanitize, bag, and haul it away, then
                send you a visit recap and a photo of your latched gate or completed yard.
              </p>
              <div className="hero-actions">
              <a className="btn-solid" href={REQUEST_URL}>
                Request Your Estimate
                <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn-outline" href="tel:2623512147">
                Call 262-351-2147
              </a>
              </div>
              {googleReviews?.rating != null && googleReviews.total != null ? (
                <a
                  className="hero-google"
                  href={googleReviews.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="hero-google-mark" viewBox="0 0 48 48" aria-hidden="true">
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  <span className="hero-google-copy">
                    <span className="hero-google-name">Google Rating</span>
                    <span className="hero-google-score">
                      <strong>{googleReviews.rating.toFixed(1)}</strong>
                      <GoogleStars rating={googleReviews.rating} />
                    </span>
                    <span className="hero-google-count">
                      Based on {googleReviews.total.toLocaleString()}{" "}
                      {googleReviews.total === 1 ? "review" : "reviews"}
                    </span>
                  </span>
                </a>
              ) : null}
            </div>
            <div className="hero-media">
              <div className="hero-card">
                <img
                  className="hero-shot"
                  src="/images/hero-before-after.jpg"
                  alt="Before and after a lawn cleanup in a fenced yard"
                  width={1000}
                  height={1000}
                />
                <p className="hero-note">
                  <strong>Real yard. One visit.</strong>
                  <span>Before and after from a Kenosha-area client.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-perks" data-screen-label="Hero points">
          <div className="wrap">
            <ul className="hero-points">
              <li>In-person estimates</li>
              <li>Two-person team on every visit</li>
              <li>Visit recap and photo every time</li>
              <li>Locally owned, family operated</li>
            </ul>
          </div>
        </section>

        <section className="yard-cost" data-screen-label="The part nobody talks about">
          <div className="wrap">
            <p className="yard-cost-kicker">The part nobody talks about</p>
            <h2 className="titan">You love your dog. The cleanup? Probably less.</h2>
            <ul className="yard-cost-grid">
              <li>
                <div className="yard-cost-heading">
                  <svg className="yard-cost-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </svg>
                  <h3>The mess keeps coming</h3>
                </div>
                <p>Skip a few days and the piles add up. Regular service keeps dog waste from becoming one more thing you have to catch up on.</p>
              </li>
              <li>
                <div className="yard-cost-heading">
                  <svg className="yard-cost-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.25 16.25h1.5L12 17z" />
                    <path d="M16 14v.5" />
                    <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
                    <path d="M8 14v.5" />
                    <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
                  </svg>
                  <h3>It follows you inside</h3>
                </div>
                <p>Nobody wants dog waste coming through the door on shoes or paws. A thorough cleanup means less mess left behind to step in.</p>
              </li>
              <li>
                <div className="yard-cost-heading">
                  <svg className="yard-cost-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16" />
                    <path d="M9 7V5h6v2" />
                    <path d="M6.5 7l.8 13h9.4l.8-13" />
                    <path d="M10 11v6M14 11v6" />
                  </svg>
                  <h3>Your time is already spoken for</h3>
                </div>
                <p>Work, errands, family, and a dog who wants your attention. Spending your free time searching the grass for poop doesn&apos;t need to be part of the routine.</p>
              </li>
            </ul>
            <p className="yard-cost-close">
              You have enough going on in your life. Let Pooptopia take care of the least fun part
              of having a dog. Our trained two-person teams follow a detailed cleaning process,
              haul the waste away, and keep you informed after every visit.
            </p>
          </div>
        </section>

        <section className="how" id="how" data-screen-label="How it works">
          <div className="wrap">
            <p className="how-kicker">How it works</p>
            <h2 className="titan">One less chore starts with three simple steps.</h2>
            <ol className="how-grid">
              <li>
                <span className="how-num">1</span>
                <h3>Tell us about your yard</h3>
                <p>Complete the estimate request form with a few details about your dogs, your yard, and the service you&apos;re looking for.</p>
              </li>
              <li>
                <span className="how-num">2</span>
                <h3>Meet us in person</h3>
                <p>Meet Kim and David for an in-person estimate. We&apos;ll walk your yard with you, answer your questions, and help you choose the service that fits.</p>
              </li>
              <li>
                <span className="how-num">3</span>
                <h3>Leave the cleanup to us</h3>
                <p>
                  Our two-person team searches your yard in perpendicular directions, removes the waste,
                  and spot sanitizes affected areas. You receive arrival and completion updates, plus a detailed recap and photo.
                </p>
              </li>
            </ol>
            <a className="how-cta" href={REQUEST_URL}>
              Request Your Estimate
              <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>

        <ServiceArea showFullLink />

        <section className="stands" data-screen-label="Why Pooptopia stands out">
          <div className="wrap">
            <p className="stands-kicker">Why Pooptopia stands out</p>
            <h2 className="titan">There&apos;s more to every visit than picking up the piles.</h2>
            <ul className="stands-grid">
              {standouts.map((item) => (
                <li key={item.title}>
                  <StandoutIcon name={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="proof" data-screen-label="Proof, not promises">
          <div className="wrap">
            <p className="proof-kicker">Proof, not promises</p>
            <h2 className="titan">
              See the difference a thorough dog waste cleanup makes.
            </h2>
            <p className="proof-lead">
              Before-and-after photos from real Pooptopia visits. Each icon marks a spot we flagged
              during the first pickup.
            </p>
            <ul className="proof-grid">
              <li>
                <img
                  src="/images/gallery/before-after-slope.webp"
                  alt="Before and after a sloped yard: waste marked on the grass, then the lawn cleared"
                  width={984}
                  height={984}
                />
              </li>
              <li>
                <img
                  src="/images/gallery/before-after-fence.webp"
                  alt="Before and after along the fence: waste marked on the grass, then the lawn cleared"
                  width={984}
                  height={984}
                />
              </li>
              <li>
                <img
                  src="/images/gallery/before-after-tree.webp"
                  alt="Before and after under a shade tree: waste marked on the grass, then the lawn cleared"
                  width={984}
                  height={984}
                />
              </li>
            </ul>
            <a className="section-btn faq-more" href="/gallery">
              See What We&apos;ve Cleaned Up
            </a>
          </div>
        </section>

        <section className="plans" data-screen-label="Choose your plan">
          <div className="wrap">
            <p className="plans-kicker">Find your service</p>
            <h2 className="titan">Choose how often we take cleanup off your list.</h2>
            <p className="plans-lead">
              Weekly visits, twice-weekly visits, or a one-time cleanup. We&apos;ll walk your yard with you
              at an in-person estimate and explain the service that fits your dogs and your routine.
            </p>
            <ul className="plans-grid">
              <li className="plans-card is-featured">
                <p className="plans-badge is-popular">Most popular</p>
                <h3>Pooptopia Premium Package</h3>
                <p className="plans-freq">Weekly dog waste removal</p>
                <p>
                  A regular cleanup you don&apos;t have to keep adding to your calendar. Our two-person team
                  follows a thorough cleaning process, removes and hauls away dog waste, and spot
                  sanitizes affected areas.
                </p>
                <ul>
                  <li>Weekly scheduled visits</li>
                  <li>Cross-grid search</li>
                  <li>Targeted spot sanitization</li>
                  <li>Waste bagged and hauled away</li>
                  <li>Visit recap and gate or completed-yard photo</li>
                </ul>
                <a className="plans-cta" href="/services#premium">
                  See What&apos;s Included
                </a>
              </li>
              <li className="plans-card">
                <p className="plans-badge is-value">Best value</p>
                <h3>Pooptopia Prestige Package</h3>
                <p className="plans-freq">Twice-weekly dog waste removal</p>
                <p>
                  More frequent visits to help keep up with your dogs. The same detailed cleaning process
                  and thoughtful communication, with two visits each week.
                </p>
                <ul>
                  <li>Twice-weekly scheduled visits</li>
                  <li>Cross-grid search</li>
                  <li>Targeted spot sanitization</li>
                  <li>Waste bagged and hauled away</li>
                  <li>Visit recap and gate or completed-yard photo</li>
                </ul>
                <a className="plans-cta" href="/services#prestige">
                  See What&apos;s Included
                </a>
              </li>
              <li className="plans-card">
                <p className="plans-badge is-once">One time</p>
                <h3>Pooptopia Precision Clean</h3>
                <p className="plans-freq">One-time dog waste removal</p>
                <p>
                  Need help catching up? We&apos;ll search your yard, remove accumulated dog waste, and haul
                  it away in a one-time visit.
                </p>
                <ul>
                  <li>One-time cleanup</li>
                  <li>Thorough cross-grid search</li>
                  <li>Targeted spot sanitization</li>
                  <li>Waste bagged and hauled away</li>
                  <li>Visit recap and gate or completed-yard photo</li>
                </ul>
                <a className="plans-cta" href="/services#precision-clean">
                  See What&apos;s Included
                </a>
              </li>
            </ul>
            <p className="plans-note">
              Looking for sanitation-only service or dog let-out and playtime with waste pickup? Explore{" "}
              <a href="/services#paw-protection">Paw Protection</a> and{" "}
              <a href="/services#playtime-pickup">Playtime Pickup</a>.
              <br />
              <a className="section-btn faq-more" href="/services">
                Explore All Pooptopia Services
              </a>
            </p>
          </div>
        </section>

        <section className="started" data-screen-label="Why we do this">
          <div className="wrap started-grid">
            <img
              src="/images/about-family.jpg"
              alt="Kim, David, and Logan with Olive and Louie"
              width={1024}
              height={681}
            />
            <div>
              <p className="started-kicker">Why we do this</p>
              <h2 className="titan">We started Pooptopia because we lost a dog.</h2>
              <p>
                Losing Tico at four and a half years old changed how we thought about caring for our dogs. Later,
                when our puppy Princess Olive came home with parasites, we became more attentive to
                what dogs encounter in their own yards.
              </p>
              <p>
                Those experiences helped shape Pooptopia. We&apos;re Kim and David Mendlik, and we run this
                family business with a simple standard: pay attention, follow a thorough process, and
                keep clients informed.
              </p>
              <p>
                We know how much your dogs mean to you. They&apos;re the reason we take the details seriously.
              </p>
              <a className="started-cta" href="/about/our-why">
                Meet the Family
              </a>
            </div>
          </div>
        </section>

        <section className="home-video-intro">
          <div className="wrap home-video-intro-grid">
            <div className="home-video-intro-media-wrap">
              <h3 className="home-video-heading">How Pooptopia started</h3>
              <div className="home-video-intro-media">
              <iframe
                title="Inside Pooptopia"
                src="https://player.vimeo.com/video/1081152204?badge=0&byline=0&h=25f1c776d6&portrait=0&title=0&autoplay=0&loop=0&muted=0&controls=1"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
              </div>
              <p className="home-video-quote">
                &ldquo;It was more about what can we do to help families that have dogs so that way their dog is cared for in a way that our dog wasn&apos;t.&rdquo;
              </p>
            </div>
            <div className="home-video-intro-copy">
              <p className="started-kicker">Our Experience</p>
              <h2 className="titan">A thoughtful process. Every yard. Every visit.</h2>
              <p>
                Experience shows up in the details: knowing where waste gets missed, noticing changes
                in your yard, and keeping you informed about the work.
              </p>
              <p>
                Our trained two-person teams follow a consistent process. We search in perpendicular
                directions, remove and haul away dog waste, and spot sanitize affected areas. Equipment
                is sanitized throughout the job and after every visit.
              </p>
              <p>
                We also pay attention to your dogs&apos; toys, gate security, unusual waste, and yard hazards.
                You receive a detailed recap and a photo, so you know what was done and anything we noticed.
              </p>
              <p>
                Whether you choose our <a href="/services#premium">Pooptopia Premium Package</a>,{" "}
                <a href="/services#prestige">Pooptopia Prestige Package</a>, or{" "}
                <a href="/services#precision-clean">Pooptopia Precision Clean</a>, whichever you choose,
                you&apos;re working with real people who take the cleanup, and your trust, seriously.
              </p>
              <a className="started-cta home-experience-cta" href={REQUEST_URL}>
                Request Your Estimate
              </a>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-band" data-screen-label="Blog">
          <div className="wrap blog-inner band-pad">
            <div className="blog-head">
              <div className="stack">
                <span className="eyebrow">Woof to Waste Blog</span>
                <h2 className="titan section-title">Tips for Happier Dogs and Cleaner Yards</h2>
              </div>
            </div>
            <p className="blog-description">From everyday dog-care tips to keeping your yard clean through every season, we’re sharing helpful advice<br />and simple ideas for life with your four-legged friends.</p>
            <BlogCards posts={blogPosts.slice(0, 3)} />
            <a className="section-btn blog-all" href="/about/blog">
              Read all blog posts
            </a>
          </div>
        </section>

        {googleReviews && googleReviews.reviews.length > 0 ? (
          <GoogleReviews feed={googleReviews} />
        ) : null}

        <section className="weekend" data-screen-label="This weekend">
          <div className="wrap">
            <div className="weekend-card">
              <h2 className="titan">
                Your dog makes the mess. We take care of the rest.
              </h2>
              <p>
                Take dog waste cleanup off your to-do list. Start with an in-person estimate so we can
                meet you, see your yard, and answer your questions.
              </p>
              <div className="weekend-actions">
                <a className="weekend-cta" href={REQUEST_URL}>
                  Request Your Estimate
                  <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a className="weekend-call" href="tel:2623512147">
                  Call 262-351-2147
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq" data-screen-label="FAQs">
          <div className="wrap band-pad">
            <div className="faq-page-intro">
              <span className="started-kicker">FAQs</span>
              <h2 className="titan">Frequently Asked Questions</h2>
              <p className="faq-home-note">
                Have a question about your yard or our service? Email{" "}
                <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a> or
                <br />
                call <a href="tel:2623512147">262-351-2147</a>. You&apos;ll hear from the real people behind Pooptopia.
              </p>
            </div>
            <FaqList items={homeFaqs} />
            <a className="section-btn faq-more" href="/faq">
              See all frequently asked questions
            </a>
          </div>
        </section>

    </main>
  );
}
