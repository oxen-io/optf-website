import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { IPage, IPost, isPost } from '@/types/cms';
import {
  fetchBlogEntries,
  fetchEntryBySlug,
  fetchPages,
  generateLinkMeta,
} from '@/services/cms';

import BlogPost from '@/components/BlogPost';
import { CMS } from '@/constants';
import { ReactElement } from 'react';
import RichPage from '@/components/RichPage';

interface Props {
  content: IPage | IPost;
  otherPosts?: IPost[];
  allPosts?: IPost[];
}

export default function Page(props: Props): ReactElement {
  const { content } = props;
  if (isPost(content)) {
    return (
      <BlogPost
        post={content}
        allPosts={props.allPosts}
        otherPosts={props.otherPosts}
      />
    );
  } else {
    return <RichPage page={content} />;
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = String(context.params?.slug);

  try {
    const content: IPage | IPost = await fetchEntryBySlug(slug);

    // embedded links in content body need metadata for preview
    content.body = await generateLinkMeta(content.body);
    const props: Props = { content };

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
