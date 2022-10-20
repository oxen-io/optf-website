import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';

export interface Props {
  onPageChange: (page: any) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={classnames('flex  list-none ', { [className]: className })}>
      {/* Left navigation arrow */}
      <li
        className={classnames(
          'cursor-pointer text-gray-800 px-4 h-32 text-center m-2 flex items-center rounded-lg',
          currentPage === 1 && 'hidden'
        )}
        onClick={onPrevious}
      >
        <div className="text-gray-800" />
        &lt; &lt; Previous
      </li>
      {paginationRange.map((pageNumber: number | string) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <li className="px-4 h-32 text-center m-2 flex items-center rounded-lg dots">
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={classnames(
              'px-4 h-32 text-center m-2 flex items-center rounded-lg',
              {
                selected: pageNumber === currentPage,
              }
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames(
          ' cursor-pointer px-4 h-32 text-center m-2 flex items-center rounded-lg',

          currentPage === lastPage && 'hidden'
        )}
        onClick={onNext}
      >
        <div className="arrow right" />
        Next &gt; &gt;
      </li>
    </ul>
  );
};

export default Pagination;
