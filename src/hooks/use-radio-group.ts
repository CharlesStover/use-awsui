import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { RadioGroupProps } from '@awsui/components-react/radio-group';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultValue?: string | null;
}

export interface State {
  setValue: (value: SetStateAction<string | null>) => void;
  value: RadioGroupProps['value'];
  handleChange: (
    event: NonCancelableCustomEvent<RadioGroupProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useRadioGroup(props: Props = DEFAULT_PROPS): State {
  const { defaultValue = null } = props;

  // States
  const [value, setValue] = useState<string | null>(defaultValue);

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
