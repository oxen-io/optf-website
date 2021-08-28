import { ReactElement, ReactNode } from 'react';
import { IMetadata } from '@/constants/metadata';
import CustomHead from '@/components/CustomHead';

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
