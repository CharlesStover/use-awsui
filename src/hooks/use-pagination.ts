import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { PaginationProps } from '@awsui/components-react/pagination';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultCurrentPageIndex?: number;
  onCurrentPageIndexChange?(currentPageIndex: number): void;
  pageSize?: number;
}

export interface State {
  currentPageIndex: number;
  handleChange: Required<PaginationProps>['onChange'];
  paginate<Item>(items: Item[]): Item[];
  setCurrentPageIndex: Dispatch<SetStateAction<number>>;
}

const DEFAULT_PROPS: Props = Object.freeze(Object.create(null));

export default function usePagination(props?: Props): State {
  const {
    defaultCurrentPageIndex = 1,
    onCurrentPageIndexChange,
    pageSize = Number.POSITIVE_INFINITY,
  } = props || DEFAULT_PROPS;

  const [currentPageIndex, setCurrentPageIndex] = useState(
    defaultCurrentPageIndex,
  );

  const handleChange = useCallback(
    (e: NonCancelableCustomEvent<PaginationProps.ChangeDetail>): void => {
      setCurrentPageIndex(e.detail.currentPageIndex);
      if (onCurrentPageIndexChange) {
        onCurrentPageIndexChange(e.detail.currentPageIndex);
      }
    },
    [onCurrentPageIndexChange],
  );

  const paginate = useCallback(
    <Item>(items: Item[]): Item[] => {
      const start: number = (currentPageIndex - 1) * pageSize;
      const end: number = start + pageSize;
      return items.slice(start, end);
    },
    [currentPageIndex, pageSize],
  );

  return {
    currentPageIndex,
    handleChange,
    paginate,
    setCurrentPageIndex,
  };
}
