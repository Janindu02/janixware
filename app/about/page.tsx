import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Janixware Logo"
                width={200}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Process", href: "#process" },
                { name: "Clients", href: "#clients" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-blue-600 transition-colors font-medium ${
                    item.name === "About" ? "text-blue-600" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Get a Call Button */}
            <button className="hidden sm:inline-flex px-5 py-2 rounded-full bg-transparent text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors border border-slate-300 hover:border-blue-400">
              Get a Free Call
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero / Title Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Janixware
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team passionate about crafting simple, smart,
              and scalable software solutions that drive real business growth
              and efficiency.
            </p>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Our Journey: From Passion to Innovation
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Janixware began as a passion project of a software
                  engineering student, driven by a simple yet powerful idea: to
                  make complex technology accessible and beneficial for
                  businesses of all sizes. What started as a solo endeavor
                  quickly grew into a collaborative team, united by a shared
                  vision to build robust and intuitive software.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  From those early days, we have maintained a relentless focus
                  on innovation and client satisfaction. Our journey has been
                  marked by continuous learning, adapting to new technologies,
                  and a commitment to delivering solutions that not only meet
                  but exceed expectations. We believe in building long-term
                  partnerships, guiding our clients through every stage of their
                  digital transformation.
                </p>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/coverimage.png"
                      alt="Developer workspace with laptop and monitors"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Talented Team Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Meet Our Talented Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Alice Johnson",
                  role: "CEO & Founder",
                  initial: "AJ",
                },
                {
                  name: "David Smith",
                  role: "Lead Software Engineer",
                  initial: "DS",
                },
                {
                  name: "Emily White",
                  role: "UX/UI Designer",
                  initial: "EW",
                },
                {
                  name: "Michael Brown",
                  role: "Project Manager",
                  initial: "MB",
                },
                {
                  name: "Sophia Lee",
                  role: "Marketing Specialist",
                  initial: "SL",
                },
                {
                  name: "Chris Green",
                  role: "Cloud Architect",
                  initial: "CG",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                >
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.initial}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  description:
                    "We constantly seek new ways to solve complex problems and deliver cutting-edge solutions.",
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Integrity",
                  description:
                    "Transparency and honesty guide all our interactions, fostering trust with clients and partners.",
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Quality",
                  description:
                    "We are committed to delivering high-quality, robust, and reliable software that exceeds expectations.",
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Collaboration",
                  description:
                    "Working closely with our clients and within our team to achieve shared goals efficiently.",
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Client-Centric",
                  description:
                    "Our clients' success is our priority, and we strive to understand and meet their unique needs.",
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Growth",
                  description:
                    "Fostering continuous learning and development for our team and our clients' businesses.",
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
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-500 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Milestones Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Our Milestones
            </h2>
            <div className="relative pl-8 md:pl-12">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Milestones */}
              <div className="space-y-8">
                {[
                  {
                    year: "2018",
                    text: "Janixware founded by a passionate software engineering student with a vision to simplify complex tech.",
                  },
                  {
                    year: "2019",
                    text: "Successfully launched first custom web application for a local startup, gaining traction.",
                  },
                  {
                    year: "2020",
                    text: "Expanded team to include dedicated UX/UI designers and project managers.",
                  },
                  {
                    year: "2021",
                    text: "Achieved significant client growth, serving businesses across multiple industries.",
                  },
                  {
                    year: "2022",
                    text: "Introduced AI-powered automation solutions, broadening our service portfolio.",
                  },
                  {
                    year: "2023",
                    text: "Recognized as a top emerging software development agency by industry review platforms.",
                  },
                  {
                    year: "2024",
                    text: "Opened new office premises to accommodate expanding operations and talent pool.",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Circle Marker */}
                    <div className="absolute left-[-20px] md:left-[-28px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                    <div className="text-lg font-bold text-blue-700 mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Collaborate on Your Next Big Idea?
            </h2>
            <button className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors">
              Get a Call
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Janixware Logo"
                  width={200}
                  height={70}
                  className="h-14 w-auto mb-4"
                />
              </div>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Building simple and smart software solutions for a better
                tomorrow.
              </p>
              <div className="flex gap-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                      aria-label={social}
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <span className="text-xs">{social[0]}</span>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>info@janixware.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Software Ave, Tech City, TX 78701</li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions & Resources Columns */}
            <div className="grid grid-cols-2 gap-6 md:block">
              <div className="mb-6 md:mb-0">
                <h3 className="font-semibold text-slate-900 mb-4">Solutions</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#services" className="hover:text-blue-600 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-blue-600 transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="hover:text-blue-600 transition-colors">
                      Process
                    </a>
                </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>
                    <a href="#clients" className="hover:text-blue-600 transition-colors">
                      Clients
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="hover:text-blue-600 transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">
              © 2026 Janixware. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

