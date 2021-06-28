import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { TextFilterProps } from '@awsui/components-react/text-filter';
import { act, renderHook } from '@testing-library/react-hooks';
import { useTextFilter } from '..';

const TEST_FILTERING_TEXT = 'test filtering text';

const TEST_EVENT: NonCancelableCustomEvent<TextFilterProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      filteringText: TEST_FILTERING_TEXT,
    },
  });

describe('useTextFilter', (): void => {
  describe('filteringText', (): void => {
    it('should default to an empty string', (): void => {
      const { result } = renderHook(useTextFilter);
      expect(result.current.filteringText).toBe('');
    });

    it('should default to defaultFilteringText', (): void => {
      const { result } = renderHook(useTextFilter, {
        initialProps: {
          defaultFilteringText: TEST_FILTERING_TEXT,
        },
      });
      expect(result.current.filteringText).toBe(TEST_FILTERING_TEXT);
    });
  });

  describe('handleChange', (): void => {
    it('should set filteringText', (): void => {
      const { result } = renderHook(useTextFilter);

      act((): void => {
        result.current.handleChange(TEST_EVENT);
      });

      expect(result.current.filteringText).toBe(TEST_FILTERING_TEXT);
    });
  });

  describe('setFilteringText', (): void => {
    it('should set filteringText', (): void => {
      const { result } = renderHook(useTextFilter);

      act((): void => {
        result.current.setFilteringText(TEST_FILTERING_TEXT);
      });

      expect(result.current.filteringText).toBe(TEST_FILTERING_TEXT);
    });
  });
});
