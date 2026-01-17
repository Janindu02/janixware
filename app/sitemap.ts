import { MetadataRoute } from 'next';

// SEO-optimized sitemap generation
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.janixware.com'; // Update with your actual domain
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/process',
    '/faq',
    '/blog',
    '/clients',
    '/projects',
    '/tech-news',
  ];

  // Service detail pages
  const serviceRoutes = [
    '/services/website-development',
    '/services/landing-pages',
    '/services/custom-software',
    '/services/system-automation',
    '/services/api-development',
    '/services/mobile-app-development',
  ];

  const allRoutes = [...routes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route.includes('/services/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('/services/') ? 0.9 : 0.8,
  }));
}

