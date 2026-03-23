"use client";

import { siteContent } from "@/content/site";

export default function Hero() {
  const { name, tagline, bio, email, githubUrl, linkedinUrl } = siteContent;

  return (
    <section id="hero" className="space-y-6">
      <header className="space-y-2">
        <h1
          className="text-h1 font-black tracking-tight"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {name}
        </h1>
        <p
          className="text-h2 font-medium tracking-tight"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {tagline}
        </p>
      </header>

      <p className="text-body">{bio}</p>

      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="px-5 py-2 font-black text-[12px] tracking-widest uppercase thin-border transition-colors"
          style={{
            fontFamily: "var(--font-headline)",
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
          EMAIL
        </a>
        {[
          { label: "GITHUB", href: githubUrl },
          { label: "LINKEDIN", href: linkedinUrl },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-black text-[12px] tracking-widest uppercase thin-border transition-colors"
            style={{
              fontFamily: "var(--font-headline)",
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
    </section>
  );
}
