import { AppLayoutProps } from '@awsui/components-react/app-layout';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { act, renderHook } from '@testing-library/react-hooks';
import { useAppLayout } from '..';

const TEST_CLOSE_EVENT: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail> = new CustomEvent(
  '',
  {
    detail: {
      open: false,
    },
  },
);

const TEST_OPEN_EVENT: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail> = new CustomEvent(
  '',
  {
    detail: {
      open: true,
    },
  },
);

describe('useAppLayout', (): void => {
  describe('handleNavigationChange', (): void => {
    it('should set navigationOpen to false', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultNavigationOpen: true,
        },
      });
      expect(result.current.navigationOpen).toBe(true);

      act((): void => {
        result.current.handleNavigationChange(TEST_CLOSE_EVENT);
      });

      expect(result.current.navigationOpen).toBe(false);
    });

    it('should set navigationOpen to true', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultNavigationOpen: false,
        },
      });
      expect(result.current.navigationOpen).toBe(false);

      act((): void => {
        result.current.handleNavigationChange(TEST_OPEN_EVENT);
      });

      expect(result.current.navigationOpen).toBe(true);
    });
  });

  describe('handleToolsChange', (): void => {
    it('should set toolsOpen to false', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultToolsOpen: true,
        },
      });
      expect(result.current.toolsOpen).toBe(true);

      act((): void => {
        result.current.handleToolsChange(TEST_CLOSE_EVENT);
      });

      expect(result.current.toolsOpen).toBe(false);
    });

    it('should set toolsOpen to true', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultToolsOpen: false,
        },
      });
      expect(result.current.toolsOpen).toBe(false);

      act((): void => {
        result.current.handleToolsChange(TEST_OPEN_EVENT);
      });

      expect(result.current.toolsOpen).toBe(true);
    });
  });

  describe('navigationOpen', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useAppLayout);
      expect(result.current.navigationOpen).toBeUndefined();
    });

    it('should default to defaultNavigationOpen', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultNavigationOpen: true,
        },
      });
      expect(result.current.navigationOpen).toBe(true);
    });
  });

  describe('setNavigationOpen', (): void => {
    it('should set navigationOpen to false', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultNavigationOpen: true,
        },
      });
      expect(result.current.navigationOpen).toBe(true);

      act((): void => {
        result.current.setNavigationOpen(false);
      });

      expect(result.current.navigationOpen).toBe(false);
    });

    it('should set navigationOpen to true', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultNavigationOpen: false,
        },
      });
      expect(result.current.navigationOpen).toBe(false);

      act((): void => {
        result.current.setNavigationOpen(true);
      });

      expect(result.current.navigationOpen).toBe(true);
    });
  });

  describe('setToolsOpen', (): void => {
    it('should set tools open to false', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultToolsOpen: true,
        },
      });
      expect(result.current.toolsOpen).toBe(true);

      act((): void => {
        result.current.setToolsOpen(false);
      });

      expect(result.current.toolsOpen).toBe(false);
    });

    it('should set tools open to true', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultToolsOpen: false,
        },
      });
      expect(result.current.toolsOpen).toBe(false);

      act((): void => {
        result.current.setToolsOpen(true);
      });

      expect(result.current.toolsOpen).toBe(true);
    });
  });

  describe('toolsOpen', (): void => {
    it('should default to undefined', (): void => {
      const { result } = renderHook(useAppLayout);
      expect(result.current.toolsOpen).toBeUndefined();
    });

    it('should default to defaultToolsOpen', (): void => {
      const { result } = renderHook(useAppLayout, {
        initialProps: {
          defaultToolsOpen: true,
        },
      });
      expect(result.current.toolsOpen).toBe(true);
    });
  });
});
