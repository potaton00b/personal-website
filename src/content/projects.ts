// ============================================================
// PROJECTS PAGE CONTENT — Edit this file to update /projects
// ============================================================

export const projectsContent = {
  heading: "Projects",
  subtitle:
    "A highly distilled index of technical implementations, low-level systems, and distributed architecture experiments.",

  // ── Project list ───────────────────────────────────────────
  // Each project can have multiple links (GitHub, Demo, Live, Source, Docs…)
  // Set url to "#" until you have a real link.
  items: [
    {
      number: "01",
      name: "k8s-mesh-replicator",
      description:
        "High-throughput service mesh sidecar for real-time state synchronization across multi-region Kubernetes clusters. Written in Rust for sub-millisecond latency.",
      links: [{ label: "GitHub", url: "https://github.com/potaton00b" }],
      tags: ["Rust", "gRPC", "k8s"],
    },
    {
      number: "02",
      name: "vector-sql engine",
      description:
        "Columnar storage engine supporting SIMD-accelerated vector search. Optimizes query execution plans for high-dimensional embeddings using HNSW indexing.",
      links: [{ label: "GitHub", url: "https://github.com/potaton00b" }],
      tags: ["C++20", "SIMD", "SQL"],
    },
    {
      number: "03",
      name: "distributed-kv",
      description:
        "Fault-tolerant key-value store implementing the Raft consensus algorithm. Features include log compaction and a linearizable read-write API.",
      links: [{ label: "GitHub", url: "https://github.com/potaton00b" }],
      tags: ["Go", "Raft", "dist-sys"],
    },
    {
      number: "04",
      name: "wasm-core visualizer",
      description:
        "WebAssembly execution profiler that visualizes memory management in real-time. Designed for debugging complex cross-compiled modules in the browser.",
      links: [{ label: "GitHub", url: "https://github.com/potaton00b" }],
      tags: ["TypeScript", "WASM", "WebGL"],
    },
  ],

  // ── Collaboration CTA ──────────────────────────────────────
  collaboration: {
    heading: "05 // Collaboration",
    text: "Currently open to high-impact engineering roles or strategic consulting for distributed systems architecture.",
    ctaLabel: "Send Transmission",
    ctaHref: "mailto:sunny.work.2002@gmail.com",
  },
};
