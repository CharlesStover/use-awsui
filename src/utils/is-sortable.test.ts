/* eslint-disable @typescript-eslint/no-magic-numbers */
import isSortable from './is-sortable';

describe('isSortable', (): void => {
  it('should return true for primitives', (): void => {
    expect(isSortable(-1)).toBe(true);
    expect(isSortable(0)).toBe(true);
    expect(isSortable(1)).toBe(true);
    expect(isSortable(false)).toBe(true);
    expect(isSortable(true)).toBe(true);
    expect(isSortable('')).toBe(true);
    expect(isSortable('string')).toBe(true);
  });

  it('should return false for objects', (): void => {
    expect(isSortable(null)).toBe(false);
    expect(isSortable(undefined)).toBe(false);
    expect(isSortable({})).toBe(false);
    expect(
      isSortable((): void => {
        return;
      }),
    ).toBe(false);
  });
});
