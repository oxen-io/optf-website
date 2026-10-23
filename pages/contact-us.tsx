import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import Container from '../components/Container';
import SessionFoundationContact from '@/components/SessionFoundationContact';
import METADATA from '@/constants/metadata';

export default function ContactUs() {
  return (
    <Layout title="Contact - OPTF" metadata={METADATA.CONTACT}>
      <Container>
        <Banner
          title="Get in touch​"
          subtitle="The OPTF is now part of the Session Technology Foundation."
        />
        <SessionFoundationContact />
      </Container>
    </Layout>
  );
}
