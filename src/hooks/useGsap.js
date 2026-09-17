import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useGsap(scopeRef, setup, dependencies = []) {
  useEffect(() => {
    if (!scopeRef.current || prefersReducedMotion()) return undefined;

    const context = gsap.context(() => {
      setup({ gsap, ScrollTrigger });
    }, scopeRef);

    return () => context.revert();
  }, dependencies);
}

export function fadeUp(gsapInstance, targets, options = {}) {
  return gsapInstance.from(targets, {
    y: 56,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    ...options,
  });
}
