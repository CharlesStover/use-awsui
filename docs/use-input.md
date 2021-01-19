# `useInput`

`useInput` is a React hook for managing `Input`'s state.

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

The default value of `Input`'s `value` prop

## State

### `handleChange`

`Input`'s `onChange` prop

### `setValue`

Type: `(value: string) => void`

The `setValue` utility function lets you set `value` directly.

### `value`

`Input`'s `value` prop

## Examples

```jsx
import Input from '@awsui/components-react/input';
import { useInput } from 'use-awsui';

export default function MyInput() {
  const { handleChange, value } = useInput({
    defaultValue: 'default value',
  });

  return <Input onChange={handleChange} value={value} />;
}
```
