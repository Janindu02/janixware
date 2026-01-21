import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FAQAccordion from "./components/FAQAccordion";
import HomeAnimations from "./components/HomeAnimations";
import { faqData } from "./faq/page";

// SEO-optimized metadata for homepage
export const metadata: Metadata = {
  title: "Janixware - Software Development Company in Sri Lanka",
  // title: "Janixware - Software Development Company in Sri Lanka | Custom Software & Web Development",
  description:
    "Janixware is a leading software development company in Sri Lanka, serving clients globally. We provide custom software development, web development, mobile apps, API development, system automation, and digital transformation services. Based in Colombo, Sri Lanka. Contact us for your software solutions.",
  keywords: [
    "software development company Sri Lanka",
    "custom software development Sri Lanka",
    "web development Sri Lanka",
    "mobile app development Sri Lanka",
    "software company in Sri Lanka",
    "software solutions for businesses",
    "digital transformation Sri Lanka",
    "web design Sri Lanka",
    "custom software solutions",
    "software development services",
    "Janixware",
    "software development Colombo",
    "web development company Sri Lanka",
    "API development Sri Lanka",
    "system automation Sri Lanka",
    "software company Colombo",
    "custom software development Colombo",
    "mobile app development company Sri Lanka",
    "digital transformation services Sri Lanka",
    "software solutions Sri Lanka",
    "web development services Sri Lanka",
    "software development services global",
    "custom software solutions worldwide",
  ],
  openGraph: {
    title: "Janixware - Software Development Company in Sri Lanka",
    description:
      "Leading software development company in Sri Lanka providing custom software, web development, mobile apps, API development, system automation, and digital transformation services. Serving clients globally from Colombo, Sri Lanka.",
    url: "https://www.janixware.com",
    siteName: "Janixware",
    images: [
      {
        url: "https://www.janixware.com/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Janixware - Software Development Company in Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janixware - Software Development Company in Sri Lanka",
    description:
      "Leading software development company in Sri Lanka providing custom software, web development, mobile apps, API development, system automation, and digital transformation services. Serving clients globally.",
    images: ["https://www.janixware.com/coverimage.png"],
  },
  alternates: {
    canonical: "https://www.janixware.com",
  },
};

// Homepage schema (JSON-LD)
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Janixware - Software Development Company in Sri Lanka",
  description:
    "Leading software development company in Sri Lanka providing custom software, web development, mobile apps, and digital transformation services.",
  url: "https://www.janixware.com",
  mainEntity: {
    "@type": "Organization",
    name: "Janixware",
    url: "https://www.janixware.com",
    logo: "https://www.janixware.com/logo.png",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.janixware.com",
      },
    ],
  },
};

export default function MainPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900">
        <Navigation activePage="Home" />
        <HomeAnimations />

        <main>
        {/* Hero Section */}
        <section
          id="home"
          className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight mb-6">
                  Janixware: We Build Simple and Smart Software Solutions in Sri Lanka
                </h1>
                <p className="hero-description text-base text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Janixware is a leading software development company in Sri Lanka, serving clients globally. We create websites, custom software, and mobile apps that help businesses work better, save time, and grow. Our expert team in Colombo, Sri Lanka delivers simple, smart software solutions tailored to your needs. Specializing in web development, custom software development, mobile app development, API development, system automation, and digital transformation services for businesses worldwide.
                </p>
                <div className="hero-buttons flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-white text-blue-600 border-2 border-blue-500 font-semibold hover:bg-blue-50 transition-colors inline-block text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Column - Cover Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden">
        <Image
                      src="/image8.jpg"
                      alt="Janixware software development company in Sri Lanka - Building custom software, web applications, and mobile apps"
                      width={600}
                      height={400}
                      className="hero-image w-full h-auto object-cover rounded-2xl"
          priority
          loading="eager"
          fetchPriority="high"
        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section id="about" className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Leading Software Development Company in Sri Lanka
            </h2>
            <p className="section-subheading text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              At Janixware, we are a trusted software development company in Sri Lanka, transforming innovative ideas into robust, scalable software solutions. Our dedication to quality and client success drives us to deliver exceptional web development, custom software, and mobile app development services that empower businesses worldwide to thrive in the digital age. We&apos;re more than developers; we&apos;re your partners in progress.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { label: "Idea to Product", icon: "/icons/image1.png" },
                { label: "Modern Web", icon: "/icons/image3.png" },
                { label: "Secure & Reliable", icon: "/icons/image5.png" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="feature-icon flex flex-col items-center gap-3"
                >
                  <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center p-3">
                    <Image
                      src={item.icon}
                      alt={`Janixware ${item.label} service - Software development company in Sri Lanka`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-base font-semibold text-blue-800">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          id="services"
          className="bg-slate-50 py-16 md:py-20"
          aria-label="Our Services"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Software Development Services in Sri Lanka
              </h2>
              <p className="section-subheading text-lg text-slate-600 max-w-3xl mx-auto">
                Explore our comprehensive range of software development services designed to bring your digital vision to life. From web development to custom software solutions, we help businesses in Sri Lanka and worldwide streamline operations and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Website Development",
                  desc: "Crafting visually appealing and highly functional websites tailored to your business needs.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Landing Pages for Businesses",
                  desc: "Designing high-converting landing pages to capture leads and drive your marketing campaigns.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Custom Software Solutions",
                  desc: "Building bespoke software applications that address your unique challenges and optimize workflows.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "System Automation",
                  desc: "Automating repetitive tasks and processes to boost efficiency and reduce operational costs.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "API Development",
                  desc: "Developing robust and secure APIs to enable seamless integration between your applications.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Digital Transformation",
                  desc: "Guiding your business through the adoption of digital technology to improve processes and customer experiences.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="service-card bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="why-choose-image order-2 md:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/image1.jpg"
                    alt="Janixware software development team in Sri Lanka - Custom software and web development experts"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="why-choose-content order-1 md:order-2">
                <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Partner with Janixware for unparalleled expertise and
                  dedicated support that drives real results.
                </p>
                <ul className="space-y-4">
                  {[
                    "Experienced team of certified software engineers.",
                    "Tailored solutions perfectly aligned with your business goals.",
                    "Transparent communication and agile development process.",
                    "Commitment to delivering high-quality, scalable products.",
                    "Post-launch support and maintenance for peace of mind.",
                    "Competitive pricing with exceptional value.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Some of Our Work Section */}
        <section
          id="projects"
          className="bg-slate-50 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Some of Our Work
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Explore a selection of our recent projects that showcase our
                capabilities and dedication to excellence.
              </p>
            </div>

            {/* Coming Soon Message */}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We&apos;re currently working on exciting projects that showcase
                  our expertise. Check back soon to see our portfolio of
                  innovative software solutions and successful client
                  collaborations.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block cursor-pointer relative z-10"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>

            {/* COMMENTED OUT - For future use when actual project data is available
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Surf Bay Villa Booking System",
                  gradient: "from-blue-400 to-blue-600",
                },
                {
                  name: "CityRide Taxi Dashboard",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  name: "EduTrack Learning Portal",
                  gradient: "from-purple-400 to-pink-500",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`aspect-[4/5] bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3">
                        {project.name}
                      </h3>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                        View Project
                        <svg
                          className="w-4 h-4"
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
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors inline-block text-center"
            >
                View All Projects
              </Link>
            </div>
            */}
          </div>
        </section>

        {/* How We Work Section */}
        <section
          id="process"
          className="bg-white py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                How We Work
              </h2>
              <p className="section-subheading text-lg text-slate-600 max-w-3xl mx-auto">
                Our streamlined process ensures efficient development and
                successful project delivery, from concept to launch.
          </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Understand Your Idea",
                  desc: "Deep dive into your vision and requirements to grasp the core of your project.",
                  icon: "/icons/image1.png",
                },
                {
                  num: "02",
                  title: "Plan the Solution",
                  desc: "Strategize a detailed plan, outlining features, technologies, and project milestones.",
                  icon: "/icons/image2.png",
                },
                {
                  num: "03",
                  title: "Build & Test",
                  desc: "Develop your software with precision, followed by rigorous testing for quality assurance.",
                  icon: "/icons/image3.png",
                },
                {
                  num: "04",
                  title: "Launch & Support",
                  desc: "Successfully deploy your solution and provide ongoing support for continuous success.",
                  icon: "/icons/image4.png",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="process-step bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm font-semibold text-slate-400 mb-2">
                    {step.num}
                  </div>
                  <div className="mb-4">
            <Image
                      src={step.icon}
                      alt={`${step.title} - Janixware software development process`}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <section
          id="clients"
          className="bg-slate-50 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Hear directly from our satisfied clients about their experience
                partnering with Janixware.
              </p>
            </div>

            {/* Coming Soon Message */}
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
                  We&apos;re at the initial stage of building our business and are
                  excited to showcase client reviews and testimonials soon. As we
                  complete projects and gather feedback, we&apos;ll be sharing our
                  clients&apos; experiences here. Check back soon to see what our
                  partners have to say about working with Janixware!
                </p>
              </div>
            </div>

            {/* COMMENTED OUT - For future use when actual client testimonials are available
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  quote:
                    "Janixware transformed our online presence. Their website development was top-notch, and the team was incredibly responsive and professional.",
                  name: "Sarah Chen",
                  role: "CEO, InnovateTech Solutions",
                  stars: 5,
                },
                {
                  quote:
                    "The custom software Janixware built for us significantly improved our operational efficiency. Their attention to detail is truly impressive.",
                  name: "Mark Johnson",
                  role: "Operations Manager, Global Logistics Co.",
                  stars: 5,
                },
                {
                  quote:
                    "Outstanding service! From conceptualization to deployment, Janixware exceeded our expectations. Highly recommend their expertise.",
                  name: "Emily Davis",
                  role: "Product Lead, Creative Spark Studio",
                  stars: 4,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col"
                >
                  <p className="text-slate-700 mb-6 flex-grow leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.stars
                            ? "text-yellow-400 fill-current"
                            : "text-slate-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/clients"
                className="px-6 py-3 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors inline-block text-center"
              >
                Read More Reviews
              </Link>
            </div>
            */}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="section-subheading text-lg text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our software development
                services and process.
              </p>
            </div>
            <FAQAccordion
              faqs={faqData}
              showLimit={6}
              showViewMore={true}
              viewMoreLink="/faq"
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section bg-blue-500 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have an idea or a project? Let&apos;s build it together.
            </h2>
            <a
              href="tel:+94713974674"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-50 transition-colors"
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
    </>
  );
}
