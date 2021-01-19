# `useToggle`

`useToggle` is a React hook for managing `Toggle`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultChecked`](#defaultchecked)
- [State](#state)
  - [`checked`](#checked)
  - [`handleChange`](#handlechange)
- [Examples](#examples)

## Props

### `defaultChecked`

Type: `boolean` _optional_

The default value of `Toggle`'s `checked` prop

## State

### `checked`

Type: `boolean`

`Toggle`'s `checked` prop

### `handleChange`

Type: `NonCancelableEventHandler<ToggleProps.ChangeDetail>`

`Toggle`'s `onChange` prop

## Examples

```jsx
import Toggle from '@awsui/components-react/toggle';
import { useToggle } from 'use-awsui';

export default function MyToggle() {
  const { checked, handleChange } = useToggle({
    defaultChecked: true,
  });

  return <Toggle checked={checked} onChange={handleChange} />;
}
```
