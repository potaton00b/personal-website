// ============================================================
// PROJECTS PAGE CONTENT — Edit this file to update /projects
// ============================================================

export const projectsContent = {
  heading: "Projects",
  subtitle:
    "Come check out what I'm working on!",

  // ── Project list ───────────────────────────────────────────
  // Each project can have multiple links (GitHub, Demo, Live, Source, Docs…)
  // Set url to "#" until you have a real link.
  items: [
    {
      number: "01",
      name: "EB2-NIW Petition Automation",
      description:
        "AI-native platform that automates employment-based green card petitions, using a voice agent to guide applicants through drafting proposed endeavors, sourcing recommendation letters, and assembling filing-ready packages.",
      links: [],
      tags: ["Typescript", "Python", "FastAPI"],
    },
    {
      number: "02",
      name: "Bidpass",
      description:
        "Marketplace platform that lets users bid on event tickets below retail price.",
      links: [{ label: "Site", url: "https://bidpass.org/" }],
      tags: ["Next.js", "Typescript", "PostgreSQL"],
    },
    {
      number: "03",
      name: "Reference Verifier",
      description:
        "API microservice that uses AI to verify whether claims are accurately supported by their cited sources.",
      links: [{ label: "GitHub", url: "https://github.com/potaton00b/reference-verifier-agent" }],
      tags: ["Next.js", "Typescript", "Python"],
    },
    {
      number: "04",
      name: "PeerTECH",
      description:
        "Smartphone app and peer care management dashboard that helps adults with serious mental illness co-manage psychiatric and chronic health conditions alongside certified peer specialists.",
      links: [{ label: "Site", url: "https://www.scattergoodfoundation.org/award_submission/peertech-peer-and-technology-supported-self-management-intervention/" }],
      tags: ["Flutter", "Swift", "Kotlin"],
    },
  ],

  // ── Collaboration CTA ──────────────────────────────────────
  collaboration: {
    heading: "05 // Collaboration",
    text: "Currently open to collaboration!",
    ctaLabel: "Send Email",
    ctaHref: "mailto:sunny.work.2002@gmail.com",
  },
};
