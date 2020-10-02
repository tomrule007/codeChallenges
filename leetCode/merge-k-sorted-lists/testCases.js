const { ListNode } = require('./index');

const tableName = 'given %s expected %s';
const table = [
  [
    [new ListNode([1, 4, 5]), new ListNode([1, 3, 4]), new ListNode([2, 6])],
    new ListNode([1, 1, 2, 3, 4, 4, 5, 6]),
  ],
  [[], []],
  [[[]], []],
];
module.exports = { table, tableName };
