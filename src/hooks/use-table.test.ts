import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TableProps } from '@awsui/components-react/table';
import { act, renderHook } from '@testing-library/react-hooks';
import { TableState, UseTableProps, useTable } from '..';

interface Item {
  num: number;
}

const TEST_SELECTED_ITEMS: unknown[] = [{}, {}];

const TEST_SORTING_COLUMN: TableProps.SortingColumn<unknown> = {
  sortingField: 'test-sorting-field',
};

const TEST_SORTING_STATE: TableProps.SortingState<unknown> = {
  isDescending: true,
  sortingColumn: TEST_SORTING_COLUMN,
};

describe('useTable', (): void => {
  describe('handleSelectionChange', (): void => {
    const TEST_SELECTION_EVENT: NonCancelableCustomEvent<
      TableProps.SelectionChangeDetail<unknown>
    > = new CustomEvent('', {
      detail: {
        selectedItems: TEST_SELECTED_ITEMS,
      },
    });

    it('should call onSelectionChange', (): void => {
      const MOCK_SELECTION_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useTable, {
        initialProps: {
          onSelectionChange: MOCK_SELECTION_CHANGE_HANDLER,
        },
      });
      act((): void => {
        result.current.handleSelectionChange(TEST_SELECTION_EVENT);
      });
      expect(MOCK_SELECTION_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(MOCK_SELECTION_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_SELECTED_ITEMS,
      );
    });

    it('should set selectedItems', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      act((): void => {
        result.current.handleSelectionChange(TEST_SELECTION_EVENT);
      });
      expect(result.current.selectedItems).toBe(TEST_SELECTED_ITEMS);
    });
  });

  describe('handleSortingChange', (): void => {
    const TEST_SORTING_EVENT: NonCancelableCustomEvent<
      TableProps.SortingState<unknown>
    > = new CustomEvent('', {
      detail: TEST_SORTING_STATE,
    });

    it('should call onSortingChange', (): void => {
      const MOCK_SORTING_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useTable, {
        initialProps: {
          onSortingChange: MOCK_SORTING_CHANGE_HANDLER,
        },
      });
      act((): void => {
        result.current.handleSortingChange(TEST_SORTING_EVENT);
      });
      expect(MOCK_SORTING_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(MOCK_SORTING_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_SORTING_STATE,
      );
    });

    it('should set sortingColumn', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      act((): void => {
        result.current.handleSortingChange(TEST_SORTING_EVENT);
      });
      expect(result.current.sortingColumn).toBe(TEST_SORTING_COLUMN);
    });

    it('should set sortingDescending', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      act((): void => {
        result.current.handleSortingChange(TEST_SORTING_EVENT);
      });
      expect(result.current.sortingDescending).toBe(true);
    });
  });

  describe('selectedItems', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      expect(result.current.selectedItems).toBeUndefined();
    });

    it('should default to defaultSelectedItems', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: {
          defaultSelectedItems: TEST_SELECTED_ITEMS,
        },
      });
      expect(result.current.selectedItems).toBe(TEST_SELECTED_ITEMS);
    });
  });

  describe('sort', (): void => {
    it('should not sort without a column', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: undefined,
        },
      );
      const ORIGINAL_TEST_ITEMS: Item[] = [{ num: 1 }, { num: 3 }, { num: 2 }];
      const TEST_ITEMS: Item[] = [...ORIGINAL_TEST_ITEMS];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual(ORIGINAL_TEST_ITEMS);
    });

    it('should sort ascending with a comparator', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: {
            defaultSortingColumn: {
              sortingComparator(a: Item, b: Item): number {
                return a.num - b.num;
              },
            },
          },
        },
      );
      const TEST_ITEMS: Item[] = [{ num: 1 }, { num: 3 }, { num: 2 }];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual([{ num: 1 }, { num: 2 }, { num: 3 }]);
    });

    it('should sort descending with a comparator', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: {
            defaultSortingColumn: {
              sortingComparator(a: Item, b: Item): number {
                return a.num - b.num;
              },
            },
            defaultSortingDescending: true,
          },
        },
      );
      const TEST_ITEMS: Item[] = [{ num: 1 }, { num: 3 }, { num: 2 }];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual([{ num: 3 }, { num: 2 }, { num: 1 }]);
    });

    it('should not sort without a field or comparator', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: {
            defaultSortingColumn: {},
          },
        },
      );
      const ORIGINAL_TEST_ITEMS: Item[] = [{ num: 1 }, { num: 3 }, { num: 2 }];
      const TEST_ITEMS: Item[] = [...ORIGINAL_TEST_ITEMS];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual(ORIGINAL_TEST_ITEMS);
    });

    it('should not sort non-primitive fields', (): void => {
      const { result } = renderHook<
        UseTableProps<unknown>,
        TableState<unknown>
      >(useTable, {
        initialProps: {
          defaultSortingColumn: {
            sortingField: 'test',
          },
        },
      });
      const ORIGINAL_TEST_ITEMS: unknown[] = [
        { test: null },
        { test: undefined },
        {
          test(): void {
            return;
          },
        },
      ];
      const TEST_ITEMS: unknown[] = [...ORIGINAL_TEST_ITEMS];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual(ORIGINAL_TEST_ITEMS);
    });

    it('should sort ascending with a field', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: {
            defaultSortingColumn: {
              sortingField: 'num',
            },
          },
        },
      );
      const TEST_ITEMS: Item[] = [
        { num: 1 },
        { num: 3 },
        { num: 3 },
        { num: 2 },
      ];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual([
        { num: 1 },
        { num: 2 },
        { num: 3 },
        { num: 3 },
      ]);
    });

    it('should sort descending with a field', (): void => {
      const { result } = renderHook<UseTableProps<Item>, TableState<Item>>(
        useTable,
        {
          initialProps: {
            defaultSortingColumn: {
              sortingField: 'num',
            },
            defaultSortingDescending: true,
          },
        },
      );
      const TEST_ITEMS: Item[] = [
        { num: 1 },
        { num: 3 },
        { num: 3 },
        { num: 2 },
      ];
      TEST_ITEMS.sort(result.current.sort);
      expect(TEST_ITEMS).toEqual([
        { num: 3 },
        { num: 3 },
        { num: 2 },
        { num: 1 },
      ]);
    });
  });

  describe('sortingColumn', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      expect(result.current.sortingColumn).toBeUndefined();
    });

    it('should default to defaultSortingColumn', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: {
          defaultSortingColumn: TEST_SORTING_COLUMN,
        },
      });
      expect(result.current.sortingColumn).toBe(TEST_SORTING_COLUMN);
    });
  });

  describe('sortingDescending', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: undefined,
      });
      expect(result.current.sortingDescending).toBeUndefined();
    });

    it('should default to defaultSortingDescending', (): void => {
      const { result } = renderHook(useTable, {
        initialProps: {
          defaultSortingDescending: true,
        },
      });
      expect(result.current.sortingDescending).toBe(true);
    });
  });
});
