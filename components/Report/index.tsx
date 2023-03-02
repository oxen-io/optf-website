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
      <div className="px-10 py-20 mx-2 lg:mx-32">
        <div className="relative z-10">
          <h3 className="mb-10 text-4xl font-bold">{title}</h3>
          <p className="mb-5 font-thin">{subtitle}</p>
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
