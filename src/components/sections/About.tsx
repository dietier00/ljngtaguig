"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/animations/Reveal";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 6, suffix: "+", label: "Years building" },
  { value: 40, suffix: "+", label: "Projects shipped" },
  { value: 12, suffix: "", label: "Happy clients" },
  { value: 99, suffix: "%", label: "Lighthouse scores" },
];

const PRINCIPLES = [
  "Clarity over cleverness",
  "Motion with meaning",
  "Accessibility by default",
  "Performance is a feature",
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated count-up for stats
  useGSAP(
    () => {
      const els = statsRef.current?.querySelectorAll<HTMLElement>("[data-count]");
      if (!els) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        els.forEach((el) => {
          const target = Number(el.dataset.count || "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: statsRef }
  );

  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      {/* Decorative grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.06)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="About"
          title="Engineering interfaces that feel inevitable."
          description="I'm LJ — a developer and designer who believes great software is invisible. I obsess over the details most people never notice, so the things they do notice just work."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Narrative */}
          <Reveal>
            <div className="flex flex-col gap-6 text-lg leading-8 text-muted-foreground">
              <p>
                My work sits at the intersection of engineering and design. I
                don't just write code that works — I write code that feels
                right. That means fast loads, fluid motion, and interfaces that
                respond to the person using them.
              </p>
              <p>
                Over the past six years I've shipped everything from marketing
                sites to real-time analytics platforms. The through-line is a
                stubborn commitment to quality: every pixel, every frame, every
                millisecond accounted for.
              </p>
              <p className="font-medium text-foreground">
                When I'm not building, I'm studying motion design, contributing
                to open source, or mentoring the next generation of frontend
                engineers.
              </p>
            </div>
          </Reveal>

          {/* Principles card */}
          <Reveal delay={0.1} from="right">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/60 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/40">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl"
              />
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
                Working principles
              </h3>
              <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
                {PRINCIPLES.map((principle, i) => (
                  <li
                    key={principle}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-zinc-400">
                      0{i + 1}
                    </span>
                    <span className="text-base font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-zinc-50 px-6 py-10 text-center dark:bg-zinc-950"
            >
              <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <span data-count={stat.value}>0</span>
                <span className="text-cyan-500 dark:text-cyan-400">
                  {stat.suffix}
                </span>
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
