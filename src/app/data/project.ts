import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Aurora Analytics",
    tagline: "Real-time data intelligence dashboard",
    description:
      "A live analytics platform that streams thousands of events per second into a single, legible interface. Built around a custom virtualized chart engine to keep 60fps rendering even with dense datasets.",
    role: "Lead Frontend Engineer",
    year: "2025",
    stack: ["Next.js", "TypeScript", "WebSockets", "D3", "Tailwind"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-transparent",
    accent: "#22d3ee",
    href: "/projects/aurora",
    featured: true,
  },
  {
    title: "Pulse Commerce",
    tagline: "Headless storefront with edge checkout",
    description:
      "A headless e-commerce experience with sub-second page loads and an optimistic cart. Checkout runs at the edge, cutting payment latency by 40% while keeping the UI fully accessible.",
    role: "Full-Stack Developer",
    year: "2024",
    stack: ["React", "Node.js", "Stripe", "Redis", "GraphQL"],
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-transparent",
    accent: "#e879f9",
    href: "/projects/pulse",
    featured: true,
  },
  {
    title: "Field Notes",
    tagline: "Markdown-first knowledge base",
    description:
      "A distraction-free writing and knowledge tool with a local-first sync engine. Notes are plain markdown on disk, versioned, and searchable in milliseconds.",
    role: "Product Engineer",
    year: "2024",
    stack: ["Next.js", "MDX", "SQLite", "IndexedDB"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    accent: "#34d399",
    href: "/projects/field-notes",
  },
  {
    title: "Orbit Design System",
    tagline: "Accessible component library",
    description:
      "A token-driven design system powering five products. Ships with full keyboard support, WCAG AA contrast, and a theming engine that swaps visual languages without touching markup.",
    role: "Design Systems Engineer",
    year: "2023",
    stack: ["React", "TypeScript", "Storybook", "CSS Variables"],
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    accent: "#fbbf24",
    href: "/projects/orbit",
  },
];