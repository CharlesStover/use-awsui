# `useCheckbox`

`useCheckbox` is a React hook for managing `Checkbox`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultChecked`](#defaultchecked)
- [State](#state)
  - [`checked`](#checked)
  - [`handleChange`](#handlechange)
  - [`setChecked`](#setchecked)
- [Examples](#examples)

## Props

### `defaultChecked`

Type: `boolean` _optional_

The default value of `Checkbox`'s `checked` prop

## State

### `checked`

`Checkbox`'s `checked` prop

### `handleChange`

`Checkbox`'s `onChange` prop

### `setValue`

Type: `(checked: boolean) => void`

The `setValue` utility function lets you set `checked` directly.

## Examples

```jsx
import Checkbox from '@awsui/components-react/checkbox';
import { useCheckbox } from 'use-awsui';

export default function MyCheckbox() {
  const { checked, handleChange } = useCheckbox({
    defaultChecked: false,
  });

  return <Checkbox checked={checked} onChange={handleChange} />;
}
```
