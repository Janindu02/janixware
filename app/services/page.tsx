import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TechIcon from "../components/TechIcon";
import { servicesData } from "./serviceData";

// SEO-optimized metadata for Services page
export const metadata: Metadata = {
  title: "Services - Software Development Services in Sri Lanka | Janixware",
  description:
    "Janixware offers comprehensive software development services in Sri Lanka including custom software development, web development, mobile app development, API development, system automation, and digital transformation.",
  keywords: [
    "software development services Sri Lanka",
    "custom software development Sri Lanka",
    "web development services Sri Lanka",
    "mobile app development Sri Lanka",
    "API development Sri Lanka",
    "system automation Sri Lanka",
    "digital transformation Sri Lanka",
    "software solutions Sri Lanka",
  ],
  openGraph: {
    title: "Software Development Services in Sri Lanka | Janixware",
    description:
      "Comprehensive software development services including custom software, web development, mobile apps, API development, and system automation in Sri Lanka.",
    url: "https://www.janixware.com/services",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Janixware Software Development Services in Sri Lanka",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/services",
  },
};

// Service schema (JSON-LD)
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development Services",
  provider: {
    "@type": "Organization",
    name: "Janixware",
    url: "https://www.janixware.com",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.janixware.com/services",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        url: `https://www.janixware.com/services/${service.slug}`,
      },
    })),
  },
};

// Icon mapping for services
const getServiceIcon = (title: string) => {
  const iconMap: Record<string, React.ReactElement> = {
    "Website Development": (
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
    "Landing Pages for Businesses": (
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
    "Custom Software Solutions": (
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
    "System Automation": (
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
    "API Development": (
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
    "Mobile App Development": (
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
  };
  return iconMap[title] || iconMap["Custom Software Solutions"];
};

const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Spring Boot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Laravel", icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900">
        <Navigation activePage="Services" />

      <main>
        {/* Hero / Heading Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Software Development Services in Sri Lanka
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Janixware empowers businesses in Sri Lanka and worldwide with robust and innovative software solutions tailored to their unique challenges and goals. From custom software development to web and mobile apps, we deliver excellence.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="text-blue-500">{getServiceIcon(service.title)}</div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow text-center">
                    {service.shortDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="px-5 py-2 rounded-full bg-blue-500 text-white font-semibold text-sm shadow hover:bg-blue-600 transition-colors"
                    >
                      Get a Quote
                    </Link>
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
                  className="flex flex-col items-center gap-3 text-center group hover:transform hover:scale-105 transition-transform duration-200"
                >
                  {/* Technology Icon */}
                  <TechIcon icon={tech.icon} name={tech.name} />
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    {tech.name}
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
            <a
              href="tel:+94713974674"
              className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-50 transition-colors inline-block"
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
