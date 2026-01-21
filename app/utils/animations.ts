"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin only on client side
let scrollTriggerReady = false;
if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerReady = true;
  } catch (e) {
    console.warn("Failed to register ScrollTrigger:", e);
  }
}

// Hero section animations
export const animateHero = () => {
  const tl = gsap.timeline();
  
  tl.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".hero-description",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(
    ".hero-buttons",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".hero-image",
    {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8"
  );

  return tl;
};

// Fade in on scroll animation
export const animateFadeIn = (selector: string, delay: number = 0) => {
  if (!scrollTriggerReady || typeof window === "undefined") return;
  
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  gsap.from(selector, {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    },
    delay,
  });
};

// Stagger animation for cards/items
export const animateStagger = (selector: string, staggerAmount: number = 0.2) => {
  if (!scrollTriggerReady || typeof window === "undefined") return;
  
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  // Get the parent container for the trigger
  const firstElement = elements[0] as HTMLElement;
  const parent = firstElement.parentElement;
  if (!parent) return;

  gsap.from(selector, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: staggerAmount,
    ease: "power2.out",
    scrollTrigger: {
      trigger: parent,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
};

// Scale in animation
export const animateScaleIn = (selector: string) => {
  gsap.from(selector, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
};

// Slide in from left/right
export const animateSlideIn = (selector: string, direction: "left" | "right" = "left") => {
  if (!scrollTriggerReady || typeof window === "undefined") return;
  
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const xValue = direction === "left" ? -100 : 100;
  
  gsap.from(selector, {
    opacity: 0,
    x: xValue,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
};

// Text reveal animation
export const animateTextReveal = (selector: string) => {
  gsap.from(selector, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
};

// Parallax effect
export const animateParallax = (selector: string, speed: number = 0.5) => {
  gsap.to(selector, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Cleanup function
export const cleanupAnimations = () => {
  if (typeof window !== "undefined" && scrollTriggerReady) {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
};

