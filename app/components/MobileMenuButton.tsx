"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileMenuButtonProps {
  navItems: Array<{ name: string; href: string }>;
  activePage?: string;
}

export default function MobileMenuButton({
  navItems,
  activePage,
}: MobileMenuButtonProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest("button[aria-expanded]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="md:hidden relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMobileMenuOpen}
      >
        <div className="w-4 h-4 relative">
          <span
            className={`absolute left-0 w-4 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? "rotate-45 top-1/2 -translate-y-1/2" 
                : "top-[3.5px]"
            }`}
          />
          <span
            className={`absolute left-0 w-4 h-0.5 bg-current transform transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 w-4 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? "-rotate-45 top-1/2 -translate-y-1/2" 
                : "bottom-[3.5px]"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`mobile-menu-container absolute top-full right-0 mt-2 w-72 rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Menu Content */}
        <nav className="py-3">
          <div className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activePage === item.name
                    ? "text-blue-600 bg-blue-50/80 border-l-2 border-blue-600"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <div className="mt-3 pt-3 border-t border-slate-200/60 px-2">
            <a
              href="tel:+94713974674"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Get a Call
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

