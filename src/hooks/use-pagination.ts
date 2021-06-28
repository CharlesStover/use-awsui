import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { PaginationProps } from '@awsui/components-react/pagination';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultCurrentPageIndex?: number;
  onCurrentPageIndexChange?: (currentPageIndex: number) => void;
  pageSize?: number;
}

export interface State {
  currentPageIndex: number;
  paginate: <Item>(items: Item[]) => Item[];
  setCurrentPageIndex: (value: SetStateAction<number>) => void;
  handleChange: (
    event: NonCancelableCustomEvent<PaginationProps.ChangeDetail>,
  ) => void;
}

const ARRAY_INDEX_OFFSET = 1;
const DEFAULT_PROPS: Props = Object.freeze({});
const FIRST_PAGE = 1;

export default function usePagination(props?: Props): State {
  const {
    defaultCurrentPageIndex = FIRST_PAGE,
    onCurrentPageIndexChange,
    pageSize = Number.POSITIVE_INFINITY,
  } = props ?? DEFAULT_PROPS;

  // States
  const [currentPageIndex, setCurrentPageIndex] = useState(
    defaultCurrentPageIndex,
  );

  return {
    currentPageIndex,
    setCurrentPageIndex,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<PaginationProps.ChangeDetail>): void => {
        setCurrentPageIndex(e.detail.currentPageIndex);
        if (onCurrentPageIndexChange) {
          onCurrentPageIndexChange(e.detail.currentPageIndex);
        }
      },
      [onCurrentPageIndexChange],
    ),

    paginate: useCallback(
      <Item>(items: Item[]): Item[] => {
        const start: number =
          (currentPageIndex - ARRAY_INDEX_OFFSET) * pageSize;
        const end: number = start + pageSize;
        return items.slice(start, end);
      },
      [currentPageIndex, pageSize],
    ),
  };
}
