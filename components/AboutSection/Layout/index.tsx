import Banner from '@/components/Banner';
import Container from '@/components/Container';
import { Layout } from '@/components/ui';
import { ABOUT, METADATA } from '@/constants';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export const getTabProperty = (
  tab: number,
  property: 'name' | 'metadata' | 'route'
) => {
  if (tab < 0 || tab >= ABOUT.TABS.length) {
    return ABOUT.TABS[0][`${property}`];
  }

  return ABOUT.TABS[tab][`${property}`];
};

type Props = {
  tab: number;
  children: ReactNode;
};

export default function AboutLayout(props: Props) {
  const { tab, children } = props;
  const router = useRouter();

  return (
    <Layout
      title={`OPTF | ${getTabProperty(
        tab,
        'name'
      )} | Privacy is a fundamental right.`}
      metadata={METADATA[`${getTabProperty(tab, 'metadata')}`]}
    >
      <Banner
        title="Meet the Oxen Privacy Tech Foundation"
        subtitle="We’re a passionate team of advocates, creatives, and engineers building a world where the internet is open, software is free and accessible, and your privacy is protected."
      />
      <div className="sticky top-0 z-20 pt-5 font-semibold bg-white border-b-2 border-dashed lg:flex-row">
        <Container classes="container flex flex-wrap items-center justify-start lg:text-lg  bg-white">
          {ABOUT.TABS.map((item, index) => {
            return (
              <h3
                key={item.name + index}
                className={classNames(
                  'mr-7  pb-2 cursor-pointer lg:my-0 lg:hover:border-b-3 lg:hover:border-b-violet-250 lg:hover:pt-0.5',
                  tab === index && 'border-b-3 border-b-violet-250 pt-0.5'
                )}
                onClick={() => {
                  router.push(getTabProperty(index, 'route'));
                }}
              >
                {item.name}
              </h3>
            );
          })}
        </Container>
      </div>
      <Container classes="my-8 p-3">{children}</Container>
    </Layout>
  );
}
