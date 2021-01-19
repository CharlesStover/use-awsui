# `useSideNavigation`

`useSideNavigation` is a React hook for managing `SideNavigation`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultActiveHref`](#defaultactivehref)
- [State](#state)
  - [`activeHref`](#activehref)
  - [`handleFollow`](#handlefollow)
- [Examples](#examples)

## Props

### `defaultActiveHref`

Type: `string` _optional_

The default value of `SideNavigation`'s `activeHref` prop

## State

### `activeHref`

`SideNavigation`'s `activeHref` prop

### `handleFollow`

Type: `(event: CustomEvent<SideNavigationProps.FollowDetail>) => void`

`SideNavigation`'s `onFollow` prop

## Examples

```jsx
import SideNavigation from '@awsui/components-react/side-navigation';
import { useSideNavigation } from 'use-awsui';

export default function MySideNavigation() {
  const { activeHref, handleFollow } = useSideNavigation({
    defaultActiveHref: '/home',
  });

  return <SideNavigation activeHref={activeHref} onFollow={handleFollow} />;
}
```
