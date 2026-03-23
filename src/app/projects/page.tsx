import { projectsContent } from "@/content/projects";
import { siteContent } from "@/content/site";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `PROJECTS | ${siteContent.footer.brandName}`,
  description: projectsContent.subtitle,
};

export default function ProjectsPage() {
  const { heading, subtitle, items, collaboration } = projectsContent;

  return (
    <div className="max-w-[700px] mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1
          className="text-h1 font-black tracking-tight uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {heading}
        </h1>
        <p
          className="text-h2 font-medium tracking-tight"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {subtitle}
        </p>
      </header>

      {/* Project list */}
      <div className="space-y-6">
        {items.map((project) => (
          <section key={project.number} className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h2
                className="text-h2 font-black tracking-tighter uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {project.number} // {project.name}
              </h2>
              <div className="flex gap-4 shrink-0 ml-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-[10px] tracking-widest uppercase underline decoration-1 underline-offset-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="thin-border-l pl-4 space-y-2">
              <p className="text-body">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-black text-[10px] tracking-widest uppercase px-2 py-0.5"
                    style={{
                      fontFamily: "var(--font-headline)",
                      backgroundColor: "#eeeeee",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Collaboration CTA */}
      <section className="space-y-4 pt-8 thin-border-t">
        <h2
          className="text-h2 font-black tracking-tighter uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {collaboration.heading}
        </h2>
        <div className="space-y-4">
          <p className="text-body">{collaboration.text}</p>
          <div className="flex">
            <CTAButton href={collaboration.ctaHref} label={collaboration.ctaLabel} />
          </div>
        </div>
      </section>
    </div>
  );
}
