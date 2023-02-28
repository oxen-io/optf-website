import Container from '@/components/Container';
import { ReactComponent as HeroSVG } from '@/assets/svgs/svg-hero-optf.svg';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Hero(): ReactElement {
  const { isSmall } = useScreen();
  return (
    <section className="gradient-home-hero">
      <Container
        hasMinHeight={true}
        heights={{ small: '100%', medium: '100%', large: '80%' }}
        classes={classNames(
          ' lg:flex lg:flex-col flex-col lg:justify-start lg:items-between'
        )}
      >
        <div className="flex flex-col justify-center my-8 lg:flex-row lg:items-center">
          <h1 className="mb-20 mr-10 text-5xl font-extrabold text-white lg:text-8xl lg:mb-0 ">
            Welcome <br /> to privacy.
          </h1>

          <HeroSVG height={isSmall ? 302 : 539.9} />
        </div>
        <div className="flex flex-col pb-3 border-b border-dashed lg:flex-row border-b-white lg:pb-7">
          <div className="my-5 lg:px-10 lg:pl-16 lg:my-0">
            <Image
              alt="oxen icon"
              src="/assets/images/oxen-icon.png"
              width={380}
              height={76}
            />
          </div>
          <div className="my-5 lg:px-10 lg:my-0">
            <Image
              alt="session icon"
              src="/assets/images/session-logo-black.png"
              width={380}
              height={76}
            />
          </div>
          <div className="my-5 lg:px-10 lg:pr-16 lg:my-0">
            <Image
              alt="lokinet icon"
              src="/assets/images/lokinet-icon.png"
              width={380}
              height={76}
            />
          </div>
        </div>
        <h4 className="text-xl text-center text-white lg:my-7 mt-7 lg:text-2xl ">
          We build tools that protect your privacy and security in the digital
          world.
        </h4>
      </Container>
    </section>
  );
}
