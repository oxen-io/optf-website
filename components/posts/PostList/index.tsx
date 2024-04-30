import { ReactElement } from 'react';
import classNames from 'classnames';
import { Post } from '@/types/cms';
import { generateRoute } from '@/services/cms';
import Container from '@/components/Container';
import { PostCard } from '@/components/cards';
import { useState, useMemo } from 'react';
import Pagination from '../../Pagination/Pagination';

interface Props {
  posts: Post[];
  gridStyle?: 'blog' | 'normal';
  showHeading?: boolean;
  hoverEffect?: boolean;
  compact?: boolean;
  classes?: string;
  section?: string;
}

export default function PostList(props: Props): ReactElement {
  const {
    posts,
    gridStyle = 'normal',
    hoverEffect,
    compact,
    classes,
    section = 'blog',
  } = props;
  const cardClasses = classNames(
    ' mb-5 ',
    section === 'home' && 'md:w-85',
    section === 'blog' &&
      'lg:w-full md:w-full xl:w-[23rem]  xl:max-w-sm lg:mx-2  xl:mr-5 ',
    section === 'post' &&
      'lg:w-1/3 xl:w-1/3 md:w-56 md:max-w-xxs lg:max-w-xxs  xl:max-w-sm'
  );
  const gridClasses = [
    gridStyle === 'normal' && 'lg:max-w-screen-xl',
    gridStyle === 'blog' && 'lg:max-w-screen-lg',
  ];

  const PageSize = section === 'post' ? 3 : section === 'blog' ? 15 : 6;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, posts]);

  return (
    <div className={classNames('mt-8', 'lg:mt-0', classes)}>
      <Container
        classes={classNames(
          'px-0 pb-0 flex flex-wrap justify-center md:justify-evenly md:w-full max-w-screen-md',
          section === 'blog' && 'lg:px-2 xl:justify-center',
          'md:px-0 md:pb-0',
          'lg:py-10',
          gridClasses
        )}
      >
        {currentTableData?.map((post) => {
          return (
            <PostCard
              key={post.id}
              section={section}
              route={generateRoute(post.slug)}
              hoverEffect={hoverEffect}
              compact={compact}
              classes={classNames(cardClasses)}
              {...post}
            />
          );
        })}
      </Container>
      <Container
        classes={classNames('flex justify-center lg:pl-20 lg:pr-20 lg:pb-10')}
      >
        {section === 'blog' && (
          <Pagination
            currentPage={currentPage}
            totalCount={posts.length}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        )}
      </Container>
    </div>
  );
}
