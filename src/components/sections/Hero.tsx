"use client";

import { siteContent } from "@/content/site";
import BoldText from "@/components/BoldText";

export default function Hero() {
  const { name, tagline, bio, email, githubUrl, githubHandle, linkedinUrl, linkedinHandle, contact } = siteContent;

  return (
    <section id="hero" className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-h1 font-black tracking-tight">{name}</h1>
        <p className="text-h2 font-medium">{tagline}</p>
      </header>

      <p className="text-body"><BoldText text={bio} /></p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="px-5 py-2 font-medium text-[14px] thin-border transition-colors"
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "transparent";
            el.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "#000000";
            el.style.color = "#ffffff";
          }}
        >
          Email
        </a>
        {[
          { label: "GitHub", href: githubUrl },
          { label: "LinkedIn", href: linkedinUrl },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-medium text-[14px] thin-border transition-colors"
            style={{
              backgroundColor: "transparent",
              color: "#000000",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#000000";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#000000";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Contact info */}
      <div className="space-y-2 pt-2">
        <p className="text-body">{contact.intro}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-body font-medium">
          <a href={`mailto:${email}`} className="hover:underline" style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>
            Email: {email}
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>
            GitHub: {githubHandle}
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>
            LinkedIn: {linkedinHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
