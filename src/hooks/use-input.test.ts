import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { InputProps } from '@awsui/components-react/input';
import { act, renderHook } from '@testing-library/react-hooks';
import { useInput } from '..';

const TEST_VALUE = 'test value';

const TEST_EVENT: NonCancelableCustomEvent<InputProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      value: TEST_VALUE,
    },
  });

describe('useInput', (): void => {
  describe('handleChange', (): void => {
    it('should set value', (): void => {
      const { result } = renderHook(useInput);

      act((): void => {
        result.current.handleChange(TEST_EVENT);
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });

  describe('setValue', (): void => {
    it('should set value', (): void => {
      const { result } = renderHook(useInput);

      act((): void => {
        result.current.setValue(TEST_VALUE);
      });

      expect(result.current.value).toBe(TEST_VALUE);
    });
  });

  describe('value', (): void => {
    it('should default to an empty string', (): void => {
      const { result } = renderHook(useInput);
      expect(result.current.value).toBe('');
    });

    it('should default to defaultValue', (): void => {
      const { result } = renderHook(useInput, {
        initialProps: {
          defaultValue: TEST_VALUE,
        },
      });
      expect(result.current.value).toBe(TEST_VALUE);
    });
  });
});
