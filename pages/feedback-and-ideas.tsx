import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import ContactUsForm from '../components/ContactUsForm';
import Container from '../components/Container';
import { METADATA } from '@/constants';

export default function Feedback() {
  return (
    <Layout title="Feedback and ideas | OPTF" metadata={METADATA.FEEDBACK}>
      <Container>
        <Banner
          title="Get involved!​​"
          subtitle="Your feedback and support helps us fulfill our mission.​​"
        />
        <ContactUsForm />
      </Container>
    </Layout>
  );
}
