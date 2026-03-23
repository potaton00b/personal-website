import { resumeContent } from "@/content/resume";
import { siteContent } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `RESUME | ${siteContent.footer.brandName}`,
  description: resumeContent.roleTitle,
};

export default function ResumePage() {
  const { heading, roleTitle, education, experience, ventures } = resumeContent;
  const { email, githubUrl, linkedinUrl } = siteContent;

  return (
    <div className="max-w-[700px] mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1
          className="text-h1 font-black tracking-tight uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {heading}
        </h1>
        <div className="space-y-2">
          <p
            className="text-h2 font-medium tracking-tight uppercase"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {roleTitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "EMAIL", href: `mailto:${email}` },
              { label: "GITHUB", href: githubUrl },
              { label: "LINKEDIN", href: linkedinUrl },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "EMAIL" ? "_blank" : undefined}
                rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                className="font-black text-[10px] tracking-widest uppercase hover:underline"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 01 // EDUCATION */}
      <section className="resume-grid pt-4">
        <div
          className="font-black text-[12px] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          01 // EDUCATION
        </div>
        <div className="space-y-6">
          {education.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">{entry.institution}</span>
                <span
                  className="font-medium text-[10px] tracking-widest shrink-0 ml-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {entry.date}
                </span>
              </div>
              <p className="text-body" style={{ color: "#777777" }}>
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 // EXPERIENCE */}
      <section className="resume-grid pt-4">
        <div
          className="font-black text-[12px] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          02 // EXPERIENCE
        </div>
        <div className="space-y-8">
          {experience.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">
                  {entry.organization}
                  {entry.role ? ` — ${entry.role}` : ""}
                </span>
                <span
                  className="font-medium text-[10px] tracking-widest shrink-0 ml-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {entry.date}
                </span>
              </div>
              <p className="text-body mt-1" style={{ color: "#777777" }}>
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 // PREVIOUS VENTURES */}
      <section className="resume-grid pt-4">
        <div
          className="font-black text-[12px] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          03 // PREVIOUS VENTURES
        </div>
        <div className="space-y-8">
          {ventures.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">
                  {entry.organization}
                  {entry.role ? ` (${entry.role})` : ""}
                </span>
                <span
                  className="font-medium text-[10px] tracking-widest shrink-0 ml-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {entry.date}
                </span>
              </div>
              <p className="text-body mt-1" style={{ color: "#777777" }}>
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
