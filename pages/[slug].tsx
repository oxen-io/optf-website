import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { Legals, Page, Post, Settings, isPost } from '@/types/cms';
import {
  fetchBlogEntries,
  fetchEntryBySlug,
  fetchLegals,
  fetchPages,
  fetchSettings,
  generateLinkMeta,
} from '@/services/cms';

import BlogPost from '@/components/BlogPost';
import { CMS } from '@/constants';
import { ReactElement } from 'react';
import RichPage from '@/components/RichPage';
import AboutLayout from '@/components/AboutSection/Layout';
import React from 'react';

interface Props {
  content: Page | Post;
  aboutPageTabs: Array<AboutPageTab>;
  otherPosts?: Post[];
  allPosts?: Post[];
  items?: Array<Legals>;
}

export type AboutPageTab = {
  title: string;
  slug: string;
};

export default function Page(props: Props): ReactElement {
  const { content, aboutPageTabs } = props;

  if (isPost(content)) {
    return (
      <BlogPost
        post={content}
        allPosts={props.allPosts}
        otherPosts={props.otherPosts}
      />
    );
  } else if (aboutPageTabs.find((tab) => tab.slug === content.slug)) {
    return (
      <AboutLayout tabs={aboutPageTabs} page={content} items={props.items} />
    );
  }
  return <RichPage page={content} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = String(context.params?.slug);
  try {
    const content: Page | Post = await fetchEntryBySlug(slug);

    // embedded links in content body need metadata for preview
    content.body = await generateLinkMeta(content.body);
    const { aboutPageTabs } = await fetchSettings();

    const props: Props = { content, aboutPageTabs };

    if (isPost(content)) {
      // we want 6 posts excluding the current one if it's found
      const { entries: posts } = await fetchBlogEntries();
      const otherPosts = posts
        .filter((post) => {
          return content.slug !== post.slug;
        })
        .slice(0, 6);
      props.otherPosts = otherPosts;
      props.allPosts = posts;
    } else if (slug === 'legals') {
      props.items = await fetchLegals();
    }

    return {
      props,
      revalidate: CMS.CONTENT_REVALIDATE_RATE,
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
      revalidate: CMS.CONTENT_REVALIDATE_RATE,
    };
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { entries: pages } = await fetchPages();
  const pagePaths = pages.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  const { entries: posts } = await fetchBlogEntries();
  const postPaths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths: [...pagePaths, ...postPaths],
    fallback: 'blocking',
  };
};
