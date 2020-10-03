const tableName = 'given %p expected %s';
const testTable = [
  [[100, 4, 200, 1, 3, 2], 4],
  [[100, 4, 200, 1, 3, 2, 5], 5],
  [[5, 6, 100, 4, 200, 1, 3, 2, 5], 6],
  [[1, 2], 2],
  [[7, 5, 4, 1], 2],
  [[], 0],
  [[1], 1],
  [[2, 2, 2, 2, 2], 1],
];
module.exports = { testTable, tableName };
