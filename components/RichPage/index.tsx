import { ReactElement } from 'react';
import classNames from 'classnames';

import { Page } from '@/types/cms';
import Container from '@/components/Container';
import { Layout } from '@/components/ui';
import RichBody from '@/components/RichBody';
import { parseMetadata } from '../CustomHead';

interface Props {
  page: Page;
}

export default function RichPage(props: Props): ReactElement {
  const { page } = props;
  return (
    <Layout title={page.title} metadata={parseMetadata(page)}>
      <section>
        <Container classes={classNames('pt-0 px-4 pb-24', 'lg:pb-32')}>
          <div className={'lg:max-w-screen-md lg:mx-auto'}>
            <RichBody
              body={page?.body}
              headingClasses={'text-gray font-medium mt-6'}
              classes={classNames(
                'text-sm text-gray-lighter font-helvetica leading-loose',
                'lg:text-base'
              )}
            />
          </div>
        </Container>
      </section>
    </Layout>
  );
}
