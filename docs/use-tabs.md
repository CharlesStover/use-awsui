# `useTabs`

`useTabs` is a React hook for managing `Tabs`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultActiveTabId`](#defaultactivetabid)
- [State](#state)
  - [`activeTabId`](#activetabid)
  - [`handleChange`](#handlechange)
  - [`setActiveTabId`](#setactivetabid)
- [Examples](#examples)

## Props

### `defaultActiveTabId`

Type: `string` _optional_

The default value of `Tabs`'s `activeTabId` prop

## State

### `activeTabId`

Type: `string | undefined`

`Tabs`'s `activeTabId` prop

### `handleChange`

Type: `(event: CustomEvent<Tabs.ChangeDetail>) => void`

`Tabs`'s `onChange` prop

### `setActiveTabId`

Type: `(activeTabId: string | undefined) => void`

The third item in the state array is a utility function that lets you set the
`Tabs`'s `activeTabId` directly.

## Examples

```jsx
import Tabs from '@awsui/components-react/tabs';
import { useTabs } from 'use-awsui';

const tabs = [
  // ...
];

export default function MyTabs() {
  const { activeTabId, handleChange } = useTabs({
    defaultActiveTabId: 'default-active-tab-id',
  });

  return <Tabs activeTabId={activeTabId} onChange={handleChange} tabs={tabs} />;
}
```
