const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const config = {
  target: 'serverless',
};

module.exports = withPlugins([withSvgr], config);
