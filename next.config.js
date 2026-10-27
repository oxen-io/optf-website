/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');
/* eslint-enable @typescript-eslint/no-var-requires */

// Statically exported: the web server must apply headers, redirects and
// rewrites (see README).
const config = {
  // .env.local doesn't load itself
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT_ID: process.env.CONTENTFUL_ENVIRONMENT_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  images: {
    // next export has no image optimizer; every <Image> must set `unoptimized`.
    loader: 'custom',
  },
};

module.exports = withPlugins([withSvgr], config);
