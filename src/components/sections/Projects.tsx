"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import Badge from "@/components/ui/Badge";
import { projects } from "@/app/data/project";

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Cursor-following spotlight per card via CSS custom properties
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects with a point of view."
          description="A selection of work where engineering and design meet — each one solving a real problem with a considered approach."
        />

        <div
          ref={gridRef}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 0.1}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <Link
                href={project.href}
                onMouseMove={handleMouseMove}
                className="group relative block overflow-hidden rounded-3xl border border-zinc-200 bg-white/60 p-8 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 sm:p-10"
              >
                {/* Cursor spotlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), ${project.accent}14, transparent 60%)`,
                  }}
                />

                {/* Decorative gradient blob */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} blur-2xl transition-transform duration-700 group-hover:scale-110`}
                />

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {project.year} · {project.role}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-cyan-500 dark:text-cyan-400">
                        {project.tagline}
                      </p>
                    </div>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-cyan-400/50 group-hover:text-cyan-400 dark:border-zinc-700"
                      aria-hidden
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} tone="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}