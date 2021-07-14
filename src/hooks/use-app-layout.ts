import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { AppLayoutProps } from '@awsui/components-react/app-layout';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultNavigationOpen?: boolean;
  defaultToolsOpen?: boolean;
}

export interface State {
  navigationOpen?: boolean;
  setNavigationOpen: (value: SetStateAction<boolean | undefined>) => void;
  setToolsOpen: (value: SetStateAction<boolean | undefined>) => void;
  toolsOpen?: boolean;
  handleNavigationChange: (
    event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>,
  ) => void;
  handleToolsChange: (
    event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useAppLayout(props: Props = DEFAULT_PROPS): State {
  const { defaultNavigationOpen, defaultToolsOpen } = props;

  // States
  const [navigationOpen, setNavigationOpen] = useState<boolean | undefined>(
    defaultNavigationOpen,
  );
  const [toolsOpen, setToolsOpen] = useState<boolean | undefined>(
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
