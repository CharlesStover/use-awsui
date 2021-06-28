import type { CheckboxProps } from '@awsui/components-react/checkbox';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultChecked?: boolean;
}

export interface State {
  checked: boolean;
  setChecked: (value: SetStateAction<boolean>) => void;
  handleChange: (
    event: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useCheckbox(props: Props = DEFAULT_PROPS): State {
  const { defaultChecked = false } = props;

  // States
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  return {
    checked,
    setChecked,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>): void => {
        setChecked(e.detail.checked);
      },
      [],
    ),
  };
}
