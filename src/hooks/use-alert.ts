import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultVisible?: boolean;
}

export interface State {
  setVisible: (value: SetStateAction<boolean | undefined>) => void;
  visible?: boolean;
  handleDismiss: (
    event: Readonly<NonCancelableCustomEvent<Readonly<Record<string, never>>>>,
  ) => void;
}

const DEFAULT_PROPS: Readonly<Props> = Object.freeze({});

export default function useAlert(
  props: Readonly<Props> = DEFAULT_PROPS,
): State {
  const { defaultVisible } = props;

  // States
  const [visible, setVisible] = useState<boolean | undefined>(defaultVisible);

  return {
    setVisible,
    visible,

    handleDismiss: useCallback((): void => {
      setVisible(false);
    }, []),
  };
}
