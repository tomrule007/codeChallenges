const isValid = require('./validParenthesese');
describe('isValid.js', () => {
  describe('isValid()', () => {
    it('is a function', () => {
      expect(typeof isValid).toBe('function');
    });
  });
});
