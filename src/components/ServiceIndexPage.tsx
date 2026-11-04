import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";
import { ADDRESS_MAPS_URL, REQUEST_URL } from "@/lib/site";

export function ServiceIndexPage() {
  return (
    <InfoPage
      title="Pooptopia Service Index"
      lead="Dog Waste Removal & Yard Sanitization Services"
      lede={
        <>
          <span className="service-index-lede-line">
            Pooptopia provides professional dog waste removal and yard sanitization for residential
            properties in Kenosha County,
          </span>
          <br />
          selected communities in Racine and Walworth counties, and Lake County, IL.
        </>
      }
    >
      <div className="service-index">
        <section className="service-index-item">
          <h2>Business Information</h2>
          <ul className="service-index-facts">
            <li>
              <strong>Business Name:</strong> Pooptopia
            </li>
            <li>
              <strong>Industry:</strong> Pet Waste Removal &amp; Yard Care
            </li>
            <li>
              <strong>Business Type:</strong> Family-operated local service business owned by Kim and
              David
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:2623512147">(262) 351-2147</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>
            </li>
            <li>
              <strong>Address:</strong>
              <br />
              <a href={ADDRESS_MAPS_URL} target="_blank" rel="noreferrer">
                6806 55th St.
              </a>
              <br />
              <a href={ADDRESS_MAPS_URL} target="_blank" rel="noreferrer">
                Kenosha, WI 53144
              </a>
            </li>
            <li>
              <strong>Service Area:</strong> All of Kenosha County, plus selected communities in
              Racine and Walworth counties and Lake County, IL
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <Link href="/">Pooptopia home</Link>
            </li>
            <li>
              <strong>Services page:</strong>{" "}
              <Link href="/services">Dog Poop Pick up Services &amp; Packages</Link>
            </li>
          </ul>
        </section>

        <section className="service-index-item">
          <h2>Our Services</h2>

          <h3>Dog Waste Removal Services</h3>
          <p>
            Professional dog waste removal to keep residential yards clean, hygienic, and safer for
            pets and families. Every package starts with a free in-person estimate. Visits use a
            two-person crew and sanitized equipment.
          </p>

          <p>
            <strong>Available Packages:</strong>
          </p>

          <h4 id="premium">Pooptopia Premium Package</h4>
          <ul className="service-index-facts">
            <li>
              <strong>Service Frequency:</strong> Weekly
            </li>
            <li>
              <strong>Dog Limit:</strong> Up to 2 dogs
            </li>
            <li>Two-person cross-grid yard search</li>
            <li>Waste bagged and hauled away</li>
            <li>Spot sanitization on the affected area</li>
            <li>Dog toy pickup</li>
            <li>In-person estimate</li>
            <li>Equipment sanitization</li>
            <li>Security photo after every visit</li>
          </ul>
          <p>
            <Link href="/services#premium">Full Premium Package details</Link>
          </p>

          <h4 id="prestige">Pooptopia Prestige Package</h4>
          <ul className="service-index-facts">
            <li>
              <strong>Service Frequency:</strong> Twice weekly
            </li>
            <li>
              <strong>Dog Limit:</strong> A pack of one or more dogs
            </li>
            <li>Everything included in the Premium Package</li>
            <li>Two-person cross-grid yard search</li>
            <li>Waste bagged and hauled away</li>
            <li>Spot sanitization on the affected area</li>
            <li>Dog toy pickup</li>
            <li>In-person estimate</li>
            <li>Equipment sanitization</li>
            <li>Security photo after every visit</li>
          </ul>
          <p>
            <Link href="/services#prestige">Full Prestige Package details</Link>
          </p>

          <h4 id="precision-clean">Pooptopia Precision Clean</h4>
          <ul className="service-index-facts">
            <li>
              <strong>Service Type:</strong> One-time / spring cleaning service
            </li>
            <li>
              <strong>Availability:</strong> Mostly for spring pick up after the thaw, and available
              any time of the year when you need to get caught up
            </li>
            <li>Thorough dog waste removal</li>
            <li>Two-person cross-grid yard search</li>
            <li>Waste bagged and hauled away</li>
            <li>Spot sanitization on the affected area</li>
            <li>Dog toy pickup</li>
            <li>In-person estimate</li>
            <li>Equipment sanitization</li>
            <li>Security photo after the visit</li>
          </ul>
          <p>
            <Link href="/services#precision-clean">Full Precision Clean details</Link>
          </p>

          <h3 id="paw-protection">Yard Sanitization Services</h3>
          <h4>Paw Protection by Pooptopia</h4>
          <ul className="service-index-facts">
            <li>
              <strong>Service Type:</strong> Entire yard sanitization and deodorization
            </li>
            <li>
              <strong>Treatment:</strong> ChlorTastic with the Wysiwash Professional Sanitizing
              System
            </li>
            <li>
              <strong>Purpose:</strong> Helps reduce harmful contaminants and odor across the yard,
              not only where waste was found
            </li>
            <li>
              <strong>Availability:</strong> Add-on service; pairs well with Precision Clean
            </li>
            <li>
              <strong>Return to yard:</strong> Dogs can usually return once the yard is dry,
              typically within about 30 minutes
            </li>
          </ul>
          <p>
            <Link href="/services#paw-protection">Full Paw Protection details</Link>
          </p>

          <h3 id="playtime-pickup">Additional Services</h3>
          <h4>Pooptopia Playtime Pickup</h4>
          <ul className="service-index-facts">
            <li>
              <strong>Service Type:</strong> Let-out, playtime, and waste pickup
            </li>
            <li>Dog let-out and playtime while Pooptopia is at the yard</li>
            <li>Waste pickup during that visit</li>
            <li>
              <strong>Availability:</strong> Ask about this add-on at your in-person estimate
            </li>
          </ul>
          <p>
            <Link href={REQUEST_URL}>Ask about Playtime Pickup when requesting an estimate</Link>
          </p>
        </section>

        <section className="service-index-item">
          <h2>Service Area</h2>
          <p>Pooptopia serves residential customers in:</p>
          <ul className="service-index-facts">
            <li>All of Kenosha County, Wisconsin</li>
            <li>Selected communities in Racine County, Wisconsin</li>
            <li>Selected communities in Walworth County, Wisconsin</li>
            <li>Lake County, Illinois</li>
          </ul>
          <p>
            Include your address when you request an estimate so availability can be confirmed for
            your neighborhood.
          </p>
        </section>

        <section className="service-index-item">
          <h2>Frequently Asked Questions</h2>

          <h3>Does Pooptopia offer weekly dog waste removal?</h3>
          <p>
            Yes. Pooptopia offers weekly cleanup through the{" "}
            <Link href="/services#premium">Premium Package</Link>.
          </p>

          <h3>Does Pooptopia offer twice-weekly service?</h3>
          <p>
            Yes. The <Link href="/services#prestige">Prestige Package</Link> includes two scheduled
            visits each week.
          </p>

          <h3>Does Pooptopia offer one-time cleanup?</h3>
          <p>
            Yes. <Link href="/services#precision-clean">Precision Clean</Link> is a one-time /
            spring cleaning service. It is mostly for spring pick up after the thaw, and it is
            available any time of the year when you need to get caught up.
          </p>

          <h3>Does Pooptopia offer yard sanitization?</h3>
          <p>
            Yes. <Link href="/services#paw-protection">Paw Protection</Link> provides entire yard
            sanitization and deodorization using ChlorTastic with the Wysiwash system.
          </p>

          <h3>How can customers request an estimate?</h3>
          <p>
            Customers can request a free in-person estimate through the website. Kim and David walk
            the yard with you and help choose the right service.{" "}
            <Link href={REQUEST_URL}>Request an Estimate</Link>
          </p>
        </section>

        <section className="service-index-item service-index-cta">
          <h2>Contact Information</h2>
          <ul className="service-index-facts">
            <li>
              <strong>Business:</strong> Pooptopia
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:2623512147">(262) 351-2147</a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>
            </li>
            <li>
              <strong>Website:</strong> <Link href="/">Home</Link>
            </li>
            <li>
              <strong>Estimate Request:</strong> <Link href={REQUEST_URL}>{REQUEST_URL}</Link>
            </li>
            <li>
              <strong>Contact page:</strong> <Link href="/contact">/contact</Link>
            </li>
            <li>
              <strong>FAQs:</strong> <Link href="/faq">/faq</Link>
            </li>
          </ul>
        </section>
      </div>
    </InfoPage>
  );
}
