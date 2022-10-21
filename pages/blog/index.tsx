import { ReactElement } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import classNames from 'classnames';
import Banner from '@/components/Banner';
import { CMS } from '@/constants';
import { IPost } from '@/types/cms';
import { fetchBlogEntries, generateRoute } from '@/services/cms';
import METADATA from '@/constants/metadata';
import Link from 'next/link';
import { Layout } from '@/components/ui';
import Container from '@/components/Container';
import { PostListNew } from '@/components/posts';

interface Props {
  posts: IPost[];
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

export default function Blog(props: Props): ReactElement {
  const { posts } = props;
  const [featuredPost, ...otherPosts] = posts;
  return (
    <Layout title={'Blog'} metadata={METADATA.BLOG_PAGE}>
      <section>
        <Container
          classes={classNames(
            'p-12 pb-1 pl-0 pr-0',
            'md:pt-24 md:pb-1 md:pl-0 md:pr-0',
            'lg:mt-16 lg:pl-24 lg:pr-24 lg:max-w-screen-xl'
          )}
        ></Container>
        <Banner
          title="Behind the headlines.​​"
          subtitle="Privacy is always in play. From our smartphones to our classrooms, from our laptops to our lounge rooms: the ways we watch, shop, read, and relax are balancing on a tightrope between privacy and convenience. Read all our latest opinion pieces, current affairs reports, and press releases."
        />
        <PostListNew blogSection={true} posts={otherPosts} />
        <div className="flex bg-gray-200 lg:px-52 px-10 pt-2 pb-6 mt-10 lg:mt-0 text-gray-500 ">
          <p>
            If you’d like to contribute to our blog, get in touch with us{' '}
            <Link href="/contact-us">
              <a>here!</a>
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
