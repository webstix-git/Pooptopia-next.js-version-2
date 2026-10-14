import Link from "next/link";
import { ReferencePageHero } from "@/components/ReferencePageHero";

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

const serviceAreaMapEmbed =
  "https://www.google.com/maps/d/embed?mid=1Ik4GGKS5VrBrm4gbbenlPCN3PpUCxIA&ehbc=2E312F&ll=42.54888497218009%2C-88.16996345000001&z=9";

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
        description=""
      />

      <section className="reference-area-content">
        <div className="wrap reference-area-grid">
          <div className="reference-area-copy">
            <p className="reference-section-eyebrow">Counties we cover</p>
            <p>
              We run established routes, which is how we keep pricing low and service consistent.
              That means your day of service is assigned by route rather than chosen — and if we
              ever need to change it, you&apos;ll hear from us in advance.
            </p>
            <ul className="reference-town-grid reference-town-grid--service-area">
              {towns.map((town) => (
                <li key={town}>
                  <Pin />
                  <span>{town}</span>
                </li>
              ))}
            </ul>
            <div className="reference-area-actions">
              <Link className="reference-page-button" href="/contact">
                Check my address
              </Link>
            </div>
          </div>

          <div className="reference-area-map">
            <iframe
              title="Pooptopia service area map"
              src={serviceAreaMapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
