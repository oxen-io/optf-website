import { ReactElement } from 'react';
import classNames from 'classnames';
import { IPost } from '@/types/cms';
import { generateRoute } from '@/services/cms';
import Container from '@/components/Container';
import { Headline } from '@/components/ui';
import { PostCardNew } from '@/components/cards';
import { UI } from '@/constants';
import { useState, useMemo } from 'react';
import Pagination from '../../../components/Pagination/Pagination';

interface Props {
  posts: IPost[];
  gridStyle?: 'blog' | 'normal';
  showHeading?: boolean;
  hoverEffect?: boolean;
  compact?: boolean;
  classes?: string;
  section?: string;
}

export default function PostListNew(props: Props): ReactElement {
  const {
    posts,
    gridStyle = 'normal',
    hoverEffect,
    compact,
    classes,
    section = 'blog',
  } = props;
  const cardClasses = classNames('md:w-1/3 mb-5', 'lg:w-1/3 lg:max-w-xs ');
  const gridClasses = [
    gridStyle === 'normal' && 'lg:max-w-screen-xl',
    gridStyle === 'blog' && 'lg:max-w-screen-lg',
  ];

  let PageSize = section === 'post' ? 3 : section === 'blog' ? 15 : 6;

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
          'px-0 pb-0 flex flex-wrap justify-center max-w-screen-md',
          'md:px-0 md:pb-0 md:justify-center',
          'lg:pl-20 lg:pr-20 lg:py-10',
          gridClasses
        )}
      >
        {currentTableData?.map((post) => {
          return (
            <PostCardNew
              section={section}
              route={generateRoute(post.slug)}
              hoverEffect={hoverEffect}
              compact={compact}
              classes={classNames(cardClasses)}
              key={post.id}
              {...post}
            />
          );
        })}
      </Container>
      <Container
        classes={classNames(' flex justify-center lg:pl-20 lg:pr-20 lg:pb-10')}
      >
        {section === 'blog' && (
          <Pagination
            currentPage={currentPage}
            totalCount={posts.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
          />
        )}
      </Container>
    </div>
  );
}
