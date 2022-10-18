import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import ProjectsHero from '@/components/ProjectsHero';
import Image from 'next/image';

export default function Projects() {
  return (
    <Layout>
      <Banner
        title="Join the privacy revolution.​"
        subtitle="Keep yourself secure with our suite of free and open-source privacy tools.​"
      />
      <ProjectsHero
        icon={
          <Image src="/assets/images/oxen-icon.png" width={170} height={35} />
        }
        title={'Trade with absolute freedom.'}
        subtitle={
          'A digital currency that lets you make instant, private, and anonymous transactions. $OXEN is a cryptocurrency built on a network of economically incentivised nodes that provide powerful second-layer services.'
        }
        image={
          <Image
            width={2048}
            height={1270}
            src="/assets/images/projects-hero1-image.png"
          />
        }
        ctaLink={'/'}
        ctaText={'Trade'}
        reverse={false}
      />
      <ProjectsHero
        icon={
          <Image
            src="/assets/images/session-logo-black.png"
            width={170}
            height={35}
          />
        }
        title={'Send messages, not metadata.'}
        subtitle={
          'A private messaging app that lets you communicate securely without exposing your phone number or email address. Lock down your messaging with onion routing, an industry-leading encryption protocol — and a totally anonymous account system.'
        }
        image={
          <Image
            width={2048}
            height={1270}
            src="/assets/images/projects-hero2-image.png"
          />
        }
        ctaLink={'/'}
        ctaText={'Message'}
        reverse={true}
      />
      <ProjectsHero
        icon={
          <Image
            src="/assets/images/lokinet-icon.png"
            width={170}
            height={35}
          />
        }
        title={'Truly private internet access.'}
        subtitle={
          'An app that makes you anonymous on the internet. Lokinet is a low-latency onion router that works with any browser, anytime. Anonymous web browsing, VoIP calling, and more — keep your internet traffic private.'
        }
        image={
          <Image
            width={2048}
            height={1270}
            src="/assets/images/projects-hero3-image.png"
          />
        }
        ctaLink={'/'}
        ctaText={'Browse'}
        reverse={false}
      />
    </Layout>
  );
}
