import { ReactElement } from 'react';
import { GetStaticProps } from 'next';
import Banner from '@/components/Banner';
import { CMS } from '@/constants';
import { IPost } from '@/types/cms';
import { fetchBlogEntries } from '@/services/cms';
import METADATA from '@/constants/metadata';
import Link from 'next/link';
import { Layout } from '@/components/ui';
import { PostList } from '@/components/posts';
import Container from '@/components/Container';
import classNames from 'classnames';

interface Props {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { entries: posts } = await fetchBlogEntries();

  return {
    props: { posts },
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
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
        <div className="py-4 mt-10 text-gray-500 bg-gray-100">
          <Container
            classes={classNames(
              'flex justify-left px-6 py-0 md:py-0 md:px-2 lg:px-2'
            )}
          >
            <p>
              <i>
                If you’d like to contribute to our blog, get in touch with us{' '}
                <Link href="/contact-us">
                  <a className="transition ease-in-out text-violet-250 hover:text-blue-500">
                    here!
                  </a>
                </Link>
              </i>
            </p>
          </Container>
        </div>
      </section>
    </Layout>
  );
}
