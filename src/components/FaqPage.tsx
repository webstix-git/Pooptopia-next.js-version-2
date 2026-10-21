"use client";

import { FaqAnswer } from "@/components/FaqList";
import { ReferencePageHero } from "@/components/ReferencePageHero";
import { faqs } from "@/lib/site";

export function FaqPage() {
  return (
    <main className="reference-page reference-faq-page">
      <ReferencePageHero
        eyebrow=""
        title="Frequently Asked Questions"
        description={
          <>
            Have a question about your yard or our service? Email{" "}
            <a href="mailto:admin@pooptopia.dog">admin@pooptopia.dog</a> or call{" "}
            <a href="tel:2623512147">262-351-2147</a>. You’ll hear from the real people behind Pooptopia.
          </>
        }
      />

      <section className="faq-page reference-faq-content" data-screen-label="FAQs list">
        <div className="wrap">
          <div className="faq-page-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-page-item is-open">
                <h3 className="faq-page-trigger">{item.q}</h3>
                <FaqAnswer item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-cta faq-page-cta">
        <div className="wrap">
          <h2>Ready to stop scooping?</h2>
          <p>Start with a free in-person estimate. It takes about two minutes to request.</p>
          <a
            className="services-package-cta"
            href="https://form.jotform.com/pooptopia2023/pooptopia-serivce-request-form"
            target="_blank"
            rel="noreferrer"
          >
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
