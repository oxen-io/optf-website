import { ReactElement } from 'react';
import Link from 'next/link';

interface Props {
  ctaLink?: string;
  ctaText?: string;
  title: string;
  subtitle: string;
}

export default function Report(props: Props): ReactElement {
  const { title, subtitle, ctaLink, ctaText } = props;
  return (
    <section className="border-b border-gray-200">
      <div className=" lg:mx-32 mx-2  px-10 py-20 	">
        <div className="z-10 relative">
          <h3 className="text-4xl mb-10 font-bold">{title}</h3>
          <p className="font-thin mb-5">{subtitle}</p>
          {ctaLink ? (
            <Link href={ctaLink}>
              <a className="text-blue-400">{ctaText}</a>
            </Link>
          ) : (
            <p className="font-thin">{ctaText}</p>
          )}
        </div>
      </div>
    </section>
  );
}
