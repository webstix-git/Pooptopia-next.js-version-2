import Link from "next/link";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { ADDRESS_MAPS_URL, CLIENT_LOGIN, REQUEST_URL } from "@/lib/site";

export function ContactReferencePage() {
  return (
    <main className="reference-page reference-contact-page">
      <ReferencePageHero
        eyebrow="Contact"
        title="Let's get your yard back."
        description="New client? The fastest path is the service request form. It gives us everything we need to build your estimate. Prefer to talk it through first? Call or email us."
      />

      <section className="reference-contact-content">
        <div className="wrap reference-contact-grid">
          <div className="reference-contact-card reference-contact-start">
            <p className="reference-section-eyebrow">Start service</p>
            <h2>Request service in about two minutes</h2>
            <p>
              Tell us about your yard and your dogs. We&apos;ll follow up to schedule your free
              in-person estimate with Kim and David, then lock your price for 12 months.
            </p>
            <Link className="reference-page-button" href={REQUEST_URL}>
              Request Service
            </Link>
            <Link
              className="reference-page-button reference-client-login-button"
              href={CLIENT_LOGIN}
              target="_blank"
              rel="noreferrer"
            >
              Existing client log-in
            </Link>
            <ContactForm />
          </div>

          <div className="reference-contact-details">
            <div className="reference-contact-card reference-contact-detail">
              <IconPhone size={24} />
              <div>
                <h2>Call or text</h2>
                <a href="tel:2623512147">262-351-2147</a>
              </div>
            </div>
            <div className="reference-contact-card reference-contact-detail">
              <IconMail size={24} />
              <div>
                <h2>Email</h2>
                <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a>
              </div>
            </div>
            <div className="reference-contact-card reference-contact-detail is-plain">
              <IconClock size={24} />
              <div>
                <h2>Office hours</h2>
                <p>Mon–Fri, 9:00 am – 5:00 pm</p>
              </div>
            </div>
            <div className="reference-contact-card reference-contact-detail">
              <IconPin size={24} />
              <div>
                <h2>Address</h2>
                <a href={ADDRESS_MAPS_URL} target="_blank" rel="noreferrer">
                  6806 55th St.
                </a>
                <br />
                <a href={ADDRESS_MAPS_URL} target="_blank" rel="noreferrer">
                  Kenosha, WI 53144
                </a>
              </div>
            </div>
            <div className="reference-contact-card reference-contact-detail is-plain">
              <IconPin size={24} />
              <div>
                <h2>Service area</h2>
                <p>
                  All of Kenosha County, plus selected communities in Racine and Walworth counties and
                  Lake County, IL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
