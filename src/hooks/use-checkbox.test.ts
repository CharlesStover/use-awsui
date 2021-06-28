import type { CheckboxProps } from '@awsui/components-react/checkbox';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCheckbox } from '..';

const TEST_CHECKED = true;

const TEST_EVENT: NonCancelableCustomEvent<CheckboxProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      checked: TEST_CHECKED,
      indeterminate: false,
    },
  });

describe('useCheckbox', (): void => {
  describe('checked', (): void => {
    it('should default to false', (): void => {
      const { result } = renderHook(useCheckbox);
      expect(result.current.checked).toBe(false);
    });

    it('should default to defaultChecked', (): void => {
      const { result } = renderHook(useCheckbox, {
        initialProps: {
          defaultChecked: TEST_CHECKED,
        },
      });
      expect(result.current.checked).toBe(TEST_CHECKED);
    });
  });

  describe('handleChange', (): void => {
    it('should set checked', (): void => {
      const { result } = renderHook(useCheckbox);

      act((): void => {
        result.current.handleChange(TEST_EVENT);
      });

      expect(result.current.checked).toBe(TEST_CHECKED);
    });
  });

  describe('setChecked', (): void => {
    it('should set checked', (): void => {
      const { result } = renderHook(useCheckbox);

      act((): void => {
        result.current.setChecked(TEST_CHECKED);
      });

      expect(result.current.checked).toBe(TEST_CHECKED);
    });
  });
});
