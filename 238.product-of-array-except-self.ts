function productExceptSelf(nums: number[]): number[] {
  const prefix = [1];
  const postfix = [1];
  const reversed = nums.slice().reverse();
  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[i - 1] * nums[i - 1]);
  }
  for (let i = 1; i < reversed.length; i++) {
    postfix.push(postfix[i - 1] * reversed[i - 1]);
  }
  const out = [];
  const postfixRev = postfix.slice().reverse();
  for (let i = 0; i < prefix.length; i++) {
    out.push(prefix[i] * postfixRev[i]);
  }
  return out;
}

import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

Deno.test("basic", () => {
  const nums = [1, 2, 3, 4];
  const expected = [24, 12, 8, 6];
  assertEquals(productExceptSelf(nums), expected);
});

Deno.test("basic 2", () => {
  const nums = [-1, 1, 0, -3, 3];
  const expected = [0, 0, 9, 0, 0];
  assertEquals(productExceptSelf(nums), expected);
});
