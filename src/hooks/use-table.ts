import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { TableProps } from '@awsui/components-react/table';
import { useCallback, useState } from 'react';
import getDefaultTableProps from '../utils/get-default-table-props';
import isSortable from '../utils/is-sortable';

export interface Props<Item> {
  defaultSelectedItems?: Item[];
  defaultSortingColumn?: TableProps.SortingColumn<Item>;
  defaultSortingDescending?: boolean;
  onSelectionChange?: (selectedItems: readonly Item[]) => void;
  onSortingChange?: (state: TableProps.SortingState<Item>) => void;
}

export interface State<Item> {
  selectedItems?: Item[];
  sort: (a: Item, b: Item) => number;
  sortingColumn?: TableProps.SortingColumn<Item>;
  sortingDescending?: boolean;
  handleSelectionChange: (
    event: NonCancelableCustomEvent<TableProps.SelectionChangeDetail<Item>>,
  ) => void;
  handleSortingChange: (
    event: NonCancelableCustomEvent<TableProps.SortingState<Item>>,
  ) => void;
}

const NO_SORT = 0;
const SORT_BACKWARDS = -1;
const SORT_FORWARDS = 1;

export default function useTable<Item>(props?: Props<Item>): State<Item> {
  const {
    defaultSelectedItems,
    defaultSortingColumn,
    defaultSortingDescending,
    onSelectionChange,
    onSortingChange,
  } = props ?? getDefaultTableProps<Item>();

  // States
  const [selectedItems, setSelectedItems] = useState<Item[] | undefined>(
    defaultSelectedItems,
  );
  const [sortingColumn, setSortingColumn] = useState<
    TableProps.SortingColumn<Item> | undefined
  >(defaultSortingColumn);
  const [sortingDescending, setSortingDescending] = useState<
    boolean | undefined
  >(defaultSortingDescending);

  return {
    selectedItems,
    sortingColumn,
    sortingDescending,

    handleSelectionChange: useCallback(
      (
        e: NonCancelableCustomEvent<TableProps.SelectionChangeDetail<Item>>,
      ): void => {
        if (typeof onSelectionChange === 'function') {
          onSelectionChange(e.detail.selectedItems);
        }
        setSelectedItems(e.detail.selectedItems);
      },
      [onSelectionChange],
    ),

    handleSortingChange: useCallback(
      (e: NonCancelableCustomEvent<TableProps.SortingState<Item>>): void => {
        if (typeof onSortingChange === 'function') {
          onSortingChange(e.detail);
        }
        setSortingColumn(e.detail.sortingColumn);
        setSortingDescending(e.detail.isDescending);
      },
      [onSortingChange],
    ),

    sort: useCallback(
      (a: Item, b: Item): number => {
        if (typeof sortingColumn === 'undefined') {
          return NO_SORT;
        }
        if (typeof sortingColumn.sortingComparator !== 'undefined') {
          const rank: number = sortingColumn.sortingComparator(a, b);
          if (sortingDescending === true) {
            return SORT_BACKWARDS * rank;
          }
          return rank;
        }
        if (typeof sortingColumn.sortingField === 'undefined') {
          return NO_SORT;
        }

        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const field: keyof Item = sortingColumn.sortingField as keyof Item;
        const aValue: unknown = a[field];
        const bValue: unknown = b[field];
        if (!isSortable(aValue) || !isSortable(bValue)) {
          return NO_SORT;
        }
        if (aValue < bValue) {
          if (sortingDescending === true) {
            return SORT_FORWARDS;
          }
          return SORT_BACKWARDS;
        }
        if (aValue > bValue) {
          if (sortingDescending === true) {
            return SORT_BACKWARDS;
          }
          return SORT_FORWARDS;
        }
        return NO_SORT;
      },
      [sortingColumn, sortingDescending],
    ),
  };
}
