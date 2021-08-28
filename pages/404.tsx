import classNames from 'classnames';

import Layout from '@/components/Layout';
import METADATA from '@/constants/metadata';

export default function Custom404() {
  return (
    <Layout title="Page not found" metadata={METADATA[404]}>
      <section>
        <div
          className={classNames(
            'py-16 px-2 mx-auto text-center',
            'md:flex md:flex-col md:justify-center md:items-center'
          )}
        >
          <h1
            className={classNames('text-primary-dark text-5xl font-bold mb-8')}
          >
            This page doesn&apos;t seem to exist.
          </h1>
          <p
            className={classNames(
              'text-gray text-xl font-medium',
              'lg:text-2xl'
            )}
          >
            {METADATA[404].DESCRIPTION}
          </p>
        </div>
      </section>
    </Layout>
  );
}
