import { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TechNewsFeed from "../components/TechNewsFeed";

// SEO-optimized metadata for Tech News page
export const metadata: Metadata = {
  title: "Tech World News - Technology News Feed | Janixware",
  description:
    "Stay updated with the latest technology news from top sources including Google Developers Blog, TechCrunch, and CNET. Curated tech news feed by Janixware.",
  keywords: [
    "technology news",
    "tech news feed",
    "latest tech news",
    "software development news",
    "technology updates",
  ],
  openGraph: {
    title: "Tech World News - Janixware",
    description:
      "Stay updated with the latest technology news from top sources including Google Developers Blog, TechCrunch, and CNET.",
    url: "https://www.janixware.com/tech-news",
    type: "website",
  },
  alternates: {
    canonical: "https://www.janixware.com/tech-news",
  },
};

export default function TechNewsPage() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Blog" />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-blue-100/50 to-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Tech World News
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest technology news from top sources
              including Google Developers Blog, TechCrunch, and CNET.
            </p>
          </div>
        </section>

        {/* RSS Feeds Section */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TechNewsFeed />
          </div>
        </section>

        {/* Back to Blog Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog & Insights
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

