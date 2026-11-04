import type { ReactNode } from "react";
import { ReferencePageHero } from "@/components/ReferencePageHero";

export function InfoPage({
  title,
  lead,
  lede,
  children,
}: {
  title: string;
  lead?: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="reference-page info-page">
      <ReferencePageHero title={title} lead={lead} description={lede ?? ""} />
      <section className="info-body">
        <div className="wrap info-copy">{children}</div>
      </section>
    </main>
  );
}
