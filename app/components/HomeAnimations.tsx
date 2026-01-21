"use client";

import { useEffect } from "react";
import { animateHero, animateStagger, animateFadeIn, animateSlideIn, cleanupAnimations } from "../utils/animations";

export default function HomeAnimations() {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Hero section animation
      animateHero();

      // Section headings
      animateFadeIn(".section-heading", 0);
      animateFadeIn(".section-subheading", 0.2);

      // Service cards stagger animation
      animateStagger(".service-card", 0.15);

      // Process steps stagger animation
      animateStagger(".process-step", 0.2);

      // Feature icons stagger
      animateStagger(".feature-icon", 0.15);

      // Why choose us section
      animateSlideIn(".why-choose-image", "left");
      animateFadeIn(".why-choose-content", 0.3);

      // FAQ section
      animateFadeIn(".faq-section", 0);

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

