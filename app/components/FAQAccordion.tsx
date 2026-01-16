"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  showLimit?: number;
  showViewMore?: boolean;
  viewMoreLink?: string;
  showLoadMore?: boolean;
  loadMoreCount?: number;
}

export default function FAQAccordion({
  faqs,
  showLimit,
  showViewMore = false,
  viewMoreLink = "/faq",
  showLoadMore = false,
  loadMoreCount = 6,
}: FAQAccordionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(
    showLimit || (showLoadMore ? loadMoreCount : faqs.length)
  );
  
  const displayedFAQs = faqs.slice(0, displayCount);
  const hasMore = displayCount < faqs.length;

  return (
    <>
      <div className="space-y-4">
        {displayedFAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              type="button"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-blue-900 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
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
              <div className="px-6 pb-5">
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {showLoadMore && hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setDisplayCount(displayCount + loadMoreCount)}
            className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block"
          >
            Load More FAQs
          </button>
        </div>
      )}
      {showViewMore && faqs.length > (showLimit || faqs.length) && !showLoadMore && (
        <div className="text-center mt-8">
          <Link
            href={viewMoreLink}
            className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block"
          >
            View All FAQs
          </Link>
        </div>
      )}
    </>
  );
}

