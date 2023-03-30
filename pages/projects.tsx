import { Layout } from '@/components/ui';
import Banner from '@/components/Banner';
import ProjectsHero from '@/components/ProjectsHero';
import Image from 'next/image';
import { METADATA } from '@/constants';

export default function Projects() {
  return (
    <Layout
      title="OPTF | Projects | Privacy is a fundamental right."
      metadata={METADATA.PROJECTS}
    >
      <Banner
        title="Join the privacy revolution.​"
        subtitle="Keep yourself secure with our suite of free and open-source privacy tools.​"
      />
      <ProjectsHero
        icon={
          <Image
            alt="oxen icon"
            src="/assets/images/oxen-icon.png"
            width={170}
            height={35}
          />
        }
        title={'Trade with absolute freedom.'}
        subtitle={
          'A digital currency that lets you make instant, private, and anonymous transactions. $OXEN is a cryptocurrency built on a network of economically incentivised nodes that provide powerful second-layer services.'
        }
        image={
          <Image
            alt="hero image"
            width={2048}
            height={1270}
            src="/assets/images/projects-hero1-image.png"
          />
        }
        ctaLink={'https://oxen.io/'}
        ctaText={'Trade'}
        reverse={false}
      />
      <ProjectsHero
        icon={
          <Image
            alt="session logo"
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
            alt="projects hero image 2"
            width={500}
            height={450}
            src="/assets/images/projects-hero2-image.png"
          />
        }
        ctaLink={'https://getsession.org/'}
        ctaText={'Message'}
        reverse={true}
      />
      <ProjectsHero
        icon={
          <Image
            alt="lokinet icon"
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
            alt="projects hero image 3"
            width={2048}
            height={1270}
            src="/assets/images/projects-hero3-image.png"
          />
        }
        ctaLink={'https://lokinet.org/'}
        ctaText={'Browse'}
        reverse={false}
      />
    </Layout>
  );
}
