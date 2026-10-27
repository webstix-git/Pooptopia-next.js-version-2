import type { Metadata } from "next";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { ReferencePageHero } from "@/components/ReferencePageHero";

export const metadata: Metadata = {
  title: "New Estimate Request - Pooptopia",
  description:
    "Request dog waste removal from Pooptopia. Tell us about your yard and your dogs in Kenosha, Racine, Walworth, or Lake County.",
};

export default function Page() {
  return (
    <main className="reference-page reference-request-page">
      <ReferencePageHero
        eyebrow="Start with an estimate"
        title={<>Request an estimate in about<br />two minutes</>}
        description={<>Tell us about your yard and your dogs. We'll follow up to schedule your free in-person<br />estimate with Kim and David.</>}
      />
      <section className="reference-request-content">
        <div className="wrap">
          <ServiceRequestForm />
        </div>
      </section>
    </main>
  );
}
