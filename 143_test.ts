import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import reorderList, { ListNode } from "./143.reorder-list.ts";

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
