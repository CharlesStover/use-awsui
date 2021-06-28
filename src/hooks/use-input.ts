import type { InputProps } from '@awsui/components-react/input';
import type { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultValue?: string;
}

export interface State {
  setValue: (value: SetStateAction<string>) => void;
  value: InputProps['value'];
  handleChange: (
    event: NonCancelableCustomEvent<InputProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useInput(props: Props = DEFAULT_PROPS): State {
  const { defaultValue = '' } = props;

  // States
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
