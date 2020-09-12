/* global expect, test */
import getProgressWidth from './getProgressWidth';

test('returns percentage width', () => {
  expect(getProgressWidth(1, 20)).toBe('5%');
  expect(getProgressWidth(2, 20)).toBe('10%');
  expect(getProgressWidth(0, 20)).toBe('0%');
  expect(getProgressWidth(20, 20)).toBe('100%');
});
