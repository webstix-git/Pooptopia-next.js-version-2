import type { ReactNode } from "react";

export function ReferencePageHero({
  eyebrow,
  title,
  lead,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="reference-page-hero">
      <div className="wrap reference-page-hero-inner">
        {eyebrow ? <p className="reference-page-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lead ? <h2 className="reference-page-lead">{lead}</h2> : null}
        {description ? <p className="reference-page-hero-description">{description}</p> : null}
      </div>
    </section>
  );
}
