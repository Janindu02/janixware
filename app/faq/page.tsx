"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const faqData = [
  {
    question:
      "What types of software solutions does Janixware develop?",
    answer:
      "We specialize in website development, landing pages, custom software solutions, system automation, API development, and digital transformation services. Our team builds tailored solutions that address your unique business challenges and optimize your workflows.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while custom software solutions typically range from 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer post-launch support and maintenance services. This includes bug fixes, updates, security patches, and feature enhancements. We believe in building long-term partnerships with our clients to ensure their software continues to meet their evolving needs.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our process follows four key steps: (1) Understanding Your Idea - we dive deep into your vision and requirements, (2) Planning the Solution - we strategize features, technologies, and milestones, (3) Build & Test - we develop with precision and rigorous testing, (4) Launch & Support - we deploy and provide ongoing support for continuous success.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Absolutely! We specialize in API development and system integration. We can integrate our solutions with your existing software, databases, and third-party services to create a seamless workflow that enhances your current operations.",
  },
  {
    question: "What makes Janixware different from other software companies?",
    answer:
      "We focus on building simple and smart software solutions that are easy to understand and use. Our experienced team combines technical expertise with transparent communication, ensuring you're involved throughout the process. We deliver high-quality, scalable products with competitive pricing and dedicated support.",
  },
];

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="FAQ" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our software development
              services and process.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
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
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-500 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Get in touch with us
              and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Contact Us
              </a>
              <a
                href="tel:+94713974674"
                className="px-8 py-4 rounded-full bg-blue-600 text-white border-2 border-white font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
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
                Get a Free Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

