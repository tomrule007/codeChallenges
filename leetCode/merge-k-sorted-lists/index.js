/**
 * Create a singly linked list from a value or array of values.
 * Arrays will return index 0 value as head.
 * @param {*} val Any value or array of values
 * @param {ListNode|undefined} next
 */
function ListNode(val, next) {
  if (val && val.constructor === Array) {
    const { head } = val.reduce((list, nodeVal) => {
      if (list === null) {
        const head = new ListNode(nodeVal);
        return { head, tail: head };
      }
      list.tail.next = new ListNode(nodeVal);
      list.tail = list.tail.next;
      return list;
    }, null);

    this.val = head.val;
    this.next = head.next;
  } else {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let listPointers = lists.map((x) => x);
  const head = new ListNode();
  let tail = head;

  while (listPointers.length > 1) {
    const indexOfMin = listPointers.reduce(
      (min, _, i) => (listPointers[min].val < listPointers[i].val ? min : i),
      0
    );
    tail.next = listPointers[indexOfMin];
    tail = tail.next;
    if (listPointers[indexOfMin].next === null) {
      listPointers = [
        ...listPointers.slice(0, indexOfMin),
        ...listPointers.slice(indexOfMin + 1),
      ];
    } else {
      listPointers[indexOfMin] = listPointers[indexOfMin].next;
    }
  }
  tail.next = listPointers[0] || [];
  return head.next;
};

module.exports = { mergeKLists, ListNode };
