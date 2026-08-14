"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Shifts an element slightly opposite to cursor position, relative to the viewport. */
export function useMouseParallax<T extends HTMLElement>(strength = 20) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const relX = (e.clientX / window.innerWidth - 0.5) * strength;
      const relY = (e.clientY / window.innerHeight - 0.5) * strength;
      moveX(relX);
      moveY(relY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return ref;
}