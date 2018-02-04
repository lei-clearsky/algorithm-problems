/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsRecursion = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  
  if (l1.val < l2.val) {
    l1.next = mergeTwoListsRecursion(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursion(l2.next, l1);
    return l2
  }
};

var mergeTwoListsIterative = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  var head;
  if (l1.val < l2.val) {
    head = l1;
  } else {
    head = l2;
    l2 = l1;
    l1 = head;
  }

  while(l1.next !== null) {
    if(l1.next.val > l2.val) {
      var temp = l1.next;
      l1.next = l2;
      l2 = temp;
    }
    l1 = l1.next;
  }

  l1.next = l2;
  return head;
}

module.exports = {
  mergeTwoListsRecursion: mergeTwoListsRecursion,
  mergeTwoListsIterative: mergeTwoListsIterative
}
