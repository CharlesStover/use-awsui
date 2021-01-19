import { CheckboxProps } from '@awsui/components-react/checkbox';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultChecked: CheckboxProps['checked'];
}

export interface State {
  checked: CheckboxProps['checked'];
  handleChange: Required<CheckboxProps>['onChange'];
  setChecked: Dispatch<SetStateAction<CheckboxProps['checked']>>;
}

export default function useCheckbox(props: Props = Object.create(null)): State {
  const { defaultChecked } = props;

  const [checked, setChecked] = useState<CheckboxProps['checked']>(
    defaultChecked,
  );

  const handleChange = useCallback(
    (e: NonCancelableCustomEvent<CheckboxProps.ChangeDetail>): void => {
      setChecked(e.detail.checked);
    },
    [],
  );

  return {
    checked,
    handleChange,
    setChecked,
  };
}
