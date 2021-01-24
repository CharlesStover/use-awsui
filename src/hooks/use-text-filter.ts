import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { TextFilterProps } from '@awsui/components-react/text-filter';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultFilteringText?: TextFilterProps['filteringText'];
}

export interface State {
  filteringText: TextFilterProps['filteringText'];
  handleChange: Required<TextFilterProps>['onChange'];
  setFilteringText: Dispatch<SetStateAction<TextFilterProps['filteringText']>>;
}

export default function useTextFilter(
  props: Props = Object.create(null),
): State {
  const { defaultFilteringText = '' } = props;

  const [filteringText, setFilteringText] = useState<
    TextFilterProps['filteringText']
  >(defaultFilteringText);

  const handleChange = useCallback(
    (e: NonCancelableCustomEvent<TextFilterProps.ChangeDetail>): void => {
      setFilteringText(e.detail.filteringText);
    },
    [],
  );

  return {
    filteringText,
    handleChange,
    setFilteringText,
  };
}
