"use client";

interface CTAButtonProps {
  href: string;
  label: string;
}

export default function CTAButton({ href, label }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="px-6 py-2.5 font-medium text-[14px] thin-border transition-colors"
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
      {label}
    </a>
  );
}
