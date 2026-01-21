import { NextResponse } from 'next/server';
import { servicesData } from '../services/serviceData';

// Explicit XML sitemap route handler
// This ensures the sitemap is served as XML with correct content-type
export async function GET() {
  const baseUrl = 'https://www.janixware.com';
  
  // Core pages with priorities and change frequencies
  const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.9', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'monthly' },
    { path: '/process', priority: '0.8', changefreq: 'monthly' },
    { path: '/faq', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/clients', priority: '0.7', changefreq: 'monthly' },
    { path: '/projects', priority: '0.8', changefreq: 'monthly' },
    { path: '/tech-news', priority: '0.7', changefreq: 'daily' },
  ];

  // Service detail pages - dynamically generated from serviceData
  const serviceRoutes = servicesData.map((service) => ({
    path: `/services/${service.slug}`,
    priority: '0.9',
    changefreq: 'weekly',
  }));

  const allRoutes = [...routes, ...serviceRoutes];
  const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // Generate XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

