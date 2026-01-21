import { MetadataRoute } from 'next';
import { servicesData } from './services/serviceData';

// SEO-optimized sitemap generation
// Next.js automatically serves this as /sitemap.xml with proper XML content-type
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.janixware.com';
  
  // Core pages
  const routes: Array<{
    path: string;
    priority: number;
    changefreq: 'daily' | 'monthly' | 'weekly' | 'always' | 'hourly' | 'yearly' | 'never';
  }> = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.9, changefreq: 'monthly' },
    { path: '/services', priority: 0.9, changefreq: 'weekly' },
    { path: '/contact', priority: 0.9, changefreq: 'monthly' },
    { path: '/process', priority: 0.8, changefreq: 'monthly' },
    { path: '/faq', priority: 0.8, changefreq: 'monthly' },
    { path: '/blog', priority: 0.8, changefreq: 'weekly' },
    { path: '/clients', priority: 0.7, changefreq: 'monthly' },
    { path: '/projects', priority: 0.8, changefreq: 'monthly' },
    { path: '/tech-news', priority: 0.7, changefreq: 'daily' },
  ];

  // Service detail pages - dynamically generated from serviceData
  const serviceRoutes: Array<{
    path: string;
    priority: number;
    changefreq: 'daily' | 'monthly' | 'weekly' | 'always' | 'hourly' | 'yearly' | 'never';
  }> = servicesData.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.9,
    changefreq: 'weekly' as const,
  }));

  const allRoutes = [...routes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}

