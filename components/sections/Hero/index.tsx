import Container from '@/components/Container';
import { ReactComponent as HeroSVG } from '@/assets/svgs/svg-hero-optf.svg';
import Image from 'next/image';
import { ReactElement } from 'react';
import classNames from 'classnames';

export default function Hero(): ReactElement {
  return (
    <section className="gradient-home-hero">
      <Container
        hasMinHeight={true}
        heights={{ small: '100%', medium: '100%', large: '100%' }}
        classes={classNames(
          ' lg:flex lg:flex-col flex-col lg:justify-start lg:items-center'
        )}
      >
        <div className=" lg:flex lg:flex-row flex-col lg:justify-center lg:items-center my-10 ">
          <h1 className="lg:text-8xl text-5xl text-white font-extrabold	 lg:pr-32 mb-20 lg:mb-0">
            Welcome to privacy.
          </h1>
          <HeroSVG />
        </div>
        <div className=" flex lg:flex-row flex-col border-b border-dashed border-b-white lg:pb-7 pb-3">
          <div className="lg:px-10  lg:pl-16 lg:my-0 my-5">
            <Image src="/assets/images/oxen-icon.png" width={380} height={76} />
          </div>
          <div className="lg:px-10  lg:my-0 my-5">
            <Image
              src="/assets/images/session-logo-black.png"
              width={380}
              height={76}
            />
          </div>
          <div className="lg:px-10 lg:pr-16  lg:my-0 my-5">
            <Image
              src="/assets/images/lokinet-icon.png"
              width={380}
              height={76}
            />
          </div>
        </div>
        <h4 className="lg:my-7 mt-7 text-white lg:text-2xl text-xl text-center ">
          We build tools that protect your privacy and security in the digital
          world.
        </h4>
      </Container>
    </section>
  );
}
