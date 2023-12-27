import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { hasCycle, ListNode } from "./141.linked-list-cycle.ts";

Deno.test("basic", () => {
  const ll = new ListNode(3);
  ll.next = new ListNode(2);
  ll.next.next = new ListNode(0);
  ll.next.next.next = new ListNode(-4);
  ll.next.next.next.next = ll.next;
  assertEquals(hasCycle(ll), true);
});
