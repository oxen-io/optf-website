import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { IPost } from '@/types/cms';
import RichBody from '@/components/RichBody';
import { useScreen } from '@/contexts/screen';
import Container from '@/components/Container';

interface Props {
  post: IPost;
}

export default function TagPost(props: Props): ReactElement {
  const { isSmall, isMedium } = useScreen();
  const { post } = props;
  const { title, author, tags, publishedDate, featureImage, body, slug } = post;
  body.content = [body.content[0]];

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
    <section className="mx-4 mb-0.5 lg:mx-0">
      <Container
        fullWidth={false}
        classes={classNames('pt-16 pb-8 bg-white max-w-5xl', [
          'md:pt-6 md:pb-8 md:px-7',
          'lg:pt-12 lg:pb-8 lg:px-10 lg:w-11/12 xl:pt-24 xl:px-28',
        ])}
      >
        {featureImage?.imageUrl && (
          <div
            className={classNames('relative', [
              'w-full h-48',
              'md:h-80',
              'lg:h-120',
            ])}
          >
            <Link replace={true} href={`/blog/${slug}`}>
              <a>
                <Image
                  src={`${featureImage?.imageUrl}${
                    isSmall ? '?w=300' : isMedium ? '?w=600' : ''
                  }`}
                  alt={featureImage?.description ?? title}
                  layout="fill"
                  priority={true}
                  className={classNames('object-cover')}
                />
              </a>
            </Link>
          </div>
        )}
      </Container>
      <Container
        classes={classNames(
          'text-gray break-words pt-0 max-w-5xl',
          'pb-4 md:pt-0 md:pb-4  md:px-7',
          'lg:pb-8 lg:w-11/12 lg:px-10 xl:px-24 bg-white'
        )}
      >
        <Link replace={true} href={`/blog/${slug}`}>
          <a>
            <h1
              className={classNames('text-4xl font-bold leading-normal mb-1')}
            >
              {title}
            </h1>
          </a>
        </Link>

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
        <Link replace={true} href={`/blog/${slug}`}>
          <a className={classNames('text-violet-350 hover:text-blue-400')}>
            <span>Read More»</span>
          </a>
        </Link>
      </Container>
    </section>
  );
}
