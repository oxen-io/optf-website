export interface IAboutTab {
  name: string;
  metadata: string;
  route: string;
}

const TABS: Array<IAboutTab> = [
  { name: 'About OPTF', metadata: 'ABOUT', route: '/about-optf' },
  {
    name: 'Partners and Allies',
    metadata: 'PARTNERS_AND_ALLIES',
    route: '/partners-and-allies',
  },
  { name: 'Legals', metadata: 'LEGALS', route: '/legals' },
  {
    name: 'Annual Reports',
    metadata: 'ANNUAL_REPORTS',
    route: '/annual-reports',
  },
  { name: 'Funding', metadata: 'FUNDING', route: '/funding-and-support' },
  { name: 'Donations', metadata: 'DONATIONS', route: '/donations' },
  {
    name: 'Transparency Report',
    metadata: 'TRANSPARENCY_REPORT',
    route: '/transparency-report',
  },
];

const ABOUT = {
  TABS,
};

export default ABOUT;
