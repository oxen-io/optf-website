const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' ${
    process.env.NODE_ENV == 'development' ? "'unsafe-eval' " : ''
  }'unsafe-inline' *.youtube.com *.twitter.com;
  child-src 'self' *.youtube.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src 'self' blob: data: *.youtube.com *.twitter.com;
  media-src 'self';
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
  env: {},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders(),
      },
    ];
  },
  images: {
    domains: [],
  },
  serverRuntimeConfig: {
    redirects: [],
    rewrites: [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ],
  },
  async redirects() {
    return this.serverRuntimeConfig.redirects;
  },
  async rewrites() {
    return this.serverRuntimeConfig.rewrites;
  },
};

module.exports = withPlugins([withSvgr], config);
