# `useAwsui`

[![version](https://img.shields.io/npm/v/use-awsui.svg)](https://www.npmjs.com/package/use-awsui)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-awsui.svg)](https://www.npmjs.com/package/use-awsui)
[![downloads](https://img.shields.io/npm/dt/use-awsui.svg)](https://www.npmjs.com/package/use-awsui)

`use-awsui` is a collection of React hooks for the AWS UI components. By
instantiating your components' local state with this library, you can save
repetitive boilerplate surrounding state instantiation and event handlers. You
may also rest comfortably knowing this package maintains 100% test coverage.

- [Install](#install)
- [Supported components](#supported-components)
  - [Alert](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-alert.md)
  - [AppLayout](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-app-layout.md)
  - [Checkbox](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-checkbox.md)
  - [CollectionPreferences](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-collection-preferences.md)
  - [ExpandableSection](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-expandable-section.md)
  - [Input](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-input.md)
  - [Pagination](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-pagination.md)
  - [RadioGroup](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-radio-group.md)
  - [SideNavigation](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-side-navigation.md)
  - [Table](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-table.md)
  - [Tabs](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-tabs.md)
  - [Toggle](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-toggle.md)
- [Contributing](#contributing)

## Install

- `npm install use-awsui` or
- `yarn add use-awsui`

## Supported components

The `use-awsui` library offers React hooks for the following AWS UI components.
These hooks return several of the components' value props and event handlers in
order to both instantiate and manage the components' local, controlled state.

- [Alert](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-alert.md)
- [AppLayout](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-app-layout.md)
- [Checkbox](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-checkbox.md)
- [CollectionPreferences](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-collection-preferences.md)
- [ExpandableSection](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-expandable-section.md)
- [Input](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-input.md)
- [Pagination](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-pagination.md)
- [RadioGroup](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-radio-group.md)
- [SideNavigation](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-side-navigation.md)
- [Table](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-table.md)
- [Tabs](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-tabs.md)
- [Toggle](https://github.com/CharlesStover/use-awsui/blob/master/docs/use-toggle.md)

## Contributing

To install this repository to begin local development, use the following
commands in order:

- `yarn set version latest` to keep Yarn up-to-date.
- `yarn` to install the existing dependencies.
- `yarn up * && yarn up @*/*` to upgrade to the latest dependencies.
- `yarn dlx @yarnpkg/pnpify --sdk vscode` to integrate with VS Code.
