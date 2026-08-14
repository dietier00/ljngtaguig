"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** Pulls an element toward the cursor when nearby, springs back on mouseleave. */
export function useMagnetic<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      moveX(relX * strength);
      moveY(relY * strength);
    };

    const handleMouseLeave = () => {
      moveX(0);
      moveY(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}