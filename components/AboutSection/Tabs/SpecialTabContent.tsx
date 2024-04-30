import { ILegals } from '@/types/cms';
import AboutOPTF from './AboutOPTF';
import AnnualReports from './AnnualReports';
import Donations from './Donations';
import Legals from './Legals';
import PartnersAndAllies from './PartnersAndAllies';
import TransparencyReport from './TransparencyReport';

export default function SpecialTabContent({
  slug,
  items,
}: {
  slug: string;
  items?: Array<ILegals>;
}) {
  switch (slug) {
    case 'about-optf':
      return <AboutOPTF />;
    case 'annual-reports':
      return <AnnualReports />;
    case 'donations':
      return <Donations />;
    case 'legals':
      if (!items) return null;
      return <Legals items={items} />;
    case 'partners-and-allies':
      return <PartnersAndAllies />;
    case 'transparency-report':
      return <TransparencyReport />;
    case 'funding-and-support':
    default:
      return null;
  }
}
