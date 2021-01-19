import { ToggleProps } from '@awsui/components-react/toggle';
import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from './use-toggle';

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
      const { result } = renderHook(useToggle, {
        initialProps: undefined,
      });

      act((): void => {
        const TEST_CHANGE_EVENT: CustomEvent<ToggleProps.ChangeDetail> = new CustomEvent(
          '',
          {
            detail: {
              checked: true,
            },
          },
        );
        result.current.handleChange(TEST_CHANGE_EVENT);
      });

      expect(result.current.checked).toBe(true);
    });
  });
});
