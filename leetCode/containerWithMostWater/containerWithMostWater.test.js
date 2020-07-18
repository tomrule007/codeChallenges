const maxArea = require('./containerWithMostWater');

describe('containerWithMostWater.js', () => {
  it('exports a function', () => {
    expect(typeof maxArea).toBe('function');
  });
  describe('maxArea', () => {
    it('passes example input', () => {
      expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
  });
});
