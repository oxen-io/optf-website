import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Banner from '@/components/Banner';
import { CMSPost } from '@/types/cms';
import { fetchBlogEntries } from '@/services/cms';
import METADATA from '@/constants/metadata';
import { Layout } from '@/components/ui';
import { PostList } from '@/components/posts';

interface Props {
  posts: CMSPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { entries: posts } = await fetchBlogEntries();

  return {
    props: { posts },
  };
};

export default function Blog(props: Props): ReactElement {
  const { posts } = props;
  return (
    <Layout
      title={'OPTF | Blog | Privacy is a fundamental right.'}
      metadata={METADATA.BLOG_PAGE}
    >
      <section>
        <Banner
          title="Behind the headlines.​​"
          subtitle="Privacy is always in play. From our smartphones to our classrooms, from our laptops to our lounge rooms: the ways we watch, shop, read, and relax are balancing on a tightrope between privacy and convenience."
          subtitleTwo="Read all our latest opinion pieces, current affairs reports, and press releases."
        />
        <PostList section="blog" posts={posts} />
      </section>
    </Layout>
  );
}
