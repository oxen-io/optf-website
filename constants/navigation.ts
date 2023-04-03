export interface INavItem {
  name: string;
  href: string;
  alt: string;
  target: '_self' | '_blank';
  rel?: string;
  items?: INavList;
  bgColor: number;
  mobile?: boolean | null;
}

interface INavList {
  [key: string]: INavItem; // key is what user sees
}

const NAV_ITEMS: INavList = {
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
      MediaReleases: {
        name: 'Media releases',
        href: '/media-releases',
        alt: 'Link to Media releases',
        target: '_blank',
        rel: 'noopener noreferrer',
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
    bgColor: 2,
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
    href: '/about-optf#1',
    alt: 'go to partners and allies',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  TransparencyReport: {
    name: 'Transparency report',
    href: '/transparency',
    alt: 'go to transparency report',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  Legals: {
    name: 'Legals',
    href: '/about-optf#2',
    alt: 'go to legals',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  AnnualReports: {
    name: 'Annual reports',
    href: '/about-optf#3',
    alt: 'go to annual reports',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  FundingAndSupport: {
    name: 'Funding and support',
    href: '/about-optf#4',
    alt: 'go to funding and support',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
    mobile: true,
  },
  Donations: {
    name: 'Donations',
    href: '/about-optf#5',
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
    bgColor: 0,
    mobile: false,
  },
  Newsletter: {
    name: 'Newsletter',
    href: '#email-sign-up',
    alt: 'go to signup',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 1,
    mobile: null,
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
