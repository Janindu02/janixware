"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate?: string;
  source: string;
  sourceUrl: string;
}

export default function TechNewsPage() {
  const [rssItems, setRssItems] = useState<RSSItem[]>([]);
  const [loadingRSS, setLoadingRSS] = useState(true);
  const [rssError, setRssError] = useState<string | null>(null);

  useEffect(() => {
    fetchTechNews();
  }, []);

  const fetchTechNews = async () => {
    setLoadingRSS(true);
    setRssError(null);

    try {
      const response = await fetch("/api/rss");
      const data = await response.json();

      if (data.success && data.items) {
        setRssItems(data.items);
      } else {
        setRssError("Failed to fetch tech news. Please try again later.");
      }
    } catch (error) {
      console.error("Error fetching RSS feeds:", error);
      setRssError("Failed to fetch tech news. Please try again later.");
    } finally {
      setLoadingRSS(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

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
            {loadingRSS && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-slate-600">Loading tech news...</p>
              </div>
            )}

            {rssError && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
                <p className="text-red-800 mb-4">{rssError}</p>
                <button
                  onClick={fetchTechNews}
                  className="px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loadingRSS && !rssError && rssItems.length > 0 && (
              <>
                <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                      Latest Technology News
                    </h2>
                    <p className="text-slate-600">
                      {rssItems.length} articles from top tech sources
                    </p>
                  </div>
                  <button
                    onClick={fetchTechNews}
                    className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Refresh News
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rssItems.map((item, index) => (
                    <article
                      key={index}
                      className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                          {item.source}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-grow line-clamp-3">
                        {truncateText(item.description, 150)}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        {item.pubDate && (
                          <div className="flex items-center gap-2 text-xs text-slate-500">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{formatDate(item.pubDate)}</span>
                          </div>
                        )}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors"
                        >
                          Read More
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
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

            {!loadingRSS && !rssError && rssItems.length === 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
                <p className="text-slate-600 mb-4">
                  No news articles found. Please try again later.
                </p>
                <button
                  onClick={fetchTechNews}
                  className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                >
                  Refresh News
                </button>
              </div>
            )}
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

