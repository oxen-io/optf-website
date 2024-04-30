import Banner from '@/components/Banner';
import Container from '@/components/Container';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { AboutPageTab } from '@/pages/[slug]';
import { ILegals, IPage } from '@/types/cms';
import RichBody from '@/components/RichBody';
import { Layout } from '@/components/ui';
import { parseMetadata } from '@/components/CustomHead';
import SpecialTabContent from '../Tabs/SpecialTabContent';

type Props = {
  page: IPage;
  tabs: Array<AboutPageTab>;
  items?: Array<ILegals>;
};

export default function AboutLayout(props: Props) {
  const { page, tabs, items } = props;
  const pageTitle = page.useExactTitle
    ? page.title
    : `OPTF | ${page.title} | Privacy is a fundamental right.`;
  const router = useRouter();
  return (
    <Layout title={pageTitle} metadata={parseMetadata(page)}>
      <Banner
        title="Meet the Oxen Privacy Tech Foundation"
        subtitle="We’re a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected."
      />
      <div className="sticky top-0 z-20 pt-5 font-semibold bg-white border-b-2 border-dashed lg:flex-row">
        <Container classes="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:text-lg bg-white">
          {tabs.map(({ title, slug }, index) => {
            return (
              <h3
                key={title + index}
                className={classNames(
                  'mr-7 pb-2 cursor-pointer lg:my-0 lg:border-b-3  lg:hover:border-b-violet-250 lg:pt-0.5',
                  slug === page.slug
                    ? 'border-b-3 border-b-violet-250'
                    : 'border-b-[rgb(0,0,0,0)]'
                )}
                onClick={() => {
                  router.push(slug);
                }}
              >
                {title}
              </h3>
            );
          })}
        </Container>
      </div>
      <Container classes="my-8 p-3">
        <RichBody body={page?.body} headingClasses={'mb-5 font-semibold'} />
        <SpecialTabContent slug={page.slug} items={items} />
      </Container>
    </Layout>
  );
}
