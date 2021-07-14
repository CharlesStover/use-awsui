import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { TabsProps } from '@awsui/components-react/tabs';
import { act, renderHook } from '@testing-library/react-hooks';
import { useTabs } from '..';

const TEST_ACTIVE_TAB_ID = 'test-active-tab-id';

const TEST_EVENT: NonCancelableCustomEvent<TabsProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      activeTabId: TEST_ACTIVE_TAB_ID,
    },
  });

describe('useTabs', (): void => {
  describe('activeTabId', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useTabs);
      expect(result.current.activeTabId).toBeUndefined();
    });

    it('should default to defaultActiveTabId', (): void => {
      const { result } = renderHook(useTabs, {
        initialProps: {
          defaultActiveTabId: TEST_ACTIVE_TAB_ID,
        },
      });
      expect(result.current.activeTabId).toBe(TEST_ACTIVE_TAB_ID);
    });
  });

  describe('handleChange', (): void => {
    it('should set activeTabId', (): void => {
      const { result } = renderHook(useTabs);

      act((): void => {
        result.current.handleChange(TEST_EVENT);
      });

      expect(result.current.activeTabId).toBe(TEST_ACTIVE_TAB_ID);
    });
  });

  describe('setValue', (): void => {
    it('should set activeTabId', (): void => {
      const { result } = renderHook(useTabs);

      act((): void => {
        result.current.setActiveTabId(TEST_ACTIVE_TAB_ID);
      });

      expect(result.current.activeTabId).toBe(TEST_ACTIVE_TAB_ID);
    });
  });
});
