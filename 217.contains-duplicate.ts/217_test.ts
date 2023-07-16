import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import containsDuplicate from "./217.contains-duplicate.ts";

Deno.test({
  name: "a test case",
  fn() {
    const nums = [1, 2, 3, 1];
    const expect = true;
    assertEquals(containsDuplicate(nums), expect);
  },
});

Deno.test({
  name: "negative test case",
  fn() {
    const nums = [1, 2, 3];
    const expect = false;
    assertEquals(containsDuplicate(nums), expect);
  },
});