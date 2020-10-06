const tableName = 'given %s expected %s';
const testTable = [
  //case 1
  [0b00000000000000000000000000001011, 3],
  // case 2
  [0b00000000000000000000000010000000, 1],
  // case 3
  [0b11111111111111111111111111111101, 31],
];

module.exports = { testTable, tableName };
