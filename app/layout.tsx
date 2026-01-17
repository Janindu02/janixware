import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO-optimized metadata for Janixware
export const metadata: Metadata = {
  metadataBase: new URL("https://www.janixware.com"), // Update with your actual domain
  title: {
    default: "Janixware - Software Development Company in Sri Lanka",
    template: "%s | Janixware",
  },
  description:
    "Janixware is a leading software development company in Sri Lanka. We provide custom software development, web development, mobile apps, and digital transformation services for businesses worldwide.",
  keywords: [
    "software development company Sri Lanka",
    "custom software development Sri Lanka",
    "web development Sri Lanka",
    "mobile app development Sri Lanka",
    "software solutions for businesses",
    "software company in Sri Lanka",
    "web design Sri Lanka",
    "software development services",
    "digital transformation",
    "API development",
    "system automation",
  ],
  authors: [{ name: "Janixware" }],
  creator: "Janixware",
  publisher: "Janixware",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.janixware.com",
    siteName: "Janixware",
    title: "Janixware - Software Development Company in Sri Lanka",
    description:
      "Leading software development company in Sri Lanka. Custom software, web development, mobile apps, and digital transformation services.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Janixware - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janixware - Software Development Company in Sri Lanka",
    description:
      "Leading software development company in Sri Lanka. Custom software, web development, mobile apps, and digital transformation services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-google-verification-code",
  },
};

// Organization schema (JSON-LD) for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Janixware",
  url: "https://www.janixware.com",
  logo: "https://www.janixware.com/logo.png",
  description:
    "Leading software development company in Sri Lanka providing custom software, web development, mobile apps, and digital transformation services.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-713-974-674",
    contactType: "Customer Service",
    email: "janixware@gmail.com",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
    addressRegion: "Western Province",
  },
  sameAs: [
    // Add social media links when available
    // "https://www.facebook.com/janixware",
    // "https://www.linkedin.com/company/janixware",
    // "https://twitter.com/janixware",
  ],
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Janindu Amaraweera",
  },
};

// SoftwareCompany schema
const softwareCompanySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareCompany",
  name: "Janixware",
  url: "https://www.janixware.com",
  logo: "https://www.janixware.com/logo.png",
  description:
    "Software development company specializing in custom software, web development, mobile apps, and digital transformation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  telephone: "+94-713-974-674",
  email: "janixware@gmail.com",
  serviceArea: {
    "@type": "Country",
    name: "Worldwide",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

// Website schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Janixware",
  url: "https://www.janixware.com",
  description:
    "Software development company in Sri Lanka providing custom software, web development, mobile apps, and digital transformation services.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.janixware.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareCompanySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
