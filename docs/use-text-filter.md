# `useTextFilter`

`useTextFilter` is a React hook for managing `TextFilter`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultFilteringText`](#defaultfilteringtext)
- [State](#state)
  - [`filteringtext`](#filteringtext)
  - [`handleChange`](#handlechange)
  - [`setFilteringText`](#setfilteringtext)
- [Examples](#examples)

## Props

### `defaultFilteringText`

Type: `string` _optional_

The default value of `TextFilter`'s `filteringText` prop

## State

### `filteringText`

`TextFilter`'s `filteringText` prop

### `handleChange`

`TextFilter`'s `onChange` prop

### `setFilteringText`

Type: `(filteringText: string) => void`

The `setFilteringText` utility function lets you set `filteringText` directly.

## Examples

```jsx
import TextFilter from '@awsui/components-react/text-filter';
import { useTextFilter } from 'use-awsui';

export default function MyTextFilter() {
  const { filteringText, handleChange } = useTextFilter({
    defaultFilteringText: 'default filter',
  });

  return <TextFilter filteringText={filteringText} onChange={handleChange} />;
}
```
