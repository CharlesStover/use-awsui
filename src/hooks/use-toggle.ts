import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { ToggleProps } from '@awsui/components-react/toggle';
import { useCallback, useState } from 'react';

export interface Props {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface State {
  checked: boolean;
  handleChange: (
    event: NonCancelableCustomEvent<ToggleProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useToggle(props: Props = DEFAULT_PROPS): State {
  const { defaultChecked = false, onChange } = props;

  // States
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  return {
    checked,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<ToggleProps.ChangeDetail>): void => {
        setChecked(e.detail.checked);
        if (onChange) {
          onChange(e.detail.checked);
        }
      },
      [onChange],
    ),
  };
}
