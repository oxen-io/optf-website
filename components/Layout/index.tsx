import { ReactElement, ReactNode } from 'react';

import CustomHead from '@/components/CustomHead';
import { IMetadata } from '@/constants/metadata';

interface Props {
  title?: string;
  metadata?: IMetadata;
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
      <main>{children}</main>
    </>
  );
}
