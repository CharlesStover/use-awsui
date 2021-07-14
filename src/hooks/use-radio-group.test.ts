import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { RadioGroupProps } from '@awsui/components-react/radio-group';
import { act, renderHook } from '@testing-library/react-hooks';
import { useRadioGroup } from '..';

const TEST_VALUE = 'test value';

const TEST_EVENT: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      value: TEST_VALUE,
    },
  });

describe('useRadioGroup', (): void => {
  describe('handleChange', (): void => {
    it('should set value', (): void => {
      const { result } = renderHook(useRadioGroup);

      act((): void => {
        result.current.handleChange(TEST_EVENT);
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });

  describe('setValue', (): void => {
    it('should set value', (): void => {
      const { result } = renderHook(useRadioGroup);

      act((): void => {
        result.current.setValue(TEST_VALUE);
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });

  describe('value', (): void => {
    it('should default to null', (): void => {
      const { result } = renderHook(useRadioGroup);
      expect(result.current.value).toBeNull();
    });

    it('should default to defaultValue', (): void => {
      const { result } = renderHook(useRadioGroup, {
        initialProps: {
          defaultValue: TEST_VALUE,
        },
      });
      expect(result.current.value).toBe(TEST_VALUE);
    });
  });
});
