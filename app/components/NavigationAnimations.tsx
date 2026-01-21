"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function NavigationAnimations() {
  useEffect(() => {
    // Animate navigation on scroll
    const nav = document.querySelector("header");
    if (!nav) return;

    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 100) {
        gsap.to(nav, {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
      } else {
        gsap.to(nav, {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          duration: 0.3,
        });
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

