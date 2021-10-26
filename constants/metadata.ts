export interface IMetadata {
  DESCRIPTION: string;
  TYPE?: string;
  OG_IMAGE?: {
    URL: string;
    WIDTH: number;
    HEIGHT: number;
    ALT: string;
  };
  TAGS?: string[];
  ARTICLE_SECTION?: string;
  PUBLISHED_TIME?: string;
}

const METADATA = {
  HOST_URL:
    process.env.NEXT_PUBLIC_SITE_ENV === 'production'
      ? 'YOUR_DOMAIN_HERE'
      : 'localhost:3000',
  SITE_NAME: 'SITE_NAME',
  TITLE: 'TITLE',
  DESCRIPTION: 'DESCRIPTION',
  TAGS: [],
  OG_TYPE: 'website',
  OG_IMAGE: {
    URL: '/favicon.ico',
    WIDTH: 48,
    HEIGHT: 48,
    ALT: 'Favicon',
  },
  LOCALE: 'en_US',
  FAVICON: {
    MEDIUM: '/favicon-32x32.png',
    SMALL: '/favicon-16x16.png',
    APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  },
  MANIFEST: '/site.webmanifest',
  MASK_ICON: { PATH: '/safari-pinned-tab.svg', COLOR: 'COLOR' },
  MSAPPLICATION_TILECOLOR: 'COLOR',
  THEME_COLOR: 'COLOR',
  TWITTER_ID: null,
  ITUNES_APP_ID: null,
  404: {
    // TYPE: 'article', // can vary for SEO purposes
    DESCRIPTION: 'This page cannot be found.',
    // OG_IMAGE: {
    //   URL: 'URL',
    //   WIDTH: 48,
    //   HEIGHT: 48,
    //   ALT: 'ALY',
    // },
  },
};

export default METADATA;
