import { add } from '@helpers';
import { expect, test } from 'vitest';

test('helpers', () => {
  expect(add(1, 2)).toBe(3);
});
