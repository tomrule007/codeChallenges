const { mergeKLists, ListNode } = require('./index.js');
const { table, tableName } = require('./testCases.js');
describe('mergeKLists', () => {
  it('is a function', () => {
    expect(typeof mergeKLists).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(table)(tableName, (...params) => {
      const input = params.slice(0, -1);
      const expected = params.slice(-1);
      expect(mergeKLists(...input)).toEqual(...expected);
    });
  });
});
