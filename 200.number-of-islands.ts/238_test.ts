import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { productExceptSelf } from "./238.product-of-array-except-self.ts";

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
