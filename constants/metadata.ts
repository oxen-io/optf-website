export interface IMetadata {
  DESCRIPTION: string;
  TYPE?: string;
  CANONICAL_URL?: string;
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
      ? 'https://optf.org'
      : 'https://staging.optf.org',
  SITE_NAME: 'OPTF',
  TITLE: 'OPTF',
  DESCRIPTION: 'A global privacy tech not-for-profit based in Australia',
  TAGS: [
    'Privacy',
    'Decentralisation',
    'FOSS',
    'Open Source',
    'Digital rights',
    'Foundation',
    'Security',
    'Australia',
  ],
  OG_TYPE: 'website',
  OG_IMAGE: {
    URL: '/assets/images/logo-black.png',
    WIDTH: 804,
    HEIGHT: 665,
    ALT: 'Session Logo Black Background',
  },
  LOCALE: 'en_US',
  FAVICON: {
    MEDIUM: '/favicon-32x32.png',
    SMALL: '/favicon-16x16.png',
    APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  },
  MANIFEST: '/site.webmanifest',
  MASK_ICON: { PATH: '/safari-pinned-tab.svg', COLOR: '#00f782' },
  MSAPPLICATION_TILECOLOR: '#343132',
  THEME_COLOR: '#ffffff',
  TWITTER_CREATOR: 'session_app',
  ITUNES_ID: 'app-id=1470168868',
  404: {
    DESCRIPTION: 'It looks like the link pointing here was faulty.',
  },
  BLOG_PAGE: {
    TYPE: 'article',
    DESCRIPTION:
      'View the OPTF blog | We discuss digital rights including privacy and online speech, and advocate for technologies which preserve people’s rights',
    OG_IMAGE: {
      URL: '/assets/images/send-messages-not-metadata.jpg',
      WIDTH: 1024,
      HEIGHT: 1024,
      ALT: 'Mysterious man on the phone. Heading is Use Session.',
    },
  },
  DOWNLOAD_PAGE: {
    TYPE: 'article',
    DESCRIPTION:
      'Download Session Today | Session is an end-to-end encrypted messenger that removes sensitive metadata collection for all operating systems.',
    OG_IMAGE: {
      URL: '/assets/images/send-messages-not-metadata.jpg',
      WIDTH: 1024,
      HEIGHT: 1024,
      ALT: 'Mysterious man on the phone. Heading is Use Session.',
    },
  },
  HELP_PAGE: {
    DESCRIPTION: 'How you can help',
  },
  OPEN_GROUP_PAGE: {
    DESCRIPTION:
      'Join the movement to keep the internet private! Chat with like-minded individuals in Session Open Group Channel. Join Now',
    OG_IMAGE: {
      URL: '/assets/images/faq.png',
      WIDTH: 1024,
      HEIGHT: 1024,
      ALT: 'Frequently Asked Questions heading with redacted text below',
    },
  },
};

export default METADATA;
