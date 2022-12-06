import { Layout } from '@/components/ui';
import Banner from '../components/Banner';
import { useState } from 'react';
import Container from '../components/Container';
import AboutOPTF from '../components/AboutSection/Tabs/AboutOPTF';
import PartnersAndAlies from '../components/AboutSection/Tabs/PartnersAndAlies';
import Legals from '../components/AboutSection/Tabs/Legals';
import AnnualReports from '../components/AboutSection/Tabs/AnnualReports';
import Donations from '../components/AboutSection/Tabs/Donations';
import Funding from '../components/AboutSection/Tabs/Funding';

export default function GoToOptf() {
  const [tab, setTab] = useState(0);

  const renderSwitchTab = () => {
    switch (tab) {
      case 0:
        return <AboutOPTF />;
        break;
      case 1:
        return <PartnersAndAlies />;
        break;
      case 2:
        return <Legals />;
        break;
      case 3:
        return <AnnualReports />;
        break;
      case 4:
        return <Funding />;
        break;
      case 5:
        return <Donations />;
        break;
      default:
        return <AboutOPTF />;
        break;
    }
  };
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
      <div>
        <Banner
          title="Meet the Oxen Privacy Tech Foundation"
          subtitle="We’re a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected."
        />
        <div className="flex justify-center items-center lg:flex-row  flex-wrap sticky top-0 bg-white z-20 py-5 font-semibold">
          {tabNames.map((tab, index) => {
            return (
              <h3
                className="mr-3 cursor-pointer lg:my-0 my-2"
                onClick={() => {
                  setTab(index);
                }}
              >
                {tab}
              </h3>
            );
          })}
        </div>
        <hr />
        <Container classes="my-8">{renderSwitchTab()}</Container>
      </div>
    </Layout>
  );
}
