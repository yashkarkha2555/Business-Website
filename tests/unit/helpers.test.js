import { describe, expect, it } from 'vitest';
import { toSlug, validateEmail, validateRequired } from '../../src/utils/helpers';

describe('helpers', () => {
  it('validates email format', () => {
    expect(validateEmail('hello@example.com')).toBe(true);
    expect(validateEmail('bad-email')).toBe(false);
  });

  it('validates required text', () => {
    expect(validateRequired('frontend')).toBe(true);
    expect(validateRequired('   ')).toBe(false);
  });

  it('creates URL-friendly slugs', () => {
    expect(toSlug('Modern Business Website')).toBe('modern-business-website');
  });
});
