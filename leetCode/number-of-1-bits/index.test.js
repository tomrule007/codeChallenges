const hammingWeight = require('./index.js');
const { testTable, tableName } = require('./testCases.js');

describe('hammingWeight', () => {
  it('is a function', () => {
    expect(typeof hammingWeight).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(testTable)(tableName, (...params) => {
      const input = params.slice(0, -1);
      const expected = params.slice(-1);
      expect(hammingWeight(...input)).toBe(...expected);
    });
  });
});
