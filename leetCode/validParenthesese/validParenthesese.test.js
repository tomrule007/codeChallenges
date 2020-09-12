const isValid = require('./validParenthesese');
describe('isValid.js', () => {
  describe('isValid()', () => {
    it('is a function', () => {
      expect(typeof isValid).toBe('function');
    });
    describe.each([
      ['()', true],
      ['()[]{}', true],
      ['(]', false],
      ['([)]', false],
      ['{[]}', true],
    ])('given %p,', (input, expected) => {
      test(`returns ${expected}`, () => {
        expect(isValid(input)).toBe(expected);
      });
    });
  });
});
