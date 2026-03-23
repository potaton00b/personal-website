import { siteContent } from "@/content/site";

export default function Projects() {
  const { projects } = siteContent;

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-h2 font-bold">{projects.heading}</h2>
      <div
        className="thin-border p-8 text-center"
        style={{ backgroundColor: "#ffffff", borderStyle: "dashed" }}
      >
        <p className="text-body italic" style={{ color: "#777777" }}>
          {projects.placeholder}
        </p>
      </div>
    </section>
  );
}
