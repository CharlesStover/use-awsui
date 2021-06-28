import type { Props } from '../hooks/use-collection-preferences';

export default function getDefaultCollectionPreferencesProps<
  Custom,
>(): Props<Custom> {
  return Object.freeze({});
}
