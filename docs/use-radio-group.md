# `useRadioGroup`

`useRadioGroup` is a React hook for managing `RadioGroup`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultValue`](#defaultvalue)
- [State](#state)
  - [`handleChange`](#handlechange)
  - [`setValue`](#setvalue)
  - [`value`](#value)
- [Examples](#examples)

## Props

### `defaultValue`

Type: `string` _optional_

The default value of `RadioGroup`'s `value` prop

## State

### `handleChange`

`RadioGroup`'s `onChange` prop

### `setValue`

Type: `(value: string) => void`

The `setValue` utility function lets you set `value` directly.

### `value`

`RadioGroup`'s `value` prop

## Examples

```jsx
import RadioGroup from '@awsui/components-react/radio-group';
import { useRadioGroup } from 'use-awsui';

export default function MyRadioGroup() {
  const { handleChange, value } = useRadioGroup();

  return <RadioGroup onChange={handleChange} value={value} />;
}
```
