import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FAQAccordion from "../components/FAQAccordion";

// SEO-optimized metadata for FAQ page
export const metadata: Metadata = {
  title: "FAQ - Software Development Services FAQ | Janixware Sri Lanka",
  description:
    "Find answers to frequently asked questions about Janixware's software development services in Sri Lanka. Learn about our process, pricing, technologies, timelines, and more.",
  keywords: [
    "software development FAQ",
    "web development FAQ Sri Lanka",
    "custom software FAQ",
    "mobile app development FAQ",
    "software company FAQ Sri Lanka",
    "Janixware FAQ",
  ],
  openGraph: {
    title: "FAQ - Software Development Services FAQ | Janixware",
    description:
      "Find answers to frequently asked questions about Janixware's software development services in Sri Lanka.",
    url: "https://www.janixware.com/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://www.janixware.com/faq",
  },
};

export const faqData = [
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
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, and various cloud platforms. Our technology stack is selected based on your project requirements, ensuring optimal performance, scalability, and maintainability. We stay updated with the latest trends and best practices in software development.",
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "Security is our top priority. We implement industry-standard security measures including encryption, secure authentication, regular security audits, and compliance with data protection regulations. We follow secure coding practices and conduct thorough testing to identify and mitigate potential vulnerabilities.",
  },
  {
    question: "Can you help with mobile app development?",
    answer:
      "Yes, we develop both native and cross-platform mobile applications for iOS and Android. Whether you need a standalone mobile app or one that integrates with your existing web platform, we can create user-friendly, high-performance mobile solutions that meet your business objectives.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is flexible and based on project scope, complexity, and requirements. We offer transparent pricing with detailed quotes for each project. We provide fixed-price contracts for well-defined projects and hourly rates for ongoing support or flexible development needs. Contact us for a customized quote tailored to your project.",
  },
  {
    question: "Do you offer maintenance and updates?",
    answer:
      "Yes, we provide comprehensive maintenance and update services including bug fixes, security updates, performance optimization, feature additions, and technical support. We offer various maintenance packages to suit your needs, ensuring your software remains secure, up-to-date, and functioning optimally.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "We maintain transparent and regular communication throughout the project lifecycle. You'll receive weekly progress updates, have access to project management tools, and can schedule regular meetings with our team. We believe in keeping you informed at every stage and welcome your feedback to ensure the project aligns with your vision.",
  },
];

export default function FAQPage() {
  // FAQ schema (JSON-LD) for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900">
        <Navigation activePage="FAQ" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Software Development Services FAQ
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Janixware's software development services in Sri Lanka. Learn about our process, pricing, technologies, and more.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion
              faqs={faqData}
              showLoadMore={true}
              loadMoreCount={6}
            />
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
    </>
  );
}

