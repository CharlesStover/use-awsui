import type { ExpandableSectionProps } from '@awsui/components-react/expandable-section';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { act, renderHook } from '@testing-library/react-hooks';
import { useExpandableSection } from '..';

const COLLAPSE_EVENT: NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      expanded: false,
    },
  });

const EXPAND_EVENT: NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail> =
  new CustomEvent('', {
    detail: {
      expanded: true,
    },
  });

describe('useExpandableSection', (): void => {
  describe('expanded', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useExpandableSection);
      expect(result.current.expanded).toBeUndefined();
    });

    it('should default to defaultExpanded', (): void => {
      const { result } = renderHook(useExpandableSection, {
        initialProps: {
          defaultExpanded: true,
        },
      });
      expect(result.current.expanded).toBe(true);
    });
  });

  describe('handleExpandedChange', (): void => {
    it('should set expanded to false', (): void => {
      const { result } = renderHook(useExpandableSection, {
        initialProps: {
          defaultExpanded: true,
        },
      });
      expect(result.current.expanded).toBe(true);

      act((): void => {
        result.current.handleChange(COLLAPSE_EVENT);
      });

      expect(result.current.expanded).toBe(false);
    });

    it('should set expanded to true', (): void => {
      const { result } = renderHook(useExpandableSection, {
        initialProps: {
          defaultExpanded: false,
        },
      });
      expect(result.current.expanded).toBe(false);

      act((): void => {
        result.current.handleChange(EXPAND_EVENT);
      });

      expect(result.current.expanded).toBe(true);
    });
  });

  describe('setExpanded', (): void => {
    it('should set expanded to false', (): void => {
      const { result } = renderHook(useExpandableSection, {
        initialProps: {
          defaultExpanded: true,
        },
      });
      expect(result.current.expanded).toBe(true);

      act((): void => {
        result.current.setExpanded(false);
      });

      expect(result.current.expanded).toBe(false);
    });

    it('should set expanded to true', (): void => {
      const { result } = renderHook(useExpandableSection, {
        initialProps: {
          defaultExpanded: false,
        },
      });
      expect(result.current.expanded).toBe(false);

      act((): void => {
        result.current.setExpanded(true);
      });

      expect(result.current.expanded).toBe(true);
    });
  });
});
