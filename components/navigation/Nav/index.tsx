import { ReactElement, useState } from 'react';
import { ReactComponent as CloseSVG } from '@/assets/svgs/close.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ReactComponent as MenuSVG } from '@/assets/svgs/hamburger.svg';
import { NAVIGATION } from '@/constants';
import { NavItem } from '@/components/navigation';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Nav(): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);
  const mobileNavButtonClasses =
    'w-8 h-8 fill-current bg-white p-1.5 rounded-sm';
  const { isSmall, isMedium } = useScreen();

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav
      className={classNames(
        'gradient-header-green relative shadow-header z-30 '
      )}
      role="navigation"
    >
      <div
        className={classNames(
          'relative flex flex-wrap items-center justify-between w-full px-4 pb-2 mx-auto z-10',
          'lg:container lg:pb-0 lg:h-20 lg:px-10'
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-between w-full px-5 pt-3',
            'lg:w-1/3 lg:p-0'
          )}
        >
          <Link passHref href="/">
            <div className={classNames('cursor-pointer')}>
              <Image
                src="/assets/images/logo-optf.png"
                alt="optf logo"
                width={isSmall || isMedium ? '100px' : '150px'}
                height={isSmall || isMedium ? '40px' : '60px'}
              />
            </div>
          </Link>
          <div className={classNames('block ml-4', 'lg:hidden')}>
            <button
              className="z-10 flex items-center py-2 text-gray"
              onClick={toggleNav}
            >
              <MenuSVG
                className={classNames(
                  mobileNavButtonClasses,
                  isExpanded ? 'hidden' : 'block'
                )}
              />
              <CloseSVG
                className={classNames(
                  mobileNavButtonClasses,
                  isExpanded ? 'block' : 'hidden'
                )}
              />
            </button>
          </div>
        </div>
        <div
          className={classNames(
            'absolute left-0 right-0 w-screen overflow-hidden top-16',
            'lg:relative lg:overflow-visible lg:w-2/3 lg:top-0'
          )}
        >
          <div
            className={classNames(
              'flex flex-col items-start justify-center text-sm z-10',
              'lg:text-base lg:flex-row lg:items-center lg:justify-end lg:font-bold',
              'transform transition-all duration-300 bg-white lg:bg-transparent',
              isExpanded
                ? 'h-full translate-y-0'
                : 'h-0 -translate-y-full lg:translate-y-0'
            )}
          >
            {Object.entries(NAVIGATION.NAV_ITEMS).map(([key, value], index) => {
              return (
                <NavItem
                  onClick={value?.onClick}
                  key={`${key}${index}`}
                  navItem={value}
                  title={value.name}
                  zIndex={index}
                  bgColor={value.bgColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
