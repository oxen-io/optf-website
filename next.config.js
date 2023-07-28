/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');
/* eslint-enable @typescript-eslint/no-var-requires */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${
    process.env.NODE_ENV == 'development'
      ? "'unsafe-eval' 'unsafe-inline' "
      : ''
  }*.ctfassets.net *.youtube.com *.twitter.com https://substackapi.com/widget.js *.google.com *.gstatic.com;
  child-src 'self' *.ctfassets.net *.oxen.zendesk.com *.youtube.com player.vimeo.com *.twitter.com *.google.com;
  frame-src 'self' *.youtube.com player.vimeo.com *.twitter.com *.google.com;
  frame-ancestors 'self';
  script-src-elem 'self' https://substackapi.com/widget.js https://www.substackapi.com/widget.js https://static.zdassets.com *.google.com *.gstatic.com;
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
      value: 'SAMEORIGIN',
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
    GOOGLE_RECAPTCHA_FORM_SITE_DEVELOPMENT_KEY:
      process.env.GOOGLE_RECAPTCHA_FORM_SITE_DEVELOPMENT_KEY,
    GOOGLE_RECAPTCHA_FORM_SITE_PRODUCTION_KEY:
      process.env.GOOGLE_RECAPTCHA_FORM_SITE_PRODUCTION_KEY,
    STAGING_SECRET: process.env.STAGING_SECRET,
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
    redirects: [
      {
        source: '/transparency',
        destination: '/transparency-report',
        permanent: true,
      },
    ],
  },
  async redirects() {
    return this.serverRuntimeConfig.redirects;
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
