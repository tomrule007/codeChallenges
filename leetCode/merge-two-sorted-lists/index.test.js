const { mergeTwoLists } = require('./index.js');
const { table, tableName } = require('./testCases.js');
console.log();
describe('mergeTwoLists', () => {
  it('is a function', () => {
    expect(typeof mergeTwoLists).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(table)(tableName, (...params) => {
      const input = params.slice(0, -1);
      const expected = params.slice(-1);
      console.log(input, expected);
      expect(mergeTwoLists(input[0], input[1])).toEqual(...expected);
    });
  });
});
