import { test } from 'node:test';
import assert from 'node:assert';
import { formatDateShort } from './format.ts';

/**
 * Note: These tests assume a UTC timezone for consistent results.
 * We set process.env.TZ = 'UTC' to ensure deterministic behavior across different environments.
 */
process.env.TZ = 'UTC';

test('formatDateShort', async (t) => {
  await t.test('formats a valid ISO date string', () => {
    const input = '2024-01-15';
    const expected = 'Jan 15, 2024';
    assert.strictEqual(formatDateShort(input), expected);
  });

  await t.test('formats a Date object', () => {
    // Month is 0-indexed (4 = May)
    const input = new Date(Date.UTC(2024, 4, 20));
    const expected = 'May 20, 2024';
    assert.strictEqual(formatDateShort(input), expected);
  });

  await t.test('handles leap year (Feb 29)', () => {
    const input = '2024-02-29';
    const expected = 'Feb 29, 2024';
    assert.strictEqual(formatDateShort(input), expected);
  });

  await t.test('handles year end', () => {
    const input = '2023-12-31';
    const expected = 'Dec 31, 2023';
    assert.strictEqual(formatDateShort(input), expected);
  });

  await t.test('handles full ISO string with timezone', () => {
    const input = '2024-01-15T12:00:00Z';
    const expected = 'Jan 15, 2024';
    assert.strictEqual(formatDateShort(input), expected);
  });

  await t.test('handles invalid date string', () => {
    const input = 'invalid-date';
    const result = formatDateShort(input);
    assert.strictEqual(result, 'Invalid Date');
  });
});
