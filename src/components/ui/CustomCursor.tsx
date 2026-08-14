"use client";

import { type RefObject, useEffect, useRef } from "react";
import gsap from "gsap";

interface CustomCursorProps {
  containerRef: RefObject<HTMLElement | null>;
}

/**
 * Scoped custom cursor: tracks mouse only within `containerRef` and
 * positions itself absolutely inside it, so it never leaks outside
 * the section it's mounted in. Reacts to any descendant with
 * `data-cursor-hover` by expanding the ring.
 */
export default function CustomCursor({ containerRef }: CustomCursorProps) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!container || !dot || !ring) return;

    const moveDotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
    const moveRingX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      moveDotX(e.clientX - rect.left);
      moveDotY(e.clientY - rect.top);
      moveRingX(e.clientX - rect.left);
      moveRingY(e.clientY - rect.top);
    };

    const showCursor = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    const hideCursor = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });

    const isHoverTarget = (e: MouseEvent) =>
      (e.target as HTMLElement).closest("[data-cursor-hover]");

    const handleOver = (e: MouseEvent) => {
      if (!isHoverTarget(e)) return;
      gsap.to(ring, { scale: 2.5, duration: 0.3 });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };
    const handleOut = (e: MouseEvent) => {
      if (!isHoverTarget(e)) return;
      gsap.to(ring, { scale: 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", showCursor);
    container.addEventListener("mouseleave", hideCursor);
    container.addEventListener("mouseover", handleOver);
    container.addEventListener("mouseout", handleOut);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", showCursor);
      container.removeEventListener("mouseleave", hideCursor);
      container.removeEventListener("mouseover", handleOver);
      container.removeEventListener("mouseout", handleOut);
    };
  }, [containerRef]);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 opacity-0 md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none absolute left-0 top-0 z-[60] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400 opacity-0 md:block"
      />
    </>
  );
}