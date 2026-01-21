"use client";

import { useEffect } from "react";
import { animateFadeIn, animateStagger, animateSlideIn, cleanupAnimations } from "../utils/animations";

interface PageAnimationsProps {
  pageType: "about" | "projects" | "process" | "clients" | "blog" | "contact";
}

export default function PageAnimations({ pageType }: PageAnimationsProps) {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Common animations for all pages
      animateFadeIn(".section-heading", 0);
      animateFadeIn(".section-subheading", 0.2);
      animateFadeIn(".cta-section", 0);

      // Page-specific animations
      switch (pageType) {
        case "about":
          animateStagger(".team-member", 0.15);
          animateStagger(".value-card", 0.15);
          animateStagger(".milestone-item", 0.2);
          animateSlideIn(".about-image", "right");
          animateFadeIn(".about-content", 0.3);
          break;

        case "projects":
          animateStagger(".project-card", 0.15);
          animateStagger(".filter-button", 0.1);
          break;

        case "process":
          animateStagger(".process-step-item", 0.2);
          animateFadeIn(".process-icon", 0);
          break;

        case "clients":
          animateFadeIn(".coming-soon-card", 0);
          break;

        case "blog":
          animateStagger(".blog-post", 0.15);
          animateFadeIn(".blog-sidebar", 0.3);
          break;

        case "contact":
          animateFadeIn(".contact-form", 0.2);
          animateFadeIn(".contact-info", 0.3);
          animateFadeIn(".contact-faq", 0.4);
          break;
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanupAnimations();
    };
  }, [pageType]);

  return null;
}

