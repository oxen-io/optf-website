import { Layout } from '@/components/ui';
import Banner from '../components/Banner';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import AboutOPTF from '../components/AboutSection/Tabs/AboutOPTF';
import PartnersAndAllies from '../components/AboutSection/Tabs/PartnersAndAllies';
import Legals from '../components/AboutSection/Tabs/Legals';
import AnnualReports from '../components/AboutSection/Tabs/AnnualReports';
import Donations from '../components/AboutSection/Tabs/Donations';
import Funding from '../components/AboutSection/Tabs/Funding';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const renderSwitchTab = (tab: number) => {
  switch (tab) {
    case 1:
      return <PartnersAndAllies />;
    case 2:
      return <Legals />;
    case 3:
      return <AnnualReports />;
    case 4:
      return <Funding />;
    case 5:
      return <Donations />;
    case 0:
    default:
      return <AboutOPTF />;
  }
};

export default function GoToOptf() {
  const router = useRouter();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const tabNumber = Number(router.asPath.split('#')[1]);
    tabNumber ? setTab(tabNumber) : null;
  }, [router]);

  const tabNames = [
    'About OPTF',
    'Partners & Allies',
    'Legals',
    'Annual Reports',
    'Funding',
    'Donations',
  ];

  return (
    <Layout>
      <Banner
        title="Meet the Oxen Privacy Tech Foundation"
        subtitle="We’re a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected."
      />
      <div className="sticky top-0 z-30 pt-5 font-semibold bg-white border-b-2 border-dashed lg:flex-row">
        <Container classes="container flex flex-wrap items-center justify-start lg:text-lg  bg-white">
          {tabNames.map((tabName, index) => {
            return (
              <h3
                key={index + tab}
                className={classNames(
                  'mr-7  pb-2 cursor-pointer lg:my-0 hover:border-b-3 hover:border-b-violet-250 hover:pt-0.5',
                  tab === index && 'border-b-3 border-b-violet-250 pt-0.5'
                )}
                onClick={() => {
                  setTab(index);
                }}
              >
                {tabName}
              </h3>
            );
          })}
        </Container>
      </div>
      <Container classes="my-8 p-3">{renderSwitchTab(tab)}</Container>
    </Layout>
  );
}
