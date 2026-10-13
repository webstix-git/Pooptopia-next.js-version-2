import type { Metadata } from "next";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { ReferencePageHero } from "@/components/ReferencePageHero";

export const metadata: Metadata = {
  title: "New Service Request - Pooptopia",
  description:
    "Request dog waste removal from Pooptopia. Tell us about your yard and your dogs in Kenosha, Racine, Walworth, or Lake County.",
};

export default function Page() {
  return (
    <main className="reference-page reference-request-page">
      <ReferencePageHero
        eyebrow="Start service"
        title="Request service in about two minutes"
        description="Tell us about your yard and your dogs. We&apos;ll follow up to schedule your free in-person estimate with Kim and David, then lock your price for 12 months."
      />
      <section className="reference-request-content">
        <div className="wrap">
          <ServiceRequestForm />
        </div>
      </section>
    </main>
  );
}
