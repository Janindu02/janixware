import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// SEO-optimized metadata for Clients page
export const metadata: Metadata = {
  title: "Client Testimonials - Software Development Reviews | Janixware",
  description:
    "Read client testimonials and reviews about Janixware's software development services in Sri Lanka. Learn how businesses worldwide have transformed their operations with our custom software solutions.",
  keywords: [
    "Janixware reviews",
    "software development testimonials",
    "client testimonials Sri Lanka",
    "software company reviews",
    "web development reviews",
    "custom software testimonials",
  ],
  openGraph: {
    title: "Client Testimonials - Janixware Software Development Reviews",
    description:
      "Read client testimonials and reviews about Janixware's software development services in Sri Lanka.",
    url: "https://www.janixware.com/clients",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Janixware Client Testimonials",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/clients",
  },
};

// COMMENTED OUT - For future use when actual client testimonials are available
/*
const testimonials = [
  {
    name: "Emily R.",
    role: "CEO, NexaTech Solutions",
    quote:
      "Janixware transformed our outdated system into a modern, efficient platform. Their attention to detail and commitment to understanding our unique needs were exceptional. The new solution has significantly boosted our productivity and client satisfaction.",
    rating: 4,
  },
  {
    name: "Michael J.",
    role: "Product Manager, Apex Innovations",
    quote:
      "Working with Janixware was a seamless experience from start to finish. They delivered a custom software solution that exceeded our expectations, not only in functionality but also in user experience. Highly recommend their expertise!",
    rating: 4,
  },
  {
    name: "Sophia L.",
    role: "Marketing Director, GlobalReach Agency",
    quote:
      "The landing pages and web applications developed by Janixware have dramatically improved our conversion rates. Their design aesthetic and technical execution are top-notch. A truly valuable partner for any business looking to grow online.",
    rating: 4,
  },
  {
    name: "David K.",
    role: "Founder, Startup Velocity",
    quote:
      "As a startup, we needed a robust and scalable solution quickly. Janixware provided exactly that, with incredible agility and insight. Their team was responsive, professional, and delivered a product that's integral to our business model.",
    rating: 4,
  },
];
*/

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Clients" />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hear directly from businesses who have transformed their operations
              with Janixware&apos;s software solutions.
            </p>
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <svg
                    className="w-20 h-20 text-blue-500 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We&apos;re in the initial stage of building our business and are
                  excited to showcase client reviews and testimonials soon. As we
                  complete projects and gather feedback, we&apos;ll be sharing our
                  clients&apos; experiences here. Check back soon to see what our
                  partners have to say about working with Janixware!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ready to Share Your Experience?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              We value your feedback and it helps us continuously improve. Submit
              your review or reach out with any questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block cursor-pointer"
              >
                Submit Your Review
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-white text-slate-700 border-2 border-slate-300 font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors inline-block cursor-pointer"
              >
                Contact Janixware
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

