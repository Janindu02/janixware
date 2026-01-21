import { Metadata } from "next";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// SEO-optimized metadata for Projects page
export const metadata: Metadata = {
  title: "Our Projects - Software Development Portfolio | Janixware Sri Lanka",
  description:
    "Explore Janixware's software development projects in Sri Lanka. View our portfolio of custom software, web development, mobile apps, and digital transformation solutions for businesses worldwide.",
  keywords: [
    "Janixware projects",
    "software development portfolio",
    "web development projects Sri Lanka",
    "custom software projects",
    "mobile app projects",
    "software company portfolio Sri Lanka",
  ],
  openGraph: {
    title: "Our Projects - Janixware Software Development Portfolio",
    description:
      "Explore Janixware's software development projects in Sri Lanka. View our portfolio of custom software, web development, and mobile apps.",
    url: "https://www.janixware.com/projects",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Janixware Projects Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/projects",
  },
};

const filters = [
  "All",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "UI/UX Design",
];

const projects = [
  {
    title: "Surf Bay Villa Booking System",
    category: "Web Development",
    description: "An intuitive online platform for seamless villa reservations.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
  {
    title: "CityRide Taxi Dashboard",
    category: "Custom Software",
    description:
      "Real-time fleet management and driver activity monitoring dashboard.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
  {
    title: "EduTrack Learning Portal",
    category: "Web Development",
    description:
      "Engaging educational platform with interactive course modules.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
  {
    title: "E-commerce Mobile App",
    category: "Mobile Apps",
    description: "Seamless shopping experience on iOS and Android devices.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
  {
    title: "Healthcare Clinic Management",
    category: "Custom Software",
    description:
      "Integrated system for patient records and appointment scheduling.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
  {
    title: "Restaurant Menu & Ordering System",
    category: "Web Development",
    description:
      "Digital menu and streamlined ordering for modern restaurants.",
    image: "/coverimage.png", // Placeholder - replace with actual project images
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Projects" />

      <main>
        {/* Hero / Title Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Our Latest Projects
            </h1>
          </div>
        </section>

        {/* Filters and Projects Grid Section */}
        <section className="bg-slate-50 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Project Image with Title Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <h2 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">
                      {project.title}
                    </h2>
                  </div>

                  {/* Project Details */}
                  <div className="p-5 flex flex-col gap-3 flex-grow">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                        {project.category}
                      </span>
                      <button className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center gap-1 transition-colors">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

