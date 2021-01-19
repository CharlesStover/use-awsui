# `useAlert`

`useAlert` is a React hook for managing `Alert`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultVisible`](#defaultvisible)
- [State](#state)
  - [`handleDismiss`](#handledismiss)
  - [`setVisible`](#setvisible)
  - [`visible`](#visible)
- [Examples](#examples)

## Props

### `defaultVisible`

Type: `boolean` _optional_

The default value of `Alert`'s `visible` prop

## State

### `handleDismiss`

`Alert`'s `onDismiss` prop

### `setVisible`

Type: `(visible: boolean) => void`

The `setVisible` utility function lets you set `visible` directly.

### `visible`

`Alert`'s `visible` prop

## Examples

```jsx
import Alert from '@awsui/components-react/alert';
import { useAlert } from 'use-awsui';

export default function MyAlert() {
  const { handleDismiss, visible } = useAlert({
    defaultVisible: true,
  });

  return (
    <Alert onDismiss={handleDismiss} visible={visible}>
      Content
    </Alert>
  );
}
```
