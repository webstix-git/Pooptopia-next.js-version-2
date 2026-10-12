import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <div className="faq-page-list">
      {faqs.map((item) => (
        <div key={item.q} className="faq-page-item is-open">
          <h3 className="faq-page-trigger">{item.q}</h3>
          <p className="faq-page-answer">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
