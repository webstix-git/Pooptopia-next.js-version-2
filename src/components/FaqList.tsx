import { faqs, type FaqItem } from "@/lib/site";

export function FaqList({ items = faqs }: { items?: FaqItem[] }) {
  return (
    <div className="faq-page-list">
      {items.map((item) => (
        <div key={item.q} className="faq-page-item is-open">
          <h3 className="faq-page-trigger">{item.q}</h3>
          <p className="faq-page-answer">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
