import { REQUEST_URL } from "@/lib/site";

const packages = [
  {
    label: "Most popular",
    title: "Pooptopia Premium Package",
    frequency: "Weekly dog waste removal",
    description: "Comprehensive weekly dog poop pickup that keeps your yard pristine and your pets safe. Our team performs a thorough search, removes all waste, and sanitizes the messy areas so nothing is left behind.",
    image: "/images/plans/premium.jpg",
    imageAlt: "Before and after a Pooptopia Premium Package visit",
    points: [["Thorough searches.", "A trained two-person crew works a grid pattern so no pile is missed."], ["Bagged waste & haul away.", "We take the waste with us. You never touch it or store it."], ["Spot sanitization.", "Messy spots get disinfected to cut bacteria and odor."], ["Toy pickup.", "Your dog's toys are gathered and tidied every visit."], ["Service for two dogs.", "Additional dogs can be added for a small per-dog charge."], ["Equipment sanitization.", "Vet-grade KennelSol on rakes, buckets and footwear between yards."], ["Security photo every visit.", "Photo proof your gate is latched before we leave."], ["Monthly invoicing.", "One simple bill. No surprise charges."], ["Price locked 12 months.", "Your rate doesn't move for a full year."]],
  },
  {
    label: "Best value",
    title: "Pooptopia Prestige Package",
    frequency: "Twice-weekly dog waste removal",
    description: "The ultimate in dog poop cleanup for busy or multi-dog households. Twice-weekly visits with full-area sanitization mean waste never gets a chance to pile up.",
    image: "/images/plans/prestige.jpg",
    imageAlt: "Pooptopia technician performing dog waste removal",
    points: [["Twice-weekly visits.", "Less buildup, less odor, a yard that's always ready to use."], ["One or more dogs.", "Built for households with a full pack."], ["Full sanitization.", "All waste areas treated, not just the messy ones."], ["Thorough search.", "Detailed, meticulous coverage of every corner of the yard."], ["Bagged waste & haul away.", "Neatly bagged and removed from your property."], ["Toy pickup.", "Favorite toys gathered and returned, ready for the next adventure."], ["Security photo every visit.", "Confirmation your yard is secure."], ["Monthly invoicing.", "Billed once a month, fully transparent."], ["Price locked 12 months.", "Premium care at a stable price."]],
  },
  {
    label: "One time",
    title: "Pooptopia Precision Clean",
    frequency: "One-time dog waste removal",
    description: "Fallen behind? Our one-time deep cleanup removes a season of accumulated waste and gets your lawn safe, fresh, and ready for the first mow.",
    image: "/images/plans/precision-clean.jpg",
    imageAlt: "A yard restored by the Pooptopia Precision Clean service",
    points: [["Complete catch-up cleanup.", "Every inch of the lawn cleared of pet waste in one visit."], ["Mow-ready results.", "No shredded waste in the mower or across your grass."], ["No contract required.", "A single service whenever you need a reset."], ["Same premium standards.", "Same crew, same thoroughness, same sanitized equipment."]],
  },
  {
    label: "Paw protection",
    title: "Paw Protection by Pooptopia",
    frequency: "Yard sanitizing add-on",
    description: "Built for puppies and dogs recovering from parasites. When Olive came home with parasites, we learned the yard has to be treated too, not just the dog.",
    image: "/images/plans/paw-protection.jpg",
    imageAlt: "Sanitizing treatment for a dog yard",
    points: [["Targeted yard sanitizing.", "Reduce the parasite and bacteria load living in your grass."], ["Pairs with any package.", "Add to Premium or Prestige while your dog recovers."], ["Vet-grade products.", "KennelSol disinfectant, applied by a trained crew."], ["Peace of mind.", "Break the reinfection cycle in your own backyard."]],
  },
];

export function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-page-hero">
        <div className="wrap services-page-hero-inner">
          <p className="services-page-kicker">Services &amp; Packages</p>
          <h1 className="titan">Pick the plan. We handle the rest.</h1>
          <p>Every Pooptopia package starts with a free in-person estimate and a price locked for 12 months. Same two-person crew, same sanitized equipment, same photo proof after every visit.</p>
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
                  {plan.points.map(([title, text]) => <li key={title}><strong>{title}</strong> {text}</li>)}
                </ul>
                <a className="services-package-cta" href={REQUEST_URL}>
                  Request Service
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
            Request Service
            <svg className="hero-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
