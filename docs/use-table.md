# `useTable`

`useTable` is a React hook for managing `Table`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultSelectedItems`](#defaultselectedietms)
  - [`defaultSortingColumn`](#defaultsortingcolumn)
  - [`defaultSortingDescending`](#defaultsortingdescending)
  - [`onSelectionChange`](#onselectionchange)
  - [`onSortingChange`](#onsortingchange)
- [State](#state)
  - [`handleSelectionChange`](#handleselectionchange)
  - [`handleSortingChange`](#handlesortingchange)
  - [`selectedItems`](#selecteditems)
  - [`sortingColumn`](#sortingcolumn)
  - [`sortingDescending`](#sortingdescending)
- [Examples](#examples)

## Props

### `defaultSelectedItems`

Type: `Item[]` _optional_

The default value of `Table`'s `selectedItems` prop

### `defaultSortingColumn`

Type: `TableProps.SortingColumn<Item>` _optional_

The default value of `Table`'s `sortingColumn` prop

### `defaultSortingDescending`

Type: `boolean` _optional_

The default value of `Table`'s `sortingDescending` prop

### `onSelectionChange`

Type: `(selectedItems?: Item[]) => void`

`onSelectionChange` is an event listener that fires whenever the customer
selects items in the table. It is passed an array of all selected items.

### `onSortingChange`

Type: `(state: TableProps.SortingState<Item>) => void`

`onSortingChange` is an event listener that fires whenever the customer sorts
the table. It is passed the "sorting state," which is an object that contains
a `isDescending` boolean and `sortingColumn` object. The `sortingColumn` object
contains a `sortingField` string and optional `sortingComparator` function.

## State

### `handleSelectionChange`

Type: `NonCancelableEventHandler<TableProps.SelectionChangeDetail<Item>>`

`Table`'s `onSelectionChange` prop

### `handleSortingChange`

Type: `NonCancelableEventHandler<TableProps.SortingState<Item>>`

`Table`'s `onSortingChange` prop

### `selectedItems`

Type: `Item[] | undefined`

`Table`'s `selectedItems` prop

### `sort`

Type: `(a: Item, b: Item) => number`

`sort` is a utility function that, when given two items, returns the order it
which they should be sorted.

For example, given `{ num: 1 }` and `{ num: 2 }` respectively, if the sorting
field is `num`, `sort` would return `-1`. If `sortingDescending` is `true`,
`sort` would return `1`.

You likely want to use this utility function to sort the items in your `Cards`
or `Table` component. For an example of this implementation, see the
[example](#examples).

### `sortingColumn`

Type: `TableProps.SortingColumn<Item> | undefined`

`Table`'s `sortingColumn` prop

### `sortingDescending`

Type: `boolean | undefined`

`Table`'s `sortingDescending` prop

## Examples

```jsx
import Table from '@awsui/components-react/table';
import { useTable } from 'use-awsui';

const ITEMS = [
  // ...
];

export default function MyTable() {
  const {
    handleSelectionChange,
    handleSortingChange,
    selectedItems,
    sort,
    sortingColumn,
    sortingDescending,
  } = useTabs({
    defaultSortingColumn: {
      sortingField: 'name',
    },
  });

  return (
    <Table
      items={sort(ITEMS)}
      onSelectionChange={handleSelectionChange}
      onSortingChange={handleSortingChange}
      selectedItems={selectedItems}
      sortingColumn={sortingColumn}
      sortingDescending={sortingDescending}
    />
  );
}
```
