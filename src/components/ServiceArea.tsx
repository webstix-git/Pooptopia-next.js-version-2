import Link from "next/link";
import { REQUEST_URL, serviceAreas } from "@/lib/site";

const featuredTowns = [
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
    <svg className="area-pin" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ServiceArea({ showFullLink = false }: { showFullLink?: boolean }) {
  if (showFullLink) {
    return (
      <section id="area" className="area is-home" data-screen-label="Service Area">
        <div className="wrap area-layout">
          <div className="area-copy">
            <p className="area-kicker">Service Area</p>
            <h2 className="titan">
              We serve Kenosha, Racine, Union Grove, Somers, East Troy…
            </h2>
            <p>
              Based in Kenosha, WI, our routes cover Kenosha County, Racine County, and Walworth
              County in Wisconsin, plus Lake County in Illinois. Don&apos;t see your town? Ask. We
              reconfigure routes regularly and may already be on your street.
            </p>
            <ul className="area-towns area-towns--under-copy">
              {featuredTowns.map((town) => (
                <li key={town}>
                  <Pin />
                  <span>{town}</span>
                </li>
              ))}
            </ul>
            <div className="area-actions">
              <Link className="area-cta" href={REQUEST_URL}>
                Check my address
              </Link>
              <Link className="area-cta is-outline" href="/about/service-area">
                See the full service area
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
    );
  }

  return (
    <section id="area" className="area" data-screen-label="Service Area">
      <div className="wrap area-layout band-pad">
        <div className="area-copy">
          <span className="eyebrow">Service Area</span>
          <h2 className="titan">
            Local
            <br />
            coverage
            <br />
            across
            <br />
            <em className="em">Kenosha.</em>
          </h2>
          <p>
            Based in Kenosha, WI, our routes cover Kenosha County, Racine County, and Walworth
            County in Wisconsin, plus Lake County in Illinois.
          </p>
          <p>
            Don&apos;t see your town? Ask. We reconfigure routes regularly and may already be on
            your street.
          </p>
        </div>
        <div className="area-side">
          <ul className="area-counties">
            {serviceAreas.map((area) => (
              <li key={area.county}>
                <strong>{area.county}</strong>
                <span>{area.state}</span>
              </li>
            ))}
          </ul>
          <ul className="area-pills">
            {serviceAreas.flatMap((area) =>
              area.towns.map((town) => <li key={town}>{town}</li>),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
