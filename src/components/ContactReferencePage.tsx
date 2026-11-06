import Link from "next/link";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import {
  ADDRESS_MAPS_URL,
  CLIENT_LOGIN,
  GBP_MAP_EMBED_URL,
  REQUEST_URL,
} from "@/lib/site";

export function ContactReferencePage() {
  return (
    <main className="reference-page reference-contact-page">
      <ReferencePageHero
        title="Contact Us"
        lead="We're here to help."
        description="Choose an option below: request an estimate, send us a message, or reach us by phone or email."
      />

      <section className="reference-contact-content">
        <div className="wrap reference-contact-grid">
          <div className="reference-contact-main">
            <div className="reference-contact-card reference-contact-estimate">
              <p className="reference-section-eyebrow">Get started</p>
              <h2>Request an estimate</h2>
              <p>
                New client? Tell us about your yard and your dogs. We&apos;ll follow up to schedule your
                free in-person estimate with Kim and David.
              </p>
              <div className="reference-contact-estimate-actions">
                <Link className="reference-page-button" href={REQUEST_URL}>
                  Request Estimate
                </Link>
                <Link
                  className="reference-page-button reference-client-login-button"
                  href={CLIENT_LOGIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  Existing client log-in
                </Link>
              </div>
            </div>

            <div className="reference-contact-card reference-contact-message">
              <p className="reference-section-eyebrow">Send a message</p>
              <h2>Contact Us</h2>
              <p>
                We&apos;re here to help you get started on your dog poop pick up service. Feel free to
                message us or send an email. We will get back to you as quickly as possible.
              </p>
              <ContactForm />
            </div>
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
                <p>Mon-Fri, 9:00 am - 5:00 pm</p>
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
            <div className="reference-contact-card reference-contact-map">
              <h2>Find us on Google Maps</h2>
              <div className="reference-contact-map-frame">
                <iframe
                  title="Pooptopia on Google Maps"
                  src={GBP_MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
