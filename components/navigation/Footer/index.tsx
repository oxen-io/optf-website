import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ReactComponent as TwitterSVG } from '@/assets/svgs/twitter.svg';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';
import { useSubstack } from '@/hooks/useSubstack ';

const headingClasses = classNames(
  'text-white uppercase text-xl font-bold mb-2'
);
const linkClasses = classNames(
  'py-1.5 md:text-lg mr-2',
  'lg:py-0 lg:my-0',
  'transition-colors duration-300',
  'text-white'
);
const socialLinkClasses = classNames(
  'transition duration-300',
  'hover:text-red-350'
);
const svgClasses = classNames('fill-current w-7 h-7 m-1', 'lg:my-0 lg:ml-0');

const renderSocials = (
  <div className={classNames('flex flex-col w-full mb-4')}>
    <h3 className={headingClasses}>Socials</h3>
    <div className={classNames('w-full mb-4')}>
      <div className={classNames('flex')}>
        <Link href="https://twitter.com/TheOPTF">
          <a
            className={socialLinkClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterSVG className={svgClasses} />
          </a>
        </Link>
      </div>
    </div>
  </div>
);

const renderFooter = (
  isSmall: boolean,
  isMedium: boolean,
  isLarge: boolean,
  isHuge: boolean,
  isEnormous: boolean
) => {
  return (
    <div className={classNames('flex flex-row w-full pt-2 pb-4 xl:px-8 px-4')}>
      {(isSmall || isMedium) && renderSocials}
      <div className={classNames('flex w-full', 'lg:block ')}>
        <div className={classNames('flex flex-col w-full mb-4')}>
          <Link href="/contact-us">
            <a className={linkClasses} rel="noopener noreferrer">
              Contact us
            </a>
          </Link>
          <Link href="/feedback-and-ideas">
            <a
              className={classNames(linkClasses, 'sm:hidden xl:block ')}
              rel="noopener noreferrer"
            >
              Get involved
            </a>
          </Link>
          <Link href="/donations">
            <a
              className={classNames(linkClasses, 'sm:hidden xl:block')}
              rel="noopener noreferrer"
            >
              Donate now
            </a>
          </Link>
          <Link href="/privacy-policy/">
            <a className={linkClasses} rel="noopener noreferrer">
              Privacy policy
            </a>
          </Link>
        </div>
      </div>
      {(isLarge || isHuge || isEnormous) && renderSocials}
    </div>
  );
};

export default function Footer(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();

  return (
    <div id="email-sign-up" className={classNames('gradient-footer-gray')}>
      <div
        className={classNames(
          'lg:flex lg:max-w-screen-xl lg:mx-auto py-6 md:py-0 lg:py-7 justify-center'
        )}
      >
        <footer className={classNames('text-white', 'lg:mt-2 flex flex-row')}>
          <div
            className={classNames(
              'py-6 px-8',
              'md:p-10 md:w-full md:max-w-3xl',
              'lg:py-5 lg:px-7 lg:mb-2 lg:max-w-lg'
            )}
          >
            <Image
              src="/assets/images/logo-optf.png"
              alt="session logo"
              width={isSmall ? 180 : 90}
              height={isSmall ? 75 : 40}
            />
            <p
              className={classNames(
                'group text-white text-sm xl:text-lg leading-6 tracking-wide'
              )}
            >
              The purpose of the OPTF is to build open-source, metadata-free
              communications tools and apps that defend privacy in the digital
              world.
            </p>
          </div>
          {!isSmall &&
            !isMedium &&
            renderFooter(isSmall, isMedium, isLarge, isHuge, isEnormous)}
        </footer>
      </div>
    </div>
  );
}
