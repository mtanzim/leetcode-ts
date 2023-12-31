/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (53.14%)
 * Likes:    9174
 * Dislikes: 304
 * Total Accepted:    700.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4]'
 *
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 * Reorder the list to be on the following form:
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 5 * 10^4].
 * 1 <= Node.val <= 1000
 */

// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  toString(): string {
    let s = "";
    // deno-lint-ignore no-this-alias
    let cur: ListNode | null | undefined = this;
    while (cur) {
      s += `${cur.val} -> `;
      cur = cur?.next;
    }
    return s;
  }
}

// @lc code=start

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const origOrder = [];
  let cur = head;
  while (cur) {
    origOrder.push(cur.val);
    cur = cur.next;
  }
  const reversed = origOrder.slice().reverse();

  console.log({ origOrder, reversed });
  let left = 0;
  let right = 0;
  cur = head;
  let counter = 0;
  while (cur) {
    if (counter % 2 === 0) {
      cur.val = origOrder[left];
      left++;
    } else {
      cur.val = reversed[right];
      right++;
    }
    counter++;
    cur = cur.next;
  }
}
// @lc code=end

import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test("basic", () => {
  const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4))),
  );
  reorderList(head);
  assertEquals<string>(head.toString(), "1 -> 4 -> 2 -> 3 -> ");
});

Deno.test("basic 2", () => {
  const head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
  );
  reorderList(head);
  assertEquals<string>(head.toString(), "1 -> 5 -> 2 -> 4 -> 3 -> ");
});
