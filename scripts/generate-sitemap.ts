import { fetchBlogEntries, fetchPages } from '../services/cms';
import { METADATA } from '../constants';
import generateRSSFeed from '../utils/rss';
import { readdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

interface Redirection {
  source: string;
  destination: string;
  permanent: boolean;
}

// Pages to exclude from sitemap (special Next.js pages and dynamic routes)
const EXCLUDED_PAGES = [
  '.DS_Store',
  '_app.tsx',
  '_document.tsx',
  '_error.tsx',
  '404.tsx',
  '[slug].tsx', // Dynamic route handled separately
  'sitemap.xml.tsx',
  'api', // API routes
  'tag',
  'category', // Dynamic category routes handled separately
];

// Redirects from next.config.js - should be kept in sync
const REDIRECTS: Redirection[] = [
  {
    source: '/transparency',
    destination: '/transparency-report',
    permanent: true,
  },
];

async function generateSitemap() {
  const baseUrl = METADATA.HOST_URL;

  // Get static pages from pages directory
  const staticPages = readdirSync('pages')
    .filter((page) => !EXCLUDED_PAGES.includes(page))
    .map((pagePath) => {
      if (pagePath.includes('index')) {
        pagePath = '';
      } else {
        // Remove extension (.tsx, .ts, .jsx, .js)
        pagePath = pagePath.replace(/\.(tsx?|jsx?)$/, '');
      }
      return `${baseUrl}/${pagePath}`;
    });

  // Get redirect source URLs (exclude dynamic routes like ':slug')
  const redirectPages = REDIRECTS.map((redirect: Redirection) => {
    // Skip redirects with dynamic parameters as they don't map to static URLs
    if (redirect.source.includes(':slug')) {
      return '';
    }
    return `${baseUrl}${redirect.source}`;
  }).filter((url) => url !== '');

  // Get dynamic pages from Contentful
  const { entries: _dynamicPages } = await fetchPages();
  const dynamicPages = _dynamicPages.map((page) => {
    return `${baseUrl}/${page.slug}`;
  });

  // Get blog posts from Contentful
  const { entries: _blogPages } = await fetchBlogEntries();
  const blogPages = _blogPages.map((page) => {
    return {
      url: `${baseUrl}/blog/${page.slug}`,
      published: page.publishedDateISO,
    };
  });

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages, ...redirectPages, ...dynamicPages]
    .map((url) => {
      return `<url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
    })
    .join('\n  ')}
  ${blogPages
    .map((post) => {
      return `<url>
    <loc>${post.url}</loc>
    <lastmod>${post.published}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
    })
    .join('\n  ')}
</urlset>
`;

  const sitemapPath = resolve('public', 'sitemap.xml');
  writeFileSync(sitemapPath, sitemap);
  console.log(`✅ Sitemap generated at ${sitemapPath}`);

  // Generate RSS feeds
  console.log('🔄 Generating RSS feeds...');
  generateRSSFeed(_blogPages);
  console.log('✅ RSS feeds generated');
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap and RSS feeds:', error);
  process.exit(1);
});
