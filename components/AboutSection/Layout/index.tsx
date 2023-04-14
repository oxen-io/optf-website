import Banner from '@/components/Banner';
import Container from '@/components/Container';
import { Layout } from '@/components/ui';
import { METADATA } from '@/constants';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

// TODO consolidate into an object with the routes
export const tabNames = [
  'About OPTF',
  'Partners and Allies',
  'Legals',
  'Annual Reports',
  'Funding',
  'Donations',
];

export const loadSectionMetadata = (tab: number) => {
  switch (tab) {
    case 1:
      return 'PARTNERS_AND_ALLIES';
    case 2:
      return 'LEGALS';
    case 3:
      return 'ANNUAL_REPORTS';
    case 4:
      return 'FUNDING';
    case 5:
      return 'DONATIONS';
    case 0:
    default:
      return 'ABOUT';
  }
};

export const goToTabRoute = (tab: number) => {
  switch (tab) {
    case 1:
      return '/partners-and-allies';
    case 2:
      return '/legals';
    case 3:
      return '/annual-reports';
    case 4:
      return '/funding-and-support';
    case 5:
      return '/donations';
    case 0:
    default:
      return '/about-optf';
  }
};

type Props = {
  tab: number;
  children: ReactNode;
};

export default function AboutLayout(props: Props) {
  const { tab, children } = props;
  const router = useRouter();
  const sectionMetadata = loadSectionMetadata(tab);

  return (
    <Layout
      title={`OPTF | ${tabNames[tab]} | Privacy is a fundamental right.`}
      metadata={METADATA[`${sectionMetadata}`]}
    >
      <Banner
        title="Meet the Oxen Privacy Tech Foundation"
        subtitle="We’re a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected."
      />
      <div className="sticky top-0 z-20 pt-5 font-semibold bg-white border-b-2 border-dashed lg:flex-row">
        <Container classes="container flex flex-wrap items-center justify-start lg:text-lg  bg-white">
          {tabNames.map((tabName, index) => {
            return (
              <h3
                key={index + tab}
                className={classNames(
                  'mr-7  pb-2 cursor-pointer lg:my-0 lg:hover:border-b-3 lg:hover:border-b-violet-250 lg:hover:pt-0.5',
                  tab === index && 'border-b-3 border-b-violet-250 pt-0.5'
                )}
                onClick={() => {
                  router.push(goToTabRoute(index));
                }}
              >
                {tabName}
              </h3>
            );
          })}
        </Container>
      </div>
      <Container classes="my-8 p-3">{children}</Container>
    </Layout>
  );
}
