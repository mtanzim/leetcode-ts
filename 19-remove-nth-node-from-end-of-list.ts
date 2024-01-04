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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy: ListNode | null = new ListNode(0, head);
  let left: ListNode | null = dummy;
  let right = head;
  for (let i = 0; i < n; i++) {
    right = right?.next || null;
  }
  while (right) {
    left = left?.next || null;
    right = right.next;
  }

  if (left) {
    left.next = left?.next?.next || null;
  }

  return dummy.next;
}

Deno.test("basic", () => {
  const as = [1, 2, 3, 4, 5];
  const expectedAs = [1, 2, 3, 5];
  let ll = new ListNode(as[0]);
  let cur: ListNode | null = ll;
  for (const a of as.slice(1)) {
    cur.next = new ListNode(a, null);
    cur = cur?.next || null;
  }
  const resLL = removeNthFromEnd(ll, 2);
  const resA = [];
  let rc: ListNode | null = resLL;
  while (rc) {
    resA.push(rc.val);
    rc = rc.next;
  }
  console.log({ resA });
  assertEquals(resA, expectedAs);
});

Deno.test("single node", () => {
  const as = [1];
  const expectedAs: number[] = [];
  let ll = new ListNode(as[0]);
  const resLL = removeNthFromEnd(ll, 1);
  const resA = [];
  let rc: ListNode | null = resLL;
  while (rc) {
    resA.push(rc.val);
    rc = rc.next;
  }
  assertEquals(resA, expectedAs);
});

Deno.test("failing", () => {
  const as = [1, 2];
  const expectedAs: number[] = [1];
  let ll = new ListNode(as[0]);
  let cur: ListNode | null = ll;
  for (const a of as.slice(1)) {
    cur.next = new ListNode(a, null);
    cur = cur?.next || null;
  }
  const resLL = removeNthFromEnd(ll, 1);
  const resA = [];
  let rc: ListNode | null = resLL;
  while (rc) {
    resA.push(rc.val);
    rc = rc.next;
  }
  console.log(ll);
  assertEquals(resA, expectedAs);
});
