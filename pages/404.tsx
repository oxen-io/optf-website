import Container from '@/components/Container';
import Layout from '@/components/Layout';
import METADATA from '@/constants/metadata';
import classNames from 'classnames';

export default function Custom404() {
  return (
    <Layout title="Page not found" metadata={METADATA[404]}>
      <Container>
        <div
          className={classNames(
            'py-16 px-2 mx-auto text-center',
            'md:flex md:flex-col md:justify-center md:items-center'
          )}
        >
          <h1 className={classNames('text-5xl font-bold mb-8')}>
            This page doesn&apos;t seem to exist.
          </h1>
          <p className={classNames('text-xl font-medium', 'lg:text-2xl')}>
            {METADATA[404].DESCRIPTION}
          </p>
        </div>
      </Container>
    </Layout>
  );
}
