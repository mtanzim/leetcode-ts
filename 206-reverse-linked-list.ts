import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  const s: number[] = [];
  while (cur) {
    s.unshift(cur.val);
    cur = cur.next;
  }
  if (s.length === 0) {
    return null;
  }
  const ll = new ListNode(s[0]);
  cur = ll;
  for (const v of s.slice(1)) {
    cur.next = new ListNode(v, null);
    cur = cur.next;
  }
  return ll;
}

Deno.test("basic", () => {
  const vs = [1, 2, 3, 4, 5];
  const ll = new ListNode(vs[0]);
  let cur = ll;
  for (const v of vs.slice(1)) {
    cur.next = new ListNode(v, null);
    cur = cur.next;
  }
  console.log(ll);
  const reversedLL = reverseList(ll);
  const rev = [];
  let revCur = reversedLL;
  while (revCur) {
    console.log(revCur.val);
    rev.push(revCur?.val);
    revCur = revCur?.next || null;
  }
  assertEquals(rev, vs.toReversed());
  console.log(reversedLL);
});
