"use client";

import { useState } from "react";
import { siteContent } from "@/content/site";

const navLinks = [
  { label: "HOME", href: "/#hero", external: false },
  { label: "PROJECTS", href: "/#projects", external: false },
  { label: "RESUME", href: siteContent.resumeUrl, external: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 thin-border-b" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[700px] mx-auto">
        {/* Logo */}
        <div
          className="text-body font-black tracking-tighter uppercase"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {siteContent.brandName}
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-black text-[12px] tracking-widest uppercase transition-colors"
              style={{
                fontFamily: "var(--font-headline)",
                color: i === 0 ? "#000000" : "#777777",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#000000";
                (e.target as HTMLAnchorElement).style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = i === 0 ? "#000000" : "#777777";
                (e.target as HTMLAnchorElement).style.textDecoration = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-black" />
          <span className="block w-5 h-0.5 bg-black" />
          <span className="block w-5 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden thin-border-b px-6 pb-4 max-w-[700px] mx-auto flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="font-black text-[12px] tracking-widest uppercase hover:underline"
              style={{ fontFamily: "var(--font-headline)", color: "#000000" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
