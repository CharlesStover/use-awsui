import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TabsProps } from '@awsui/components-react/tabs';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultActiveTabId: TabsProps['activeTabId'];
}

export interface State {
  activeTabId: TabsProps['activeTabId'];
  handleChange: Required<TabsProps>['onChange'];
  setActiveTabId: Dispatch<SetStateAction<TabsProps['activeTabId']>>;
}

export default function useTabs(props: Props = Object.create(null)): State {
  const { defaultActiveTabId } = props;

  const [activeTabId, setActiveTabId] = useState<TabsProps['activeTabId']>(
    defaultActiveTabId,
  );

  const handleChange = useCallback(
    (e: NonCancelableCustomEvent<TabsProps.ChangeDetail>): void => {
      setActiveTabId(e.detail.activeTabId);
    },
    [],
  );

  return {
    activeTabId,
    handleChange,
    setActiveTabId,
  };
}
