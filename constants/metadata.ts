export interface IPageMetadata {
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
      ? 'https://optf.ngo'
      : 'https://staging.optf.ngo',
  SITE_NAME: 'OPTF',
  TITLE: 'OPTF',
  DESCRIPTION:
    'OPTF | Building a world where the internet is open, software is free, and privacy is protected. Join us in the fight for a free, fair, and equal internet.',
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
    URL: '/site-banner.png',
    WIDTH: 1200,
    HEIGHT: 630,
    ALT: 'OPTF logo on a white background',
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
  TWITTER_CREATOR: 'optf_app',
  ITUNES_ID: 'app-id=1470168868',
  404: {
    DESCRIPTION: 'It looks like the link pointing here was faulty.',
  },
  HOME: {
    TYPE: 'article',
    DESCRIPTION:
      'OPTF | Building a world where the internet is open, software is free, and privacy is protected. Join us in the fight for a free, fair, and equal internet.',
  },
  BLOG_PAGE: {
    TYPE: 'article',
    DESCRIPTION:
      'Blog | Latest news, articles, and updates on privacy, free software, and open internet. Join the conversation on building a safer digital world.',
  },
  PROJECTS: {
    TYPE: 'article',
    DESCRIPTION:
      'OPTF | We believe that digital technologies must give people privacy by default.',
  },
  RESEARCH: {
    TYPE: 'article',
    DESCRIPTION:
      'Research | Learn about our efforts to promote privacy, free software, and open internet through innovative research.',
  },
  CONTACT: {
    TYPE: 'article',
    DESCRIPTION:
      'Contact Us | Connect with us to learn more about our mission and services. Share your thoughts, feedback, or inquiries.',
  },
  PRIVACY_POLICY: {
    TYPE: 'article',
    DESCRIPTION:
      "Privacy Policy | Learn about OPTF's commitment to protecting your privacy with our Privacy Policy.",
  },
  FEEDBACK: {
    TYPE: 'article',
    DESCRIPTION:
      'Feedback | Have feedback or suggestions on how we can improve our mission and services? Share your thoughts with us! ',
  },
  ABOUT: {
    TYPE: 'article',
    DESCRIPTION:
      'About the OPTF | Learn about our mission, meet our team, and explore technology projects to build a safer and more secure digital world.',
  },
  PARTNERS_AND_ALLIES: {
    TYPE: 'article',
    DESCRIPTION:
      "Partners and Allies | Discover the organisations and allies supporting OPTF's mission for a free and open internet.",
  },
  LEGALS: {
    TYPE: 'article',
    DESCRIPTION:
      'Legals | Stay informed and up-to-date on the OPTF’s legal policies as we work to build a safer and more secure digital world.',
  },
  ANNUAL_REPORTS: {
    TYPE: 'article',
    DESCRIPTION:
      'Annual Reports | Stay informed and learn about our achievements as we work towards building a safer and more secure digital world.',
  },
  FUNDING: {
    TYPE: 'article',
    DESCRIPTION:
      "Funding | Apply for funding from from the OPTF to support your project or organisation's mission to promote privacy, free software, and open internet.",
  },
  DONATIONS: {
    TYPE: 'article',
    DESCRIPTION:
      "Donations | Support the OPTF's mission to promote privacy, free software, and open internet by making a donation.",
  },
  TRANSPARENCY_REPORT: {
    TYPE: 'article',
    DESCRIPTION:
      'Transparency Report | Dated documentation recording outreach from a law enforcement agency to Session and an outline of The OPTF’s responses.',
  },
};

export default METADATA;

export type IMetadata = typeof METADATA;
