import type { Skill } from "@/types/portfolio";

export const skills: Skill[] = [
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 94, category: "frontend" },
  { name: "GSAP", level: 82, category: "frontend" },
  { name: "Node.js", level: 78, category: "backend" },
  { name: "PostgreSQL", level: 74, category: "backend" },
  { name: "REST / GraphQL", level: 80, category: "backend" },
  { name: "Git & CI/CD", level: 85, category: "tooling" },
  { name: "Figma", level: 76, category: "design" },
  { name: "Motion Design", level: 79, category: "design" },
  { name: "Accessibility", level: 83, category: "tooling" },
];

export const skillCategories = [
  { id: "frontend" as const, label: "Frontend" },
  { id: "backend" as const, label: "Backend" },
  { id: "tooling" as const, label: "Tooling" },
  { id: "design" as const, label: "Design" },
];
