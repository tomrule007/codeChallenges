const reverse = require('./reverseInteger');

describe('reverse', () => {
  it('works with a simple number', () => {
    expect(reverse(123)).toBe(321);
  });

  it('returns 0 correctly', () => {
    expect(reverse(0)).toBe(0);
  });

  it('works when there is a negative sign', () => {
    expect(reverse(-123)).toBe(-321);
  });

  it('correctly removes leading zeroes', () => {
    expect(reverse(120)).toBe(21);
  });

  it('works with a big number', () => {
    expect(reverse(7463847412)).toBe(2147483647);
  });

  it('correctly handles when the resulting number would overflow', () => {
    expect(reverse(8463847412)).toBe(0);
  });

  it('correctly handles a negative number that would overflow', () => {
    expect(reverse(-9463847412)).toBe(0);
  });
});
