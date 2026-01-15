const { fetchBlogEntries, fetchPages } = require('../services/cms');
const { METADATA } = require('../constants');
const generateRSSFeed = require('../utils/rss').default;
const { readdirSync, writeFileSync } = require('fs');
const { resolve } = require('path');

async function generateSitemap() {
  const baseUrl = METADATA.HOST_URL;

  const staticPages = readdirSync('pages')
    .filter((page) => {
      return ![
        '.DS_Store',
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        '404.tsx',
        '[slug].tsx',
        'sitemap.xml.tsx',
        'api',
        'tag',
        'preview',
        'category',
      ].includes(page);
    })
    .map((pagePath) => {
      if (pagePath.includes('index')) {
        pagePath = '';
      } else {
        pagePath = pagePath.split('.tsx')[0];
      }
      return `${baseUrl}/${pagePath}`;
    });

  // Note: redirects are hardcoded since we can't import next.config.js easily
  const redirects = [
    {
      source: '/transparency',
      destination: '/transparency-report',
      permanent: true,
    },
  ];

  const redirectPages = redirects
    .map((redirect) => {
      if (redirect.source.includes(':slug')) {
        return '';
      } else {
        return `${baseUrl}${redirect.source}`;
      }
    })
    .filter((url) => url !== '');

  const { entries: _dynamicPages } = await fetchPages();
  const dynamicPages = _dynamicPages.map((page) => {
    return `${baseUrl}/${page.slug}`;
  });

  const { entries: _blogPages } = await fetchBlogEntries();
  const blogPages = _blogPages.map((page) => {
    return {
      url: `${baseUrl}/blog/${page.slug}`,
      published: page.publishedDateISO,
    };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticPages, ...redirectPages, ...dynamicPages]
        .map((url) => {
          return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
        })
        .join('')}
      ${blogPages
        .map((post) => {
          return `
            <url>
              <loc>${post.url}</loc>
              <lastmod>${post.published}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
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
