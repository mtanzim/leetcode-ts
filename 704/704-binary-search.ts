import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

function search(nums: number[], target: number): number {
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const v = nums[mid];
    if (v === target) {
      return mid;
    }
    if (target > v) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

Deno.test("simple", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  assertEquals(search(nums, target), 4);
});
