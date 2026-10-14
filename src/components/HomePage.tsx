import { FaqList } from "@/components/FaqList";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ServiceArea } from "@/components/ServiceArea";
import { BlogCards } from "@/components/BlogCards";
import { blogPosts } from "@/lib/blog";
import { getGoogleReviews } from "@/lib/google-reviews";
import { REQUEST_URL } from "@/lib/site";

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
    icon: "users",
    title: "Two-person crew, every visit",
    body: "Two sets of eyes on a perpendicular grid pattern. No pile left behind.",
  },
  {
    icon: "sparkles",
    title: "Spot sanitizing",
    body: "We disinfect the messy spots that don't come clean, knocking down bacteria and odor.",
  },
  {
    icon: "trash2",
    title: "Bagged and hauled away",
    body: "The waste leaves with us. Nothing sits in your bin all week.",
  },
  {
    icon: "dog",
    title: "Toys picked up",
    body: "We gather and tidy your dog's toys so their playground is ready to go.",
  },
  {
    icon: "camera",
    title: "Gate photo after every visit",
    body: "Proof your gate is latched and your yard is secure before we drive away.",
  },
  {
    icon: "shield-check",
    title: "Health watch",
    body: "If something looks abnormal in your dog's waste, you hear from us the same day.",
  },
  {
    icon: "droplets",
    title: "Sanitized equipment",
    body: "Rakes, buckets, and boots disinfected with vet-grade KennelSol between every yard.",
  },
  {
    icon: "clipboard-check",
    title: "Locked-in pricing",
    body: "Monthly invoicing, rate locked for 12 months, no surprise charges.",
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
                Kenosha · Racine · Walworth · Lake County
              </p>
              <h1 className="titan">Stop dodging landmines in your own backyard.</h1>
              <p>
                The smell. The flies. The parasites your dog tracks back into the house. It only
                takes one week of skipped scooping to lose the yard you pay for. Pooptopia takes
                the rake out of your hands for good. We scoop, sanitize, bag, and haul it away,
                then send you a photo proving your gate is latched.
              </p>
              <div className="hero-actions">
              <a className="btn-solid" href={REQUEST_URL}>
                Request Service
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
              <li>Free in-person estimate</li>
              <li>Two-person crew on every yard</li>
              <li>Price locked for 12 months</li>
              <li>Locally owned, family run since 2023</li>
            </ul>
          </div>
        </section>

        <section className="yard-cost" data-screen-label="The part nobody talks about">
          <div className="wrap">
            <p className="yard-cost-kicker">The part nobody talks about</p>
            <h2 className="titan">
              A yard full of waste isn&apos;t just gross. It&apos;s costing
              <br />
              you the space.
            </h2>
            <ul className="yard-cost-grid">
              <li>
                <div className="yard-cost-heading">
                  <svg className="yard-cost-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </svg>
                  <h3>You can smell the yard before you reach the door</h3>
                </div>
                <p>Warm days turn a week of missed piles into an odor your guests notice first.</p>
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
                  <h3>Your dog is walking through parasites</h3>
                </div>
                <p>Roundworm, giardia, and hookworm live in waste for months, and come inside on paws.</p>
              </li>
              <li>
                <div className="yard-cost-heading">
                  <svg className="yard-cost-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16" />
                    <path d="M9 7V5h6v2" />
                    <path d="M6.5 7l.8 13h9.4l.8-13" />
                    <path d="M10 11v6M14 11v6" />
                  </svg>
                  <h3>Nobody wants to be the one holding the rake</h3>
                </div>
                <p>It&apos;s the chore that gets pushed to next weekend, every weekend, until the yard is unusable.</p>
              </li>
            </ul>
            <p className="yard-cost-close">
              At Pooptopia, we do more than pick up dog poop. <span>We give you your yard back</span>.
              Family gatherings, barefoot evenings, puppy zoomies without a second thought. Let us
              handle the mess so you can fully enjoy your yard again.
            </p>
          </div>
        </section>

        <section className="how" id="how" data-screen-label="How it works">
          <div className="wrap">
            <p className="how-kicker">How it works</p>
            <h2 className="titan">Three steps and you&apos;re done scooping.</h2>
            <ol className="how-grid">
              <li>
                <span className="how-num">1</span>
                <h3>Tell us about your yard</h3>
                <p>Fill out the short service request. It takes about two minutes and there&apos;s no obligation.</p>
              </li>
              <li>
                <span className="how-num">2</span>
                <h3>Meet us in person</h3>
                <p>Kim and David walk your yard with you, price it honestly, and lock that rate for 12 months.</p>
              </li>
              <li>
                <span className="how-num">3</span>
                <h3>Come home to a clean yard</h3>
                <p>
                  A two-person crew works a perpendicular grid, sanitizes messy spots, bags and hauls it
                  all away, then texts you the photo proof.
                </p>
              </li>
            </ol>
            <a className="how-cta" href={REQUEST_URL}>
              Start with a free estimate
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
            <h2 className="titan">Anyone can scoop. This is what premium actually looks like.</h2>
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
              Real yards, before and after
              <br />
              a single Pooptopia visit.
            </h2>
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
          </div>
        </section>

        <section className="plans" data-screen-label="Choose your plan">
          <div className="wrap">
            <p className="plans-kicker">Choose your plan</p>
            <h2 className="titan">Pick the schedule that fits your pack.</h2>
            <p className="plans-lead">
              Every plan is priced at your free in-person estimate and locked for 12 months. No surprise
              charges, no weekly invoices to chase.
            </p>
            <ul className="plans-grid">
              <li className="plans-card is-featured">
                <p className="plans-badge is-popular">Most popular</p>
                <h3>Pooptopia Premium</h3>
                <p className="plans-freq">Weekly service</p>
                <p>
                  Our flagship weekly cleanup for up to two dogs. Thorough search, spot sanitizing, toy
                  pickup, haul-away, and gate photos, year round.
                </p>
                <ul>
                  <li>Weekly visits, all four seasons</li>
                  <li>Includes two dogs</li>
                  <li>Spot sanitization</li>
                  <li>Price locked 12 months</li>
                </ul>
                <a className="plans-cta" href={REQUEST_URL}>
                  Request Service
                </a>
              </li>
              <li className="plans-card">
                <p className="plans-badge is-value">Best value</p>
                <h3>Pooptopia Prestige</h3>
                <p className="plans-freq">Twice weekly</p>
                <p>
                  For busy households and multi-dog yards. Twice-weekly visits with full sanitization so
                  waste never has a chance to build up.
                </p>
                <ul>
                  <li>Two visits every week</li>
                  <li>One or more dogs</li>
                  <li>Full-area sanitization</li>
                  <li>Price locked 12 months</li>
                </ul>
                <a className="plans-cta is-outline" href={REQUEST_URL}>
                  Request Service
                </a>
              </li>
              <li className="plans-card">
                <p className="plans-badge is-once">One time</p>
                <h3>Precision Clean</h3>
                <p className="plans-freq">One-time / spring cleanup</p>
                <p>
                  Behind after winter? We reset the yard top to bottom so it&apos;s safe, mow-ready, and
                  yours again in a single visit.
                </p>
                <ul>
                  <li>One-time deep cleanup</li>
                  <li>Perfect before first mow</li>
                  <li>No contract required</li>
                  <li>Great catch-up service</li>
                </ul>
                <a className="plans-cta is-outline" href={REQUEST_URL}>
                  Request Service
                </a>
              </li>
            </ul>
            <p className="plans-note">
              Want the full breakdown of what&apos;s in each plan?{" "}
              <a href="/services">Compare all services.</a>
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
                Tico was four and a half when we said goodbye. That loss changed how we care for
                dogs. What they eat, who watches them, and what they walk through in their own yard.
                When our puppy Olive came home with parasites, we learned how much of that risk lives
                in waste left on the grass.
              </p>
              <p>
                Pooptopia is Kim, David, Logan, Olive, and Louie, a family business built to make sure
                other dog families never learn that lesson the hard way. We treat every yard like it
                belongs to our own dogs, because that&apos;s the standard we&apos;d want.
              </p>
              <a className="started-cta" href="/about/our-why">
                Meet the family
              </a>
            </div>
          </div>
        </section>

        <section className="home-video-intro">
          <div className="wrap home-video-intro-grid">
            <div className="home-video-intro-media">
              <iframe
                title="Inside Pooptopia"
                src="https://player.vimeo.com/video/1081152204?badge=0&byline=0&h=25f1c776d6&portrait=0&title=0&autoplay=0&loop=0&muted=0&controls=1"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="home-video-intro-copy">
              <h2 className="titan">Our Experience</h2>
              <p>
                At Pooptopia, we bring years of expertise to the art of restoring your yard to its
                former glory. From the moment we step onto your property, we prioritize not only
                cleanliness but also the safety and well-being of your pets. Our highly trained team
                knows that removing dog waste is more than just a chore; it&apos;s about creating a
                clean, healthy, and enjoyable space for your family and furry friends.
              </p>
              <p>
                We understand that dog poop is not meant to be fertilizer, and we take pride in
                providing a service that goes beyond the basics to deliver premium results. With a
                commitment to precision, reliability, and unmatched customer care, we&apos;ve become a
                trusted name in the dog waste removal industry.
              </p>
              <p>
                Whether you choose our <a href="/services#premium">Pooptopia Premium Package</a>,{" "}
                <a href="/services#prestige">Pooptopia Prestige Package</a>, or{" "}
                <a href="/services#precision-clean">Pooptopia Precision Clean</a>, you can rest
                assured that our experienced team will leave your yard looking its best, week after
                week.
              </p>
              <p>
                Let us handle the dirty work, so you can get back to enjoying the great outdoors
                with your dogs, worry-free. We are the dog poop pick up service for your family.
              </p>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-band" data-screen-label="Blog">
          <div className="wrap blog-inner band-pad">
            <div className="blog-head">
              <div className="stack">
                <span className="eyebrow">Woof to Waste</span>
                <h2 className="titan section-title">Life with Dogs</h2>
              </div>
            </div>
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
                This weekend, you could be relaxing in your yard instead of cleaning it.
              </h2>
              <p>
                The service request takes two minutes. The estimate is free and in person. After your
                first visit, you&apos;ll understand why our clients never go back to scooping.
              </p>
              <div className="weekend-actions">
                <a className="weekend-cta" href={REQUEST_URL}>
                  Request Service
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
              <span className="eyebrow">FAQs</span>
              <h2 className="titan">Frequently asked questions</h2>
              <p className="faq-home-note">
                Can&apos;t find your answer? Email admin@pooptopia.dog or call 262-351-2147. A real
                person will get back to you.
              </p>
            </div>
            <FaqList />
            <a className="section-btn faq-more" href="/faq">
              See all frequently asked questions
            </a>
          </div>
        </section>

    </main>
  );
}
