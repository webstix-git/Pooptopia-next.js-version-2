import Link from "next/link";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { REQUEST_URL, serviceCounties } from "@/lib/site";

const towns = [
  "Kenosha",
  "Racine",
  "Union Grove",
  "Somers",
  "East Troy",
  "Lake Geneva",
  "Salem",
  "Sturtevant",
  "Mount Pleasant",
  "Twin Lakes",
  "Paddock Lake",
  "Fox Lake, IL",
  "Lindenhurst, IL",
  "Antioch, IL",
];

function Pin() {
  return (
    <svg className="reference-pin" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ServiceAreaPage() {
  return (
    <main className="reference-page reference-service-area">
      <ReferencePageHero
        eyebrow="Service Area"
        title="We serve Kenosha, Racine, Union Grove, Somers, East Troy…"
        description="Based in Kenosha, WI, our routes cover southeastern Wisconsin and northern Illinois. If your town isn't listed, ask us — we reconfigure routes often."
      />

      <section className="reference-area-content">
        <div className="wrap reference-area-grid">
          <div className="reference-area-copy">
            <p className="reference-section-eyebrow">Counties we cover</p>
            <ul className="reference-county-pills">
              {serviceCounties.map((county) => (
                <li key={county}>{county}</li>
              ))}
            </ul>
            <p>
              We run established routes, which is how we keep pricing low and service consistent.
              That means your day of service is assigned by route rather than chosen — and if we
              ever need to change it, you&apos;ll hear from us in advance.
            </p>
            <Link className="reference-page-button" href={REQUEST_URL}>
              Check my address
            </Link>
          </div>

          <ul className="reference-town-grid">
            {towns.map((town) => (
              <li key={town}>
                <Pin />
                <span>{town}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
