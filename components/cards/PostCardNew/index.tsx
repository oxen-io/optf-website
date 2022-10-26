import { IPost } from '@/types/cms';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';

interface Props extends IPost {
  route: string;
  featured?: boolean;
  hoverEffect?: boolean;
  compact?: boolean;
  classes?: string;
  section?: string;
}

export default function PostCard(props: Props): ReactElement {
  const {
    title,
    description,
    subtitle,
    featureImage,
    publishedDate,
    author,
    slug,
    route,
    featured,
    hoverEffect = !featured,
    compact = false,
    classes,
    section = 'blog',
  } = props;
  const headingClasses = 'cursor-pointer text-2xl font-bold mb-3 px-3';
  // parent container must have 'flex' class
  return (
    <div
      className={classNames(
        'text-gray-dark leading-none pb-3',
        'lg:text-3xl',
        'bg-green-150  rounded-3xl  mx-2 shadow hover:shadow-xl transition ease-in-out group',
        section === 'blog' &&
          'rounded-t-2xl rounded-b-none bg-gray-100 hover:shadow-posts ',
        section === 'post' &&
          'rounded-2xl bg-gray-100  hover:shadow-none shadow-none border  relative',
        classes
      )}
    >
      {featureImage?.imageUrl && (
        <Link href={route} passHref>
          <div
            className={classNames(
              'relative overflow-hidden w-full mb-4',
              'md:px-16',
              'lg:px-20 rounded-t-3xl  transition ease-in-out',
              compact ? 'h-48 md:h-60 lg:h-44' : 'h-60 lg:h-56',
              featured && 'md:w-1/2 md:mr-4 lg:mr-3 lg:w-3/5 lg:h-96',
              section === 'index' && 'group-hover:brightness-110',
              section === 'blog' && 'rounded-t-xl rounded-b-xl'
            )}
          >
            <Image
              src={`${featureImage?.imageUrl}${featured ? '?w=700' : '?w=400'}`}
              alt={featureImage?.description ?? title}
              layout="fill"
              priority={featured}
              loading={featured ? 'eager' : 'lazy'}
              className={classNames('object-cover cursor-pointer ')}
            />
          </div>
        </Link>
      )}
      <div
        className={classNames(
          featured && 'md:w-1/2 md:ml-4 lg:ml-3 lg:w-2/5 relative'
        )}
      >
        <Link href={route} passHref>
          <a>
            {featured ? (
              <h1
                className={classNames(
                  headingClasses,
                  'font-bold text-3xl mt-8 md:text-4xl md:-mt-1 lg:leading-tight'
                )}
              >
                {title}
              </h1>
            ) : (
              <h2 className={classNames(headingClasses)}>{title}</h2>
            )}
          </a>
        </Link>
        {section === 'blog' && (
          <p
            className={classNames(
              'text-gray-lightest text-xs font-helvetica ml-3 mb-4'
            )}
          >
            {publishedDate}
            {/*   {author && author.name && <span> / {author.name}</span>} */}
          </p>
        )}
        {!compact && (
          <p
            className={classNames(
              'text-sm px-3',
              featured && 'md:text-base md:leading-normal'
            )}
          >
            {description}
          </p>
        )}
        {section === 'post' && (
          <div className="mb-10">
            <Link href={route}>
              <a className="text-red-400 text-sm px-3">READ MORE &gt;&gt;</a>
            </Link>
          </div>
        )}
      </div>

      {section === 'post' && (
        <div className="border-t  inset-x-0 bottom-0 h-8  absolute ">
          <p
            className={classNames(
              'text-gray-lightest text-xs font-helvetica ml-3 my-2 '
            )}
          >
            {publishedDate}
          </p>
        </div>
      )}
    </div>
  );
}
