import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const services = [
  {
    title: "Website Development",
    description:
      "Crafting responsive, high-performance websites tailored to your business needs, ensuring a seamless user experience across all devices.",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Landing Pages for Businesses",
    description:
      "Designing conversion-focused landing pages that effectively capture leads and drive action for your marketing campaigns.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Custom Software Solutions",
    description:
      "Developing bespoke software applications that streamline operations, automate tasks, and solve unique business challenges.",
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
    title: "System Automation",
    description:
      "Implementing intelligent automation solutions to enhance efficiency, reduce manual effort, and optimize your workflows.",
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
    description:
      "Building robust and secure APIs that enable seamless integration between your applications and third-party services.",
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
    title: "Mobile App Development",
    description:
      "Creating intuitive and feature-rich native or cross-platform mobile applications for iOS and Android, bringing your ideas to users' fingertips.",
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Go",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Figma",
  "Adobe XD",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Services" />

      <main>
        {/* Hero / Heading Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We empower businesses with robust and innovative software solutions
              tailored to their unique challenges and goals.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-500">{service.icon}</div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-center">
                    {service.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
                      Learn More
                    </button>
                    <button className="px-5 py-2 rounded-full bg-blue-500 text-white font-semibold text-sm shadow hover:bg-blue-600 transition-colors">
                      Get a Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies & Tools Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
              Technologies & Tools We Master
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  {/* Icon Placeholder */}
                  <div className="h-12 w-12 rounded-lg border border-slate-300 bg-slate-50 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have an idea or a project? Let&apos;s build it together.
            </h2>
            <button className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-50 transition-colors">
              Get a Call
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

