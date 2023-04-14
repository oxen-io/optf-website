import AboutLayout from '@/components/AboutSection/Layout';
import Legals from '@/components/AboutSection/Tabs/Legals';
import { CMS } from '@/constants';
import { fetchLegals } from '@/services/cms';
import { ILegals } from '@/types/cms';
import { GetStaticProps } from 'next';

export interface Props {
  legals: ILegals[];
}

export default function LegalsPage(props: Props) {
  const { legals } = props;
  return (
    <AboutLayout tab={2}>
      <Legals items={legals} />
    </AboutLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const legals = await fetchLegals();

  return {
    props: { legals },
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
