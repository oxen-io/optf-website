import { BANNER } from '@/constants';
import Button from '../Button';
import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export default function Banner(): ReactElement {
  const { isSmall } = useScreen();
  return (
    <div
      className={classNames(
        'bg-gray-dark text-white py-4 px-8 flex flex-col justify-center items-center leading-relaxed',
        'lg:flex-row lg:items-start',
        '2xl:items-center'
      )}
    >
      <span className={classNames('text-center mb-4', 'lg:text-left lg:mb-0')}>
        {isSmall ? BANNER.TEXT.MOBILE : BANNER.TEXT.DESKTOP}
      </span>
      <span
        className={classNames('flex justify-center items-center', '2xl:ml-4')}
      >
        <Link href="/download">
          <a>
            <Button
              fontWeight="bold"
              size="medium"
              classes="whitespace-nowrap mx-2"
            >
              Update now
            </Button>
          </a>
        </Link>
        <Link href="/blog/session-network-and-client-update">
          <a>
            <Button
              fontWeight="bold"
              size="medium"
              classes="whitespace-nowrap mx-2"
            >
              Read more
            </Button>
          </a>
        </Link>
      </span>
    </div>
  );
}
