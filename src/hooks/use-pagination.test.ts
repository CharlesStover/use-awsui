/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { PaginationProps } from '@awsui/components-react/pagination';
import { act, renderHook } from '@testing-library/react-hooks';
import { usePagination } from '..';

describe('usePagination', (): void => {
  describe('currentPageIndex', (): void => {
    it('should default to 1', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: undefined,
      });
      expect(result.current.currentPageIndex).toBe(1);
    });

    it('should default to defaultCurrentPageIndex', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: {
          defaultCurrentPageIndex: 2,
        },
      });
      expect(result.current.currentPageIndex).toBe(2);
    });
  });

  describe('handleChange', (): void => {
    const TEST_CURRENT_PAGE_INDEX = 2;
    const TEST_CHANGE_EVENT: NonCancelableCustomEvent<PaginationProps.ChangeDetail> =
      new CustomEvent('', {
        detail: {
          currentPageIndex: TEST_CURRENT_PAGE_INDEX,
        },
      });

    it('should set currentPageIndex', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleChange(TEST_CHANGE_EVENT);
      });

      expect(result.current.currentPageIndex).toBe(TEST_CURRENT_PAGE_INDEX);
    });

    it('should call onCurrentPageIndexChange', (): void => {
      const TEST_CURRENT_PAGE_INDEX_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(usePagination, {
        initialProps: {
          onCurrentPageIndexChange: TEST_CURRENT_PAGE_INDEX_CHANGE_HANDLER,
        },
      });
      expect(TEST_CURRENT_PAGE_INDEX_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleChange(TEST_CHANGE_EVENT);
      });

      expect(TEST_CURRENT_PAGE_INDEX_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_CURRENT_PAGE_INDEX_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_CURRENT_PAGE_INDEX,
      );
    });
  });

  describe('paginate', (): void => {
    it('should paginate items', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: {
          defaultCurrentPageIndex: 2,
          pageSize: 2,
        },
      });

      const TEST_ITEMS: number[] = [1, 2, 3, 4, 5, 6];
      expect(result.current.paginate(TEST_ITEMS)).toEqual([3, 4]);
    });
  });

  describe('setCurrentPageIndex', (): void => {
    it('should set currentPageIndex', (): void => {
      const { result } = renderHook(usePagination, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.setCurrentPageIndex(2);
      });

      expect(result.current.currentPageIndex).toBe(2);
    });
  });
});
