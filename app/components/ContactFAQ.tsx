"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface ContactFAQProps {
  faqs: FAQ[];
}

export default function ContactFAQ({ faqs }: ContactFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            aria-expanded={openFAQ === index}
          >
            <span className="font-medium text-slate-700">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-slate-500 transition-transform ${
                openFAQ === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openFAQ === index && (
            <div className="px-4 pb-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

