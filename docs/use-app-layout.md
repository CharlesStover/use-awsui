# `useAppLayout`

`useAppLayout` is a React hook for managing `AppLayout`'s state.

## Table of Contents

- [Props](#props)
  - [`defaultNavigationOpen`](#defaultnavigationopen)
  - [`defaultToolsOpen`](#defaulttoolsopen)
- [State](#state)
  - [`handleNavigationChange`](#handlenavigationchange)
  - [`handleToolsChange`](#handletoolschange)
  - [`navigationOpen`](#navigationopen)
  - [`setNavigationOpen`](#setnavigationopen)
  - [`setToolsOpen`](#settoolsopen)
  - [`toolsOpen`](#toolsopen)
- [Examples](#examples)

## Props

### `defaultNavigationOpen`

Type: `boolean` _optional_ (default: `undefined`)

The default value of `AppLayout`'s `navigationOpen` prop

### `defaultToolsOpen`

Type: `boolean` _optional_ (default: `undefined`)

The default value of `AppLayout`'s `toolsOpen` prop

## State

### `handleNavigationChange`

`AppLayout`'s `onNavigationChange` prop

### `handleToolsChange`

`AppLayout`'s `onToolsChange` prop

### `navigationOpen`

`AppLayout`'s `navigationOpen` prop

### `setNavigationOpen`

Type: `(navigationOpen: boolean) => void`

The `setNavigationOpen` utility function lets you set `navigationOpen` directly.

### `setToolsOpen`

Type: `(toolsOpen: boolean) => void`

The `setToolsOpen` utility function lets you set `toolsOpen` directly.

### `toolsOpen`

`AppLayout`'s `toolsOpen` prop

## Examples

```jsx
import AppLayout from '@awsui/components-react/app-layout';
import { useAppLayout } from 'use-awsui';
import { Breadcrumbs, Content, Navigation, Tools } from './components';

export default function MyApp() {
  const {
    handleNavigationChange,
    handleToolsChange,
    navigationOpen,
    toolsOpen,
  } = useAppLayout({
    defaultNavigationOpen: true,
    defaultToolsOpen: false,
  });

  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      content={<Content />}
      contentType="table"
      navigation={<Navigation />}
      navigationOpen={navigationOpen}
      onNavigationChange={handleNavigationChange}
      onToolsChange={handleToolsChange}
      tools={<Tools />}
      toolsOpen={toolsOpen}
    />
  );
}
```
