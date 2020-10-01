const { ListNode } = require('./index');

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
  )
);
const tableName = 'given (%s, %s) expected %s';
const table = [[l1, l2, l3]];
module.exports = { table, tableName };
