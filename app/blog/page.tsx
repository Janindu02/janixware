import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// SEO-optimized metadata for Blog page
export const metadata: Metadata = {
  title: "Blog & Insights - Software Development Blog | Janixware",
  description:
    "Read Janixware's blog for insights on software development, web development, technology trends, and business solutions in Sri Lanka.",
  keywords: [
    "software development blog",
    "web development blog Sri Lanka",
    "technology blog",
    "software solutions blog",
  ],
  openGraph: {
    title: "Blog & Insights - Janixware",
    description:
      "Read Janixware's blog for insights on software development, web development, and technology trends.",
    url: "https://www.janixware.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.janixware.com/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Janixware Blog - Software Development Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://www.janixware.com/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Embracing Modern Web Design Trends for 2024",
    category: "Web Development",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape and how they can elevate your online presence. From subtle animations to dark mode aesthetics, stay ahead of the curve.",
    author: "Jane Doe",
    date: "November 23, 2024",
    readTime: "7 min read",
    image: "/coverimage.png",
  },
  {
    id: 2,
    title: "Boosting Business Efficiency with Custom Software",
    category: "Software Solutions",
    excerpt:
      "Learn how tailor-made software solutions can streamline your operations, reduce manual errors, and significantly boost your business's overall efficiency and productivity.",
    author: "John Smith",
    date: "November 18, 2024",
    readTime: "5 min read",
    image: "/coverimage.png",
  },
  {
    id: 3,
    title: "The Importance of User Experience Research in Development",
    category: "UI/UX Design",
    excerpt:
      "User experience (UX) research is critical for creating products that users love. We delve into best practices for conducting effective UX research and integrating findings into your development cycle.",
    author: "Alice Johnson",
    date: "November 15, 2024",
    readTime: "8 min read",
    image: "/coverimage.png",
  },
  {
    id: 4,
    title: "Cloud Computing: The Future of Scalable Infrastructure",
    category: "Tech Trends",
    excerpt:
      "Cloud computing continues to revolutionize how businesses operate. Explore the benefits, challenges, and future outlook of cloud-based infrastructure and services.",
    author: "Robert Brown",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "/coverimage.png",
  },
  {
    id: 5,
    title: "Leveraging Digital Marketing for Software Product Launches",
    category: "Business Strategy",
    excerpt:
      "A successful software product launch requires a robust digital marketing strategy. We share key tactics to get your new software in front of the right audience and drive early adoption.",
    author: "Emily White",
    date: "November 08, 2024",
    readTime: "9 min read",
    image: "/coverimage.png",
  },
  {
    id: 6,
    title: "Integrating AI Into Your Business Operations",
    category: "AI & Automation",
    excerpt:
      "Artificial intelligence is no longer a futuristic concept. Learn practical ways to integrate AI into your daily business operations to enhance decision-making and automate routine tasks.",
    author: "Chris Green",
    date: "November 05, 2024",
    readTime: "7 min read",
    image: "/coverimage.png",
  },
];

const categories = [
  "Web Development",
  "Software Solutions",
  "UI/UX Design",
  "Tech Trends",
  "Business Strategy",
  "AI & Automation",
  "Cloud Computing",
];

export default function BlogPage() {

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation activePage="Blog" />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                  Blog & Insights
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl">
                  Stay updated with Janixware&apos;s thoughts on software,
                  technology, and business solutions.
                </p>
              </div>
              <Link
                href="/tech-news"
                className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2 self-start md:self-auto"
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Get Tech World News
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts and Sidebar */}
        <section className="bg-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content - Blog Posts */}
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white border-b border-slate-200 pb-8 last:border-b-0 last:pb-0"
                  >
                    {post.image && (
                      <div className="mb-6 rounded-2xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>
                          By {post.author} • {post.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
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
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <aside className="space-y-8 sticky top-24">
                  {/* Categories */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Recent Posts
                    </h3>
                    <ul className="space-y-3">
                      {blogPosts.slice(0, 4).map((post) => (
                        <li key={post.id}>
                          <a
                            href="#"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors leading-relaxed"
                          >
                            {post.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stay Connected */}
                  <div className="bg-white rounded-2xl border border-slate-100 p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Stay Connected
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Subscribe to our newsletter for the latest insights and
                      updates.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
