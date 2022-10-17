import { About, Benefits, Features, Hero } from '@/components/sections';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import { CMS } from '@/constants';
import { IPost } from '@/types/cms';
import { Layout } from '@/components/ui';
import { fetchBlogEntries } from '@/services/cms';
import generateRSSFeed from '@/utils/rss';

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== 'development') {
    const posts: IPost[] = [];
    let foundAllPosts = false;

    // Contentful has limits built in
    while (!foundAllPosts) {
      const { entries, total } = await fetchBlogEntries();

      if (posts.length === total) {
        foundAllPosts = true;
        continue;
      }

      posts.push(...entries);
    }

    generateRSSFeed(posts);
  }

  return {
    props: {},
    revalidate: CMS.CONTENT_REVALIDATE_RATE,
  };
};
