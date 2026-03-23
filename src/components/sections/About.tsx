import { siteContent } from "@/content/site";

export default function About() {
  const { focus } = siteContent;

  return (
    <section id="about" className="space-y-4">
      <h2 className="text-h2 font-bold">{focus.heading}</h2>
      <div className="thin-border-l pl-6 space-y-4">
        {focus.paragraphs.map((para, i) => (
          <p key={i} className="text-body">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
