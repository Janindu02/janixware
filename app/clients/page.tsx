import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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

        {/* Testimonials Grid Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
                >
                  {/* Avatar and Name Section */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 italic mb-4 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-amber-400 fill-current"
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
              <button className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors">
                Submit Your Review
              </button>
              <button className="px-8 py-3 rounded-full bg-white text-slate-700 border-2 border-slate-300 font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
                Contact Janixware
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

