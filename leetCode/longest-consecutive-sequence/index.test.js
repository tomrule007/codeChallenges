const longestConsecutive = require('./index.js');
const { testTable, tableName } = require('./testCases.js');

describe('longestConsecutive', () => {
  it('is a function', () => {
    expect(typeof longestConsecutive).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(testTable)(tableName, (...params) => {
      const input = params.slice(0, -1);
      const expected = params.slice(-1);
      expect(longestConsecutive(...input)).toBe(...expected);
    });
  });
});
