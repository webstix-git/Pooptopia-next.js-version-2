import { REQUEST_URL } from "@/lib/site";

const packages: {
  name: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  featured?: boolean;
  points: { ok: boolean; text: string }[];
}[] = [
  {
    name: "Premium",
    kicker: "Premium package",
    title: "Weekly",
    body: "A full detailing once a week, every week of the year.",
    cta: "Request Premium",
    featured: true,
    points: [
      { ok: true, text: "Weekly scheduled visits" },
      { ok: true, text: "Two-person cross-grid search" },
      { ok: true, text: "Waste hauled away" },
      { ok: true, text: "Spot sanitization on the affected area" },
      { ok: true, text: "Toy pickup" },
      { ok: true, text: "In-person estimate" },
      { ok: true, text: "Includes up to two dogs" },
      { ok: true, text: "Equipment sanitization" },
      { ok: true, text: "Security photo after every visit" },
    ],
  },
  {
    name: "Prestige",
    kicker: "Prestige package",
    title: "Twice a week",
    body: "Two detailed visits every week for yards that need more frequent care.",
    cta: "Request Prestige",
    points: [
      { ok: true, text: "Two visits each week" },
      { ok: true, text: "Two-person cross-grid search" },
      { ok: true, text: "Waste hauled away" },
      { ok: true, text: "Spot sanitization on the affected area" },
      { ok: true, text: "Toy pickup" },
      { ok: true, text: "In-person estimate" },
      { ok: true, text: "Equipment sanitization" },
      { ok: true, text: "Security photo after every visit" },
      { ok: true, text: "Includes all your dogs" },
    ],
  },
  {
    name: "Precision Clean",
    kicker: "Precision Clean",
    title: "One-time / spring",
    body: "When you need help getting caught up or a spring cleaning pick up. Available any time of the year.",
    cta: "Request Precision Clean",
    points: [
      { ok: true, text: "One-time / spring cleaning pickup" },
      { ok: true, text: "Two-person cross-grid search" },
      { ok: true, text: "Waste hauled away" },
      { ok: true, text: "Spot sanitization on the affected area" },
      { ok: true, text: "Toy pickup" },
      { ok: true, text: "In-person estimate" },
      { ok: true, text: "Equipment sanitization" },
      { ok: true, text: "Security photo after every visit" },
      { ok: false, text: "Recurring weekly visits" },
    ],
  },
];

export function ServiceOfferings() {
  return (
    <section id="services" className="services-band" data-screen-label="Services">
      <div className="wrap services-inner">
        <div className="center-copy">
          <span className="eyebrow">Pooptopia Services</span>
          <h2 className="titan section-title">
            Service built around your <em className="em">yard</em>
          </h2>
          <p>
            Regular and one-time cleanup, designed around the needs of
            <br />
            each yard and each dog.
          </p>
        </div>
        <div className="package-grid">
          {packages.map((plan) => (
            <article
              key={plan.name}
              className={plan.featured ? "package-card is-featured" : "package-card"}
            >
              {plan.featured ? <span className="plan-badge">Most popular · Year-round</span> : null}
              <span className="package-kicker">{plan.kicker}</span>
              <h3 className="titan">
                {plan.title === "Twice a week" ? (
                  <>
                    Twice a
                    <br />
                    week
                  </>
                ) : (
                  plan.title
                )}
              </h3>
              <p>{plan.body}</p>
              <ul className="plan-points">
                {plan.points.map((point) => (
                  <li key={point.text} className={point.ok ? "is-in" : "is-out"}>
                    <span className="plan-mark" aria-hidden="true">
                      {point.ok ? "✓" : "×"}
                    </span>
                    {point.text}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "featured-cta" : "btn-solid"} href={REQUEST_URL}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="extra-grid">
          <a className="extra-card" href={REQUEST_URL}>
            <span className="extra-icon" aria-hidden="true">
              <img src="/images/icon-lawn-mower.png?v=2" alt="" />
            </span>
            <span className="extra-copy">
              <span className="extra-kicker">Also available · Entire yard sanitization</span>
              <span className="extra-title">Paw Protection by Pooptopia</span>
              <span className="extra-text">
                Entire yard sanitization and deodorization using ChlorTastic with the Wysiwash system.
              </span>
            </span>
            <span className="extra-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a className="extra-card" href={REQUEST_URL}>
            <span className="extra-icon" aria-hidden="true">
              <img src="/images/icon-paw.png" alt="" />
            </span>
            <span className="extra-copy">
              <span className="extra-kicker">Also available · Let-out &amp; playtime</span>
              <span className="extra-title">Pooptopia Playtime Pickup</span>
              <span className="extra-text">
                Dog let-out, playtime, and waste pickup while we&apos;re at your yard.
              </span>
            </span>
            <span className="extra-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
