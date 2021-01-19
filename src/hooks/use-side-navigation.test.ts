import { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { act, renderHook } from '@testing-library/react-hooks';
import { useSideNavigation } from '..';

const TEST_ACTIVE_HREF = '/test/active-href';

describe('useSideNavigation', (): void => {
  describe('activeHref', (): void => {
    it('should default to /', (): void => {
      const { result } = renderHook(useSideNavigation, {
        initialProps: undefined,
      });
      expect(result.current.activeHref).toBe('/');
    });

    it('should default to defaultActiveHref', (): void => {
      const { result } = renderHook(useSideNavigation, {
        initialProps: {
          defaultActiveHref: TEST_ACTIVE_HREF,
        },
      });
      expect(result.current.activeHref).toBe(TEST_ACTIVE_HREF);
    });
  });

  describe('handleFollow', (): void => {
    it('should set activeHref', (): void => {
      const { result } = renderHook(useSideNavigation, {
        initialProps: undefined,
      });

      act((): void => {
        const TEST_FOLLOW_EVENT: CustomEvent<SideNavigationProps.FollowDetail> = new CustomEvent(
          '',
          {
            detail: {
              href: TEST_ACTIVE_HREF,
              text: 'test text',
            },
          },
        );
        result.current.handleFollow(TEST_FOLLOW_EVENT);
      });

      expect(result.current.activeHref).toBe(TEST_ACTIVE_HREF);
    });
  });
});
