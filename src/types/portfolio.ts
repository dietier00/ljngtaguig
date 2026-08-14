export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: "frontend" | "backend" | "tooling" | "design";
  icon?: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  gradient: string;
  accent: string;
  href: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  focus: string;
  achievements: string[];
}
