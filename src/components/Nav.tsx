"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

const navLinks = [
  { label: "HOME", href: "/", activePath: "/" },
  { label: "PROJECTS", href: "/projects", activePath: "/projects" },
  { label: "RESUME", href: "/resume", activePath: "/resume" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 thin-border-b" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[700px] mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="text-body font-black tracking-tighter uppercase"
          style={{ fontFamily: "var(--font-headline)", textDecoration: "none", color: "#000000" }}
        >
          {siteContent.brandName}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.activePath;
            return (
              <a
                key={link.label}
                href={link.href}
                className="font-black text-[12px] tracking-widest uppercase transition-colors"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: isActive ? "#000000" : "#777777",
                  textDecoration: isActive ? "underline" : "none",
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#000000";
                  (e.target as HTMLAnchorElement).style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = isActive ? "#000000" : "#777777";
                  (e.target as HTMLAnchorElement).style.textDecoration = isActive ? "underline" : "none";
                }}
              >
                {link.label}
              </a>
            );
          })}
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
          {navLinks.map((link) => {
            const isActive = pathname === link.activePath;
            return (
              <a
                key={link.label}
                href={link.href}
                className="font-black text-[12px] tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "#000000",
                  textDecoration: isActive ? "underline" : "none",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
