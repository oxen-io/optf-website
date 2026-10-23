import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import Container from '../components/Container';
import SessionFoundationContact from '@/components/SessionFoundationContact';
import { METADATA } from '@/constants';

export default function Feedback() {
  return (
    <Layout title="Feedback and ideas | OPTF" metadata={METADATA.FEEDBACK}>
      <Container>
        <Banner
          title="Get involved!​​"
          subtitle="The OPTF is now part of the Session Technology Foundation."
        />
        <SessionFoundationContact />
      </Container>
    </Layout>
  );
}
