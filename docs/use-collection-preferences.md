# `useCollectionPreferences`

`useCollectionPreferences` is a React hook for managing
`CollectionPreferences`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultCustom`](#defaultcustom)
  - [`defaultPageSize`](#defaultpagesize)
  - [`defaultVisibleContent`](#defaultvisiblecontent)
  - [`defaultWrapLines`](#defaultwraplines)
  - [`onCustomChange`](#oncustomchange)
  - [`onPageSizeChange`](#onpagesizechange)
  - [`onVisibleContentChange`](#onvisiblecontentchange)
  - [`onWrapLinesChange`](#onwraplineschange)
- [State](#state)
  - [`custom`](#custom)
  - [`handleConfirm`](#handleconfirm)
  - [`pageSize`](#pagesize)
  - [`preferences`](#preferences)
  - [`visibleContent`](#visiblecontent)
  - [`wrapLines`](#wraplines)
- [Examples](#examples)

## Props

### `defaultCustom`

Type: `any` _optional_

The default value of `CollectionPreference`'s `preference` prop's `custom`
property

### `defaultPageSize`

Type: `number` _optional_

The default value of `CollectionPreference`'s `preference` prop's `pageSize`
property

### `defaultVisibleContent`

Type: `string[]` _optional_

The default value of `Table`'s `visibleColumns` prop and
`CollectionPreference`'s `preference` prop's `visibleContent` property

### `defaultWrapLines`

Type: `boolean` _optional_

The default value of `Table`'s `wrapLines` prop and `CollectionPreference`'s
`preference` prop's `wrapLines` property

### `onPageSizeChange`

Type: `(pageSize?: number) => void` _optional_

`onPageSizeChange` is an event listener that fires whenever the customer changes
the page size preference. It is passed the new page size.

### `onVisibleContentChange`

Type: `(visibleContent?: string[]) => void` _optional_

`onVisibleContentChange` is an event listener that fires whenever the customer
changes the visible columns. It is passed an array containing the IDs of the
newly visible columns.

### `onWrapLinesChange`

Type: `(wrapLines?: boolean) => void` _optional_

`onWrapLinesChange` is an event listener that fires whenever the customer
changes the wrap lines preference. It is passed a boolean indicating whether the
lines are to be wrapped.

## State

### `custom`

`CollectionPreferences`'s `preference` prop's `custom` property

You may use this value in your components' logic, but you do not need to
pass it to the `CollectionPreference` component. Use
[`preferences`](#preferences) to pass this value to `CollectionPreferences`
instead.

### `handleConfirm`

`CollectionPreferences`'s `onConfirm` prop

### `pageSize`

`CollectionPreferences`'s `preference` prop's `pageSize` property

You may use this value in your components' logic, but you do not need to
pass it to the `CollectionPreference` component. Use
[`preferences`](#preferences) to pass this value to `CollectionPreferences`
instead.

### `preferences`

`CollectionPreferences`'s `preferences` prop

### `visibleContent`

`CollectionPreferences`'s `preference` prop's `visibleContent` property

You may use this value in your components' logic, but you do not need to
pass it to the `CollectionPreference` component. Use
[`preferences`](#preferences) to pass this value to `CollectionPreferences`
instead.

### `wrapLines`

`CollectionPreferences`'s `preference` prop's `wrapLines` property

You may use this value in your components' logic, but you do not need to
pass it to the `CollectionPreference` component. Use
[`preferences`](#preferences) to pass this value to `CollectionPreferences`
instead.

## Examples

```jsx
import CollectionPreferences from '@awsui/components-react/collection-preferences';
import { useCollectionPreferences } from 'use-awsui';

export default function MyCollectionPreferences() {
  const { handleConfirm, preferences } = useCollectionPreferences({
    defaultPageSize: 20,
    defaultVisibleContent: ['name', 'downloads'],
    defaultWrapLines: false,
  });

  return (
    <CollectionPreferences
      onConfirm={handleConfirm}
      preferences={preferences}
    />
  );
}
```
