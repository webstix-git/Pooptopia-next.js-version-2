import type { ReactNode } from "react";

export function ReferencePageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <section className="reference-page-hero">
      <div className="wrap reference-page-hero-inner">
        {eyebrow ? <p className="reference-page-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="reference-page-hero-description">{description}</p> : null}
      </div>
    </section>
  );
}
