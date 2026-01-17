import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  servicesData,
  getServiceBySlug,
  getAllServiceSlugs,
} from "../serviceData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Janixware",
    };
  }

  return {
    title: `${service.title} - Software Development Services in Sri Lanka | Janixware`,
    description: `${service.metaDescription} Professional ${service.title.toLowerCase()} services in Sri Lanka by Janixware.`,
    keywords: [
      `${service.title.toLowerCase()} Sri Lanka`,
      "software development Sri Lanka",
      "custom software development Sri Lanka",
      "web development Sri Lanka",
      service.title.toLowerCase(),
      "Janixware",
      ...service.technologies.map((tech) => tech.toLowerCase()),
    ].join(", "),
    openGraph: {
      title: `${service.title} - Software Development Services in Sri Lanka | Janixware`,
      description: `${service.metaDescription} Professional ${service.title.toLowerCase()} services in Sri Lanka.`,
      url: `https://www.janixware.com/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Software Development Services in Sri Lanka | Janixware`,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `https://www.janixware.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Service schema (JSON-LD) for SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: {
      "@type": "Organization",
      name: "Janixware",
      url: "https://www.janixware.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
      },
      telephone: "+94-713-974-674",
      email: "janixware@gmail.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: service.title,
    url: `https://www.janixware.com/services/${slug}`,
    offers: {
      "@type": "Offer",
      url: `https://www.janixware.com/services/${slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    category: "Software Development Services",
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.janixware.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.janixware.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://www.janixware.com/services/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900">
        <Navigation activePage="Services" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-6">
                {service.title} - Software Development Services in Sri Lanka
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {service.fullDescription} Janixware provides professional {service.title.toLowerCase()} services in Sri Lanka, helping businesses achieve their digital transformation goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
                >
                  Get a Quote
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
                <a
                  href="tel:+94713974674"
                  className="px-8 py-3 rounded-full bg-white text-blue-600 border-2 border-blue-500 font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
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
                  Get a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover the powerful features that make our {service.title}{" "}
                service exceptional.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                    <p className="text-slate-700 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Benefits for Your Business
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                See how our {service.title} service can transform your business
                operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Common Use Cases
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Explore how businesses use our {service.title} service to solve
                real-world challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-blue-300 transition-colors"
                >
                  <p className="text-slate-700 font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We leverage industry-leading technologies to deliver exceptional
                results.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-700 font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A structured approach to delivering exceptional results.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 bg-slate-50 rounded-2xl border border-slate-100 p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {step}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title} service can help
              transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Get a Free Quote
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
                Schedule a Call
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

