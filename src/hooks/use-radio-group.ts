import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { RadioGroupProps } from '@awsui/components-react/radio-group';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultValue: RadioGroupProps['value'];
}

export interface State {
  handleChange: Required<RadioGroupProps>['onChange'];
  setValue: Dispatch<SetStateAction<RadioGroupProps['value']>>;
  value: RadioGroupProps['value'];
}

export default function useRadioGroup(
  props: Props = Object.create(null),
): State {
  const { defaultValue } = props;

  const [value, setValue] = useState<RadioGroupProps['value']>(defaultValue);

  return {
    setValue,
    value,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>): void => {
        setValue(e.detail.value);
      },
      [],
    ),
  };
}
