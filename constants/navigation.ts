export interface INavItem {
  href: string;
  alt: string;
  target: '_self' | '_blank';
  rel?: string;
  items?: INavList;
  bgColor: number;
}

interface INavList {
  [key: string]: INavItem; // key is what user sees
}

const NAV_ITEMS: INavList = {
  Projects: {
    href: '/projects',
    alt: 'go to projects',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
  },
  Articles: {
    href: '/blog',
    alt: 'go to blog',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 1,
  },
  Research: {
    href: '/research',
    alt: 'go to research',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 2,
  },
  About: {
    href: '/go-to-optf',
    alt: 'go to about',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 0,
  },
  Newsletter: {
    href: '/#email-sign-up',
    alt: 'go to signup',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 1,
  },
  Contact: {
    href: '/contact-us',
    alt: 'go to contact',
    target: '_self',
    rel: 'noopener noreferrer',
    bgColor: 2,
  },
};

const NAVIGATION = {
  NAV_ITEMS,
};

export default NAVIGATION;
