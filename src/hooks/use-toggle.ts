import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { ToggleProps } from '@awsui/components-react/toggle';
import { useCallback, useState } from 'react';

export interface Props {
  defaultChecked?: ToggleProps['checked'];
  onChange?(checked: boolean): void;
}

export interface State {
  checked: boolean;
  handleChange: Required<ToggleProps>['onChange'];
}

const DEFAULT_PROPS: Props = Object.freeze(Object.create(null));

export default function useToggle(props: Props = DEFAULT_PROPS): State {
  const { defaultChecked = false, onChange } = props;

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
