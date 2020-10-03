const spiralOrder = require('./index.js');
const { testTable, tableName } = require('./testCases.js');

describe('spiralOrder', () => {
  it('is a function', () => {
    expect(typeof spiralOrder).toBe('function');
  });
  describe('Passes Example ./testCases.js', () => {
    it.each(testTable)(tableName, (...params) => {
      const input = params.slice(0, -1);
      const expected = params.slice(-1);
      expect(spiralOrder(...input)).toEqual(...expected);
    });
  });
});
