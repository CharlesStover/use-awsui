import { AppLayoutProps } from '@awsui/components-react/app-layout';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultNavigationOpen?: AppLayoutProps['navigationOpen'];
  defaultToolsOpen?: AppLayoutProps['toolsOpen'];
}

export interface State {
  handleNavigationChange: Required<AppLayoutProps>['onNavigationChange'];
  handleToolsChange: Required<AppLayoutProps>['onToolsChange'];
  navigationOpen: AppLayoutProps['navigationOpen'];
  setNavigationOpen: Dispatch<SetStateAction<AppLayoutProps['navigationOpen']>>;
  setToolsOpen: Dispatch<SetStateAction<AppLayoutProps['toolsOpen']>>;
  toolsOpen: AppLayoutProps['toolsOpen'];
}

export default function useAppLayout(
  props: Props = Object.create(null),
): State {
  const { defaultNavigationOpen, defaultToolsOpen } = props;

  const [navigationOpen, setNavigationOpen] = useState<
    AppLayoutProps['navigationOpen']
  >(defaultNavigationOpen);
  const [toolsOpen, setToolsOpen] = useState<AppLayoutProps['toolsOpen']>(
    defaultToolsOpen,
  );

  return {
    navigationOpen,
    setNavigationOpen,
    setToolsOpen,
    toolsOpen,

    handleNavigationChange: useCallback(
      (e: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>): void => {
        setNavigationOpen(e.detail.open);
      },
      [],
    ),

    handleToolsChange: useCallback(
      (e: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>): void => {
        setToolsOpen(e.detail.open);
      },
      [],
    ),
  };
}
