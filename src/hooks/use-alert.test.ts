import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { act, renderHook } from '@testing-library/react-hooks';
import { useAlert } from '..';

const TEST_VISIBLE = true;

const TEST_EVENT: NonCancelableCustomEvent<Record<string, never>> =
  new CustomEvent('');

describe('useAlert', (): void => {
  describe('handleDismiss', (): void => {
    it('should set visible to false', (): void => {
      const { result } = renderHook(useAlert);

      act((): void => {
        result.current.handleDismiss(TEST_EVENT);
      });

      expect(result.current.visible).toBe(false);
    });
  });

  describe('setVisible', (): void => {
    it('should set visible', (): void => {
      const { result } = renderHook(useAlert);

      act((): void => {
        result.current.setVisible(TEST_VISIBLE);
      });

      expect(result.current.visible).toBe(TEST_VISIBLE);
    });
  });

  describe('visible', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useAlert);
      expect(result.current.visible).toBeUndefined();
    });

    it('should default to defaultVisible', (): void => {
      const { result } = renderHook(useAlert, {
        initialProps: {
          defaultVisible: TEST_VISIBLE,
        },
      });
      expect(result.current.visible).toBe(TEST_VISIBLE);
    });
  });
});
