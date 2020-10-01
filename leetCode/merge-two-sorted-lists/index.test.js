const mergeTwoLists = require('./index.js');
const testCases = require('./testCases.js');

describe('mergeTwoLists', () => {
  it('is a function', () => {
    expect(typeof mergeTwoLists).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(testCases)('given %p, expected %p', (input, expected) => {
      expect(mergeTwoLists(...input)).toBe(expected);
    });
  });
});
