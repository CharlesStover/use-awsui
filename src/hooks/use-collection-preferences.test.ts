/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { CollectionPreferencesProps } from '@awsui/components-react/collection-preferences';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCollectionPreferences } from '..';

interface Custom {
  x: boolean;
  y: number;
  z: string;
}

const TEST_PAGE_SIZE = 100;
const TEST_VISIBLE_CONTENT: string[] = ['a', 'b', 'c'];
const TEST_WRAP_LINES = true;

const TEST_CUSTOM: Custom = {
  x: false,
  y: 0,
  z: '',
};

describe('useCollectionPreferences', (): void => {
  describe('custom', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });
      expect(result.current.custom).toBeUndefined();
    });

    it('should default to defaultCustom', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultCustom: TEST_CUSTOM,
        },
      });
      expect(result.current.custom).toBe(TEST_CUSTOM);
    });
  });

  describe('handleConfirm', (): void => {
    const TEST_CONFIRM_EVENT: NonCancelableCustomEvent<CollectionPreferencesProps.Preferences> =
      new CustomEvent('', {
        detail: {
          custom: TEST_CUSTOM,
          pageSize: TEST_PAGE_SIZE,
          visibleContent: TEST_VISIBLE_CONTENT,
          wrapLines: TEST_WRAP_LINES,
        },
      });

    it('should set custom', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(result.current.custom).toBe(TEST_CUSTOM);
    });

    it('should call onCustomChange if custom changed', (): void => {
      const TEST_CUSTOM_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          onCustomChange: TEST_CUSTOM_CHANGE_HANDLER,
        },
      });
      expect(TEST_CUSTOM_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_CUSTOM_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_CUSTOM_CHANGE_HANDLER).toHaveBeenLastCalledWith(TEST_CUSTOM);
    });

    it('should not call onCustomChange if custom did not change', (): void => {
      const TEST_CUSTOM_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultCustom: TEST_CUSTOM,
          onCustomChange: TEST_CUSTOM_CHANGE_HANDLER,
        },
      });
      expect(TEST_CUSTOM_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_CUSTOM_CHANGE_HANDLER).not.toHaveBeenCalled();
    });

    it('should set pageSize', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(result.current.pageSize).toBe(TEST_PAGE_SIZE);
    });

    it('should call onPageSizeChange if pageSize changed', (): void => {
      const TEST_PAGE_SIZE_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          onPageSizeChange: TEST_PAGE_SIZE_CHANGE_HANDLER,
        },
      });
      expect(TEST_PAGE_SIZE_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_PAGE_SIZE_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_PAGE_SIZE_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_PAGE_SIZE,
      );
    });

    it('should not call onPageSizeChange if pageSize did not change', (): void => {
      const TEST_PAGE_SIZE_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultPageSize: TEST_PAGE_SIZE,
          onPageSizeChange: TEST_PAGE_SIZE_CHANGE_HANDLER,
        },
      });
      expect(TEST_PAGE_SIZE_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_PAGE_SIZE_CHANGE_HANDLER).not.toHaveBeenCalled();
    });

    it('should set visibleContent', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(result.current.visibleContent).toBe(TEST_VISIBLE_CONTENT);
    });

    it('should call onVisibleContentChange if visibleContent changed', (): void => {
      const TEST_VISIBLE_CONTENT_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          onVisibleContentChange: TEST_VISIBLE_CONTENT_CHANGE_HANDLER,
        },
      });
      expect(TEST_VISIBLE_CONTENT_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_VISIBLE_CONTENT_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_VISIBLE_CONTENT_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_VISIBLE_CONTENT,
      );
    });

    it('should not call onVisibleContentChange if visibleContent did not change', (): void => {
      const TEST_VISIBLE_CONTENT_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultVisibleContent: TEST_VISIBLE_CONTENT,
          onVisibleContentChange: TEST_VISIBLE_CONTENT_CHANGE_HANDLER,
        },
      });
      expect(TEST_VISIBLE_CONTENT_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_VISIBLE_CONTENT_CHANGE_HANDLER).not.toHaveBeenCalled();
    });

    it('should set wrapLines', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(result.current.wrapLines).toBe(TEST_WRAP_LINES);
    });

    it('should call onWrapLinesChange if wrapLines changed', (): void => {
      const TEST_WRAP_LINES_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          onWrapLinesChange: TEST_WRAP_LINES_CHANGE_HANDLER,
        },
      });
      expect(TEST_WRAP_LINES_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_WRAP_LINES_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_WRAP_LINES_CHANGE_HANDLER).toHaveBeenLastCalledWith(
        TEST_WRAP_LINES,
      );
    });

    it('should not call onWrapLinesChange if wrapLines did not change', (): void => {
      const TEST_WRAP_LINES_CHANGE_HANDLER = jest.fn();
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultWrapLines: TEST_WRAP_LINES,
          onWrapLinesChange: TEST_WRAP_LINES_CHANGE_HANDLER,
        },
      });
      expect(TEST_WRAP_LINES_CHANGE_HANDLER).not.toHaveBeenCalled();

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(TEST_WRAP_LINES_CHANGE_HANDLER).not.toHaveBeenCalled();
    });

    it('should set preferences', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });

      act((): void => {
        result.current.handleConfirm(TEST_CONFIRM_EVENT);
      });

      expect(result.current.preferences).toEqual({
        custom: TEST_CUSTOM,
        pageSize: TEST_PAGE_SIZE,
        visibleContent: TEST_VISIBLE_CONTENT,
        wrapLines: TEST_WRAP_LINES,
      });
    });
  });

  describe('pageSize', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });
      expect(result.current.pageSize).toBeUndefined();
    });

    it('should default to defaultPageSize', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultPageSize: TEST_PAGE_SIZE,
        },
      });
      expect(result.current.pageSize).toBe(TEST_PAGE_SIZE);
    });
  });

  describe('preferences', (): void => {
    it('should default to an empty object', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });
      expect(result.current.preferences).toEqual({});
    });
  });

  describe('visibleContent', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });
      expect(result.current.visibleContent).toBeUndefined();
    });

    it('should default to defaultVisibleContent', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultVisibleContent: TEST_VISIBLE_CONTENT,
        },
      });
      expect(result.current.visibleContent).toBe(TEST_VISIBLE_CONTENT);
    });
  });

  describe('wrapLines', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: undefined,
      });
      expect(result.current.wrapLines).toBeUndefined();
    });

    it('should default to defaultPageSize', (): void => {
      const { result } = renderHook(useCollectionPreferences, {
        initialProps: {
          defaultWrapLines: TEST_WRAP_LINES,
        },
      });
      expect(result.current.wrapLines).toBe(TEST_WRAP_LINES);
    });
  });
});
