import { ReactElement } from 'react';
import classNames from 'classnames';
import Container from '@/components/Container';

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
    <Container>
      <section className="flex flex-col grid-cols-12 mx-auto my-10 lg:grid ">
        <div
          className={classNames(
            'bg-gray-50 col-span-5 p-10 order-last  col-start-8',
            reverse
              ? 'lg:order-last  lg:col-start-8'
              : 'lg:order-none lg:col-start-1'
          )}
        >
          {icon}
          <h4 className="my-5 text-3xl font-semibold"> {title}</h4>
          <p className="mb-8 text-lg text-gray-lighter">{subtitle} </p>
          <a
            href={ctaLink}
            className="p-3 text-lg font-bold gradient-button-project rounded-2xl hover:text-white"
          >
            {ctaText}
          </a>
        </div>
        <div
          className={classNames(
            'col-span-7 flex justify-center items-center',
            reverse && 'col-start-1'
          )}
        >
          {image}
        </div>
      </section>
    </Container>
  );
}
