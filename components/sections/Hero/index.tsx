import Container from '@/components/Container';
import { ReactComponent as HeroSVG } from '@/assets/svgs/svg-hero-optf.svg';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Hero(): ReactElement {
  const { isSmall } = useScreen();
  return (
    <section className="gradient-home-hero shadow-header">
      <Container
        hasMinHeight={false}
        heights={{ small: '100%', medium: '100%', large: '80%' }}
        classes={classNames(
          'lg:flex lg:flex-col flex-col lg:justify-start lg:items-between'
        )}
      >
        <div className="flex flex-col justify-center my-8 lg:flex-row lg:items-center">
          <h1 className="mb-20 mr-10 text-5xl font-extrabold text-white lg:text-8xl lg:mb-0">
            Welcome <br /> to privacy.
          </h1>

          <HeroSVG height={isSmall ? 302 : 539.9} />
        </div>
        <h4 className="text-2xl font-semibold text-center text-white font-sem lg:mb-9 mb-4 mt-7 lg:text-3xl">
          We promote tools that protect your privacy and security in the digital
          world
        </h4>
      </Container>
    </section>
  );
}
