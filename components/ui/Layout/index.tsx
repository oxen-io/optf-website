import { Footer, Nav } from '@/components/navigation';
import { ReactElement, ReactNode } from 'react';

import CustomHead from '@/components/CustomHead';
import { CustomMetadata } from '@/constants/metadata';

interface Props {
  title?: string;
  metadata?: CustomMetadata;
  children: ReactNode;
}

export default function Layout({
  title,
  metadata,
  children,
}: Props): ReactElement {
  return (
    <>
      <CustomHead title={title} metadata={metadata} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
