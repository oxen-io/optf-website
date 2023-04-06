import { IPost } from '@/types/cms';
import { Layout } from '@/components/ui';
import METADATA from '@/constants/metadata';
import { Post } from '@/components/posts';
import { ReactElement } from 'react';

interface Props {
  post: IPost;
  otherPosts?: IPost[];
  allPosts?: IPost[];
}

export default function BlogPost(props: Props): ReactElement {
  const { post } = props;
  return (
    <Layout
      title={post.title}
      metadata={{
        TYPE: 'article',
        DESCRIPTION: post.description,
        CANONICAL_URL: `${METADATA.HOST_URL}/blog`,
        OG_IMAGE: {
          URL: post.featureImage?.imageUrl ?? METADATA.OG_IMAGE.URL,
          WIDTH: Number(post.featureImage?.width) ?? METADATA.OG_IMAGE.WIDTH,
          HEIGHT: Number(post.featureImage?.height) ?? METADATA.OG_IMAGE.HEIGHT,
          ALT: post.featureImage?.title ?? METADATA.OG_IMAGE.ALT,
        },
        TAGS: post.tags,
        ARTICLE_SECTION: post.tags[0],
        PUBLISHED_TIME: post.publishedDateISO,
      }}
    >
      <div className="pt-10 bg-gray-250 md:pt-10">
        <Post {...props} />
      </div>
    </Layout>
  );
}
