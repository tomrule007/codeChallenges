function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
ListNode.prototype.toString = function listNodeString() {
  let listStr = '' + this.val;
  let nextNode = this.next;
  while (nextNode) {
    listStr += `->${nextNode.val}`;
    nextNode = nextNode.next;
  }
  return listStr;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l1Pointer = l1;
  let l2Pointer = l2;
  let head = {};
  let tail = head;
  while (l1Pointer && l2Pointer) {
    if (l1Pointer.val < l2Pointer.val) {
      tail.next = l1Pointer;
      l1Pointer = l1Pointer.next;
    } else {
      tail.next = l2Pointer;
      l2Pointer = l2Pointer.next;
    }
    tail = tail.next;
  }

  tail.next = l1Pointer || l2Pointer;

  return head.next;
};

module.exports = { mergeTwoLists, ListNode };
