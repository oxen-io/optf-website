import { handleTooltip } from '@/utils/tooltip';

export interface NavItem {
  name: string;
  href: string;
  alt: string;
  target: '_self' | '_blank';
  rel?: string;
  items?: NavList;
  bgColor: number;
  mobile?: boolean | null;
  onClick?: () => void;
}

interface NavList {
  [key: string]: NavItem; // key is what user sees
}

const NAV_ITEMS: NavList = {
  Projects: {
    name: 'Projects',
    href: '/projects',
    alt: 'go to projects',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: null,
  },
  Articles: {
    name: 'Articles',
    href: '/blog',
    alt: 'go to blog',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 1,
    mobile: null,
    items: {
      Blog: {
        name: 'Blog',
        href: '/blog',
        alt: 'Link to Blog',
        target: '_self',
        bgColor: 0,
      },
    },
  },
  Research: {
    name: 'Research',
    href: '/research',
    alt: 'go to research',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 3,
    mobile: null,
  },
  Mission: {
    name: 'Mission',
    href: '/about-optf',
    alt: 'go to about',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  PartnersAndAllies: {
    name: 'Partners and allies',
    href: '/partners-and-allies',
    alt: 'go to partners and allies',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  Legals: {
    name: 'Legals',
    href: '/legals',
    alt: 'go to legals',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  AnnualReports: {
    name: 'Annual reports',
    href: '/annual-reports',
    alt: 'go to annual reports',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  FundingAndSupport: {
    name: 'Funding and support',
    href: '/funding-and-support',
    alt: 'go to funding and support',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  Donations: {
    name: 'Donations',
    href: '/donations',
    alt: 'go to donations',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  About: {
    name: 'About',
    href: '/about-optf',
    alt: 'go to about',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 4,
    mobile: false,
  },
  TransparencyReport: {
    name: 'Transparency Report',
    href: '/transparency-report',
    alt: 'go to transparency report',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  Newsletter: {
    name: 'Newsletter',
    href: '#email-sign-up',
    alt: 'go to signup',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 1,
    mobile: null,
    onClick: () => {
      handleTooltip('.tooltipContainer', '.tooltip', 'Subscribe here');
    },
  },
  Contact: {
    name: 'Contact',
    href: '/contact-us',
    alt: 'go to contact',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 2,
    mobile: null,
  },
};

const NAVIGATION = {
  NAV_ITEMS,
};

export default NAVIGATION;
