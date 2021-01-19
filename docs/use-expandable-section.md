# `useExpandableSection`

`useExpandableSection` is a React hook for managing `ExpandableSection`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultExpanded`](#defaultexpanded)
- [State](#state)
  - [`expanded`](#expanded)
  - [`handleChange`](#handlechange)
  - [`setExpanded`](#setexpanded)
- [Examples](#examples)

## Props

### `defaultExpanded`

Type: `boolean` _optional_ (default: `undefined`)

The default value of `ExpandableSection`'s `expanded` prop

## State

### `expanded`

`ExpandableSection`'s `expanded` prop

### `handleChange`

`ExpandableSection`'s `onChange` prop

### `setExpanded`

Type: `(expanded: boolean) => void`

The `setExpanded` utility function lets you set `expanded` directly.

## Examples

```jsx
import ExpandableSection from '@awsui/components-react/expandable-section';
import { useExpandableSection } from 'use-awsui';
import { Header } from './components';

export default function MyExpandableSection() {
  const [expanded, handleChange] = useExpandableSection({
    defaultExpanded: false,
  });

  return (
    <ExpandableSection
      expanded={expanded}
      header={<Header />}
      onChange={handleChange}
      variant="container"
    >
      my expandable section
    </ExpandableSection>
  );
}
```
