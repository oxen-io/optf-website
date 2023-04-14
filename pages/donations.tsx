import Donations from '@/components/AboutSection/Tabs/Donations';
import AboutLayout from '@/components/AboutSection/Layout';

export default function DonationsPage() {
  return (
    <AboutLayout tab={5}>
      <Donations />
    </AboutLayout>
  );
}
