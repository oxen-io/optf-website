import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { INavItem } from '@/constants/navigation';
import Link from 'next/link';
import { ReactComponent as ArrowSVG } from '@/assets/svgs/down-arrow.svg';
import classNames from 'classnames';
import { useRouter, NextRouter } from 'next/router';
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

function NavDropdown(props: DropdownProps): ReactElement {
  const { title, navItem, classes } = props;
  const router = useRouter();

  const navItemClasses = classNames(
    'block w-full px-5 py-2  border-transparent border-b-3',
    'lg:px-2 lg:py-1 lg:mx-auto lg:bg-white lg:last:rounded-b-md'
  );

  const navItemHoverClasses = classNames(
    'transition-colors duration-300',
    'hover:bg-gray-light lg:hover:text-primary lg:hover:bg-white'
  );

  return (
    <Link href={navItem.href}>
      <a
        aria-label={navItem.alt}
        target={navItem.target}
        ref={navItem.rel ?? undefined}
        className={classNames(
          navItemClasses,
          navItemHoverClasses,
          isActiveNavLink(router, navItem.href)
        )}
      >
        {title}
      </a>
    </Link>
  );
}

export const navLinkClasses = classNames(
  'lg:text-xl w-full px-5 py-2 border-transparent cursor-pointer',
  'lg:px-3 lg:w-auto lg:mx-2 lg:rounded-xl'
);

const navLinkHoverClasses = classNames(
  'transition-colors duration-300',
  'lg:hover:text-white'
);

const isActiveNavLink = (router: NextRouter, url: string) => {
  return (
    router.asPath === url && 'sm:bg-gray-light sm:text-white lg:text-black'
  );
};

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
        <Link
          href={
            navItem.href.startsWith('/#')
              ? router.pathname + navItem.href
              : navItem.href
          }
        >
          <a
            aria-label={navItem.alt}
            target={navItem.target}
            rel={navItem.rel ?? undefined}
            className={classNames(
              !isSVG && navLinkClasses,
              onBgColor(bgColor),
              isActiveNavLink(router, navItem.href),
              hoverEffect && navLinkHoverClasses,
              navItem.mobile === true && 'lg:hidden',
              navItem.mobile === false && 'lg:block hidden'
            )}
          >
            {title}
          </a>
        </Link>
      ) : (
        <span
          className={classNames(
            'w-full relative group my-2',
            'lg:hover:text-white lg:w-auto lg:flex lg:flex-col lg:justify-center lg:items-start'
          )}
        >
          <span
            aria-label={navItem.alt}
            className={classNames(
              'relative',
              !isSVG && navLinkClasses,
              'lg:border-transparent lg:border-b-3',
              'lg:transform lg:transition-colors duration-500',
              'lg:group-hover:border-primary',
              onBgColor(bgColor),
              navItem.mobile === false && 'lg:block hidden'
            )}
            onClick={() => {
              isSmall || isMedium
                ? setIsDropdownExpanded(!IsDropdownExpanded)
                : router.push(navItem.href);
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
                <ArrowSVG
                  className={classNames(
                    'inline w-2 h-2 -mt-1 ml-3 fill-current transform duration-300'
                  )}
                />
              </span>
            )}
          </span>
          <div
            className={classNames(
              'w-full overflow-hidden lg:hidden',
              'transform transition-all duration-300',
              IsDropdownExpanded
                ? 'h-20 translate-y-0 -mb-3 mt-2'
                : 'h-0 translate-y-auto lg:translate-y-0'
            )}
            style={{ zIndex: zIndex ? zIndex : undefined }}
          >
            {Object.entries(navItem.items).map(([key, value], index) => {
              return (
                <NavDropdown
                  key={`${key}${index}`}
                  navItem={value}
                  title={value.name}
                />
              );
            })}
          </div>
        </span>
      )}
    </>
  );
}
