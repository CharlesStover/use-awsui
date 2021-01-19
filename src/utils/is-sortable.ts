export default function isSortable(
  value: unknown,
): value is boolean | number | string {
  return (
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string'
  );
}
