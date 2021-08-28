const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const config = {
  // .env.local doesn't load itself
  env: {},
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  target: 'serverless',
};

module.exports = withPlugins([withSvgr], config);
