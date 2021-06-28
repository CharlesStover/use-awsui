import type { Props } from '../hooks/use-table';

export default function getDefaultTableProps<Item>(): Props<Item> {
  return Object.freeze({});
}
