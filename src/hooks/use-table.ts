import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TableProps } from '@awsui/components-react/table';
import { useCallback, useState } from 'react';
import isSortable from '../utils/is-sortable';

export interface Props<Item> {
  defaultSelectedItems?: Item[];
  defaultSortingColumn?: TableProps.SortingColumn<Item>;
  defaultSortingDescending?: boolean;
  onSelectionChange?(selectedItems: Item[]): void;
  onSortingChange?(state: TableProps.SortingState<Item>): void;
}

export interface State<Item> {
  handleSelectionChange: Required<TableProps>['onSelectionChange'];
  handleSortingChange: Required<TableProps>['onSortingChange'];
  selectedItems?: Item[];
  sort(a: Item, b: Item): number;
  sortingColumn?: TableProps.SortingColumn<Item>;
  sortingDescending?: boolean;
}

const DEFAULT_PROPS: Props<unknown> = Object.freeze(Object.create(null));

export default function useTable<Item>(props?: Props<Item>): State<Item> {
  const {
    defaultSelectedItems,
    defaultSortingColumn,
    defaultSortingDescending,
    onSelectionChange,
    onSortingChange,
  } = props || (DEFAULT_PROPS as Props<Item>);

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
          return 0;
        }
        if (typeof sortingColumn.sortingComparator !== 'undefined') {
          const rank: number = sortingColumn.sortingComparator(a, b);
          if (sortingDescending === true) {
            return -1 * rank;
          }
          return rank;
        }
        if (typeof sortingColumn.sortingField === 'undefined') {
          return 0;
        }
        const field: keyof Item = sortingColumn.sortingField as keyof Item;
        const aValue: unknown = a[field];
        const bValue: unknown = b[field];
        if (!isSortable(aValue) || !isSortable(bValue)) {
          return 0;
        }
        if (aValue < bValue) {
          if (sortingDescending === true) {
            return 1;
          }
          return -1;
        }
        if (aValue > bValue) {
          if (sortingDescending === true) {
            return -1;
          }
          return 1;
        }
        return 0;
      },
      [sortingColumn, sortingDescending],
    ),
  };
}
