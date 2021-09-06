const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const config = {
  // .env.local doesn't load itself
  env: {},
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
  target: 'serverless',
};

module.exports = withPlugins([withSvgr], config);
