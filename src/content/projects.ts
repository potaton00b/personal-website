// ============================================================
// PROJECTS PAGE CONTENT — Edit this file to update /projects
// ============================================================

export const projectsContent = {
  heading: "PROJECTS",
  subtitle:
    "A highly distilled index of technical implementations, low-level systems, and distributed architecture experiments.",

  // ── Project list ───────────────────────────────────────────
  // Each project can have multiple links (GITHUB, DEMO, LIVE, SOURCE, DOCS…)
  // Set url to "#" until you have a real link.
  items: [
    {
      number: "01",
      name: "K8S-MESH-REPLICATOR",
      description:
        "High-throughput service mesh sidecar for real-time state synchronization across multi-region Kubernetes clusters. Written in Rust for sub-millisecond latency.",
      links: [{ label: "GITHUB", url: "https://github.com/potaton00b" }],
      tags: ["RUST", "GRPC", "K8S"],
    },
    {
      number: "02",
      name: "VECTOR-SQL ENGINE",
      description:
        "Columnar storage engine supporting SIMD-accelerated vector search. Optimizes query execution plans for high-dimensional embeddings using HNSW indexing.",
      links: [{ label: "GITHUB", url: "https://github.com/potaton00b" }],
      tags: ["C++20", "SIMD", "SQL"],
    },
    {
      number: "03",
      name: "DISTRIBUTED-KV",
      description:
        "Fault-tolerant key-value store implementing the Raft consensus algorithm. Features include log compaction and a linearizable read-write API.",
      links: [{ label: "GITHUB", url: "https://github.com/potaton00b" }],
      tags: ["GO", "RAFT", "DIST-SYS"],
    },
    {
      number: "04",
      name: "WASM-CORE VISUALIZER",
      description:
        "WebAssembly execution profiler that visualizes memory management in real-time. Designed for debugging complex cross-compiled modules in the browser.",
      links: [{ label: "GITHUB", url: "https://github.com/potaton00b" }],
      tags: ["TYPESCRIPT", "WASM", "WEBGL"],
    },
  ],

  // ── Collaboration CTA ──────────────────────────────────────
  collaboration: {
    heading: "05 // COLLABORATION",
    text: "Currently open to high-impact engineering roles or strategic consulting for distributed systems architecture.",
    ctaLabel: "SEND TRANSMISSION",
    ctaHref: "mailto:sunny.work.2002@gmail.com",
  },
};
