import type { NonCancelableCustomEvent } from '@awsui/components-react';
import type { ExpandableSectionProps } from '@awsui/components-react/expandable-section';
import type { SetStateAction } from 'react';
import { useCallback, useState } from 'react';

export interface Props {
  defaultExpanded?: boolean;
}

export interface State {
  expanded?: boolean;
  setExpanded: (value: SetStateAction<boolean | undefined>) => void;
  handleChange: (
    event: NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail>,
  ) => void;
}

const DEFAULT_PROPS: Props = Object.freeze({});

export default function useExpandableSection(
  props: Props = DEFAULT_PROPS,
): State {
  const { defaultExpanded } = props;

  // States
  const [expanded, setExpanded] = useState<boolean | undefined>(
    defaultExpanded,
  );

  return {
    expanded,
    setExpanded,

    handleChange: useCallback(
      (
        e: NonCancelableCustomEvent<ExpandableSectionProps.ChangeDetail>,
      ): void => {
        setExpanded(e.detail.expanded);
      },
      [],
    ),
  };
}
