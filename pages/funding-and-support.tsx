import Funding from '@/components/AboutSection/Tabs/Funding';
import AboutLayout from '@/components/AboutSection/Layout';

export default function FundingPage() {
  return (
    <AboutLayout tab={4}>
      <Funding />
    </AboutLayout>
  );
}
