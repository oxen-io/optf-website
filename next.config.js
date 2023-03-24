const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${
    process.env.NODE_ENV == 'development'
      ? "'unsafe-eval' 'unsafe-inline' "
      : ''
  }*.ctfassets.net *.youtube.com *.twitter.com;
  child-src 'self' *.ctfassets.net *.oxen.zendesk.com *.youtube.com player.vimeo.com *.twitter.com *.google.com;
  frame-src  'self' *.google.com *.getsession.org *;
  frame-ancestors 'self' *.google.com *.getsession.org;
  script-src-elem 'self' https://substackapi.com/widget.js https://static.zdassets.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src 'self' blob: data: *.ctfassets.net *.youtube.com *.twitter.com;
  media-src 'self' *.youtube.com;
  connect-src *;
  font-src 'self' blob: data: fonts.gstatic.com maxcdn.bootstrapcdn.com;
  worker-src 'self' blob:;
`;

const securityHeaders = () => {
  const headers = [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on',
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
    {
      key: 'X-Frame-Options',
      value: 'allow-from *',
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\n/g, ''),
    },
  ];
  return headers;
};

const config = {
  // .env.local doesn't load itself
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT_ID: process.env.CONTENTFUL_ENVIRONMENT_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
    CAMPAIGN_MONITOR_CLIENT_ID: process.env.CAMPAIGN_MONITOR_CLIENT_ID,
    CAMPAIGN_MONITOR_API_KEY: process.env.CAMPAIGN_MONITOR_API_KEY,
    CAMPAIGN_MONITOR_LIST_SESSION_ID:
      process.env.CAMPAIGN_MONITOR_LIST_SESSION_ID,
    CAMPAIGN_MONITOR_LIST_MARKET_RESEARCH_ID:
      process.env.CAMPAIGN_MONITOR_LIST_MARKET_RESEARCH_ID,
    STAGING_SECRET: process.env.STAGING_SECRET,
  },
  async redirects() {
    return [
      {
        source: '/partners-and-allies',
        destination: '/about-optf#1',
        permanent: true,
      },
      {
        source: '/legals',
        destination: '/about-optf#2',
        permanent: true,
      },
      {
        source: '/annual-reports',
        destination: '/about-optf#3',
        permanent: true,
      },
      {
        source: '/funding-and-support',
        destination: '/about-optf#4',
        permanent: true,
      },
      {
        source: '/donations',
        destination: '/about-optf#5',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders(),
      },
    ];
  },
  images: {
    domains: ['downloads.ctfassets.net', 'images.ctfassets.net'],
  },
  serverRuntimeConfig: {
    redirects: [],
  },
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/api/feed/rss',
      },
      {
        source: '/feed/:slug',
        destination: '/api/feed/:slug',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/blog/:slug',
        destination: '/:slug',
      },
    ];
  },
};

module.exports = withPlugins([withSvgr], config);
