import React, { FC } from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from 'hooks/usePagination';
import styles from './style.module.scss';

export const MarketPagination: FC<{
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize?: number;
}> = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
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
    <ul className={styles['pagination-container']}>
      {/* Left navigation arrow */}
      <li
        className={classnames(styles['pagination-container__pagination-item'], {
          [styles['disabled']]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div
          className={classnames(
            styles['pagination-container__pagination-item__arrow'],
            styles['left']
          )}
        />
      </li>
      {paginationRange.map((pageNumber: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (String(pageNumber) === DOTS) {
          return (
            <li
              className={classnames(
                styles['pagination-container__pagination-item'],
                styles['dots']
              )}
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={classnames(
              styles['pagination-container__pagination-item'],
              {
                [styles['selected']]: pageNumber === currentPage,
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
        className={classnames(styles['pagination-container__pagination-item'], {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div
          className={classnames(
            styles['pagination-container__pagination-item__arrow'],
            styles['right']
          )}
        />
      </li>
    </ul>
  );
};
