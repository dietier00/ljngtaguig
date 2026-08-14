import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Leading the frontend guild across three product teams, owning architecture, performance budgets, and the shared design system.",
    highlights: [
      "Cut initial bundle size by 45% through code-splitting and edge rendering.",
      "Introduced a token-driven design system adopted by five products.",
      "Mentored four engineers and ran the frontend interview loop.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Leadership"],
  },
  {
    role: "Frontend Developer",
    company: "Brightline Studio",
    period: "2021 — 2023",
    location: "Manila, PH",
    summary:
      "Built marketing sites and interactive product demos for a boutique digital studio, with a focus on motion and storytelling.",
    highlights: [
      "Shipped 20+ award-nominated marketing experiences.",
      "Built a reusable GSAP animation toolkit used across the studio.",
      "Improved Lighthouse performance scores from 60 to 95+.",
    ],
    tags: ["GSAP", "React", "Motion", "Creative"],
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    period: "2019 — 2021",
    location: "Remote",
    summary:
      "Delivered end-to-end websites for small businesses, from design handoff to deployment and maintenance.",
    highlights: [
      "Managed 15+ client projects simultaneously.",
      "Established a repeatable delivery workflow with automated deploys.",
      "Built a small CMS to let clients edit content safely.",
    ],
    tags: ["JavaScript", "WordPress", "CSS", "Client Work"],
  },
];