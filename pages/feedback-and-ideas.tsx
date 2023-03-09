import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import ContactUsForm from '../components/ContactUsForm';
import Container from '../components/Container';

export default function Feedback() {
  return (
    <Layout>
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
