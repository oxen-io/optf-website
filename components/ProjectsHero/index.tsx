import Link from 'next/link';
import { ReactElement } from 'react';
import classNames from 'classnames';

export interface Props {
  icon: ReactElement;
  title: string;
  subtitle: string;
  image: ReactElement;
  ctaLink: string;
  ctaText: string;
  reverse: boolean;
}

export default function ProjectsHero(props: Props): ReactElement {
  const {
    icon,
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    reverse = false,
  } = props;
  return (
    <section className="container mx-auto lg:grid grid-cols-12 my-10 flex flex-col">
      <div
        className={classNames(
          'bg-gray-50  col-start-2 col-span-4 p-10',
          reverse && 'order-last  col-start-8'
        )}
      >
        {icon}
        <h4 className="text-3xl my-5"> {title}</h4>
        <p className="text-lg mb-8">{subtitle} </p>
        <Link href={ctaLink}>
          <a className="bg-blue-200 rounded-2xl p-3">{ctaText}</a>
        </Link>
      </div>
      <div
        className={classNames(
          'col-span-6 flex justify-center items-center',
          reverse && 'col-start-2 col-span-6'
        )}
      >
        {image}
      </div>
    </section>
  );
}
