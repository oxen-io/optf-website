import { Hero } from '@/components/sections';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { CMS } from '@/constants';
import { IPost } from '@/types/cms';
import { Layout } from '@/components/ui';
import { fetchBlogEntries } from '@/services/cms';
import { PostList } from '@/components/posts';
import Banner from '@/components/Banner';

interface Props {
  posts: IPost[];
}

export default function Home(props: Props) {
  const { posts } = props;
  const [featuredPost, ...otherPosts] = posts;

  return (
    <Layout>
      <Hero />
      <PostList section="home" posts={otherPosts} />
      <Banner
        subtitle="Everyone has a right to privacy — online and offline. But as we become more reliant on technology and digital platforms, our privacy and security is increasingly undermined and exploited."
        subtitleTwo="We’re putting the power back in your hands — we support the development of free and open-source software that keeps you secure online"
        image={
          <Image
            alt="OPTF logo"
            width={260}
            height={85}
            src="/assets/images/logo-optf.png"
          />
        }
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { entries: posts, total: totalPosts } = await fetchBlogEntries();

  return {
    props: { posts },
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
