import { faqs, type FaqItem } from "@/lib/site";

export function FaqAnswer({ item }: { item: FaqItem }) {
  const matches = (item.links ?? [])
    .map((link) => ({ ...link, index: item.a.indexOf(link.phrase) }))
    .filter((link) => link.index !== -1)
    .sort((a, b) => a.index - b.index);

  if (matches.length === 0) {
    return <p className="faq-page-answer">{item.a}</p>;
  }

  const nodes = [];
  let cursor = 0;

  for (const link of matches) {
    if (link.index < cursor) continue;
    nodes.push(item.a.slice(cursor, link.index));
    nodes.push(
      <a key={`${link.href}-${link.phrase}`} href={link.href}>
        {link.phrase}
      </a>,
    );
    cursor = link.index + link.phrase.length;
  }

  nodes.push(item.a.slice(cursor));

  return <p className="faq-page-answer">{nodes}</p>;
}

export function FaqList({ items = faqs }: { items?: FaqItem[] }) {
  return (
    <div className="faq-page-list">
      {items.map((item) => (
        <div key={item.q} className="faq-page-item is-open">
          <h3 className="faq-page-trigger">{item.q}</h3>
          <FaqAnswer item={item} />
        </div>
      ))}
    </div>
  );
}
