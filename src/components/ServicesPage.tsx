import type { ReactNode } from "react";
import { REQUEST_URL } from "@/lib/site";

const CHLORTASTIC_SDS_URL = "https://www.wysiwash.com/downloads/ChlorTastic_SDS.pdf";

type ServicePoint =
  | [string, string]
  | [string, string, { href: string; label: string }];

const packages: {
  label: string;
  title: string;
  frequency: string;
  description: ReactNode | ReactNode[];
  idealFor?: string[];
  closing?: string;
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
      [
        "Weekly Scheduled Visits.",
        "A regular weekly cleanup you do not have to keep adding to your calendar. Each visit covers the full search, removal, and spot sanitization routine so the yard stays ready for your dogs year-round.",
      ],
      [
        "Cross-Grid Search.",
        "A trained two-person crew searches the yard in perpendicular directions. That cross-grid walk helps catch waste that a single path can miss.",
      ],
      [
        "Bagged Waste and Haul Away.",
        "We do not just scoop and leave it for you. Waste is bagged and hauled away so you never have to handle disposal.",
      ],
      [
        "Spot Sanitization.",
        "When residue is left behind, we sanitize the affected area. That step helps reduce bacteria and odor so the outdoor space is safer and cleaner for pets and family.",
      ],
      [
        "Toy Pickup.",
        "Dogs love their toys, and a clear play area matters. We gather toys left in the yard and return them to one spot, usually the patio or deck.",
      ],
      [
        "In-Person Estimate.",
        "We meet you first and walk the yard before service begins. That visit lets us assess your yard's needs and recommend the right plan with Kim and David.",
      ],
      [
        "Includes Up to Two Dogs.",
        "This package includes services for two dogs, with the option to add more dogs.",
      ],
      [
        "Equipment Sanitization.",
        "Your dog's health is the priority. Tools and equipment are sanitized after each job so nothing is carried from one yard to another.",
      ],
      [
        "Security Photo After Every Visit.",
        "After every visit we send a security photo for peace of mind: your latched gate, or the completed yard if there is no gate. You know when we were there and that the job was finished.",
      ],
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
      [
        "Twice-Weekly Scheduled Visits.",
        "Two visits each week mean less buildup and less odor. The yard stays fresh and ready to use between cleanups.",
      ],
      [
        "Cross-Grid Search.",
        "A trained two-person crew searches the yard in perpendicular directions. That cross-grid walk helps catch waste that a single path can miss.",
      ],
      [
        "Bagged Waste and Haul Away.",
        "We do not just scoop and leave it for you. Waste is bagged and hauled away so you never have to handle disposal.",
      ],
      [
        "Spot Sanitization.",
        "When residue is left behind, we sanitize the affected area. That step helps reduce bacteria and odor so the outdoor space is safer and cleaner for pets and family.",
      ],
      [
        "Toy Pickup.",
        "Dogs love their toys, and a clear play area matters. We gather toys left in the yard and return them to one spot, usually the patio or deck.",
      ],
      [
        "In-Person Estimate.",
        "We meet you first and walk the yard before service begins. That visit lets us assess your yard's needs and recommend the right plan with Kim and David.",
      ],
      [
        "Equipment Sanitization.",
        "Your dog's health is the priority. Tools and equipment are sanitized after each job so nothing is carried from one yard to another.",
      ],
      [
        "Security Photo After Every Visit.",
        "After every visit we send a security photo for peace of mind: your latched gate, or the completed yard if there is no gate. You know when we were there and that the job was finished.",
      ],
      [
        "Includes a Pack of One or More Dogs.",
        "One dog or several, Prestige covers the dogs in your household.",
      ],
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
      [
        "One-Time / Spring Cleaning Pickup.",
        "Built for spring pick up after the thaw, and available any time you need to get caught up. One thorough visit clears the backlog so the lawn is ready for the first mow of the season.",
      ],
      [
        "Cross-Grid Search.",
        "A trained two-person crew searches the yard in perpendicular directions. That cross-grid walk helps catch waste that a single path can miss.",
      ],
      [
        "Bagged Waste and Haul Away.",
        "We do not just scoop and leave it for you. Waste is bagged and hauled away so you never have to handle disposal.",
      ],
      [
        "Spot Sanitization.",
        "When residue is left behind, we sanitize the affected area. That step helps reduce bacteria and odor so the outdoor space is safer and cleaner for pets and family.",
      ],
      [
        "Toy Pickup.",
        "Dogs love their toys, and a clear play area matters. We gather toys left in the yard and return them to one spot, usually the patio or deck.",
      ],
      [
        "In-Person Estimate.",
        "We meet you first and walk the yard before service begins. That visit lets us assess your yard's needs and recommend the right plan with Kim and David.",
      ],
      [
        "Equipment Sanitization.",
        "Your dog's health is the priority. Tools and equipment are sanitized after each job so nothing is carried from one yard to another.",
      ],
      [
        "Security Photo After Every Visit.",
        "After every visit we send a security photo for peace of mind: your latched gate, or the completed yard if there is no gate. You know when we were there and that the job was finished.",
      ],
    ],
  },

  {
    label: "Paw protection",
    title: "Paw Protection by Pooptopia",
    frequency: "Added level of protection",
    description: [
      "Most dog owners don't think twice about what their dog picks up in the yard, but the truth is, what's out there doesn't stay out there. Parasites, bacteria, and harmful pathogens can live in soil and grass long after waste has been removed. Every time your dog walks through a contaminated area and licks their paws, they're at risk, and so is everyone in your home.",
      "That's where Paw Protection by Pooptopia comes in.",
      <>
        <strong>Our entire yard sanitization and deodorization</strong> service treats every
        inch of the area your dog uses, not just the spots where waste was found.
      </>,
    ],
    idealFor: [
      "Families welcoming a new dog or puppy",
      "Households fostering dogs or litters",
      "Yards recovering from illness or parasite exposure",
      "Pet owners who simply want the peace of mind that their yard is as safe as their home",
    ],
    closing: "Because what touches their paws ends up everywhere else.",
    image: "/images/plans/paw-protection.jpg",
    imageAlt: "Sanitizing treatment for a dog yard",
    points: [
      [
        "ChlorTastic with Wysiwash.",
        "We use ChlorTastic with the Wysiwash Professional Sanitizing System, a trusted pet-safe sanitizing solution, for a thorough treatment that helps reduce harmful contaminants throughout your yard.",
        { href: CHLORTASTIC_SDS_URL, label: "View the ChlorTastic SDS" },
      ],
      [
        "Back When Dry.",
        "Once the yard is dry, typically within 30 minutes, your dogs are safe to return and enjoy the space they love.",
      ],
      [
        "Pairs with Precision Clean.",
        "Add it to Precision Clean when you want a catch-up cleanup plus full-yard sanitization and deodorization.",
      ],
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
                <div className="services-package-prose">
                  {(Array.isArray(plan.description) ? plan.description : [plan.description]).map((paragraph, i) => (
                    <p className="services-package-description" key={i}>
                      {paragraph}
                    </p>
                  ))}
                  {plan.idealFor ? (
                    <>
                      <p className="services-package-description">Paw Protection by Pooptopia is ideal for:</p>
                      <ul className="services-package-ideal">
                        {plan.idealFor.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  {plan.closing ? <p className="services-package-description">{plan.closing}</p> : null}
                </div>
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
