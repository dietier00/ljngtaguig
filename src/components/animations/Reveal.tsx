"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts. */
  delay?: number;
  /** Direction the element travels from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Whether to re-run the animation when it re-enters the viewport. */
  once?: boolean;
}

/**
 * Scroll-triggered reveal wrapper. Animates transform + opacity only
 * (GPU friendly) and respects reduced-motion via gsap.matchMedia.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const offset = 40;
      const fromVars: gsap.TweenVars = {
        opacity: 0,
        y: from === "up" ? offset : from === "down" ? -offset : 0,
        x: from === "left" ? offset : from === "right" ? -offset : 0,
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          fromVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
