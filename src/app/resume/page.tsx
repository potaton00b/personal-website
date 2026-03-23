import { resumeContent } from "@/content/resume";
import { siteContent } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Resume | ${siteContent.footer.brandName}`,
  description: resumeContent.roleTitle,
};

export default function ResumePage() {
  const { heading, roleTitle, education, experience, ventures } = resumeContent;
  const { email, githubUrl, linkedinUrl } = siteContent;

  return (
    <div className="max-w-[700px] mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-h1 font-black tracking-tight">{heading}</h1>
        <div className="space-y-2">
          <p className="text-h2 font-medium">{roleTitle}</p>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Email", href: `mailto:${email}` },
              { label: "GitHub", href: githubUrl },
              { label: "LinkedIn", href: linkedinUrl },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="font-medium text-[14px] hover:underline"
                style={{ textUnderlineOffset: "4px" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* 01 // Education */}
      <section className="resume-grid pt-4 thin-border-t">
        <div className="font-bold text-[13px]" style={{ color: "#000000" }}>
          01 // Education
        </div>
        <div className="space-y-6">
          {education.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">{entry.institution}</span>
                <span className="font-medium text-[12px] shrink-0 ml-4" style={{ color: "#777777" }}>
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

      {/* 02 // Experience */}
      <section className="resume-grid pt-4 thin-border-t">
        <div className="font-bold text-[13px]" style={{ color: "#000000" }}>
          02 // Experience
        </div>
        <div className="space-y-8">
          {experience.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">
                  {entry.organization}
                  {entry.role ? ` — ${entry.role}` : ""}
                </span>
                <span className="font-medium text-[12px] shrink-0 ml-4" style={{ color: "#777777" }}>
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

      {/* 03 // Previous Ventures */}
      <section className="resume-grid pt-4 thin-border-t">
        <div className="font-bold text-[13px]" style={{ color: "#000000" }}>
          03 // Previous Ventures
        </div>
        <div className="space-y-8">
          {ventures.map((entry, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-body">
                  {entry.organization}
                  {entry.role ? ` (${entry.role})` : ""}
                </span>
                <span className="font-medium text-[12px] shrink-0 ml-4" style={{ color: "#777777" }}>
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
