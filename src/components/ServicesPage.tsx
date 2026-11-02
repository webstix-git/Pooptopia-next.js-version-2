import { REQUEST_URL } from "@/lib/site";

const CHLORTASTIC_SDS_URL = "https://www.wysiwash.com/downloads/ChlorTastic_SDS.pdf";

type ServicePoint =
  | [string, string]
  | [string, string, { href: string; label: string }];

const packages: {
  label: string;
  title: string;
  frequency: string;
  description: string;
  image: string;
  imageAlt: string;
  points: ServicePoint[];
}[] = [
  {
    label: "Most popular",
    title: "Pooptopia Premium Package",
    frequency: "Weekly dog waste removal",
    description: "Comprehensive weekly dog waste removal that keeps your dogs safer and your yard cleaner. Our team performs a thorough search, removes the waste, and sanitizes the affected area. Available year-round: spring, summer, fall, and winter.",
    image: "/images/plans/premium.jpg",
    imageAlt: "Before and after a Pooptopia Premium Package visit",
    points: [
      ["Weekly Scheduled Visits.", "A regular weekly cleanup you don't have to keep adding to your calendar."],
      ["Cross-Grid Search.", "A two-person crew searches the yard in perpendicular directions to help reduce missed waste."],
      ["Bagged Waste and Haul Away.", "We bag it and take it with us."],
      ["Spot Sanitization.", "We sanitize the affected area when residue is left behind."],
      ["Toy Pickup.", "Your dog's toys are gathered and returned to one spot, usually the patio or deck."],
      ["In-Person Estimate.", "We meet you first and walk the yard before service."],
      ["Includes Up to Two Dogs.", "The Premium Package covers up to two dogs. Additional dogs can be added."],
      ["Equipment Sanitization.", "Tools and equipment are sanitized after each job."],
      ["Security Photo After Every Visit.", "We send a security photo after each visit: your latched gate, or the completed yard if there is no gate."],
    ],
  },
  {
    label: "Best value",
    title: "Pooptopia Prestige Package",
    frequency: "Twice-weekly dog waste removal",
    description: "Twice-weekly dog waste removal for busy households. Each visit includes a thorough search, waste removal, and spot sanitization on the affected area, so buildup stays under control.",
    image: "/images/plans/prestige.jpg",
    imageAlt: "Pooptopia technician cleaning a garden bed with sanitation equipment",
    points: [
      ["Twice-Weekly Scheduled Visits.", "Less buildup, less odor, a yard that's always ready to use."],
      ["Cross-Grid Search.", "A two-person crew searches the yard in perpendicular directions to help reduce missed waste."],
      ["Bagged Waste and Haul Away.", "We bag it and take it with us."],
      ["Spot Sanitization.", "We sanitize the affected area when residue is left behind."],
      ["Toy Pickup.", "Your dog's toys are gathered and returned to one spot, usually the patio or deck."],
      ["In-Person Estimate.", "We meet you first and walk the yard before service."],
      ["Equipment Sanitization.", "Tools and equipment are sanitized after each job."],
      ["Security Photo After Every Visit.", "We send a security photo after each visit: your latched gate, or the completed yard if there is no gate."],
      ["Includes All Your Dogs.", "The Prestige Package covers every dog in your household."],
    ],
  },
  {
    label: "One time",
    title: "Pooptopia Precision Clean",
    frequency: "One-time / spring cleaning service",
    description: "When you need help getting caught up or a spring cleaning pick up. This service is mostly for spring pick up after the thaw, but is available any time of the year. A one-time, thorough dog waste removal to get you caught up and prepare your lawn for the first mow of the season.",
    image: "/images/plans/precision-clean.jpg",
    imageAlt: "A yard restored by the Pooptopia Precision Clean service",
    points: [
      ["One-Time / Spring Cleaning Pickup.", "Mostly for spring pick up after the thaw, and available any time of the year."],
      ["Cross-Grid Search.", "A two-person crew searches the yard in perpendicular directions to help reduce missed waste."],
      ["Bagged Waste and Haul Away.", "We collect and remove the waste and take it with us so the lawn is clear and ready for mowing."],
      ["Spot Sanitization.", "We sanitize the affected area when residue is left behind."],
      ["Toy Pickup.", "Your dog's toys are gathered and returned to one spot, usually the patio or deck."],
      ["In-Person Estimate.", "We meet you first and walk the yard before service."],
      ["Equipment Sanitization.", "Tools and equipment are sanitized after each job."],
      ["Security Photo After Every Visit.", "We send a security photo after each visit: your latched gate, or the completed yard if there is no gate."],
    ],
  },
  {
    label: "Paw protection",
    title: "Paw Protection by Pooptopia",
    frequency: "Entire yard sanitization and deodorization",
    description: "Most dog owners don't think twice about what their dog picks up in the yard, but the truth is, what's out there doesn't stay out there. Parasites, bacteria, and harmful pathogens can live in soil and grass long after waste has been removed. Paw Protection is an entire yard sanitization and deodorization service. It treats every inch of the area your dog uses, not just the spots where waste was found.",
    image: "/images/plans/paw-protection.jpg",
    imageAlt: "Sanitizing treatment for a dog yard",
    points: [
      ["Entire Yard Sanitization and Deodorization.", "We sanitize and deodorize the full area your dog uses, not only the spots where waste was found."],
      [
        "ChlorTastic.",
        "We use ChlorTastic with the Wysiwash Professional Sanitizing System for a thorough, pet-safe treatment.",
        { href: CHLORTASTIC_SDS_URL, label: "View the ChlorTastic SDS" },
      ],
      ["Back When Dry.", "Once the yard is dry, typically within 30 minutes, your dogs are safe to return."],
      ["New Dog or Puppy.", "Ideal for families welcoming a new dog or puppy."],
      ["Fostering.", "Ideal for households fostering dogs or litters."],
      ["After Illness or Parasites.", "Ideal for yards recovering from illness or parasite exposure."],
      ["Peace of Mind.", "For pet owners who want the peace of mind that their yard is as safe as their home."],
      ["What Touches Their Paws.", "Because what touches their paws ends up everywhere else."],
      ["Pairs with Precision Clean.", "Add it to Precision Clean for a clean and deodorized yard."],
    ],
  },
];

export function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="wrap services-page-hero-inner">
          <p className="services-page-kicker">Services &amp; Packages</p>
          <h1 className="titan">Pick the plan. We handle the rest.</h1>
          <p>Every Pooptopia package starts with a free in-person estimate. Same two-person crew, same sanitized equipment, same photo proof after every visit.</p>
        </div>
      </section>
      <section className="services-page-list">
        <div className="wrap">
          {packages.map((plan, index) => (
            <article
              id={index === 0 ? "premium" : index === 1 ? "prestige" : index === 2 ? "precision-clean" : "paw-protection"}
              className={`services-package${index % 2 === 1 ? " is-reversed is-tinted" : ""}`}
              key={plan.title}
            >
              <div className="services-package-media"><img src={plan.image} alt={plan.imageAlt} /></div>
              <div className="services-package-copy">
                <p className="services-package-label">{plan.label}</p>
                <h2>{plan.title}</h2>
                <p className="services-package-frequency">{plan.frequency}</p>
                <p className="services-package-description">{plan.description}</p>
                <ul className="services-package-points">
                  {plan.points.map(([title, text, link]) => (
                    <li key={title}>
                      <strong>{title}</strong> {text}
                      {link ? (
                        <>
                          {" "}
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                          .
                        </>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <a className="services-package-cta" href={REQUEST_URL}>
                  Request Estimate
                  <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="services-page-cta">
        <div className="wrap">
          <h2>Not sure which plan fits your yard?</h2>
          <p>That&apos;s exactly what the free in-person estimate is for. Kim and David will walk your yard with you and recommend the right schedule, with no pressure.</p>
          <a className="services-package-cta" href={REQUEST_URL}>
            Request Estimate
            <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
