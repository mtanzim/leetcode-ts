// deno-lint-ignore-file no-irregular-whitespace
/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (48.75%)
 * Likes:    14387
 * Dislikes: 1190
 * Total Accepted:    2.5M
 * Total Submissions: 5M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer. Internally, pos
 * is used to denote the index of the node that tail's next pointer is
 * connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return
 * false.
 *
 * Example 1:
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to
 * the 1st node (0-indexed).
 *
 * Example 2:
 *
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to
 * the 0th node.
 *
 * Example 3:
 *
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 * Constraints:
 *
 * The number of the nodes in the list is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 */

// @lc code=start

//  Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function traverse(node: ListNode | null, visited: Set<ListNode>): boolean {
  if (!node) {
    return false;
  }
  if (visited.has(node)) {
    return true;
  }
  visited.add(node);
  return traverse(node.next, visited);
}

export function hasCycle(head: ListNode | null): boolean {
  return traverse(head, new Set());
}
// @lc code=end
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test("basic", () => {
  const ll = new ListNode(3);
  ll.next = new ListNode(2);
  ll.next.next = new ListNode(0);
  ll.next.next.next = new ListNode(-4);
  ll.next.next.next.next = ll.next;
  assertEquals(hasCycle(ll), true);
});
