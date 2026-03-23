import { siteContent } from "@/content/site";

export default function Now() {
  const { now } = siteContent;

  return (
    <section id="now" className="space-y-4">
      <h2 className="text-h2 font-bold">{now.heading}</h2>
      <div className="thin-border p-6" style={{ backgroundColor: "#ffffff" }}>
        <ul className="space-y-3">
          {now.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-body">
              <span className="font-bold" style={{ color: "#000000" }}>
                →
              </span>
              <span>
                {item.text} <strong>{item.highlight}</strong>
                {item.suffix}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
