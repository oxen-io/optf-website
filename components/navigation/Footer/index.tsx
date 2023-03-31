import { ReactComponent as YoutubeSVG } from '@/assets/svgs/yt.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ReactComponent as TwitterSVG } from '@/assets/svgs/twitter.svg';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';
import { useSubstack } from '@/hooks/useSubstack ';

export default function Footer(): ReactElement {
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const headingClasses = classNames(
    'text-white uppercase text-xl font-bold mb-2'
  );
  const linkClasses = classNames(
    'text-sm xl:text-base  mr-2',
    'lg:py-0 lg:my-0',
    'transition-colors duration-300',
    'hover:text-white text-violet-350 xl:text-white'
  );
  const socialLinkClasses = classNames(
    'transition duration-300',
    'hover:text-red-300'
  );
  const svgClasses = classNames('fill-current w-7 h-7 m-1', 'lg:my-0 lg:ml-0');

  const newsLetterText = {
    title: 'Join the movement and help defend privacy in the digital world.',
    subtitle: 'Sign up to the mailing list and start taking action!',
  };

  const renderFooter = () => {
    const socials = (
      <div
        className={classNames(
          'flex flex-col w-1/2 mb-4',
          'md:w-1/4',
          'lg:w-1/3'
        )}
      >
        <h3 className={headingClasses}>Socials</h3>
        <div className={classNames('w-1/2 mb-4', 'lg:w-full')}>
          <div className={classNames('flex -ml-1')}>
            <Link href="https://twitter.com/TheOPTF">
              <a
                className={socialLinkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterSVG className={svgClasses} />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCN7LL0dEffQ7FSjbY5wwlnw">
              <a
                className={socialLinkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeSVG className={svgClasses} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <div
        className={classNames(
          'flex flex-col lg:flex-wrap md:flex-col lg:flex-row pt-6 pb-4 xl:px-8 px-4 lg:border-b border-l border-white border-dashed',
          'md:pb-8',
          'lg:pt-2'
        )}
      >
        {(isLarge || isHuge || isEnormous) && socials}
        <div
          className={classNames(
            'flex flex-col w-1/2 xl:mb-4',
            'md:w-1/4',
            'lg:w-1/3'
          )}
        >
          <Link href="https://getsession.org/">
            <a
              className={linkClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              Session
            </a>
          </Link>
          <Link href="https://oxen.io/">
            <a
              className={linkClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              Oxen
            </a>
          </Link>
          <Link href="https://lokinet.org/">
            <a
              className={linkClasses}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lokinet
            </a>
          </Link>
        </div>
        <div
          className={classNames('flex w-full', 'md:w-1/2', 'lg:block lg:w-1/3')}
        >
          <div
            className={classNames(
              'flex flex-col w-1/2 mb-4',
              'md:w-1/4',
              'lg:w-2/3'
            )}
          >
            <Link href="/contact-us">
              <a
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
            </Link>
            <Link href="/feedback-and-ideas">
              <a
                className={classNames(linkClasses, 'sm:hidden xl:block ')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get involved
              </a>
            </Link>
            <Link href="/donations">
              <a
                className={classNames(linkClasses, 'sm:hidden xl:block')}
                target="_blank"
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
        {(isSmall || isMedium) && socials}
      </div>
    );
  };

  useSubstack();

  return (
    <div id="email-sign-up" className={classNames('gradient-footer-gray')}>
      <div className="block p-5 text-white lg:hidden bg-green-350">
        <h4 className={classNames('text-xl font-bold leading-none mb-2')}>
          {newsLetterText.title}
        </h4>
        <p>{newsLetterText.subtitle}</p>
        {(isSmall || isMedium) && (
          <div className="mt-5" id="custom-substack-embed"></div>
        )}
      </div>
      <div
        className={classNames(
          'lg:flex lg:justify-end lg:max-w-screen-xl lg:mx-auto py-7'
        )}
      >
        <div
          className={classNames(
            ' text-white font-helvetica md:px-10 md:py-16 lg:border-r border-dashed',
            'md:py-12'
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
          <div className="flex justify-center">
            {!isSmall && !isMedium ? (
              <div className="mt-10" id="custom-substack-embed"></div>
            ) : (
              <div className="sm:order-last">
                {(isSmall || isMedium) && renderFooter()}
              </div>
            )}
            <Link href="https://www.acnc.gov.au/charity/charities/26214f82-a2cd-e811-a962-000d3ad24182/profile">
              <a className="flex items-center justify-center mx-8 cursor-pointer xl:ml-10 xl:mr-0">
                <Image
                  alt="acnc"
                  width={180}
                  height={180}
                  src={
                    '/assets/images/ACNC-Registered-Charity-Logo_reverse.png'
                  }
                />
              </a>
            </Link>
          </div>
        </div>

        <footer className={classNames('text-white', 'lg:w-1/2 lg:mt-2')}>
          {!isSmall && !isMedium && renderFooter()}
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
