import AnnualReports from '@/components/AboutSection/Tabs/AnnualReports';
import AboutLayout from '@/components/AboutSection/Layout';

export default function AnnualReportsPage() {
  return (
    <AboutLayout tab={3}>
      <AnnualReports />
    </AboutLayout>
  );
}
