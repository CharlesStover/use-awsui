import { ExpandableSectionProps } from '@awsui/components-react/expandable-section';
import { NonCancelableCustomEvent } from '@awsui/components-react/internal/events';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export interface Props {
  defaultExpanded: ExpandableSectionProps['expanded'];
}

export interface State {
  expanded: ExpandableSectionProps['expanded'];
  handleChange: Required<ExpandableSectionProps>['onChange'];
  setExpanded: Dispatch<SetStateAction<ExpandableSectionProps['expanded']>>;
}

export default function useExpandableSection(
  props: Props = Object.create(null),
): State {
  const { defaultExpanded } = props;

  const [expanded, setExpanded] = useState<ExpandableSectionProps['expanded']>(
    defaultExpanded,
  );

  const handleChange = useCallback(
    (
      e: NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail>,
    ): void => {
      setExpanded(e.detail.expanded);
    },
    [],
  );

  return {
    expanded,
    handleChange,
    setExpanded,
  };
}
