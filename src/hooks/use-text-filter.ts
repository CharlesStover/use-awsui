import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { TextFilterProps } from '@awsui/components-react/text-filter';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultFilteringText?: string;
}

export interface State {
  filteringText: string;
  setFilteringText: (value: SetStateAction<string>) => void;
  handleChange: (
    event: NonCancelableCustomEvent<TextFilterProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useTextFilter(props: Props = DEFAULT_PROPS): State {
  const { defaultFilteringText = '' } = props;

  // States
  const [filteringText, setFilteringText] =
    useState<TextFilterProps['filteringText']>(defaultFilteringText);

  return {
    filteringText,
    setFilteringText,

    handleChange: useCallback(
      (e: NonCancelableCustomEvent<TextFilterProps.ChangeDetail>): void => {
        setFilteringText(e.detail.filteringText);
      },
      [],
    ),
  };
}
