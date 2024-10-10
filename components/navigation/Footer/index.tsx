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
  <div className={classNames('flex flex-col w-full mb-4', 'lg:w-1/3')}>
    <h3 className={headingClasses}>Socials</h3>
    <div className={classNames('w-1/2 mb-4', 'lg:w-full')}>
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
    <div
      className={classNames(
        'flex flex-col lg:flex-wrap md:flex-col lg:flex-row pt-2 pb-4 xl:px-8 px-4  border-white border-dashed lg:border-b'
      )}
    >
      {(isLarge || isHuge || isEnormous) && renderSocials}
      <div className={classNames('flex w-full', 'lg:block lg:w-1/3')}>
        <div className={classNames('flex flex-col w-full mb-4', 'lg:w-2/3')}>
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
      {(isSmall || isMedium) && renderSocials}
    </div>
  );
};

export default function Footer(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const newsLetterText = {
    title: 'Join the movement and help defend privacy in the digital world.',
    subtitle: 'Sign up to the mailing list and start taking action!',
  };
  useSubstack();

  return (
    <div id="email-sign-up" className={classNames('gradient-footer-gray')}>
      <div className="block p-5 text-white lg:hidden bg-green-350">
        <h4 className={classNames('text-xl font-bold leading-none mb-2')}>
          {newsLetterText.title}
        </h4>
        <p className={classNames('leading-none')}>{newsLetterText.subtitle}</p>
        {(isSmall || isMedium) && (
          <div className={classNames('flex justify-center md:justify-start')}>
            <div className="flex-col">
              <div className="mt-5" id="custom-substack-embed"></div>
              <div className="tooltipContainer">
                <div className="tooltip"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={classNames(
          'lg:flex lg:justify-end lg:max-w-screen-xl lg:mx-auto py-6 md:py-0 lg:py-7'
        )}
      >
        <div
          className={classNames(
            'text-white font-helvetica md:px-10 md:pt-8 lg:border-r border-dashed'
          )}
        >
          <div className="hidden xl:block">
            <h4 className={classNames('text-xl font-bold leading-none mb-2')}>
              {newsLetterText.title}
            </h4>
            <p className={classNames('leading-none')}>
              {newsLetterText.subtitle}
            </p>
          </div>
          <div className="flex justify-start">
            {!isSmall && !isMedium ? (
              <div>
                <div className="mt-10" id="custom-substack-embed"></div>
                <div className="tooltipContainer">
                  <div className="tooltip"></div>
                </div>
              </div>
            ) : (
              <div className="xs:order-last">
                {(isSmall || isMedium) &&
                  renderFooter(isSmall, isMedium, isLarge, isHuge, isEnormous)}
              </div>
            )}
          </div>
        </div>

        <footer className={classNames('text-white', 'lg:w-1/2 lg:mt-2')}>
          {!isSmall &&
            !isMedium &&
            renderFooter(isSmall, isMedium, isLarge, isHuge, isEnormous)}
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
        </footer>
      </div>
    </div>
  );
}
