import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import Container from '../components/Container';
import ContactUsForm from '../components/ContactUsForm';

export default function ContactUs() {
  return (
    <Layout title="Contact - OPTF">
      <Container>
        <Banner
          title="Get in touch​"
          subtitle="Your feedback and support helps us fulfill our mission of making digital privacy accessible to all."
        />
        <ContactUsForm />
      </Container>
    </Layout>
  );
}
