import { describe, it } from 'node:test';
import assert from 'node:assert';
import { formatPhoneNumber } from './format.ts';

describe('formatPhoneNumber', () => {
  it('formats South African international numbers', () => {
    assert.strictEqual(formatPhoneNumber('+27797908846'), '+27 79 790 8846');
    assert.strictEqual(formatPhoneNumber('+27821234567'), '+27 82 123 4567');
  });

  it('formats local 10-digit numbers (South Africa, US, etc)', () => {
    assert.strictEqual(formatPhoneNumber('0797908846'), '079 790 8846');
    assert.strictEqual(formatPhoneNumber('1234567890'), '123 456 7890');
  });

  it('formats US/Canada international numbers', () => {
    assert.strictEqual(formatPhoneNumber('+11234567890'), '+1 123 456 7890');
  });

  it('formats UK international numbers', () => {
    assert.strictEqual(formatPhoneNumber('+447911123456'), '+44 7911 123456');
  });

  it('formats Australian international numbers', () => {
    assert.strictEqual(formatPhoneNumber('+61412345678'), '+61 4 1234 5678');
  });

  it('handles numbers with extra characters correctly', () => {
    assert.strictEqual(formatPhoneNumber('+27 (79) 790-8846'), '+27 79 790 8846');
    assert.strictEqual(formatPhoneNumber('079-790-8846'), '079 790 8846');
  });

  it('returns original or unformatted for unrecognized formats', () => {
    // A 9-digit number
    assert.strictEqual(formatPhoneNumber('123456789'), '123456789');
    // An unrecognized international number that doesn't fit standard groupings
    assert.strictEqual(formatPhoneNumber('+99123456789'), '+99123456789');
  });
});
