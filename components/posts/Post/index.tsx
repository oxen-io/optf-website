import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import { IPost } from '@/types/cms';
import { PostList } from '@/components/posts';
import RichBody from '@/components/RichBody';
import { useScreen } from '@/contexts/screen';
import Container from '@/components/Container';

interface Props {
  post: IPost;
  otherPosts?: IPost[];
  allPosts?: IPost[];
}

export default function Post(props: Props): ReactElement {
  const { isSmall, isMedium } = useScreen();
  const { post, otherPosts, allPosts } = props;
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    id,
    title,
    subtitle,
    author,
    tags,
    publishedDate,
    featureImage,
    fullHeader,
    description,
    body,
    publishedDateISO,
  } = post;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  let renderPrevAndNextLinks;

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  // eslint-disable-next-line @typescript-eslint/no-extra-non-null-assertion
  for (let i = 0; i < allPosts!?.length; i++) {
    if (allPosts![i].id === id) {
      renderPrevAndNextLinks = [allPosts![i - 1]?.slug, allPosts![i + 1]?.slug];
    }
  }
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  const renderTags = (() => {
    return tags.map((tag, index) => {
      const link = tag.toLowerCase().replace(/\s/g, '-');
      return (
        <span key={index}>
          <Link href={`/category/${link}`}>
            <a className="transition-colors duration-300 hover:text-blue-500">
              {tag}
            </a>
          </Link>
          {index < tags.length - 1 && ', '}
        </span>
      );
    });
  })();

  return (
    <section className="mx-4 lg:mt-6 lg:mx-0">
      <Container
        fullWidth={fullHeader}
        classes={classNames(
          'pt-16 pb-8 bg-white max-w-5xl',
          fullHeader
            ? ['lg:pt-8']
            : [
                'md:pt-6 md:pb-8 md:px-7',
                'lg:pt-12 lg:pb-8 lg:px-10 lg:w-11/12 xl:pt-24 xl:px-28',
              ]
        )}
      >
        {featureImage?.imageUrl && (
          <div
            className={classNames(
              'relative',
              fullHeader ? 'w-screen' : ['w-full h-48', 'md:h-80', 'lg:h-120']
            )}
          >
            {fullHeader ? (
              <Image
                src={`${featureImage?.imageUrl}${
                  isSmall ? '?w=300' : isMedium ? '?w=600' : ''
                }`}
                alt={featureImage?.description ?? title}
                width={featureImage?.width}
                height={featureImage?.height}
                layout="responsive"
                priority={true}
              />
            ) : (
              <Image
                src={`${featureImage?.imageUrl}${
                  isSmall ? '?w=300' : isMedium ? '?w=600' : ''
                }`}
                alt={featureImage?.description ?? title}
                layout="fill"
                priority={true}
                className={classNames('object-cover')}
              />
            )}
          </div>
        )}
      </Container>
      <Container
        classes={classNames(
          'text-gray break-words pt-0 max-w-5xl',
          'pb-0 md:pt-0 md:pb-0  md:px-7',
          'lg:pb-8 lg:w-11/12 lg:px-10 xl:px-24 bg-white'
        )}
      >
        <h1 className={classNames('text-4xl font-bold leading-normal mb-1')}>
          {title}
        </h1>
        <p className={classNames('mb-3 text-violet-350', 'lg:mb-8')}>
          <span>{publishedDate}</span>
          {renderTags.length > 0 && (
            <span className={classNames(' mt-1')}> / {renderTags}</span>
          )}
          {author && author.name && <span> / By {author.name}</span>}
        </p>
        <RichBody
          body={body}
          classes={classNames('text-sm text-gray', 'md:text-base')}
        />
      </Container>
      <div className="flex flex-col items-center justify-around mx-10 my-10 text-lg font-semibold md:flex-row md:justify-between lg:mx-20 lg:justify-between 2xl:mx-36 xl:justify-around 2xl:justify-evenly text-violet-250">
        {renderPrevAndNextLinks?.[1] && (
          <Link href={'blog/' + renderPrevAndNextLinks[1]}>
            <a>
              <span className="hidden md:inline">←</span> Previous Post
            </a>
          </Link>
        )}
        {renderPrevAndNextLinks?.[0] && (
          <Link href={'blog/' + renderPrevAndNextLinks[0]}>
            <a>
              Next Post <span className="hidden md:inline">→</span>
            </a>
          </Link>
        )}
      </div>
      <div className="py-10 my-10 text-3xl text-center border-t border-b border-gray-300 border-dashed">
        <h3>Latest blog posts</h3>
      </div>

      {otherPosts && (
        <PostList
          section="post"
          posts={otherPosts}
          gridStyle={'normal'}
          hoverEffect={false}
          compact={false}
        />
      )}
    </section>
  );
}
