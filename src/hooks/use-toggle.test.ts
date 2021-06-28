/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { ToggleProps } from '@awsui/components-react/toggle';
import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '..';

describe('useToggle', (): void => {
  describe('checked', (): void => {
    it('should default to false', (): void => {
      const { result } = renderHook(useToggle, {
        initialProps: undefined,
      });
      expect(result.current.checked).toBe(false);
    });

    it('should default to defaultChecked', (): void => {
      const { result } = renderHook(useToggle, {
        initialProps: {
          defaultChecked: true,
        },
      });
      expect(result.current.checked).toBe(true);
    });
  });

  describe('handleChange', (): void => {
    it('should set checked', (): void => {
      const TEST_CHECKED = true;
      const { result } = renderHook(useToggle, {
        initialProps: undefined,
      });

      act((): void => {
        const TEST_CHANGE_EVENT: CustomEvent<ToggleProps.ChangeDetail> =
          new CustomEvent('', {
            detail: {
              checked: TEST_CHECKED,
            },
          });
        result.current.handleChange(TEST_CHANGE_EVENT);
      });

      expect(result.current.checked).toBe(TEST_CHECKED);
    });

    it('should fire the onChange event listener', (): void => {
      const TEST_CHANGE_HANDLER = jest.fn();
      const TEST_CHECKED = true;
      const { result } = renderHook(useToggle, {
        initialProps: {
          onChange: TEST_CHANGE_HANDLER,
        },
      });

      act((): void => {
        const TEST_CHANGE_EVENT: CustomEvent<ToggleProps.ChangeDetail> =
          new CustomEvent('', {
            detail: {
              checked: TEST_CHECKED,
            },
          });
        result.current.handleChange(TEST_CHANGE_EVENT);
      });

      expect(TEST_CHANGE_HANDLER).toHaveBeenCalledTimes(1);
      expect(TEST_CHANGE_HANDLER).toHaveBeenLastCalledWith(TEST_CHECKED);
    });
  });
});
