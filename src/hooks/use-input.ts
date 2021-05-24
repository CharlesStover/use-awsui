import { InputProps } from '@awsui/components-react/input';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultValue: InputProps['value'];
}

export interface State {
  handleChange: Required<InputProps>['onChange'];
  setValue: Dispatch<SetStateAction<InputProps['value']>>;
  value: InputProps['value'];
}

export default function useInput(props: Props = Object.create(null)): State {
  const { defaultValue } = props;

  const [value, setValue] = useState<InputProps['value']>(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<InputProps.ChangeDetail>): void => {
        setValue(e.detail.value);
      },
      [],
    ),
  };
}
