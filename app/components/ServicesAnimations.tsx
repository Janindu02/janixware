"use client";

import { useEffect } from "react";
import { animateFadeIn, animateStagger, cleanupAnimations } from "../utils/animations";

export default function ServicesAnimations() {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Section headings
      animateFadeIn(".section-heading", 0);
      animateFadeIn(".section-subheading", 0.2);

      // Service cards stagger animation
      animateStagger(".service-card", 0.15);

      // Tech stack icons stagger
      animateStagger(".tech-icon", 0.1);

      // CTA section
      animateFadeIn(".cta-section", 0);
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanupAnimations();
    };
  }, []);

  return null;
}

