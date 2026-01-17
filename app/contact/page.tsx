"use client";

import { useState } from "react";
import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What are your typical response times?",
    answer:
      "We typically respond to inquiries within 24 business hours. For complex project inquiries, we may take up to 48 hours to provide detailed proposals.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer free initial consultations to discuss your project needs and explore how we can help bring your vision to life.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our main office is located in Colombo, Sri Lanka. We also work with clients remotely worldwide.",
  },
  {
    question: "What services does Janixware provide?",
    answer:
      "We provide website development, landing pages, custom software solutions, system automation, API development, and mobile app development services.",
  },
];

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        });
        setFormData({ name: "", email: "", company: "", message: "" });

        // Optionally open WhatsApp with pre-filled message
        if (data.whatsappUrl) {
          // You can uncomment this to automatically open WhatsApp
          // window.open(data.whatsappUrl, '_blank');
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Contact" />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help you turn your vision into reality. Reach
              out to us with any questions, project inquiries, or just to say
              hello.
            </p>
          </div>
        </section>

        {/* Contact Form + Info Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Contact Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you
                  promptly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-xl ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              </div>

              {/* Right Column - Direct Contact + FAQ */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Direct Contact
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Prefer to speak with us directly? Here&apos;s how to reach
                    us.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500 text-2xl mt-1">📧</div>
                      <div>
                        <p className="font-medium text-slate-700">Email</p>
                        <a
                          href="mailto:janixware@gmail.com"
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          janixware@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500 text-2xl mt-1">📞</div>
                      <div>
                        <p className="font-medium text-slate-700">Phone</p>
                        <a
                          href="tel:+94713974674"
                          className="text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          +94 713 974 674
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-blue-500 text-2xl mt-1">📍</div>
                      <div>
                        <p className="font-medium text-slate-700">Address</p>
                        <p className="text-slate-600">
                          Colombo Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Find quick answers to common questions about our services
                    and process.
                  </p>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setOpenFAQ(openFAQ === index ? null : index)
                          }
                          className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-medium text-slate-700">
                            {faq.question}
                          </span>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Janixware can build simple, smart, and
              effective software solutions for your business.
            </p>
            <a
              href="tel:+94713974674"
              className="px-8 py-4 rounded-full bg-white text-blue-900 font-semibold shadow-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

