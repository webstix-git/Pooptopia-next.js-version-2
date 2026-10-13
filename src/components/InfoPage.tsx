import type { ReactNode } from "react";
import { ReferencePageHero } from "@/components/ReferencePageHero";

export function InfoPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="reference-page info-page">
      <ReferencePageHero eyebrow="" title={title} description={lede ?? ""} />
      <section className="info-body">
        <div className="wrap info-copy">{children}</div>
      </section>
    </main>
  );
}
