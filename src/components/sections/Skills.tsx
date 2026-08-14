"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { skills, skillCategories } from "@/app/data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  // Animate skill bars filling on scroll
  useGSAP(
    () => {
      const bars = barsRef.current?.querySelectorAll<HTMLElement>("[data-fill]");
      if (!bars) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        bars.forEach((bar) => {
          const level = Number(bar.dataset.fill || "0");
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${level}%`,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                once: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: barsRef }
  );

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit tuned for the modern web."
          description="A focused set of technologies I reach for daily — chosen for reliability, performance, and how well they compose together."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Category legend */}
          <Reveal from="left">
            <div className="flex flex-col gap-4">
              {skillCategories.map((cat, i) => {
                const catSkills = skills.filter((s) => s.category === cat.id);
                const avg = Math.round(
                  catSkills.reduce((acc, s) => acc + s.level, 0) /
                    catSkills.length
                );
                return (
                  <div
                    key={cat.id}
                    className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white/50 px-6 py-5 transition-colors hover:border-cyan-400/40 dark:border-zinc-800 dark:bg-zinc-900/40"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-400">
                        0{i + 1}
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {cat.label}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-cyan-500 dark:text-cyan-400">
                      {avg}%
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Skill bars */}
          <Reveal from="right" delay={0.1}>
            <div ref={barsRef} className="flex flex-col gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                    <div
                      data-fill={skill.level}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
