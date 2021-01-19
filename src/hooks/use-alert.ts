import { AlertProps } from '@awsui/components-react/alert';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultVisible: AlertProps['visible'];
}

export interface State {
  handleDismiss: Required<AlertProps>['onDismiss'];
  setVisible: Dispatch<SetStateAction<AlertProps['visible']>>;
  visible: AlertProps['visible'];
}

export default function useCheckbox(props: Props = Object.create(null)): State {
  const { defaultVisible } = props;

  const [visible, setVisible] = useState<AlertProps['visible']>(defaultVisible);

  const handleDismiss = useCallback((): void => {
    setVisible(false);
  }, []);

  return {
    handleDismiss,
    setVisible,
    visible,
  };
}
