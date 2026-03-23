"use client";

import { siteContent } from "@/content/site";

export default function Footer() {
  const { footer, githubUrl, linkedinUrl } = siteContent;

  return (
    <footer className="thin-border-t" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 max-w-[700px] mx-auto gap-4">
        <div className="text-[12px] font-medium" style={{ color: "#777777" }}>
          © {footer.year} {footer.brandName}
        </div>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: githubUrl },
            { label: "LinkedIn", href: linkedinUrl },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium transition-colors"
              style={{ color: "#777777", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#000000")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#777777")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
