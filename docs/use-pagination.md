# `usePagination`

`usePagination` is a React hook for managing `Pagination`'s state.

To calculate `Pagination`'s `pagesCount` prop, use
`Math.ceil(items.length / pageSize)`.

## Table of Contents

- [Props](#props)
  - [`defaultCurrentPageIndex`](#defaultcurrentpageindex)
  - [`onCurrentPageIndexChange`](#oncurrentpageindexchange)
  - [`pageSize`](#pagesize)
- [State](#state)
  - [`currentPageIndex`](#currentpageindex)
  - [`handleChange`](#handlechange)
  - [`paginate`](#paginate)
  - [`setCurrentPageIndex`](#setcurrentpageindex)
- [Examples](#examples)
  - [`Pagination`](#pagination)
  - [`Table`](#table)

## Props

### `defaultCurrentPageIndex`

Type: `number` _optional_

The default value of `Pagination`'s `currentPageIndex` prop

### `onCurrentPageIndexChange`

Type: `(currentPageIndex: number) => void`

`onCurrentPageIndexChange` is an event listener that fires whenever the customer
changes the current page index when paginating. It is passed the current page
index.

### `pageSize`

Type: `number` _optional_

The number of items per page

## State

### `currentPageIndex`

Type: `number`

`Pagination`'s `currentPageIndex` prop

### `handleChange`

Type: `NonCancelableEventHandler<PaginationProps.ChangeDetail>`

`Pagination`'s `onChange` prop

### `paginate`

Type: `(items: Item[]) => Item[]`

`paginate` is a utility function that, when given an array of items, paginates
them based on the current pagination state.

For example, given an array of 10 items, if the current page index is 2 and the
page size is 4, `paginate` would return an array containing only items 5, 6, 7,
and 8.

You likely want to use this utility function to paginate the items in your
`Cards` or `Table` component. For an example of this implementation, see the
[`Table` example](#table).

### `setCurrentPageIndex`

Type: `(currentPageIndex: number) => void`

The `setCurrentPageIndex` is a utility function for manually setting the
current page index. You most likely do not need to use this function.

## Examples

### `Pagination`

```jsx
import Pagination from '@awsui/components-react/pagination';
import { usePagination } from 'use-awsui';

export default function MyPagination() {
  const { currentPageIndex, handleChange, pagesCount } = usePagination({
    itemsCount: 100,
    pageSize: 4,
  });

  return (
    <Pagination
      currentPageIndex={currentPageIndex}
      onChange={handleChange}
      pagesCount={pagesCount}
    />
  );
}
```

### `Table`

```jsx
import Pagination from '@awsui/components-react/pagination';
import Table from '@awsui/components-react/table';
import { usePagination } from 'use-awsui';

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MyTable() {
  const {
    currentPageIndex,
    handleChange,
    pagesCount,
    paginate,
  } = usePagination({
    itemsCount: ITEMS.length,
    pageSize: 4,
  });

  const items = paginate(ITEMS);

  return (
    <Table
      items={items}
      pagination={
        <Pagination
          currentPageIndex={currentPageIndex}
          onChange={handleChange}
          pagesCount={pagesCount}
        />
      }
    />
  );
}
```
