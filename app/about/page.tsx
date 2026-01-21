import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import PageAnimations from "../components/PageAnimations";

// SEO-optimized metadata for About page
export const metadata: Metadata = {
  title: "About Us - Software Development Company in Sri Lanka | Janixware",
  description:
    "Learn about Janixware, a leading software development company in Sri Lanka. Founded by Janindu Amaraweera, we specialize in custom software, web development, and mobile apps. Discover our team, values, and mission.",
  keywords: [
    "about Janixware",
    "software development company Sri Lanka",
    "custom software development Sri Lanka",
    "software company Colombo",
    "web development company Sri Lanka",
    "Janindu Amaraweera",
  ],
  openGraph: {
    title: "About Janixware - Software Development Company in Sri Lanka",
    description:
      "Learn about Janixware, a leading software development company in Sri Lanka. Founded by Janindu Amaraweera, we specialize in custom software, web development, and mobile apps.",
    url: "https://www.janixware.com/about",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Janixware - Software Development Company in Sri Lanka",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/about",
  },
};

// LocalBusiness schema for About page
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  "@id": "https://www.janixware.com/about",
  name: "Janixware",
  image: "https://www.janixware.com/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    // Add coordinates when available
    // latitude: "6.9271",
    // longitude: "79.8612",
  },
  url: "https://www.janixware.com",
  telephone: "+94-713-974-674",
  email: "janixware@gmail.com",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  founder: {
    "@type": "Person",
    name: "Janindu Amaraweera",
  },
  foundingDate: "2025",
  description:
    "Software development company in Sri Lanka specializing in custom software, web development, mobile apps, and digital transformation.",
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900">
        <Navigation activePage="About" />
        <PageAnimations pageType="about" />

      <main>
        {/* Hero / Title Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="section-heading text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Janixware - Software Development Company in Sri Lanka
            </h1>
            <p className="section-subheading text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated software development company in Sri Lanka, passionate about crafting simple, smart, and scalable software solutions that drive real business growth and efficiency. Based in Colombo, we serve clients worldwide.
            </p>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="about-content">
                <h2 className="section-heading text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                  Our Journey: From Passion to Innovation in Sri Lanka
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Janixware began in late 2025 as a passion project by Janindu Amaraweera, a software engineering student from Sri Lanka, driven by a simple yet powerful idea: to make complex technology accessible and beneficial for businesses of all sizes. What started as a solo endeavor quickly grew into a collaborative vision to build robust and intuitive software solutions for businesses in Sri Lanka and worldwide.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  From our early days in Colombo, Sri Lanka, we have maintained a relentless focus on innovation and client satisfaction. Our journey has been marked by continuous learning, adapting to new technologies, and a commitment to delivering software solutions that not only meet but exceed expectations. We believe in building long-term partnerships, guiding our clients through every stage of their digital transformation.
                </p>
              </div>

              {/* Right Column - Video */}
              <div className="about-image flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                    <VideoPlayer
                      src="/video/video1.mp4"
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
            <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Meet Our Talented Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Founder / CEO */}
              <div className="team-member bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  JA
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Janindu Amaraweera
                </h3>
                <p className="text-sm text-slate-600">Founder & CEO</p>
              </div>

              {/* Coming Soon Cards */}
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="team-member bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center"
                >
                  <div className="h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-400 mb-1">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-slate-500">
                    We&apos;re expanding our team
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
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
                  className="value-card bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
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
            <h2 className="section-heading text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Our Journey & Future Goals
            </h2>
            <div className="relative pl-8 md:pl-12">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Milestones */}
              <div className="space-y-8">
                {/* Actual Milestone */}
                <div className="milestone-item relative pl-8">
                  {/* Circle Marker - Solid for achieved */}
                  <div className="absolute left-[-20px] md:left-[-28px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                  <div className="text-lg font-bold text-blue-700 mb-2">
                    2025
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Janixware founded by Janindu Amaraweera, a passionate software engineering student with a vision to simplify complex technology and build smart software solutions for businesses.
                  </p>
                </div>

                {/* Future Goals */}
                {[
                  {
                    year: "2026",
                    text: "Launch our first successful projects and build a strong portfolio of client success stories.",
                    isGoal: true,
                  },
                  {
                    year: "2027",
                    text: "Expand our service offerings and establish partnerships with businesses across various industries.",
                    isGoal: true,
                  },
                  {
                    year: "2028",
                    text: "Build a dedicated team of talented professionals and establish Janixware as a trusted software solutions provider.",
                    isGoal: true,
                  },
                  {
                    year: "2029",
                    text: "Achieve significant client growth and recognition in the software development industry.",
                    isGoal: true,
                  },
                  {
                    year: "2030",
                    text: "Become a leading software solutions company, known for innovation and exceptional client service.",
                    isGoal: true,
                  },
                ].map((milestone, index) => (
                  <div key={index} className="milestone-item relative pl-8">
                    {/* Circle Marker - Outline for goals */}
                    <div className={`absolute left-[-20px] md:left-[-28px] top-1 h-4 w-4 rounded-full border-4 border-white shadow-sm ${
                      milestone.isGoal 
                        ? "bg-white border-blue-300 ring-2 ring-blue-200" 
                        : "bg-blue-500"
                    }`}></div>
                    <div className={`text-lg font-bold mb-2 ${
                      milestone.isGoal ? "text-blue-600" : "text-blue-700"
                    }`}>
                      {milestone.year}
                      {milestone.isGoal && (
                        <span className="ml-2 text-xs font-normal text-blue-500">
                          (Goal)
                        </span>
                      )}
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
        <section className="cta-section bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Collaborate on Your Next Big Idea?
            </h2>
            <a
              href="tel:+94713974674"
              className="px-8 py-4 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-block"
            >
              Get a Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}

