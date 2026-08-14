"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import Badge from "@/components/ui/Badge";
import { experiences } from "@/app/data/exp";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  // Animate the timeline line growing as you scroll
  useGSAP(
    () => {
      const line = lineRef.current;
      if (!line) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: lineRef }
  );

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping."
          description="From boutique studios to product teams, I've spent my career turning ambitious ideas into reliable, well-crafted software."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:-translate-x-1/2"
          >
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-cyan-400 to-blue-500"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal
                  key={exp.company}
                  from={isLeft ? "left" : "right"}
                  className="relative"
                >
                  <div
                    className={`flex md:w-1/2 ${
                      isLeft
                        ? "md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    {/* Timeline dot */}
                    <span
                      aria-hidden
                      className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-zinc-50 dark:bg-zinc-950 md:left-1/2"
                    />

                    <div className="ml-12 w-full rounded-3xl border border-zinc-200 bg-white/60 p-7 backdrop-blur transition-colors hover:border-cyan-400/40 dark:border-zinc-800 dark:bg-zinc-900/40 md:ml-0">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs text-cyan-500 dark:text-cyan-400">
                          {exp.period}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mb-4 text-sm font-medium text-muted-foreground">
                        {exp.company}
                      </p>

                      <p className="mb-5 text-sm leading-6 text-muted-foreground">
                        {exp.summary}
                      </p>

                      <ul className="mb-6 flex flex-col gap-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                              aria-hidden
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} tone="muted">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}