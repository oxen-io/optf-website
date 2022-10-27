import { ReactElement, ReactNode, useEffect, useState } from 'react';

import { ReactComponent as CloseSVG } from '@/assets/svgs/close.svg';
import { INavItem } from '@/constants/navigation';
import Link from 'next/link';
import { ReactComponent as MenuSVG } from '@/assets/svgs/hamburger.svg';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useScreen } from '@/contexts/screen';

export interface DropdownProps {
  title: string | ReactNode; // social icons can be nav items
  navItem: INavItem;
  classes?: string;
}

export interface NavItemProps extends DropdownProps {
  isExpanded?: boolean;
  isIcon?: boolean;
  hoverEffect?: boolean;
  zIndex?: number;
  bgColor: number;
}

export const navLinkClasses = classNames(
  'lg:text-xl  w-full px-5 py-2  border-transparent  cursor-pointer',
  'lg:px-3 lg:w-auto  lg:mx-2 rounded-xl'
);

const navLinkHoverClasses = classNames(
  'transition-colors duration-300',
  'hover:text-white'
);

export default function NavItem(props: NavItemProps): ReactElement {
  const {
    title,
    navItem,
    isExpanded,
    isIcon: isSVG = false,
    hoverEffect = true,
    zIndex,
    bgColor,
  } = props;
  const router = useRouter();
  const { isSmall, isMedium, isLarge, isHuge, isEnormous } = useScreen();
  const [IsDropdownExpanded, setIsDropdownExpanded] = useState(false);

  const onBgColor = (type: number) => {
    switch (type) {
      case 0:
        return 'gradient-header-btn1';
        break;
      case 1:
        return 'gradient-header-btn2';
        break;
      case 2:
        return 'gradient-header-btn3';
        break;
      default:
        return 'lg:bg-green-250';
    }
  };

  useEffect(() => {
    setIsDropdownExpanded(false);
  }, [isExpanded]);

  return (
    <>
      {!navItem.items ? (
        <Link href={navItem.href}>
          <a
            aria-label={navItem.alt}
            target={navItem.target}
            rel={navItem.rel ?? undefined}
            className={classNames(
              !isSVG && navLinkClasses,
              onBgColor(bgColor),
              hoverEffect && navLinkHoverClasses
            )}
          >
            {title}
          </a>
        </Link>
      ) : (
        <span
          className={classNames(
            'w-full relative group',
            'lg:w-auto lg:flex lg:flex-col lg:justify-center lg:items-start'
          )}
        >
          <span
            aria-label={navItem.alt}
            className={classNames(
              'relative',
              !isSVG && navLinkClasses,
              'lg:border-transparent lg:border-b-3',
              'lg:transform lg:transition-colors duration-500',
              'lg:group-hover:border-primary'
            )}
            onClick={() => {
              if (isSmall || isMedium) {
                setIsDropdownExpanded(!IsDropdownExpanded);
              }
            }}
            onMouseOver={() => {
              if (isLarge || isHuge || isEnormous) {
                setIsDropdownExpanded(true);
              }
            }}
          >
            {title}
            {(isSmall || isMedium) && (
              <span>
                <MenuSVG
                  className={classNames(
                    'inline w-3 h-3 -mt-1 ml-3 fill-current transform duration-300',
                    IsDropdownExpanded ? 'hidden' : 'block'
                  )}
                />
                <CloseSVG
                  className={classNames(
                    'inline w-3 h-3 -mt-1 ml-3 fill-current transform duration-300',
                    IsDropdownExpanded ? 'block' : 'hidden'
                  )}
                />
              </span>
            )}
          </span>
          <div
            className={classNames(
              'w-full overflow-hidden',
              'transform transition-all duration-300',
              'lg:bg-white lg:w-44 lg:overflow-visible lg:opacity-0 lg:absolute lg:top-12',
              'lg:duration-500',
              'lg:group-hover:opacity-100 lg:group-hover:duration-700',
              (isSmall || isMedium) && IsDropdownExpanded
                ? 'h-32 translate-y-0 -mb-3'
                : 'h-0 translate-y-auto lg:translate-y-0'
            )}
            style={{ zIndex: zIndex ? zIndex : undefined }}
            // onMouseOut={() => setIsHover(false)}
            onMouseOver={() => {
              if (isLarge || isHuge || isEnormous) {
                setIsDropdownExpanded(true);
              }
            }}
            onMouseLeave={() => {
              if (isLarge || isHuge || isEnormous) {
                setIsDropdownExpanded(false);
              }
            }}
          ></div>
        </span>
      )}
    </>
  );
}
