import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// SEO-optimized metadata for Process page
export const metadata: Metadata = {
  title: "Our Development Process - Software Development Workflow | Janixware",
  description:
    "Learn about Janixware's transparent software development process in Sri Lanka. From understanding your idea to launch and support, discover our 4-step methodology for delivering exceptional software solutions.",
  keywords: [
    "software development process",
    "web development process Sri Lanka",
    "custom software development workflow",
    "software development methodology",
    "Janixware development process",
    "software development steps",
  ],
  openGraph: {
    title: "Our Development Process - Janixware",
    description:
      "Learn about Janixware's transparent software development process in Sri Lanka. From understanding your idea to launch and support.",
    url: "https://www.janixware.com/process",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Janixware Development Process",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/process",
  },
};

const steps = [
  {
    id: 1,
    title: "Understand Your Idea",
    description:
      "We begin by diving deep into your vision, understanding your business goals, target audience, and current challenges. This phase involves extensive discussions, workshops, and preliminary research to ensure a shared understanding of the project's core objectives.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    timeline: [
      "Initial Consultation & Discovery Call",
      "Requirements Gathering & Brainstorming Sessions",
      "Competitor Analysis & Market Research",
      "Defining Project Scope & Key Deliverables",
    ],
    bg: "bg-slate-50",
  },
  {
    id: 2,
    title: "Plan the Solution",
    description:
      "With a clear understanding of your needs, we move to strategic planning. This involves mapping out the user experience, technical architecture, and creating a detailed roadmap. We design wireframes and prototypes to visualize the solution before any code is written, ensuring alignment.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    timeline: [
      "Detailed Functional Specifications",
      "Wireframing & Prototyping",
      "User Experience (UX) Design",
      "Technical Architecture Planning",
      "Project Roadmap & Resource Allocation",
    ],
    bg: "bg-white",
  },
  {
    id: 3,
    title: "Build & Test",
    description:
      "Our development team brings the designs to life using modern technologies and best practices. Throughout this iterative process, continuous testing and quality assurance are integral, ensuring the software is robust, efficient, and meets all specified requirements.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    timeline: [
      "Agile Development Sprints",
      "Front-end & Back-end Development",
      "Database Design & Implementation",
      "Rigorous Quality Assurance & Bug Fixing",
      "Regular Client Feedback & Iteration",
    ],
    bg: "bg-slate-50",
  },
  {
    id: 4,
    title: "Launch & Support",
    description:
      "The final stage involves deploying your solution and providing ongoing support. We handle all deployment complexities, ensure smooth go-live, and offer post-launch maintenance, updates, and performance monitoring to guarantee long-term success and satisfaction.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    timeline: [
      "Deployment & Configuration",
      "Performance Optimization",
      "Staff Training (if applicable)",
      "Post-Launch Monitoring & Analytics",
      "Ongoing Maintenance & Updates",
    ],
    bg: "bg-white",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Process" />

      <main>
        {/* Intro Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Development Process
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the transparent and efficient methodology we've built for
              every Janixware project, designed to bring your vision to life
              with precision and efficiency.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        {steps.map((step) => (
          <section key={step.id} className={`${step.bg} py-16 md:py-20`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-blue-500">{step.icon}</div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                  {step.id}. {step.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>

                {/* Example Timeline */}
                <div className="max-w-2xl mx-auto">
                  <h3 className="font-bold text-slate-700 mb-4 text-sm md:text-base">
                    Example Timeline
                  </h3>
                  <ul className="text-left space-y-2 text-slate-600">
                    {step.timeline.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your innovative ideas into powerful digital
              solutions. Contact us today to discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 transition-colors cursor-pointer"
            >
              <span>Start Your Project</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

